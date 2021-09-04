import React, { useMemo, useState } from "react";
import { useCallback } from "react";
import { createEditor, Descendant } from "slate";
import {
  Slate,
  Editable,
  withReact,
  RenderElementProps,
  RenderLeafProps,
} from "slate-react";
import { Element } from "./Element";
import { Leaf } from "./Leaf";
import { toggleCodeElement } from "./toggleCodeElement";
import { toggleMark } from "./toggleMark";
import { Toolbar } from "./Toolbar";

export const Editor: React.FC = () => {
  const editor = useMemo(() => withReact(createEditor()), []);
  const renderElement = useCallback(
    (props: RenderElementProps) => <Element {...props} />,
    []
  );

  const renderLeaf = useCallback(
    (props: RenderLeafProps) => <Leaf {...props} />,
    []
  );
  const [value, setValue] = useState<Descendant[]>(initialValue);

  const handleChange = (value: Descendant[]) => {
    setValue(value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.ctrlKey) {
      switch (event.key) {
        // コードブロック
        case "`": {
          event.preventDefault();
          toggleCodeElement(editor);
          return;
        }
        // 太字
        case "b": {
          event.preventDefault();
          toggleMark(editor);
          return;
        }
      }
    }
  };

  return (
    <div className="editor">
      <Slate value={value} editor={editor} onChange={handleChange}>
        <Toolbar editor={editor} />
        <Editable
          renderElement={renderElement}
          renderLeaf={renderLeaf}
          onKeyDown={handleKeyDown}
        />
      </Slate>
    </div>
  );
};

const initialValue: Descendant[] = [
  {
    type: "paragraph",
    children: [{ text: "Hello World!" }],
  },
];
