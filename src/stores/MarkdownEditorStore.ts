import { createStore } from "zustand/vanilla";
import { createJSONStorage, persist } from "zustand/middleware";

export type MarkdownEditorState = {
  markdown: string;
  documentTitle: string;
  actualView: "editor" | "preview";
}

export type MarkdownEditorActions = {
  setMarkdown: (markdown: string) => void;
  resetMarkdown: () => void;
  setDocumentTitle: (title: string) => void;
  setActualView: (view: "editor" | "preview") => void;
}

export type MarkdownEditorStore = MarkdownEditorState & MarkdownEditorActions;

export const defaultInitialState: MarkdownEditorState = {
  markdown: "# Welcome to Readmydoc!",
  documentTitle: "Document",
  actualView: "editor"
}

export const initMarkdownEditorStore = (): MarkdownEditorState => {
  return { markdown: "# Welcome to Readmydoc!", documentTitle: "Document", actualView: "editor" }
}

export const createMarkdownEditorStore = (initState: MarkdownEditorState = defaultInitialState) => {

  return createStore<MarkdownEditorStore>()(
    persist(
      (set) => ({
        ...initState,
        setMarkdown: (markdown) => set({ markdown }),
        resetMarkdown: () => set({ markdown: "" }),
        setDocumentTitle: (title: string) => set({ documentTitle: title }),
        setActualView: (view: "editor" | "preview") => set({ actualView: view }),
      }),
      {
        name: "markdown-store",
        storage: createJSONStorage(() => localStorage),
        partialize: (state) => ({ markdown: state.markdown, documentTitle: state.documentTitle, actualView: state.actualView })
      }
    )
  )
}