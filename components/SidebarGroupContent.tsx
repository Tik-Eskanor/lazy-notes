"use client"

import { Note } from "@/lib/generated/prisma"
import { SidebarMenu, SidebarMenuItem } from "./ui/sidebar"
import { startTransition, useActionState, useEffect, useState } from "react"
import { Loader2, Search, Trash, X } from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation"
import { deleteNote } from "@/lib/actions/notes"
import { toast } from "sonner"

type Prop = {
    notes: Note[]
}

export default function SidebarGroupContent({ notes }: Prop) {
    const router = useRouter()
    const [noteList, setNoteList] = useState<Note[]>([])
    const [searchActive, setSearchActive] = useState(false)
    const [searchTerm, setSearchTerm] = useState("")

    const searchParam = useSearchParams()
    const noteId = searchParam.get("noteId")

    useEffect(() => {
        setNoteList(notes)
    }, [notes])

    const [state, deleteAction, isPending] = useActionState(deleteNote, null)

    useEffect(() => {
        if (state?.success) {
            router.push("/")
            toast.success("Note deleted")
        }
    }, [state])

    useEffect(() => {
        if (state !== null && state?.success === false) {
            toast.error(state?.errorMessage)
        }
    }, [state])

    async function deleteNoteFunction(id: string) {
        startTransition(() => {
            deleteAction(id)
        })
    }

    function clearSearch() {
        setSearchActive(false)
        setNoteList(notes)
        setSearchTerm("")
    }

    function handleSearch(value: string) {
        setSearchTerm(value)
        handleFilter(searchTerm)
    }

    function handleFilter(value: string) {
        setSearchActive(true)
        const filteredList = noteList.filter((item) => item.text.toLowerCase().includes(value.toLowerCase()))
        setNoteList(filteredList)
    }
    return (
        <SidebarMenu>
            <SidebarMenuItem>
                <div className="flex shadow mb-2 text-background bg-muted-foreground border border-gray-600 rounded px-3 gap-2 items-center"><input onChange={(e) => handleSearch(e.target.value)} type="text" value={searchTerm} className="py-2 outline-0 text-sm w-full" placeholder="search" />
                    {searchActive ? <X size={20} onClick={clearSearch} /> : <Search size={20} />}
                </div>
            </SidebarMenuItem>

            {notes.length > 0 ? (
                noteList.map((item, index) => (
                    <SidebarMenuItem key={index}>
                        <div className={`flex px-3 py-2 justify-between ${noteId === item.id && "bg-blue-500 text-white font-bold"} hover:bg-black/40 rounded-md cursor-pointer`}>
                            <div
                                onClick={() => {
                                    router.push(`/?noteId=${item.id}`)
                                    router.refresh()
                                }} className="flex-1">
                                <div className="text-sm">{item.text.substring(0, 20)}...</div>
                                <div className="text-xs mt-1 text-muted-foreground">{new Date(item.updatedAt).toLocaleDateString()}</div>
                            </div>
                            {noteId === item.id && <button onClick={() => deleteNoteFunction(item.id)} disabled={isPending} className="cursor-pointer">{isPending ? <Loader2 size={15} className="animate-spin" /> : <Trash size={15} className="transition-all duration-300 hover:text-red-500" />}  </button>}
                        </div>
                    </SidebarMenuItem>
                ))
            ) : (
                <SidebarMenuItem>Empty notes list</SidebarMenuItem>
            )}
        </SidebarMenu>
    )
}
