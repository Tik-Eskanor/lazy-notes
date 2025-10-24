"use client"
import { startTransition, useActionState, useEffect } from "react"
import { Button } from "./ui/button"
import { EditIcon, Loader2 } from "lucide-react"
import { toast } from "sonner"
import { updateNote } from "@/lib/actions/notes"

type Prop = {
    id: string,
    author: string,
    text: string
}

export default function UpdateBtn({ id, author, text }: Prop) {

    const [state, updateAction, isPending] = useActionState(updateNote, null)

    useEffect(() => {
        if (state?.success) {
            toast.success("Note updated")
        }
    }, [state])

    useEffect(() => {
        if (state !== null && state?.success === false) {
            toast.error(state?.errorMessage)
        }
    }, [state])

    const data = {
        id,
        author,
        text
    }

    async function updateNoteFunction() {
        startTransition(() => {
            updateAction(data)
        })
    }


    return (
        <Button
            onClick={updateNoteFunction}
            type="button" disabled={isPending} variant="outline" className="text-xs font-medium"> {isPending ? <Loader2 className="animate-spin" /> : <EditIcon />}</Button>
    )
}
