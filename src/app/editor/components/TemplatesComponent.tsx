"use client"
import { templates } from "@/utils/templates"
import { useMarkdownEditorContext } from "@/providers/MarkdownEditorStoreProvider"

export const TemplatesComponent = () => {

  const setMardown = useMarkdownEditorContext((state) => state.setMarkdown)

  const handleClick = async (template: string) => {
    try {
      const res = await fetch(template)
      if (!res.ok) throw new Error('Failed to fetch template')
      const markdown = await res.text()
      setMardown(markdown)
    } catch (error) {
      console.error(error)
      return ""
    }
  }

  return (
    <aside className="w-[30%] border-r-1 p-2 overflow-y-scroll">
      <h2 className="text-xl font-bold">Templates</h2>
      <ul className="w-full mt-2 list-none space-y-2">
        {
          templates.map((template) => (
            <li onClick={() => handleClick(template.file)} key={template.id} className="w-full p-2 rounded-md shadow-md border-1 border-gray-400 cursor-pointer transition-shadow duration-300 hover:shadow-none">
              {template.name}
            </li>
          ))
        }
      </ul>
    </aside>
  )
}