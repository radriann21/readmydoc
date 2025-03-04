"use client"
import { MarkdownComponent } from "./MarkdownComponent"

export const PreviewContainer = () => {
  return (
    <section className="w-[50%] p-4 h-full overflow-y-scroll">
      <div className="w-full flex items-center justify-between mb-2">
        <h2 className="font-bold text-xl">Preview</h2>
      </div>
      <div className="markdown-body">
        <MarkdownComponent />
      </div>
    </section>
  )
}
