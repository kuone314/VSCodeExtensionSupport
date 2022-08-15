* 選択状態を元に、VSCode拡張機能のテスト用のコードを生成します。
  * 生成したコードは、クリップボードへ記録されます。
  * 以下の様なコードを生成します。

```ts
editor.selections = [
new vscode.Selection(new vscode.Position(4,5),new vscode.Position(4,29)),
new vscode.Selection(new vscode.Position(5,5),new vscode.Position(5,31)),
new vscode.Selection(new vscode.Position(7,3),new vscode.Position(7,34)),
];
```

# Link

* [GitHub](https://github.com/kuone314/VSCodeExtensionSupport)
* [Twitter](https://twitter.com/KuoneTech)
