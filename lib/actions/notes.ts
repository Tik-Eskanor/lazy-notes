"use server"

import { revalidatePath } from "next/cache"
import { createClient } from "../auth/server"
import db from "../prisma"
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export const createNote = async (prevState: unknown, formData: FormData) => {

    const { auth } = await createClient()
    const userObj = await auth.getUser()
    const userId = userObj.data.user?.id

    if (!userId) return { success: false, errorMessage: "No user. Try logging in" }

    const data = {
        text: formData.get("text"),
        authorId: userId
    }

    const note = await db.note.create({
        data: data
    })

    if (!note) return { success: false, errorMessage: "Unable to Save note. Try again" }

    revalidatePath("/")
    return { success: true, errorMessage: null }


}

export async function transcribeAudio(formData: FormData) {
    try {
      const file = formData.get("audio") as File;
      if (!file) {
        throw new Error("No audio file found in the request.");
      }
  
      // 1. Convert the file into an ArrayBuffer and then a Buffer
      const arrayBuffer = await file.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
  
      // 2. Format the data as required by the Gemini API for inline data
      const audioPart = {
        inlineData: {
          data: buffer.toString("base64"),
          mimeType: file.type || "audio/webm",
        },
      };
  
      // 3. Call the Gemini model (gemini-2.5-flash is ideal for fast text/audio tasks)
      const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' })

     const result = await model.generateContent([
        audioPart,
        { text: "Please provide an accurate, word-for-word transcription of this audio without adding any introductory or concluding remarks." },
      ]);
    
      if (!result) {
          console.log(result)
        throw new Error("Gemini returned an empty response.");
      }
  
      console.log(result.response.text())
      return { success: true, text: result.response.text().trim() };
    } catch (error: any) {
      console.error("Gemini Transcription error:", error);
      return { success: false, error: "Failed to transcribe audio with Gemini" };
    }
  }



type Prop = {
    id: string,
    author: string,
    text: string
}
export const updateNote = async (prevState: unknown, data: Prop) => {
    try {
        const { auth } = await createClient()
        const userObj = await auth.getUser()
        const userId = userObj.data.user?.id

        if (!userId) return { success: false, errorMessage: "No user. Try logging in" }


        const note = await db.note.update({
            where: {
                id: data.id,
            },
            data: {
                text: data.text,
                authorId: data.author
            }
        })

        if (!note) return { success: false, errorMessage: "Unable to update note. Try again" }

        revalidatePath("/")
        return { success: true, errorMessage: null }

    } catch (error) {
        console.log(error)
    }
}

export const deleteNote = async (prevState: unknown, id: string) => {
    try {
        const { auth } = await createClient()
        const userObj = await auth.getUser()
        const userId = userObj.data.user?.id

        if (!userId) return { success: false, errorMessage: "No user. Try logging in" }


        const note = await db.note.delete({
            where: {
                id: id,
            },
        });
        if (!note) return { success: false, errorMessage: "Unable to delete note. Try again" }

        revalidatePath("/")
        return { success: true, errorMessage: null }

    } catch (error) {
        console.log(error)
    }
}

export const askAi = async (prevState: unknown, formData: FormData) => {
    try {
        const { auth } = await createClient()
        const userObj = await auth.getUser()
        const userId = userObj.data.user?.id

        if (!userId) return { success: false, errorMessage: "No user. Try logging in" }



        const note = formData.get("note")
        const prompt = formData.get("prompt")

        let fullPrompt = "";

        if (note) {
            fullPrompt = `
                Use the following Note data to answer the user's question as best as you can. 
                Provide answer to user's question from your own initiative even if the Note data provided is very small. Do this in a very friendly manner.
                Note data:
                ---
                ${note}
                ---

                USER QUESTION: ${prompt}
            `.trim();
        }

        const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' })

        const result = await model.generateContent(fullPrompt);

        if (!result) {
            return { text: "Al is unavialable. Try again letter" }
        }
        return { text: result.response.text().trim() }

    } catch (error) {
        console.log(error)
        return { text: "Error: Al is unavialable. Try again letter" }
    }
}

export const createNoteFromAi = async (prevState: unknown, text: string) => {

    try {
        const { auth } = await createClient()
        const userObj = await auth.getUser()
        const userId = userObj.data.user?.id

        if (!userId) return { success: false, errorMessage: "No user. Try logging in" }


        const note = await db.note.create({
            data: {
                text: text,
                authorId: userId
            }
        })

        if (!note) return { success: false, errorMessage: "Unable to Save note. Try again" }

        revalidatePath("/")
        return { success: true, errorMessage: null }
    }
    catch (error) {
        console.log(error)
    }
}




