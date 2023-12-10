(function() {
  function fallbackCopyTextToClipboard(text) {
    const input = document.createElement("input");
    input.value = text;
    document.body.appendChild(input);
    input.select();
    try {
      const successful = document.execCommand("copy");
      if (successful) {
        window.open("http://192.168.100.230:1889/#/system/systemList", "_blank");
      } else {
        console.log("execCommand call failed");
      }
    } catch (err) {
      console.error("execCommand failed", err);
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
        window.open("http://192.168.100.230:1889/#/system/systemList", "_blank");
      })
      .catch(err => {
        console.log("navigator.clipboard failed", err);
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




