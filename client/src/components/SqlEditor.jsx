import Editor from "@monaco-editor/react";
export default function SqlEditor({ value, onChange }) {
  return (
    <Editor height="200px" defaultLanguage="sql" value={value} onChange={onChange} />
  );
}