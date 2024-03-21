'use client'
import { useState } from "react";
import TiptapEditor from "./tiptap/tiptap-editor";

export default function PostEditor() {
  const [content, setContent] = useState<string>('');

// dummy upload image function
  function uploadImage(file: any) {
    return new Promise((resolve, reject) => {
      resolve("https://source.unsplash.com/kSfv9njQVc8/800x400");
    })
  };

  function onPaste(event: any): boolean {
    const clipboardData = event.clipboardData;
    if (clipboardData && clipboardData.files && clipboardData.files[0]) {
      const imageFile = clipboardData.files[0];
      if (imageFile.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.readAsDataURL(imageFile);
        reader.onload = async (e: any) => {
          const imageData = e.target.result; // Base64 encoded image data

          const newContent = content + `<img src="${imageData}" />`;
          setContent(newContent);
          return true;
        };
      }
    }
    return false;
  };

  return (
    <TiptapEditor content={content} onChange={setContent} onPaste={onPaste} ></TiptapEditor>
  )
}