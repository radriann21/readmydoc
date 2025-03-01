import { Download } from "lucide-react"

export const Header = () => {
  return (
    <header className="w-full flex items-center justify-between border-b-1 px-12 pb-2">
      
      <div>
        <h1 className="font-bold text-2xl text-amber-400 font-cabin">Readmydoc</h1>
      </div>

      <div>
        <button className="inline-flex items-center px-4 py-2 rounded-md border-1 cursor-pointer bg-transparent transition-colors duration-300 hover:bg-blue-400/20">
          Download File
          <Download className="ml-2 h-5 w-5" />
        </button>
      </div>
    </header>
  )
}