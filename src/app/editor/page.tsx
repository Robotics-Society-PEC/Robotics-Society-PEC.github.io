"use client";
import TextareaAutosize from "react-autosize-textarea";
import { useMemo, useState } from "react";
import dynamic from "next/dynamic";
import Cover from "@/components/Cover";
import { UploadButton } from "@uploadthing/react";

export default function Home() {
  const [coverUrl, setCoverUrl] = useState<string | null>(null);

  const Editor = useMemo(
    () => dynamic(() => import("@/components/Editor"), { ssr: false }),
    []
  );

  // Function to remove cover
  const handleRemoveCover = () => {
    setCoverUrl(null);
  };

  return (
    <main className="min-h-screen">
      {/* Display the cover if there's a coverUrl */}
      <div className="relative group">
        <Cover url={coverUrl} />

        {/* Show "Remove Cover" button only on hover over the cover */}
        {coverUrl && (
          <button
            className="absolute bottom-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity bg-neutral-100 text-neutral-400 rounded-md px-3 py-1"
            onClick={handleRemoveCover}
          >
            ❌ Remove cover
          </button>
        )}
      </div>

      <div className="flex flex-col px-24 py-10 w-full">
        <div className="group flex flex-col gap-2">
          {/* Show Upload Button if no coverUrl is set */}
          {!coverUrl && (
            <div className="opacity-0 group-hover:opacity-100 transition-opacity">
              <UploadButton
                className="hover:bg-neutral-100 text-neutral-400 rounded-md px-3 py-1 transition-colors w-fit ut-allowed-content:hidden ut-button:bg-neutral-200 ut-button:hover:bg-neutral-300 ut-button:text-neutral-800 ut-button:transition-colors"
                endpoint="imageUploader"
                content={{
                  button({ ready }) {
                    if (ready) return <div>📸 Add cover</div>;
                    return "Getting ready...";
                  },
                }}
                onClientUploadComplete={(res) => {
                  console.log("Upload response:", res); // Log upload response
                  if (res[0]) {
                    setCoverUrl(res[0].url); // Set the uploaded image URL as the cover
                  }
                }}
              />
            </div>
          )}

          <TextareaAutosize
            placeholder="Untitled"
            className="w-full resize-none appearance-none overflow-hidden bg-transparent text-5xl font-bold focus:outline-none"
          />
        </div>

        <Editor onChange={() => {}} />
      </div>
    </main>
  );
}
