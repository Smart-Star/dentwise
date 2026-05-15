import { Navbar } from "../navbar";
import { Skeleton } from "../ui/skeleton";

export function LoadingUI() {
  return (
    <div className='min-h-screen bg-background'>
      <Navbar />

      <div className='max-w-7xl mx-auto px-6 py-8 pt-24'>
        <Skeleton className='rounded-3xl h-48 mb-12' />

        <div className='grid md:grid-cols-4 gap-6 mb-12'>
          <Skeleton className='rounded-xl h-40' />
          <Skeleton className='rounded-xl h-40' />
          <Skeleton className='rounded-xl h-40' />
          <Skeleton className='rounded-xl h-40' />
        </div>

        <Skeleton className='rounded-xl h-32 mb-12' />
      </div>
    </div>
  );
}
