import { createStore } from "zustand/vanilla";

export type MarkdownEditorState = {
  markdown: string;
  documentTitle: string
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
  return createStore<MarkdownEditorStore>()((set) => ({
    ...initState,
    setMarkdown: (markdown) => set({ markdown }),
    resetMarkdown: () => set({ markdown: "" }),
    setDocumentTitle: (title: string) => set({ documentTitle: title }),
  }))
}