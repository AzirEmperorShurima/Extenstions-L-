<<<<<<< HEAD


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
=======
chrome.runtime.onMessage.addListener((request, sender) => {
    if (request.message === 'buttonClicked') {
        // chrome.action.onClicked.addListener((tab) => {
        chrome.scripting.executeScript({
            target: { tabId: request.tabId }, function: () => {
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
                        chrome.notifications.create({
                            type: 'basic',
                            iconUrl: 'images/icon128.png', // Đường dẫn đến icon của bạn
                            title: 'Lỗi',
                            message: 'Không tìm thấy phần tử với ID: ' + (i <= 47 ? ide : id1)
                        });
                    }
                    if (i === 52) {
                        chrome.notifications.create({
                            type: 'basic',
                            iconUrl: 'images/icon128.png', // Đường dẫn đến icon của bạn
                            title: 'Thông báo',
                            message: 'Đã hoàn thành!'
                        });
                    }
                }
            },

        });
        // }
        // );
    }
});
// chrome.runtime.onMessage.addListener((request, sender) => {
//     if (request.message === 'buttonClicked') {
//         chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//             let tab = tabs[0]; // tab hiện tại
//             if (tab) { // Kiểm tra xem tab có tồn tại không
//                 chrome.scripting.executeScript({
//                     target: { tabId: tab.id }, function: () => {
//                         chrome.notifications.create({
//                             type: 'basic',
//                             iconUrl: 'images/icon128.png', // Đường dẫn đến icon của bạn
//                             title: 'Lỗi',
//                             message: 'Không tìm thấy phần tử với ID'
//                         });
//                         for (let i = 0; i <= 52; i++) {
//                             let id = 'R' + i + 'A';
//                             let id1 = 'R' + i;
//                             let element;
//                             if (i <= 47) {
//                                 element = document.getElementById(id);
//                                 if (element && element.type === 'radio') {
//                                     element.click();
//                                 }
//                             } else {
//                                 element = document.getElementById(id1);
//                                 if (element && element.tagName.toLowerCase() === 'textarea') {
//                                     element.value = 'không có ý kiến gì thêm';
//                                 }
//                             }
//                             if (!element) {
//                                 chrome.notifications.create({
//                                     type: 'basic',
//                                     iconUrl: 'images/icon128.png', // Đường dẫn đến icon của bạn
//                                     title: 'Lỗi',
//                                     message: 'Không tìm thấy phần tử với ID: ' + (i <= 47 ? id : id1)
//                                 });
//                             }
//                             if (i === 52) {
//                                 chrome.notifications.create({
//                                     type: 'basic',
//                                     iconUrl: 'images/icon128.png', // Đường dẫn đến icon của bạn
//                                     title: 'Thông báo',
//                                     message: 'Đã hoàn thành!'
//                                 });
//                             }
//                         }
//                     },
//                 });
//             }
//         });
//     }
// });

>>>>>>> b01cda4f08df921019b432dd5366a3930168d45f
