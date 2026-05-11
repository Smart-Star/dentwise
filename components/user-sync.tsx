"use client";

import { useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { syncUser } from "@/actions/users";

export function UserSync() {
  const { isLoaded, isSignedIn } = useUser();

  useEffect(() => {
    const handleUserSync = async () => {
      if (isLoaded && isSignedIn) {
        try {
          await syncUser();
        } catch (error) {
          console.log("Failed to sync user", error);
        }
      }
    };

    handleUserSync();
  }, [isLoaded, isSignedIn]);

  return null;
}
