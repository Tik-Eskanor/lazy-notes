"use client"
import { User } from "@supabase/supabase-js"

type Prop = {
    user: User | null
}

export default function AskAiButton({ user }: Prop) {

    return (
        <div>
            Ask Api
        </div>
    )
}
