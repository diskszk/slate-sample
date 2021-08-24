import { BaseEditor } from "slate";
import { ReactEditor } from "slate-react";

export type ParagraphElement = { type: "paragraph"; children: CustomText[] };
export type CodeElement = { type: "code"; children: CustomText[] };

type CustomElement = ParagraphElement | CodeElement;
type CustomText = { text: string };

declare module "slate" {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor;
    Element: CustomElement;
    Text: CustomText;
  }
}
