import { createStore } from "zustand/vanilla";

export type MarkdownEditorState = {
  markdown: string;
}

export type MarkdownEditorActions = {
  setMarkdown: (markdown: string) => void;
  resetMarkdown: () => void
}

export type MarkdownEditorStore = MarkdownEditorState & MarkdownEditorActions;

export const defaultInitialState: MarkdownEditorState = {
  markdown: "# Welcome to Readmydoc!"
}

export const initMarkdownEditorStore = (): MarkdownEditorState => {
  return { markdown: "# Welcome to Readmydoc!" }
}

export const createMarkdownEditorStore = (initState: MarkdownEditorState = defaultInitialState) => {
  return createStore<MarkdownEditorStore>()((set) => ({
    ...initState,
    setMarkdown: (markdown) => set({ markdown }),
    resetMarkdown: () => set({ markdown: "" })
  }))
}