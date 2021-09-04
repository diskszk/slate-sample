import { Editor } from "slate";

export function toggleMark(editor: Editor): void {
  const marks = Editor.marks(editor);
  const isActive = marks ? marks["bold"] === true : false;

  if (isActive) {
    Editor.removeMark(editor, "bold");
  } else {
    Editor.addMark(editor, "bold", true);
  }
}
