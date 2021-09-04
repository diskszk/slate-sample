import { BaseEditor } from "slate";
import { ReactEditor } from "slate-react";

export type ParagraphElement = {
  type: "paragraph";
  bold?: boolean;
  children: CustomText[];
};
export type CodeElement = { type: "code"; children: CustomText[] };

type CustomElement = ParagraphElement | CodeElement;
type CustomText = { text: string; bold?: boolean };

declare module "slate" {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor;
    Element: CustomElement;
    Text: CustomText;
  }
}
