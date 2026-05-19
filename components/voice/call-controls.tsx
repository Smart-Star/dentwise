import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Props = {
  connecting: boolean;
  callActive: boolean;
  callEnded: boolean;
  toggleCall: () => void;
};

export function CallControls({
  connecting,
  callActive,
  callEnded,
  toggleCall,
}: Props) {
  return (
    <div className='w-full flex justify-center gap-4'>
      <Button
        className={cn(
          "w-52 text-xl text-white px-4 rounded-3xl relative",
          callActive
            ? "bg-destructive hover:bg-destructive/90"
            : callEnded
              ? "bg-red-500 hover:bg-red-700"
              : "bg-primary hover:bg-primary/90",
        )}
        onClick={toggleCall}
        disabled={connecting || callEnded}>
        {connecting && (
          <div className='absolute inset-0 rounded-full animate-ping bg-primary/50 opacity-75' />
        )}

        <span>
          {callActive
            ? "End Call"
            : connecting
              ? "Connecting..."
              : callEnded
                ? "Call Ended"
                : "Start Call"}
        </span>
      </Button>
    </div>
  );
}
