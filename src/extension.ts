import * as vscode from "vscode";

let firstSelected: vscode.Uri | null = null;

export function activate(context: vscode.ExtensionContext) {
  vscode.commands.executeCommand(
    "setContext",
    "extension.showSelectForCompare",
    true
  );
  vscode.commands.executeCommand(
    "setContext",
    "extension.showDeSelectForCompare",
    false
  );
  vscode.commands.executeCommand(
    "setContext",
    "extension.showCompareWithSelected",
    false
  );

  // Select for Compare
  const selectForCompare = vscode.commands.registerCommand(
    "extension.selectForCompare",
    (resource: any) => {
      firstSelected = resource.resourceUri;
      vscode.commands.executeCommand(
        "setContext",
        "extension.showSelectForCompare",
        false
      );
      vscode.commands.executeCommand(
        "setContext",
        "extension.showDeSelectForCompare",
        true
      );
      vscode.commands.executeCommand(
        "setContext",
        "extension.showCompareWithSelected",
        true
      );
    }
  );

  // DeSelect for Compare
  const deSelectForCompare = vscode.commands.registerCommand(
    "extension.deSelectForCompare",
    (resource: any) => {
      firstSelected = null;
      vscode.commands.executeCommand(
        "setContext",
        "extension.showSelectForCompare",
        true
      );
      vscode.commands.executeCommand(
        "setContext",
        "extension.showDeSelectForCompare",
        false
      );
      vscode.commands.executeCommand(
        "setContext",
        "extension.showCompareWithSelected",
        false
      );
    }
  );

  // Compare with Selected
  const compareWithSelected = vscode.commands.registerCommand(
    "extension.compareWithSelected",
    (resource: any) => {
      const secondUri = resource.resourceUri;
      if (firstSelected === secondUri) {
        vscode.window.showErrorMessage("Can not compare same file");
        return;
      }
      vscode.commands.executeCommand(
        "vscode.diff",
        firstSelected,
        secondUri,
        `Compare: ${firstSelected!.fsPath} ↔ ${secondUri.fsPath}`
      );
      firstSelected = null; // reset
      vscode.commands.executeCommand(
        "setContext",
        "extension.showSelectForCompare",
        true
      );
      vscode.commands.executeCommand(
        "setContext",
        "extension.showDeSelectForCompare",
        false
      );
      vscode.commands.executeCommand(
        "setContext",
        "extension.showCompareWithSelected",
        false
      );
    }
  );

  context.subscriptions.push(
    selectForCompare,
    deSelectForCompare,
    compareWithSelected
  );
}

export function deactivate() {
  firstSelected = null;
}
