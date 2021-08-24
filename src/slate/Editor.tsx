import React, { useMemo, useState } from "react";
import { useCallback } from "react";
import { createEditor, Descendant } from "slate";
import { Slate, Editable, withReact, RenderElementProps } from "slate-react";
import { Element } from "./Element";
import { toggleCodeElement } from "./toggleCodeElement";

export const Editor: React.FC = () => {
  const editor = useMemo(() => withReact(createEditor()), []);
  const renderElement = useCallback(
    (props: RenderElementProps) => <Element {...props} />,
    []
  );
  const [value, setValue] = useState<Descendant[]>(initialValue);

  const handleChange = (value: Descendant[]) => {
    setValue(value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.ctrlKey) {
      switch (event.key) {
        case "`": {
          event.preventDefault();
          toggleCodeElement(editor);
          return;
        }
      }
    }
  };

  return (
    <div className="editor">
      <Slate value={value} editor={editor} onChange={handleChange}>
        <Editable renderElement={renderElement} onKeyDown={handleKeyDown} />
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
