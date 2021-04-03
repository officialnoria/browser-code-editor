import MonacoEditor, { OnChange, OnMount } from '@monaco-editor/react';
import prettier from 'prettier';
import parser from 'prettier/parser-babel';
import React, { useRef } from 'react';
import './code-editor.css';

interface CodeEditorProps {
  initialValue: string;
  onChange: (value: string) => void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ initialValue, onChange }) => {
  const editorRef = useRef<any>(null);
  const handleEditorDidMount: OnMount = (editor, monaco) => {
    editorRef.current = editor;
    onChange(editorRef.current.getValue());
  };
  const formatCode = () => {
    const unformatted = editorRef.current.getModel().getValue();
    const formatted = prettier
      .format(unformatted, {
        parser: 'babel',
        plugins: [parser],
        useTabs: false,
        semi: true,
        singleQuote: true,
      })
      .replace(/\n$/, '');
    editorRef.current.setValue(formatted);
  };
  const handleEditorChange: OnChange = () => {
    onChange(editorRef.current.getValue());
  };

  return (
    <div className="editor-wrapper">
      <button className="button button-format is-primary is-small" onClick={formatCode}>
        Format
      </button>
      <MonacoEditor
        language="typescript"
        defaultValue={initialValue}
        onMount={handleEditorDidMount}
        onChange={handleEditorChange}
        height="100%"
        width="100%"
        theme="vs-dark"
        options={{
          wordWrap: 'on',
          minimap: { enabled: false },
          showUnused: false,
          folding: false,
          lineNumbersMinChars: 3,
          fontSize: 16,
          scrollBeyondLastLine: false,
          automaticLayout: true,
          tabSize: 2,
        }}
      />
    </div>
  );
};

export default CodeEditor;
