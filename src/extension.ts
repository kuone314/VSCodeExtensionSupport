import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerCommand('unitestsupport.helloWorld', () => {
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
