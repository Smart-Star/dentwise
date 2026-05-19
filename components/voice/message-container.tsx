type Props = {
  messages: any[];
  callEnded: boolean;
};

export function MessageContent({ messages, callEnded }: Props) {
  return (
    <div className='space-y-3'>
      {messages.map((msg, index) => (
        <div
          key={index + "ai-message"}
          className='message-item animate-in fade-in duration-300'>
          <div className='font-semibold text-xs text-muted-foreground mb-1'>
            {msg.role === "assistant" ? "DentWise AI" : "You"}:
          </div>
          <p className='text-foreground'>{msg.content}</p>
        </div>
      ))}

      {callEnded && (
        <div className='message-item animate-in fade-in duration-300'>
          <div className='font-semibold text-xs text-primary mb-1'>System:</div>
          <p className='text-foreground'>
            Call ended. Thank you for using DentWise AI!
          </p>
        </div>
      )}
    </div>
  );
}
