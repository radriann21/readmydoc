"use client"

import { Header } from "./components/Header";
import { EditorComponent } from "./components/EditorComponent";
import { PreviewContainer } from "./components/PreviewContainer";
import { TemplatesComponent } from "./components/TemplatesComponent";
import { Toaster } from "react-hot-toast";

export default function EditorPage() {
  return (
    <main className="max-w-full mx-auto h-[85vh] font-cabin">
      <Toaster />
      <Header />
      <section className="w-full h-full flex">
        <TemplatesComponent />
        <section className="w-full h-full flex">
          <EditorComponent />
          <PreviewContainer />
        </section>
      </section>
    </main>
  )
}