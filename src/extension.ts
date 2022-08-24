import * as vscode from "vscode";
import { getSelectionText } from "./utils/selection.util";
export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand("shacop.helloWorld", () => {
    const editor = vscode.window.activeTextEditor;
    if (editor) {
      vscode.window.onDidChangeTextEditorSelection(() => {
        console.log(getSelectionText());
      });
    }
  });
  context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
