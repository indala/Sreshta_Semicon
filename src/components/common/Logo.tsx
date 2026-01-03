'use client'
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { BrainCircuit } from 'lucide-react';
import Image from 'next/image';

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/home" className={cn('flex items-center gap-2 text-xl font-bold font-headline text-primary transition-colors hover:text-accent', className)}>
        <Image className="pl-2" src="/logo.png" width={50} height={40} alt="logo" />    
      <div className='flex flex-col items-baseline'>
        <span className='p-0 m-0 text-3xl'>SRESHTA</span>
        <span className='text-foreground text-[10px]'>SEMICON TECHNOLOGIES PVT LTD</span>
      </div>
    </Link>
  );
}
