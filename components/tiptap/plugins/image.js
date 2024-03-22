import Image from "@tiptap/extension-image";
import { Plugin } from "prosemirror-state";

const CustomImage = Image.extend({
  addProseMirrorPlugins() {
    return [
      new Plugin({
        props: {
          handlePaste: (editor, e) => {
            if (e.clipboardData.files.length) {
              return false;
            }
          }
        }
      })
    ];
  }
});

export default CustomImage;
