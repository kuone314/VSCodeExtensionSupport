import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerCommand('unitestsupport.helloWorld', async () => {
		const editor = vscode.window.activeTextEditor;
		if (!editor) { return; }
		const orgSelections = editor.selections;

		let str = "editor.selections = [\n";
		for (const selection of editor.selections) {
			str += genSelectionCode(selection);
			str += ",\n";
		}
		str += "];";

		const lastLine = editor.document.lineCount;
		const endPos = editor.document.validatePosition(new vscode.Position(lastLine + 1, 0));
		editor.selection = new vscode.Selection(endPos, endPos);

		// クリップボードへ入れる方法が分からないので、編集→コピー→Undoで誤魔化す。
		editor.edit(editBuilder => {
			editBuilder.replace(endPos, str);
		});
		await vscode.commands.executeCommand('editor.action.clipboardCopyAction');
		await vscode.commands.executeCommand('undo');
		editor.selections = orgSelections;

		vscode.window.showInformationMessage('Copy selections info to clipbord.');
	});

	context.subscriptions.push(disposable);
}

function genSelectionCode(sel: vscode.Selection): string {
	return "new vscode.Selection("
		+ genPositionCode(sel.start)
		+ ","
		+ genPositionCode(sel.end)
		+ ")"
		;
}

function genPositionCode(pos: vscode.Position): string {
	const tst= pos.line.toString();
	return "new vscode.Position("
		+ pos.line.toString()
		+ ","
		+ pos.character.toString()
		+ ")"
		;
}


export function deactivate() {}
