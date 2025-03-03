"use client"

import Editor from "@monaco-editor/react"
import { useMarkdownEditorContext } from "@/providers/MarkdownEditorStoreProvider"

export const EditorComponent = () => {

  const setMarkdown = useMarkdownEditorContext((state) => state.setMarkdown)
  const markdown = useMarkdownEditorContext((state) => state.markdown)

  const handleEditorChange = (value: string | undefined) => {
    if (value !== undefined) {
      setMarkdown(value);
    }
  }

  return (
    <>
      <Editor 
        onChange={handleEditorChange}
        height="100%"
        width="50%"
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
    </>
  )
}