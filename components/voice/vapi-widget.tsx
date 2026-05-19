"use client";

import { useUser } from "@clerk/nextjs";
import { UserCard } from "./user-card";
import { CallControls } from "./call-controls";
import { vapi } from "@/lib/ai-assistant/vapi";
import { useEffect, useRef, useState } from "react";
import { MessageContent } from "./message-container";
import { AIAssistantCard } from "./ai-assistant-card";

export function VapiWidget() {
  const [callEnded, setCallEnded] = useState(false);
  const [callActive, setCallActive] = useState(false);
  const [connecting, setConnecting] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [messages, setMessages] = useState<any[]>([]);

  const { user, isLoaded } = useUser();
  const messageContainerRef = useRef<HTMLElement | null>(null);

  // auto-scroll for messages
  useEffect(() => {
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop =
        messageContainerRef.current.scrollHeight;
    }
  }, [messages]);

  // setup event listeners for VAPI
  useEffect(() => {
    const handleCallStart = () => {
      console.log("Call started");
      setConnecting(false);
      setCallActive(true);
      setCallEnded(false);
    };

    const handleCallEnd = () => {
      console.log("Call ended");
      setCallActive(false);
      setConnecting(false);
      setIsSpeaking(false);
      setCallEnded(true);
    };

    const handleSpeechStart = () => {
      console.log("AI started Speaking");
      setIsSpeaking(true);
    };

    const handleSpeechEnd = () => {
      console.log("AI stopped Speaking");
      setIsSpeaking(false);
    };

    const handleMessage = (message: any) => {
      if (message.type === "transcript" && message.transcriptType === "final") {
        const newMessage = { content: message.transcript, role: message.role };
        setMessages((prev) => [...prev, newMessage]);
      }
    };

    const handleError = (error: any) => {
      console.log("Vapi Error", error);
      setConnecting(false);
      setCallActive(false);
    };

    vapi
      .on("call-start", handleCallStart)
      .on("call-end", handleCallEnd)
      .on("speech-start", handleSpeechStart)
      .on("speech-end", handleSpeechEnd)
      .on("message", handleMessage)
      .on("error", handleError);

    // cleanup event listeners on unmount
    return () => {
      vapi
        .off("call-start", handleCallStart)
        .off("call-end", handleCallEnd)
        .off("speech-start", handleSpeechStart)
        .off("speech-end", handleSpeechEnd)
        .off("message", handleMessage)
        .off("error", handleError);
    };
  }, []);

  // toggle call function to start and stop the call
  const toggleCall = async () => {
    // stop call if already active
    if (callActive) vapi.stop();
    else {
      try {
        // start call if not already active
        setConnecting(true);
        setMessages([]);
        setCallEnded(false);

        await vapi.start(process.env.NEXT_PUBLIC_VAPI_ASSISTANT_ID);
      } catch (error) {
        console.log("Failed to start call", error);
        setConnecting(false);
      }
    }
  };

  if (!isLoaded) return null;

  return (
    <div className='max-w-5xl mx-auto px-4 flex flex-col overflow-hidden pb-20'>
      {/* Title */}
      <header className='text-center mb-8'>
        <h1 className='text-3xl font-bold font-mono'>
          Talk to Your{" "}
          <span className='text-primary uppercase'>AI Dental Assistant</span>
        </h1>
        <p className='text-muted-foreground mt-2'>
          Have a voice conversation with our AI assistant for dental advice and
          guidance
        </p>
      </header>

      {/* Video call area */}
      <section className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-8'>
        <AIAssistantCard
          callEnded={callEnded}
          isSpeaking={isSpeaking}
          callActive={callActive}
        />

        <UserCard user={user} />
      </section>

      {/* Message container */}
      {messages.length > 0 && (
        <section
          ref={messageContainerRef}
          className='w-full bg-card/90 backdrop-blur-sm border border-border rounded-xl p-4 mb-8 h-64 overflow-y-auto remove-scrollbar transition-all duration-300 scroll-smooth'>
          <MessageContent messages={messages} callEnded={callEnded} />
        </section>
      )}

      {/* Call controls */}
      <CallControls
        callEnded={callEnded}
        connecting={connecting}
        callActive={callActive}
        toggleCall={toggleCall}
      />
    </div>
  );
}
