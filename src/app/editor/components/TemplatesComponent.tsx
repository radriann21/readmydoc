"use client"
import { toast } from "react-hot-toast"
import { templates } from "@/utils/templates"
import { useMarkdownEditorContext } from "@/providers/MarkdownEditorStoreProvider"

export const TemplatesComponent = () => {

  const setMardown = useMarkdownEditorContext((state) => state.setMarkdown)

  const handleClick = async (template: string) => {
    try {
      const res = await fetch(template)
      if (!res.ok) {
        toast('Failed to load template', {
          position: 'bottom-center',
          style: { backgroundColor: "#e02424", color: "#ffffff" }
        })
        return 
      }
      const markdown = await res.text()
      setMardown(markdown)
    } catch (error) {
      if (error instanceof Error) {
        toast(`Error to find template ${error.message}`, {
          position: 'bottom-center',
          style: { backgroundColor: "#e02424", color: "#ffffff" }
        })   
      }
     return 
    }
  }

  return (
    <aside className="w-[30%] p-2 overflow-y-scroll">
      <div>
        <h2 className="text-xl font-bold">Templates</h2>
        <p className="text-sm text-gray-500">Choose a template and start editing.</p>
      </div>
      <ul className="w-full mt-2 list-none space-y-2">
        {
          templates.map((template) => (
            <li onClick={() => handleClick(template.file)} key={template.id} className="text-sm font-bold w-full p-2 rounded-md shadow-sm shadow-blue-400/40 border-1 border-gray-400 cursor-pointer transition-shadow duration-300 hover:shadow-none hover:border-blue-400">
              {template.name}
            </li>
          ))
        }
      </ul>
    </aside>
  )
}