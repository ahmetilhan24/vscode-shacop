import { QuickPickItem } from "vscode";
import ISharingPlatform from "../types/sharing-platform";
const SLOGAN = "Code message from <Shacop>";
export const SHARING_PLATFORMS: ISharingPlatform[] = [
  {
    url: (msg) => `https://wa.me/?text=*${msg}* ${SLOGAN}`,
    name: "Whatsapp",
  },
  {
    url: (msg, user) =>
      `https://teams.microsoft.com/l/chat/0/0?users=${user}&message=%60%60%60 ${msg} %60%60%60 ${SLOGAN}`,
    name: "Teams",
  },
  {
    url: (msg) => `https://t.me/share/url?url=${msg}&text=${SLOGAN}`,
    name: "Telegram",
  },
];

export const QPPlatforms = (): QuickPickItem[] => {
  let extractedItems: QuickPickItem[] = SHARING_PLATFORMS.map((item) => {
    return {
      label: item.name,
    };
  });
  return [...extractedItems];
};
