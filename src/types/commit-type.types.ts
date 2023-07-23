import { QuickPickItem } from "vscode";

export interface CommitTypeProps extends QuickPickItem {
  label: string;
  description: string;
  key: number;
}
