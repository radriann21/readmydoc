import { Download } from "lucide-react"
import { useMarkdownEditorContext } from "@/providers/MarkdownEditorStoreProvider"

export const DownloadButton = () => {

  const { markdown } = useMarkdownEditorContext((state) => state)

  function handleDownload() {
    const blob = new Blob([markdown], { type: "text/markdown" })
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.href = url
    link.download = "README.md"
    link.click()
    URL.revokeObjectURL(url)
  }

  return (
    <button onClick={handleDownload} className="inline-flex items-center px-4 py-2 rounded-md border-1 cursor-pointer bg-transparent transition-colors duration-300 hover:bg-blue-400/20">
      Download File
      <Download className="ml-2 h-5 w-5" />
    </button>
  )
}