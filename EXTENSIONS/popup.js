
// document.getElementById('actionButton').addEventListener('click', () => {
//     chrome.runtime.sendMessage({ message: 'buttonClicked' });
// });


document.getElementById('actionButton').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.runtime.sendMessage({ message: 'buttonClicked', tabId: tabs[0].id });
    });
});

// cách 2
// Trong file popup.js
// document.getElementById('yourButtonId').addEventListener('click', function() {
//     chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//         chrome.runtime.sendMessage({message: 'buttonClicked', tabId: tabs[0].id});
//     });
// });
