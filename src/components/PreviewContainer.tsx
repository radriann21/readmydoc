"use client"

import { MarkdownComponent } from "./MarkdownComponent";
import { RefreshCcw, ClipboardCopy } from "lucide-react";
import { useMarkdownEditorContext } from "@/providers/MarkdownEditorStoreProvider";
import toast from "react-hot-toast";

export const PreviewContainer = () => {

  const { resetMarkdown, markdown } = useMarkdownEditorContext(state => state)

  const handleCopy = async () => {
    navigator.clipboard.writeText(markdown);
    toast("Text copied to clipboard.", {
      position: "bottom-center",
      style: { backgroundColor: "#33ad2f", color: "#ffffff" },
    })
  }

  return (
    <section className="w-[50%] h-screen border-l-1 border-slate-300">
      <div className="py-1 px-4 flex items-center justify-between bg-base-300">
        <h3 className="uppercase tracking-wider text-sm">Preview</h3>
        <div className="flex items-center space-x-4">
          <button onClick={resetMarkdown} className="tooltip tooltip-bottom cursor-pointer" data-tip="Refresh">
            <RefreshCcw className="w-4 h-4 ml-1 stroke-blue-400" />
          </button>
          <button onClick={handleCopy} className="tooltip tooltip-bottom cursor-pointer" data-tip="Copy">
            <ClipboardCopy className="w-4 h-4 ml-1 stroke-blue-400" />
          </button>
        </div>
      </div>
      <div className="px-1">
        <MarkdownComponent />
      </div>
    </section>
  )
}
