let inputWebsite = document.getElementById('website');
let inputMessage = document.getElementById('message');
let buttonReport = document.getElementById('btnReport');

async function getCurrentTabUrl2() {
  const tabs = await chrome.tabs.query({ active: true });
  return tabs[0].url;
}

function onReportButtonClick() {
  let website = inputWebsite.value;
  let message = inputMessage.value;
  console.log('Reporting:', website, 'Message:', message);

  // TODO: Call API with .website and .message parameters

  window.close(); // Close the popup.
}

/**
 * Execution starts here
 */

buttonReport.onclick = onReportButtonClick;

chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
  inputWebsite.value = tabs[0].url;
});
