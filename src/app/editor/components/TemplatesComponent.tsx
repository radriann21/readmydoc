"use client";
import { toast } from "react-hot-toast";
import { templates } from "@/utils/templates";
import { useMarkdownEditorContext } from "@/providers/MarkdownEditorStoreProvider";

export const TemplatesComponent = () => {
  const setMardown = useMarkdownEditorContext((state) => state.setMarkdown);

  const handleClick = async (template: string) => {
    try {
      const res = await fetch(template);
      if (!res.ok) {
        toast("Failed to load template", {
          position: "bottom-center",
          style: { backgroundColor: "#e02424", color: "#ffffff" },
        });
        return;
      }
      const markdown = await res.text();
      setMardown(markdown);
    } catch (error) {
      if (error instanceof Error) {
        toast(`Error to find template ${error.message}`, {
          position: "bottom-center",
          style: { backgroundColor: "#e02424", color: "#ffffff" },
        });
      }
      return;
    }
  };

  return (
    <details className="dropdown">
      <summary className="text-sm uppercase tracking-wider cursor-pointer">Templates</summary>
      <ul className="menu dropdown-content z-1 space-y-1 text-sm p-0 bg-base-100">
        {templates.map((template) => (
          <li
            className="w-full cursor-pointer transition-colors duration-300 hover:bg-slate-500/40 p-1"
            key={template.id}
            onClick={() => handleClick(template.file)}
          >
            {template.name}
          </li>
        ))}
      </ul>
    </details>
  )
}


