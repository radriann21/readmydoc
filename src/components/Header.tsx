"use client";
import { useMarkdownEditorContext } from "@/providers/MarkdownEditorStoreProvider";
import { File, ArrowLeft } from "lucide-react";
import { DownloadButton } from "./DownloadButton";
import Link from "next/link";

export const Header = () => {
  const { setDocumentTitle, documentTitle } = useMarkdownEditorContext((state) => state);

  return (
    <header className="w-full flex items-center justify-between py-4 px-5 md:px-8">
      <section className="flex items-center">
        <Link href="/">
          <ArrowLeft className="w-4 h-4 sm:hidden" />
        </Link>
        <div className="hidden sm:block">
          <h1 className="uppercase text-lg tracking-wider">
            <Link
              href="/"
              className="text-blue-400 transition-colors ease-in-out hover:text-blue-200"
            >
              Readmydoc
            </Link>{" "}
            | Editor
          </h1>
        </div>
        <div className="divider divider-horizontal"></div>
        <div>
          <div className="flex items-center space-x-1">
            <File className="w-4 h-4" />
            <div className="flex flex-col">
              <input
                onChange={(e) => setDocumentTitle(e.currentTarget.value)}
                className="input input-ghost outline-none border-none focus:outline-none active:outline-none ring-0 p-0"
                placeholder="Document name..."
                value={documentTitle}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="flex items-center">
        <DownloadButton />
      </section>
    </header>
  );
};
