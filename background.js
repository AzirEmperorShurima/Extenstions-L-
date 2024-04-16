

chrome.runtime.onMessage.addListener((request, sender) => {
    if (request.message === 'buttonClicked') {
        chrome.scripting.executeScript({
            target: { tabId: request.tabId },
            function: () => {
                for (let i = 0; i <= 52; i++) {
                    let ide = 'R' + i + 'A';
                    let id1 = 'R' + i;
                    let element;

                    if (i <= 47) {
                        element = document.getElementById(ide);
                        if (element && element.type === 'radio') {
                            element.click();
                        }

                    } else {
                        element = document.getElementById(id1);
                        if (element && element.tagName.toLowerCase() === 'textarea') {
                            element.value = 'không có ý kiến gì thêm';
                        }
                    }

                    if (!element) {
                        chrome.runtime.sendMessage({
                            type: 'createNotification', options: {
                                type: 'basic',
                                iconUrl: 'images/icon128.png',
                                title: 'Lỗi',
                                message: 'Không tìm thấy phần tử với ID: ' + (i <= 47 ? ide : id1)
                            }
                        });
                    }

                    if (i === 52) {
                        chrome.runtime.sendMessage({
                            type: 'createNotification', options: {
                                type: 'basic',
                                iconUrl: 'images/icon128.png',
                                title: 'Thông báo',
                                message: 'Đã hoàn thành!'
                            }
                        });
                    }
                }
            },
        });
    }
});
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === 'createNotification') {
        chrome.notifications.create(message.options);
    }
});
