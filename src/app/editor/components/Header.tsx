import Image from "next/image"
import Link from "next/link"
import { DownloadButton } from "./DownloadButton"
import logo from "@/assets/logo.png"

export const Header = () => { 
  return (
    <header className="w-full flex items-center justify-between border-b-1 py-4 px-12">
      
      <div>
        <Link href="/">
          <Image 
            src={logo}
            className="w-32"
            alt="logo of the app"
          />
        </Link>
      </div>

      <div>
        <DownloadButton />
      </div>
    </header>
  )
}