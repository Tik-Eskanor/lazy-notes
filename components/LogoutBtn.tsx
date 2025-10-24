"use client"
import React, { startTransition, useActionState, useEffect } from 'react'
import { Button } from './ui/button'
import { Loader2 } from 'lucide-react'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import { logout } from '@/lib/actions/auth'


export default function LogoutBtn() {
    const router = useRouter()
    const [state, logoutAction, isPending] = useActionState(logout, null)

    const handleLogout = async () => {
        startTransition(logoutAction)
    }

    useEffect(() => {
        if (state?.errorMessage) {
            toast.error("Error logging out")
        }
        else if (!state?.errorMessage === null) {
            toast.success("Logged out")
            router.replace("/")
        }
    }, [state])

    return (
        <Button
            onClick={handleLogout}
            variant="outline" className='w-24' disabled={isPending}>
            {isPending ? <Loader2 className='animate-spin' /> : "logout"}
        </Button>
    )
}
