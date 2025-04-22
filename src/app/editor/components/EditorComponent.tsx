"use client"

import Editor from "@monaco-editor/react"
import { useMarkdownEditorContext } from "@/providers/MarkdownEditorStoreProvider"
import { TemplatesComponent } from "./TemplatesComponent"

export const EditorComponent = () => {

  const setMarkdown = useMarkdownEditorContext((state) => state.setMarkdown)
  const markdown = useMarkdownEditorContext((state) => state.markdown)

  const handleEditorChange = (value: string | undefined) => {
    if (value !== undefined) {
      setMarkdown(value);
    }
  }

  return (
    <section className="h-full w-[50%] border-none">
      <div className="py-1 px-4 flex items-center justify-between bg-slate-100 dark:bg-slate-900 dark:text-white">
        <h3 className="uppercase tracking-wider text-sm">Markdown</h3>
        <TemplatesComponent />
      </div>
      <Editor 
        onChange={handleEditorChange}
        height="100vh"
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
    </section>
  )
}
