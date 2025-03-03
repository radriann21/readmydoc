"use client"

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useMarkdownEditorContext } from "@/providers/MarkdownEditorStoreProvider";

export const MarkdownComponent = () => {
  const markdown = useMarkdownEditorContext((state) => state.markdown)

  return (
    <ReactMarkdown 
      remarkPlugins={[remarkGfm]}
    >
      {markdown}
    </ReactMarkdown>
  )
}