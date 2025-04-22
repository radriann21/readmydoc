import { Download } from "lucide-react";
import { useMarkdownEditorContext } from "@/providers/MarkdownEditorStoreProvider";

export const DownloadButton = () => {
  const { markdown, documentTitle } = useMarkdownEditorContext((state) => state);

  function handleDownload() {
    const blob = new Blob([markdown], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${documentTitle}.md`;
    link.click();
    URL.revokeObjectURL(url);
  }

  return (
    <button onClick={handleDownload} className="btn btn-sm sm:btn-md">
      <span className="hidden sm:inline">Download</span>
      <Download className="w-4 h-4" />
    </button>
  )
}
