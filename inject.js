function injectScript(file_path, tag) {
  var node = document.getElementsByTagName(tag)[0];
  var script = document.createElement('script');
  script.setAttribute('type', 'text/javascript');
  script.setAttribute('src', file_path);
  node.appendChild(script);
}
injectScript(chrome.runtime.getURL('/content.js'), 'body');

// chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//   console.log("request", message);
//   window.postMessage({"type": 'getPermission'}, '*');
//  // sendResponse({value: "window"});
// });

