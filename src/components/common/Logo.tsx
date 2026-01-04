'use client'
import Link from 'next/link';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/home" className={cn('flex items-center gap-2 pl-2 text-xl font-bold font-headline text-primary transition-colors hover:text-accent', className)}>
        <Image  src="/logo_main.png" width={150} height={300} alt="logo" />    
    </Link>
  );
}
