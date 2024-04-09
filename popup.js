document.addEventListener("DOMContentLoaded", function () {
  var selectButton = document.getElementById("selectButton");

  selectButton.addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { action: "selectButton" });
    });
  });
});
