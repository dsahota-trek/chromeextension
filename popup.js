document.getElementById("generateNotes").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { action: "generateNotes" }, (response) => {
      // Process the response and generate notes
    });
  });
});

document.getElementById("submitInsuranceClaim").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { action: "submitInsuranceClaim" }, (response) => {
      // Process the response and submit the insurance claim
    });
  });
});
