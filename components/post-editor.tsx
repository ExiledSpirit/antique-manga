'use client'
import { useState } from "react";
import TiptapEditor from "./tiptap/tiptap-editor";

export default function PostEditor() {
  const [content, setContent] = useState<string>('');

  return (
    <TiptapEditor content={content} onChange={setContent}></TiptapEditor>
  )
}