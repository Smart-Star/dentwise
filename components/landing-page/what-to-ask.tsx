import Image from "next/image";
import ChatBubble from "./web/chat-bubble";
import { SectionHeader } from "./web/section-header";
import { MessageCircleIcon, MessageSquareIcon } from "lucide-react";

export function WhatToAsk() {
  return (
    <div className='relative py-32 px-6 overflow-hidden bg-linear-to-b from-background to-muted/20'>
      <div className='relative z-10 max-w-6xl mx-auto'>
        {/* Header */}
        <SectionHeader
          Icon={MessageCircleIcon}
          badgeText='AI-Powered Conversations'
          titleTop='Ask about'
          titleBottom='anything dental'
          description='From simple questions to complex concerns, our AI delivers expert-level guidance trained on thousands of real dental cases'
        />

        <section className='grid lg:grid-cols-2 gap-16 items-center'>
          {/* Left Side - Interactive Chat Examples */}
          <div className='space-y-6'>
            <h3 className='text-2xl font-bold mb-8'>
              Common questions our AI answers:
            </h3>

            {/* Chat Bubble 1 */}
            <ChatBubble
              Icon={MessageSquareIcon}
              question='"My tooth hurts when I bite down"'
              answer='Get immediate advice on pain management, possible causes, and when to see a dentist urgently'
              suggestions={["Instant Response", "Pain Relief"]}
            />

            {/* Chat Bubble 2 */}
            <ChatBubble
              Icon={MessageSquareIcon}
              question='"How much does teeth whitening cost?"'
              answer='Compare treatment options, pricing ranges, and find the best whitening solution for your budget'
              suggestions={["Cost Analysis", "Treatment Options"]}
            />

            {/* Chat Bubble 3 */}
            <ChatBubble
              Icon={MessageSquareIcon}
              question='"When should I replace my filling?"'
              answer='Learn about filling lifespan, warning signs of wear, and replacement timing guidance'
              suggestions={["Preventive Care", "Maintenance"]}
            />
          </div>

          {/* Right Side - AI Illustration */}
          <div className='bg-linear-to-br from-card/90 to-card/60 backdrop-blur-xl rounded-3xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-500'>
            <div className='flex items-center justify-center h-full'>
              <Image
                src='/confused.png'
                alt='AI Assistant'
                width={500}
                height={500}
                className='w-full h-auto max-w-lg object-contain'
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
