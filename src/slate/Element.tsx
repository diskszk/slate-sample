import { RenderElementProps } from "slate-react";

const ParagraphElement: React.FC<RenderElementProps> = (props) => {
  return <p {...props.attributes}>{props.children}</p>;
};

const CodeElement: React.FC<RenderElementProps> = (props) => {
  return (
    <pre {...props.attributes}>
      <code>{props.children}</code>
    </pre>
  );
};

export const Element: React.FC<RenderElementProps> = (props) => {
  switch (props.element.type) {
    case "code": {
      return <CodeElement {...props} />;
    }
    default: {
      return <ParagraphElement {...props} />;
    }
  }
};
