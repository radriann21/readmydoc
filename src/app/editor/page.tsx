"use client";
import { Toaster } from "react-hot-toast";
import { Header } from "../editor/components/Header";
import { EditorComponent } from "./components/EditorComponent";
import { PreviewContainer } from "./components/PreviewContainer";

export default function EditorPage() {
  return (
    <main className="max-w-full mx-auto h-screen font-cabin overflow-hidden">
      <Toaster />
      <Header />
      <section className="w-full flex items-center h-screen">
        <EditorComponent />
        <PreviewContainer />
      </section>
    </main>
  )
}
