import { DownloadButton } from "./DownloadButton"

export const Header = () => { 
  return (
    <header className="w-full flex items-center justify-between border-b-1 py-4 px-12">
      
      <div>
        <h1 className="font-bold text-2xl text-amber-400 font-cabin">Readmydoc</h1>
      </div>

      <div>
        <DownloadButton />
      </div>
    </header>
  )
}