"use client"
import { MarkdownComponent } from "./MarkdownComponent"
import { useMarkdownEditorContext } from "@/providers/MarkdownEditorStoreProvider"
import { RefreshCcw, ClipboardCopy } from "lucide-react"
import toast from "react-hot-toast"

export const PreviewContainer = () => {
  const resetMarkdown = useMarkdownEditorContext((state) => state.resetMarkdown)
  const markdown = useMarkdownEditorContext((state) => state.markdown)

  const handleCopy = async () => {
    navigator.clipboard.writeText(markdown)
    toast('README copied to clipboard.', 
      { position: 'bottom-center', 
        style: { backgroundColor: "#33ad2f", color: "#ffffff" } 
      })
  }

  return (
    <section className="w-[50%] p-4">
    <div className="w-full flex items-center justify-between mb-2">
      <h2 className="font-bold text-2xl">Preview</h2>  
      <div className="flex items-center space-x-4">
        <button onClick={resetMarkdown} className="p-1 cursor-pointer rounded-md font-semibold text-sm bg-transparent transition-colors duration-300 hover:bg-gray-400/20 inline-flex">
          <span>Reset</span>
          <RefreshCcw className="w-5 h-5 ml-1" />
        </button>
        <button onClick={handleCopy} className="p-1 cursor-pointer rounded-md font-semibold text-sm bg-transparent transition-colors duration-300 hover:bg-gray-400/20 inline-flex">
          <span>Copy</span>
          <ClipboardCopy className="w-5 h-5 ml-1" />
        </button>
      </div>
    </div>
    <div className="markdown-body">
      <MarkdownComponent />
    </div>
  </section>
  )
}
