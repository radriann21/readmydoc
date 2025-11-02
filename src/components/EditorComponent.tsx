"use client"
import Editor from "@monaco-editor/react"
import { useMarkdownEditorContext } from "@/providers/MarkdownEditorStoreProvider"
import { TemplatesComponent } from "./TemplatesComponent"

export const EditorComponent = () => {

  const { markdown, setMarkdown, actualView, setActualView } = useMarkdownEditorContext((state) => state)

  const handleEditorChange = (value: string | undefined) => {
    if (value !== undefined) {
      setMarkdown(value);
    }
  }

  return (
    <section className={`h-full w-full md:w-[50%] border-none md:block ${actualView === "preview" ? "hidden" : ""}`}>
      <div className="py-1 px-4 flex items-center justify-between bg-base-300">
        <h3 onClick={() => setActualView("preview")} className="uppercase tracking-wider text-sm cursor-pointer">Markdown</h3>
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
