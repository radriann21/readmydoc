import { createStore } from "zustand/vanilla";
import { createJSONStorage, persist } from "zustand/middleware";

export type MarkdownEditorState = {
  markdown: string;
  documentTitle: string;
}

export type MarkdownEditorActions = {
  setMarkdown: (markdown: string) => void;
  resetMarkdown: () => void;
  setDocumentTitle: (title: string) => void;
}

export type MarkdownEditorStore = MarkdownEditorState & MarkdownEditorActions;

export const defaultInitialState: MarkdownEditorState = {
  markdown: "# Welcome to Readmydoc!",
  documentTitle: "Document"
}

export const initMarkdownEditorStore = (): MarkdownEditorState => {
  return { markdown: "# Welcome to Readmydoc!", documentTitle: "Document" }
}

export const createMarkdownEditorStore = (initState: MarkdownEditorState = defaultInitialState) => {

  return createStore<MarkdownEditorStore>()(
    persist(
      (set) => ({
        ...initState,
        setMarkdown: (markdown) => set({ markdown }),
        resetMarkdown: () => set({ markdown: "" }),
        setDocumentTitle: (title: string) => set({ documentTitle: title }),
      }),
      {
        name: "markdown-store",
        storage: createJSONStorage(() => localStorage),
        partialize: (state) => ({ markdown: state.markdown, documentTitle: state.documentTitle })
      }
    )
  )
}