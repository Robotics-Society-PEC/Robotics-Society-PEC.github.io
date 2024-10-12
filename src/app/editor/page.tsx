"use client";
import TextareaAutosize from "react-autosize-textarea";
import { Button } from "@/components/ui/button";
import { useMemo } from "react";
import dynamic from "next/dynamic";
import Cover from "@/components/Cover";
//in onchange add the db call
export default function Home() {
  const Editor = useMemo(
    () => dynamic(() => import("@/components/Editor"), { ssr: false }),
    []
  );

  return (
    <main className="min-h-screen">
      <Cover url="https://picsum.photos/200/300"/>
      <div className="flex flex-col px-24 py-10 w-full">
        <TextareaAutosize
          placeholder="Untitled"
          className="w-full resize-none appearance-none overflow-hidden bg-transparent text-5xl font-bold focus:outline-none"
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        />
        <Editor onChange={() => {}} />
      </div>
    </main>
  );
}
