"use client";

import { useUser } from "@clerk/nextjs";
import { Dot, SettingsIcon } from "lucide-react";

type UserType = ReturnType<typeof useUser>["user"];

type Props = {
  user: UserType;
};

export function WelcomeBanner({ user }: Props) {
  return (
    <div className='mb-12 flex items-center justify-between bg-linear-to-br from-primary/10 via-primary/5 to-background rounded-3xl p-8 border border-primary/20'>
      <div className='space-y-4'>
        <div className='inline-flex items-center gap-2 px-4 bg-primary/10 rounded-full border border-primary/20'>
          <Dot className='size-2 bg-primary rounded-full animate-pulse' />
          <span className='text-sm font-medium text-primary'>
            Admin Dashboard
          </span>
        </div>
        <div>
          <h1 className='text-4xl font-bold mb-2'>
            Welcome back, {user?.firstName || "Admin"}!
          </h1>
          <p className='text-muted-foreground'>
            Manage doctors, oversee appointments, and monitor your dental
            practice performance.
          </p>
        </div>
      </div>

      <div className='hidden lg:block'>
        <div className='size-32 bg-linear-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center'>
          <SettingsIcon className='size-16 text-primary' />
        </div>
      </div>
    </div>
  );
}
