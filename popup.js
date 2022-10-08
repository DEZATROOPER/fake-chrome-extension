let inputUrl = document.getElementById('url');
let inputMessage = document.getElementById('message');
let buttonReport = document.getElementById('btnReport');

async function getCurrentTabUrl2() {
  const tabs = await chrome.tabs.query({ active: true });
  return tabs[0].url;
}

async function onReportButtonClick() {
  let url = inputUrl.value;
  let message = inputMessage.value;

  try {
    await fetch(
      'https://dezatrooper-default-rtdb.europe-west1.firebasedatabase.app/urls.json',
      {
        method: 'POST',
        body: JSON.stringify({
          url,
          message,
        }),
      }
    );
  } catch (error) {
    alert('Error occurs:' + error.message);
  }

  window.close(); // Close the popup.
}

/**
 * Execution starts here
 */

buttonReport.onclick = onReportButtonClick;

chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
  inputUrl.value = tabs[0].url;
});
