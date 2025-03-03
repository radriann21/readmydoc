"use client"

import { Header } from "./components/Header";
import { EditorComponent } from "./components/EditorComponent";
import { PreviewContainer } from "./components/PreviewContainer";
import { Toaster } from "react-hot-toast";

export default function EditorPage() {
  return (
    <main className="max-w-full mx-auto h-screen font-cabin">
      <Toaster />
      <Header />
      <section className="w-full h-screen flex">
        <aside className="w-[20%] border-r-1 p-2">
          <h2>Templates</h2>
        </aside>
        <section className="w-full h-screen flex">
          <EditorComponent />
          <PreviewContainer />
        </section>
      </section>
    </main>
  )
}