"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Toolbar from "./toolbar";
import CustomImage from './plugins/image'
import Underline from "@tiptap/extension-underline";

function uploadImage(file: any): Promise<string> {
  console.log(file);
  return new Promise((resolve, reject) => {
    resolve("https://source.unsplash.com/kSfv9njQVc8/800x400");
  })
};

export default function TiptapEditor({ onChange, content, onPaste }: any) {
  const allowedImageTypes = [
    "image/bmp",
    "image/gif",
    "image/jpeg",
    "image/jpg",
    "image/png",
    "image/tiff",
    "image/webp",
    "image/x-icon"
  ];
  
  const handleChange = (newContent: string) => {
    onChange(newContent);
  };
  const editor = useEditor({
    extensions: [StarterKit, CustomImage, Underline],
    content: '<p>Hello World!</p>'
  })

  if (!editor) return null;

  editor.setOptions({
    editorProps: {
      attributes: {
        class:
          "flex flex-col px-4 py-3 justify-start border-b border-r border-l border-gray-700 text-gray-400 items-start w-full gap-3 font-medium text-[16px] pt-4 rounded-bl-md rounded-br-md outline-none",
      },
      handlePaste: () => {
        console.log("handlePaste");

        void (async () => {
          const clipboardItems = await navigator.clipboard.read();

          const clipboardItem = clipboardItems[0];
          const { types } = clipboardItem;
          const type = types[0];
          const blob = await clipboardItems[0].getType(type);
          console.log('2')

          if (true) {
            console.log('3')
            const extension = type.split("/")[1];
            const formData = new FormData();
            formData.append("file", new File([blob], `image.${extension}`));

            try {
              const url = await uploadImage(formData);

              editor
                .chain()
                .focus()
                .setImage({
                  // src: url
                  src: url
                })
                .run();
            } catch (e) {
              console.error("erro");
            }
          }
        })();
      }
    },
    onUpdate: ({ editor }) => {
      handleChange(editor.getHTML());
    },
  });

  return (
    <div className="w-full px-4">
      <Toolbar editor={editor} content={content}/>
      <EditorContent style={{ whiteSpace: "pre-line" }} editor={editor} />
    </div>
  );
}
