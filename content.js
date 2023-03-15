function extractPatientInfo() {
  // Write code to extract patient information from the web page
}

function extractEncounterNotes() {
  // Write code to extract encounter notes from the web page
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "generateNotes") {
    sendResponse(extractEncounterNotes());
  } else if (request.action === "submitInsuranceClaim") {
    sendResponse(extractPatientInfo());
  }
});
