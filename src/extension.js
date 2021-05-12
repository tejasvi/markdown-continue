// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in the code below
const vscode = require('vscode');

// this method is called when the extension is activated
// the extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when the extension is activated
	console.log('Congratulations, the extension "markdown-continue" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerTextEditorCommand('markdown-continue.continueSequence', (textEditor, edit) => {
		// The code placed here will be executed every time the command is executed
		if (textEditor) {
			const currentLine = textEditor.document.lineAt(textEditor.selection.active.line).text;
			const regEx = /(^\s*(?:(\*|-|\d+|>)\.? )?)(.)?/;
			const match = regEx.exec(currentLine);
			if (match && match[1]) {
				if (match[3]) {
					let replacement = match[1];
					const numOrNan = parseInt(match[2]);
					if (!isNaN(numOrNan)) {
						replacement = replacement.replace(match[2], String(numOrNan + 1));
					}
					edit.insert(textEditor.selection.active, '\n' + replacement);
				} else {
					edit.delete(new vscode.Range(new vscode.Position(textEditor.selection.active.line, 0), textEditor.selection.active));
				}
			} else {
				edit.insert(textEditor.selection.active, '\n');
			}
		}
	});

	context.subscriptions.push(disposable);
}

// this method is called when the extension is deactivated
function deactivate() { }

module.exports = {
	activate,
	deactivate
};
