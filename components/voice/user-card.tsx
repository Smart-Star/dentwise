import Image from "next/image";
import { Dot } from "lucide-react";
import { useUser } from "@clerk/nextjs";
import { Card } from "@/components/ui/card";

type Props = {
  user: ReturnType<typeof useUser>["user"];
};

export function UserCard({ user }: Props) {
  return (
    <Card className='bg-card/90 backdrop-blur-sm border overflow-hidden relative'>
      <div className='aspect-video flex flex-col items-center justify-center p-6 relative'>
        {/* User Image */}
        <div className='relative size-32 mb-4'>
          <Image
            src={user?.imageUrl ?? "/avatar.png"}
            alt='User'
            width={128}
            height={128}
            className='size-full object-cover rounded-full'
          />
        </div>

        <h2 className='text-xl font-bold text-foreground'>You</h2>
        <p className='text-sm text-muted-foreground mt-1'>
          {user ? `${user.firstName} ${user.lastName ?? ""}`.trim() : "Guest"}
        </p>

        {/* User Ready Text */}
        <div className='mt-4 flex items-center gap-2 px-3 py-1 rounded-full bg-card border'>
          <Dot className='size-2 rounded-full bg-muted' />
          <span className='text-xs text-muted-foreground'>Ready</span>
        </div>
      </div>
    </Card>
  );
}
