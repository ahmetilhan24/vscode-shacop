import * as vscode from "vscode";
export const getSelectionText = (): string | undefined => {
  const editor = vscode.window.activeTextEditor;
  if (editor) {
    const doc = editor.document;
    return doc.getText(editor.selection);
  }
};
