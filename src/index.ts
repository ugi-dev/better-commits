import * as vscode from "vscode";
import { commitTypes } from "./config/commit-type";
import { commitTypeOptions } from "./config/input-box";
import { messageInputType } from "./config/input-box";
import type { CommitTypeProps } from "./types/commit-type.types";
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

	const getCommitTypes = (): Array<CommitTypeProps> => {
		const config = vscode.workspace.getConfiguration("betterCommits");
		const useDefaultTypes = config.get<boolean>("useDefaultTypes", true);
		const configuredTypes = config.get<Array<{ label: string; description: string }>>("types", []) ?? [];

		const customTypes = configuredTypes
			.map((type): { label: string; description: string } => {
				return {
					label: type.label.trim(),
					description: type.description.trim(),
				};
			})
			.filter((type): boolean => Boolean(type.label) && Boolean(type.description));

		if (!useDefaultTypes) {
			if (customTypes.length === 0) {
				vscode.window.showWarningMessage(
					"Better Commits: custom types are empty. Falling back to default commit types.",
				);
				return commitTypes;
			}

			return customTypes.map((type, index): CommitTypeProps => {
				return {
					label: type.label,
					description: type.description,
					key: index,
				};
			});
		}

		const mergedTypes: Array<CommitTypeProps> = commitTypes.map((type): CommitTypeProps => {
			return { ...type };
		});
		let nextKey = mergedTypes.length;

		for (const type of customTypes) {
			const existingTypeIndex = mergedTypes.findIndex((item): boolean => item.label === type.label);

			if (existingTypeIndex >= 0) {
				mergedTypes[existingTypeIndex] = {
					...mergedTypes[existingTypeIndex],
					description: type.description,
				};
				continue;
			}

			mergedTypes.push({
				label: type.label,
				description: type.description,
				key: nextKey,
			});
			nextKey += 1;
		}

		return mergedTypes;
	};

	console.log('Congratulations, your extension "better-commit" is now active!');

	/*
	 * -------------------------------------------------------------------------------------------------
	 *   Command registration and execution
	 * -------------------------------------------------------------------------------------------------
	 */

	const disposable = vscode.commands.registerCommand("extension.betterCommits", () => {
		const availableCommitTypes = getCommitTypes();
		vscode.window.showQuickPick(availableCommitTypes, commitTypeOptions).then((selected): void => {
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
