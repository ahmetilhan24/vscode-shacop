import * as vscode from "vscode";
import pushMessages from "./constants/push-messages";
import { QPPlatforms } from "./constants/sharing-platforms";
import { platformRedirect } from "./utils/platform-redirect.util";
import { getSelectionText } from "./utils/selection.util";
import { getStorage, initStorage, setStorage } from "./utils/storage-util";
import { emailValidation } from "./utils/validation-util";
export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand(
    "shacop.helloWorld",
    async () => {
      const editor = vscode.window.activeTextEditor;
      if (editor?.selection && !!getSelectionText()) {
        await initStorage(context);
        // control for URL limit
        if (Number(getSelectionText()?.length) > 2000) {
          vscode.window.showErrorMessage(pushMessages.CODE_IS_TO_LONG);
          return;
        }
        const selectedPlatform = await vscode.window.showQuickPick(
          QPPlatforms(),
          { placeHolder: "Select sharing platform" }
        );
        if (selectedPlatform) {
          switch (selectedPlatform.label) {
            case "Whatsapp":
              platformRedirect(selectedPlatform, getSelectionText());
              break;
            case "Teams":
              const email = await vscode.window.showInputBox({
                placeHolder: "Enter email address",
                validateInput: (value) => {
                  if (emailValidation(value)) {
                    return null;
                  }
                  return pushMessages.ENTER_A_VALID_VALUE;
                },
              });
              if (email) {
                const oldItems = await getStorage(context, "users");
                let payload = [{ email: email }];
                if (oldItems) {
                  // @ts-ignore
                  payload = [...oldItems, ...payload];
                }
                console.log(payload);
                await setStorage(context, "users", payload);
                // platformRedirect(selectedPlatform, getSelectionText(), email);
              }
              break;
            default:
              break;
          }
        }
      } else {
        vscode.window.showErrorMessage(pushMessages.NOT_SELECTED);
      }
    }
  );
  context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
