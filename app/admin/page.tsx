'use client'
import { Editor } from "react-draft-wysiwyg";
import React from 'react';
import Markdown from 'react-markdown';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

export default function Admin() {
  const [value, setValue] = React.useState('**Hello world!!!**');

  return (
    <main className="w-full text-black flex flex-col gap-8">
      <Editor
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
      />;
      <Markdown>{value}</Markdown>
    </main>
  );
}
