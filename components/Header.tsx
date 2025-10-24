import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import DarkMode from './Darkmode';
import LogoutBtn from './LogoutBtn';
import { getUser } from '@/lib/auth/server';
import { SidebarTrigger } from './ui/sidebar';

export default async function Header() {
    const user = await getUser()
    return (
        <header className='reletive flex h-18 w-full items-center justify-between bg-popover px-3 sm:x-8'>
            <div><SidebarTrigger /> <Link href="/" className='font-bold text-transparent text-xl bg-gradient-to-br from-foreground to-blue-500 bg-clip-text'>Lazy Notes</Link></div>
            <div className='flex gap-4'>
                {user ?
                    <>
                        <LogoutBtn /></> :
                    (<>
                        <Button asChild variant="outline">
                            <Link href="/signup">Sign Up</Link>
                        </Button>
                        <Button asChild className='hidden sm:block'>
                            <Link href="/login">Login</Link>
                        </Button>
                    </>

                    )}
                <DarkMode />
            </div>
        </header>
    )
}
