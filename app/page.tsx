
import NoteTextInput from '@/components/NoteTextInput'
import { getUser } from '@/lib/auth/server'
import db from '@/lib/prisma'
import React from 'react'



export default async function page() {
  const user = await getUser()
  const notes = await db.note.findMany({
    where: {
      authorId: user?.id
    }
  })

  return (
    <div className='w-full'>
      <NoteTextInput notes={notes} />
    </div>
  )
}
