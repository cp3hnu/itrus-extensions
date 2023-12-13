(function() {
  function openTargetUrl() {
    window.open("http://192.168.100.230:1889/#/system/systemList", "_blank");
  }

  function fallbackCopyTextToClipboard(text) {
    const input = document.createElement("input");
    input.value = text;
    document.body.appendChild(input);
    input.select();
    try {
      const successful = document.execCommand("copy");
      if (successful) {
        openTargetUrl();
      } else {
        console.log("error: execCommand call failed");
      }
    } catch (err) {
      console.log("error: execCommand failed:", err);
    }
    document.body.removeChild(input);
  }
  
  function copyTextToClipboard(text) {
    if (!navigator.clipboard) {
      fallbackCopyTextToClipboard(text);
      return;
    }
    navigator.clipboard
      .writeText(text)
      .then(() => {
        openTargetUrl();
      })
      .catch(err => {
        console.log("error: navigator.clipboard failed:", err);
        fallbackCopyTextToClipboard(text);
      });
  }

  if (window.getPermissions) {
    const data = window.getPermissions();
    if (data) {
      console.log("permission data: ", data);
      copyTextToClipboard(data);
    } else {
      console.log("error: no permission data");
    }
  } else {
    console.log("error: no getPermissions function");
  }
})();




