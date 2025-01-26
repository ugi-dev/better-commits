import type { InputBoxOptions } from "vscode";
import type { QuickPickOptions } from "vscode";

export interface MessageInputType extends InputBoxOptions {
	placeHolder: string;
	ignoreFocusOut: boolean;
	prompt: string;
	value: string;
}

/*
 * -------------------------------------------------------------------------------------------------
 *   Message input type
 * -------------------------------------------------------------------------------------------------
 */

export const messageInputType: MessageInputType = {
	placeHolder: "Start typing commit message here ...",
	ignoreFocusOut: true,
	prompt: "",
	value: "",
};

/*
 * -------------------------------------------------------------------------------------------------
 *   Commit type options
 * -------------------------------------------------------------------------------------------------
 */

export const commitTypeOptions: QuickPickOptions & { canPickMany: false } = {
	placeHolder: "Select a commit type",
	ignoreFocusOut: true,
	matchOnDescription: true,
	matchOnDetail: true,
	canPickMany: false,
};
