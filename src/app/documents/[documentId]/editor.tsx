"use client";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

export const Editor = ({}) => {
  const editor = useEditor({
    editorProps: {
      attributes: {
        class:
          "focus:outline-none print:border-0 bg-white border border-gray-200 flex flex-col min-h-[1054px] w-[816px] pt-10 pr-14 pb-10 cursor-text",
      },
    },
    extensions: [StarterKit],
    content: "<p>Hello World! 🌎️</p>",
  });
  return (
    <div className="size-full bg-white overflow-x-auto px-4 print:p-0 print:bg-white print:overflow-visible">
      <div className="min-w-max flex justify-center w-[816px] py-4 print:py-0 print:w-full print:min-w-0">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};
