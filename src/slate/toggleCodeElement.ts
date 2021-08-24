import { Editor, Transforms, Element } from "slate";

export function toggleCodeElement(editor: Editor): void {
  const [match] = Editor.nodes(editor, {
    match: (n) =>
      !Editor.isEditor(n) && Element.isElement(n) && n.type === "code",
  });
  Transforms.setNodes(
    editor,
    { type: match ? "paragraph" : "code" },
    { match: (n) => Editor.isBlock(editor, n) }
  );
}
