"use client";
import "@blocknote/core/fonts/inter.css";
import "@blocknote/mantine/style.css";
import { BlockNoteEditor, PartialBlock } from "@blocknote/core";
import { BlockNoteView } from "@blocknote/mantine";
import { useCreateBlockNote } from "@blocknote/react";
import React from "react";
import dynamic from "next/dynamic";
import { useMemo  } from "react";
import { uploadFiles } from "@/utils/uploadThing";

interface EditorProps {
  onChange: () => void;
  initialContent?: string;
  editable?: boolean;
}

const Editor: React.FC<EditorProps> = ({
  onChange,
  initialContent,
  editable,
}) => {
  const editor: BlockNoteEditor = useCreateBlockNote({
    initialContent: initialContent
      ? (JSON.parse(initialContent) as PartialBlock[])
      : undefined,
      uploadFile: async (file:File) =>{
        const [res] = await uploadFiles("imageUploader", {files:[file]});
        return res.url;
      },
  }); 
  return (
    <div className="-mx-[54px] my-4">
      <BlockNoteView editor={editor} editable={editable} theme='light' onChange={onChange} />
    </div>
  );
};

export default Editor;
