chrome.runtime.onInstalled.addListener(() => {
  chrome.declarativeContent.onPageChanged.removeRules(undefined, () => {
    chrome.declarativeContent.onPageChanged.addRules([
      {
        conditions: [
          // Set conditions to enable the extension on specific websites
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { hostEquals: "www.example-telehealth.com" },
          }),
        ],
        actions: [
