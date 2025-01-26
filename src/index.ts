import * as vscode from "vscode";
import { commitTypes } from "./config/commit-type";
import { commitTypeOptions } from "./config/input-box";
import { messageInputType } from "./config/input-box";
import type { GitExtension } from "./types/git";

export const activate = (context: vscode.ExtensionContext | undefined) => {
	if (!context) {
		console.error("Extension context is undefined.");
		return;
	}

	const getGitExtension = (): GitExtension | undefined => {
		const vscodeGit = vscode.extensions.getExtension<GitExtension>("vscode.git");
		const gitExtension = vscodeGit?.exports;
		return gitExtension;
	};

	const gitExtension = getGitExtension();

	if (!gitExtension?.enabled) {
		vscode.window.showErrorMessage("Enable git extension and reload window to use this extension");
		return false;
	}

	const repo = gitExtension.getAPI(1).repositories[0];

	const setGitMessage = (msg: string): void => {
		repo.inputBox.value = msg;
	};

	console.log('Congratulations, your extension "better-commit" is now active!');

	/*
	 * -------------------------------------------------------------------------------------------------
	 *   Command registration and execution
	 * -------------------------------------------------------------------------------------------------
	 */

	const disposable = vscode.commands.registerCommand("extension.betterCommits", () => {
		vscode.window.showQuickPick(commitTypes, commitTypeOptions).then((selected): void => {
			if (selected) {
				vscode.window.showInputBox(messageInputType).then((value): void => {
					const message = value ? value : "";
					setGitMessage(`${selected.label}: ${message}`); // <--- set commit message
					vscode.commands.executeCommand("workbench.view.scm");
				});
			} else {
				vscode.window.showInformationMessage("No commit type selected");
			}
		});
	});

	context.subscriptions.push(disposable);
};
