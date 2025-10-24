"use client"

import { createNote } from "@/lib/actions/notes"
import { useActionState, useEffect, useRef, useState } from "react"
import { Button } from "./ui/button"
import { Loader2, X } from "lucide-react"
import { toast } from "sonner"
import { useRouter, useSearchParams } from "next/navigation"
import UpdateBtn from "./UpdateBtn"
import { Note } from "@/lib/generated/prisma"
import AiModal from "./AiModal"

type Prop = {
    notes: Note[]
}
export default function NoteTextInput({ notes }: Prop) {
    const router = useRouter()
    const formRef = useRef(null);

    const searchParam = useSearchParams()
    const noteId = searchParam.get("noteId")
    const aiMode = searchParam.get("aiMode")

    const noteData = notes.find((item) => item.id === noteId)

    const [text, setTexts] = useState<string | undefined>("")
    const [currentUrl, setCurrentUrl] = useState("")

    const [state, formAction, isPending] = useActionState(createNote, null)






    useEffect(() => {
        formReset()
        setTexts(noteData?.text)

        setCurrentUrl(window.location.href);
    }, [noteId])

    useEffect(() => {
        if (state?.success) {
            setTexts("")
            router.push("/")
            toast.success("New note added")
        }
    }, [state])

    useEffect(() => {
        if (state !== null && state?.success === false) {
            toast.error(state?.errorMessage)
        }
    }, [state])

    function clearNote() {
        formReset()
        router.push("/")
        setTexts("")
    }

    function formReset() {
        formRef.current?.reset();
    }

    function url() {
        router.push(currentUrl + "&aiMode=true")
    }

    return (
        <>
            <form ref={formRef} action={formAction} className="w-full">
                <div className="flex justify-between mb-3 items-center">
                    <div className="flex gap-3">
                        <Button disabled={isPending} variant="outline" className="text-xs font-medium"> {isPending ? <><Loader2 className="animate-spin" /></> : "New Note"} </Button>
                        <div className={`${noteId ? "block" : "hidden"}`}><UpdateBtn id={noteData?.id || ""} text={text} author={noteData?.authorId || ""} /></div>
                        {noteId && <Button onClick={url} type="button" variant="outline" className="text-xs font-medium">Ask AI</Button>}
                    </div>
                    {noteId && (<div onClick={clearNote} className="border border-grey-900 rounded p-1 cursor-pointer"><X size={15} /></div>)}
                </div>
                <textarea
                    onChange={(e) => setTexts(e.target.value)} readOnly={isPending} name="text" defaultValue={text} placeholder="Type your notes here" required className="w-full outline-0 min-h-[50vh] border border-gary-300 p-4 rounded shadow shadow-white/50" />
            </form>


            {/* AI modal */}
            {(aiMode == "true" && noteId) && <AiModal note={noteData} />}
        </>

    )
}
