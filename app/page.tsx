import NoteTextInput from '@/components/NoteTextInput'
import { getUser } from '@/lib/auth/server'
import db from '@/lib/prisma'
import { BookUser, BotMessageSquare, DatabaseZap, Edit, MailCheck, Pin, ScanFace } from 'lucide-react'
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
      {!user && (
        <div>
          <div className='max-w-[350px] font-bold text-transparent h-15 text-5xl bg-gradient-to-br from-foreground to-blue-500 bg-clip-text'>Lazy Notes</div>
          <p className='text-sm'>Say goodbye to scattered thoughts and wasted time! Lazy notes is a next generation note taking application that combines the simplicity of quick, reliable note capture with the power of artificial intelligence.
            It's more than just a digital notepad it's your personal AI thought partner designed to make every single note more valuable.</p>

          <div className='font-bold text-xl mt-5 mb-8'>Core Features</div>

          <div className="flex gap-8 md:gap-5 justify-center flex-wrap">
            <div className='basis-[100%] md:basis-[23%]'>
              <div className='p-3 inline-block mx-auto rounded-full bg-gradient-to-br from-foreground/30 to-blue-500'><Pin /></div>
              <div className='font-semibold mt-2 mb-1'>Quick Capture & Saving</div>
              <div className='text-sm'>Instantly jot down ideas, meeting notes, to-dos, or any thought as soon as it strikes.</div>
            </div>

            <div className='basis-[100%] md:basis-[23%]'>
              <div className='p-3 inline-block mx-auto rounded-full bg-gradient-to-br from-foreground/30 to-blue-500'><Edit /> </div>
              <div className='font-semibold mt-2 mb-1'>Effortless Editing</div>
              <div className='text-sm'>Our intuitive editor allows you to easily refine, format, and structure your notes at any time.</div>
            </div>

            <div className='basis-[100%] md:basis-[23%]'>
              <div className='p-3 inline-block mx-auto rounded-full bg-gradient-to-br from-foreground/30 to-blue-500'><DatabaseZap /></div>
              <div className='font-semibold mt-2 mb-1'>Storage & Sync</div>
              <div className='text-sm'>All your notes are safely stored and instantly synced across all your devices.</div>
            </div>

            <div className='basis-[100%] md:basis-[23%]'>
              <div className='p-3 inline-block mx-auto rounded-full bg-gradient-to-br from-foreground/30 to-blue-500'><BotMessageSquare /></div>
              <div className='font-semibold mt-2 mb-1'>AI Assist</div>
              <div className='text-sm'>All your notes are safely stored and instantly synced across all your devices.</div>
            </div>


          </div>


          <section className='my-10'>
            <div className='font-bold text-2xl mb-7'>Get Started</div>

            <div className="flex gap-8 md:gap-4 justify-between flex-wrap">
              <div className='basis-[100%] md:basis-[28%]'>
                <div className='p-3 inline-block mx-auto rounded-full bg-gradient-to-br from-foreground/30 to-blue-500'><BookUser /></div>
                <div className='font-semibold mt-2 mb-1'>Sign Up</div>
                <div className='text-sm'>Quickly sign up using your email address and create you personal account to get started</div>
              </div>

              <div className='basis-[100%] md:basis-[28%]'>
                <div className='p-3 inline-block mx-auto rounded-full bg-gradient-to-br from-foreground/30 to-blue-500'><MailCheck /></div>
                <div className='font-semibold mt-2 mb-1'>Verify Email</div>
                <div className='text-sm'>A verification link or code will be sent to the email address you provided. Click the link to proceed.</div>
              </div>

              <div className='basis-[100%] md:basis-[28%]'>
                <div className='p-3 inline-block mx-auto rounded-full bg-gradient-to-br from-foreground/30 to-blue-500'><ScanFace /> </div>
                <div className='font-semibold mt-2 mb-1'>Login</div>
                <div className='text-sm'>Once verified, log in with your credentials. You can now take notes and immediately engage with your AI assistant!</div>
              </div>
            </div>
          </section>

        </div>
      )}
      {user && (
        <NoteTextInput notes={notes} />
      )}
    </div>
  )
}
