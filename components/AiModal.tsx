"use client"
import { Loader2, Send, Square, X } from 'lucide-react'
import React, { startTransition, useActionState, useEffect, useState } from 'react'
import { Note } from '@/lib/generated/prisma'
import { askAi, createNoteFromAi } from '@/lib/actions/notes'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'

export default function AiModal({ note }: { note: Note }) {

    const [aiState, aiAction, isPending] = useActionState(askAi, null)
    const [createState, createAction, isCreatePending] = useActionState(createNoteFromAi, null)

    const [aiResponse, setAiResponse] = useState("Ai will respond")
    const router = useRouter()

    useEffect(() => {
        if (createState?.success) {
            setAiResponse("Ai will respond")
            toast.success("New note added")
        }
    }, [createState])

    useEffect(() => {
        if (createState !== null && createState?.success === false) {
            toast.error(createState?.errorMessage)
        }
    }, [createState])


    async function createNoteFunction() {
        startTransition(() => {
            createAction(aiResponse)
        })
    }

    useEffect(() => {
        if (aiState) setAiResponse(aiState.text)
    }, [aiState])


    return (
        <div className='absolute z-10 w-full min-h-[88vh] h-full bg-black/30 top-0 left-0 p-3'>
            <div className='w-full h-full bg-background py-3 px-5 rounded-lg'>
                <div className="flex flex-col h-full">
                    <div>
                        <div className='flex justify-between items-center mb-[6px] '>
                            <div className="font-bold text-blue-400 text-sm tracking-wide">Your note</div>
                            <X size={20} className='border cursor-pointer rounded' onClick={() => router.push(`/?noteId=${note.id}`)} />
                        </div>
                        <div className="border p-2 text-xs rounded max-h-[500px] overflow-y-auto">
                            {note?.text}
                        </div>
                    </div>

                    <div className="flex-1 max-h-[500px] px-2 py-3 text-sm border rounded-bl-lg rounded-br-lg overflow-y-auto whitespace-pre-wrap ">
                        {isPending ? <span className='flex gap-1 items-center'>Thinking <Loader2 size={15} className='animate-spin' /></span> : aiResponse}
                    </div>


                    <div className='mb-5 mt-1 flex justify-end'>
                        {aiResponse !== "Ai will respond" && <button
                            onClick={createNoteFunction} className='bg-blue-500 text-white text-xs py-[6px] px-2 rounded cursor-pointer'> {isCreatePending ? <Loader2 size={15} className='animate-spin' /> : "Save as new note"} </button>}
                    </div>

                    <div className="border p-2 rounded-md shadow-md">
                        <form action={aiAction}>
                            <textarea name="prompt" required className='max-h-[90px] w-full outline-0 text-sm' placeholder="Ask AI" />
                            <input type="hidden" name='note' defaultValue={note?.text} />
                            <div className='flex w-full justify-end mt-3'>
                                <button disabled={isPending} className='rounded-full border p-2 cursor-pointer bg-foreground text-background'>
                                    {isPending ? <Square size={15} /> : <Send size={15} />}
                                </button>
                            </div>
                        </form>
                    </div>

                </div>


            </div>
        </div>
    )
}
