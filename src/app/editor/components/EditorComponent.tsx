"use client"

import Editor from "@monaco-editor/react"
import { useMarkdownEditorContext } from "@/providers/MarkdownEditorStoreProvider"
import { RefreshCcw, ClipboardCopy } from "lucide-react"
import toast from "react-hot-toast"

export const EditorComponent = () => {

  const setMarkdown = useMarkdownEditorContext((state) => state.setMarkdown)
  const resetMarkdown = useMarkdownEditorContext((state) => state.resetMarkdown)
  const markdown = useMarkdownEditorContext((state) => state.markdown)

  const handleEditorChange = (value: string | undefined) => {
    if (value !== undefined) {
      setMarkdown(value);
    }
  }

  const handleCopy = async () => {
    navigator.clipboard.writeText(markdown)
    toast('README copied to clipboard.', 
      { position: 'bottom-center', 
        style: { backgroundColor: "#33ad2f", color: "#ffffff" } 
      })
  }

  return (
    <div className="h-full w-[50%] border-none p-2">
      <div className="w-full p-1 border-b-1 border-blue-400/30 mb-2 flex items-center justify-between">
        <h2 className="font-bold text-xl">Editor</h2>
        <div className="flex items-center space-x-4 text-blue-400">
          <button onClick={resetMarkdown} className="p-1 cursor-pointer rounded-md font-semibold text-sm bg-transparent transition-colors duration-300 hover:bg-gray-400/20 inline-flex">
            <span>Reset</span>
            <RefreshCcw className="w-5 h-5 ml-1 stroke-blue-400" />
          </button>
          <button onClick={handleCopy} className="p-1 cursor-pointer rounded-md font-semibold text-sm bg-transparent transition-colors duration-300 hover:bg-gray-400/20 inline-flex">
            <span>Copy</span>
            <ClipboardCopy className="w-5 h-5 ml-1 stroke-blue-400" />
          </button>
        </div>
      </div>
      <Editor 
        onChange={handleEditorChange}
        height="600px"
        width="100%"
        defaultLanguage="markdown"
        value={markdown}
        theme="vs-dark"
        options={{
          minimap: {
            enabled: false
          },
          lineNumbers: "off",
          wordWrap: "on"
        }}
      />
    </div>
  )
}