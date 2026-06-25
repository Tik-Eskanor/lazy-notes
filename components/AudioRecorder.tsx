"use client";

import { useState, useRef } from "react";
import { transcribeAudio } from "@/lib/actions/notes";
import { Mic } from 'lucide-react';
import { CircleStop } from 'lucide-react';


export default function AudioRecorder({onRecordComplete}) {
  const [isRecording, setIsRecording] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [transcript, setTranscript] = useState("");
  
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = async () => {
        // Combine chunks into a single audio blob
        const audioBlob = new Blob(audioChunksRef.current, { type: "audio/webm" });
        await handleTranscription(audioBlob);
        
        // Stop all audio tracks to release the microphone
        stream.getTracks().forEach(track => track.stop());
      };

      mediaRecorder.start();
      setIsRecording(true);
    } catch (err) {
      console.error("Microphone access denied:", err);
      alert("Please allow microphone access to record audio.");
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  const handleTranscription = async (blob: Blob) => {
    setIsProcessing(true);
    try {
      // Append the audio file to FormData
      const formData = new FormData();
      formData.append("audio", blob, "recording.webm");

      const result = await transcribeAudio(formData);
      if (result.success && result.text) {
        onRecordComplete(result.text);
      } else {
        onRecordComplete(undefined);
      }
    } catch (error) {
        console.log("Processing audio error: "+ error.message)
        onRecordComplete(undefined);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
      
      <div className="flex gap-4">
        {!isRecording ? (
          <button
            onClick={startRecording}
            type="button"
            disabled={isProcessing}
            className="text-sm flex gap-1 items-center px-4 py-[6px] bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-blue-300"
          >
            {isProcessing ? "Processing..." : <>Record  <Mic  size={15} /></>}
          </button>
        ) : (
          <button
            onClick={stopRecording}
            type="button"
            className="px-4 text-sm flex items-center gap-1 py-[6px] bg-red-600 text-white rounded-md hover:bg-red-700"
          >
            Stop <CircleStop size={15}/>
          </button>
        )}
      </div>
  );
}