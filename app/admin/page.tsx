import React from 'react';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import PostEditor from '@/components/post-editor';

export default function Admin() {
  return (
    <main className="w-full text-black flex flex-col gap-8">
      <PostEditor></PostEditor>
    </main>
  );
}
