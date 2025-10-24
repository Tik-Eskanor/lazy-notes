import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarHeader,
} from "@/components/ui/sidebar"
import { getUser } from "@/lib/auth/server"
import { Note } from "@/lib/generated/prisma"
import db from "@/lib/prisma"
import Link from "next/link"
import SidebarGroupContent from "../SidebarGroupContent"

export async function AppSidebar() {
    const user = await getUser()
    let notes: Note[] = []

    if (user) {
        notes = await db.note.findMany({
            where: {
                authorId: user.id
            },
            orderBy: {
                updatedAt: "desc"
            }
        })
    }

    return (
        <Sidebar>
            <SidebarHeader>
                <SidebarGroupLabel className="my-2 text-lg">
                    {user ? "Your notes" : <p><Link href="/login" className="underline">Login</Link> to see your notes</p>}
                </SidebarGroupLabel>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    {user && <SidebarGroupContent notes={notes} />}
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}