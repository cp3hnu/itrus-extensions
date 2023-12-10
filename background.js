chrome.runtime.onInstalled.addListener(function () {
  console.log("插件已被安装");
  chrome.contextMenus.create({
    id: "top",
    title: "iTrus",
    contexts: ["all"]
  });
  chrome.contextMenus.create({
    id: "permission",
    parentId: "top",
    title: "➹ Get Permission",
    contexts: ["all"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "permission") {
    chrome.scripting.executeScript({
      target: {
        tabId: tab.id, 
        allFrames: true,
      },
      files: ["itrus-permission.js"],
      world: "MAIN",
    }, result => {
      console.log("result", result);
    });
  }
});


