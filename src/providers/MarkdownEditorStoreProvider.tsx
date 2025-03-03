"use client"

import { type ReactNode, createContext, useRef, useContext } from "react"
import { useStore } from "zustand"

import { type MarkdownEditorStore, createMarkdownEditorStore, initMarkdownEditorStore } from "@/stores/MarkdownEditorStore"

export type MarkdownEditorStoreApi = ReturnType<typeof createMarkdownEditorStore>

export const MardownEditorStoreContext = createContext<MarkdownEditorStoreApi | null>(null)

export interface MarkdownEditorStoreProviderProps {
  children: ReactNode
}

export const MardownEditorProvider = ({ children }: MarkdownEditorStoreProviderProps) => {
  const storeRef = useRef<MarkdownEditorStoreApi>(null)
  if (!storeRef.current) {
    storeRef.current = createMarkdownEditorStore(initMarkdownEditorStore())
  }

  return (
    <MardownEditorStoreContext.Provider value={storeRef.current}>
      {children}
    </MardownEditorStoreContext.Provider>
  )
}

export const useMarkdownEditorContext = <T,>(selector: (store: MarkdownEditorStore) => T,): T => {
  const markdownEditorStoreContext = useContext(MardownEditorStoreContext)
  if (!markdownEditorStoreContext) {
    throw new Error("useMarkdownEditorContext must be used within a MardownEditorProvider")
  }

  return useStore(markdownEditorStoreContext, selector)
}