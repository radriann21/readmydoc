"use client"
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useMarkdownEditorContext } from "@/providers/MarkdownEditorStoreProvider";

export const MarkdownComponent = () => {
  const markdown = useMarkdownEditorContext((state) => state.markdown)

  return (
    <div
      className="markdown-body p-2 h-screen"
    >
      <Markdown remarkPlugins={[remarkGfm]}>
        {markdown}
      </Markdown>
    </div>
  )
}