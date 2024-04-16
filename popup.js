<<<<<<< HEAD

// import cv from "@techstark/opencv-js";
//import * as Tesseract from 'tesseract.js';


document.getElementById('actionButton').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.runtime.sendMessage({ message: 'buttonClicked', tabId: tabs[0].id });
    });
});


// document.addEventListener('DOMContentLoaded', () => {
document.getElementById('checkCAPCHA').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            function: functionToExecute
        });
    });
});
// })



importScripts("Tesseract.js")

functionToExecute = async () => {
    confirm('Executing')
    let image = document.querySelector('#Container img');
    console.log(image);
    await Tesseract.recognize(image, 'eng', { logger: m => console.log(m) }
    ).then(({ data: { text } }) => {
        console.log(text); // In kết quả ra console
        confirm(text)
    });
}

// const gray_image = async (pathIMG) => { // chuyển ảnh thành đen trắng
//     const img = cv.imread(pathIMG)
//     let gray = new cv.Mat();
//     cv.cvtColor(img, gray, cv.COLOR_RGBA2GRAY, 0)
// }

// const Xu_Ly_Nhieu_Anh = (image) => {
//     let dst = new cv.Mat();
//     let h = 10; //tham số quyết định độ mạnh của bộ lọc
//     cv.fastNlMeansDenoisingColored(image, dst, h, h, 7, 21);
// }
// const lamNetANh = (image) => {
//     let kernel = cv.matFromArray(3, 3, cv.CV_32F, [-1, -1, -1, -1, 9, -1, -1, -1, -1]);
//     let dst = new cv.Mat();
//     cv.filter2D(image, dst, -1, kernel);
// }

// const statss = () => {
//     let img = cv.imread('path_to_your_image', 0);
//     let _, blackAndWhite = cv.threshold(img, 127, 255, cv.THRESH_BINARY_INV);

//     let nlabels, labels, stats, centroids = cv.connectedComponentsWithStats(blackAndWhite, None, None, None, 8, cv.CV_32S);
//     let sizes = stats.slice(1).map(row => row[row.length - 1]);
//     //get CC_STAT_AREA component
//     let img2 = np.zeros((labels.shape), np.uint8);

//     for (let i = 0; i < nlabels - 1; i++) {
//         if (sizes[i] >= 50) {   //filter small dotted regions
//             img2[labels == i + 1] = 255;
//         }
//     }

//     let res = cv.bitwise_not(img2);
//     cv.imwrite('res.png', res);

// }

// const medianFilter = (img) => {
//     let img = cv.imread(img);
//     // Áp dụng bộ lọc trung vị
//     let median = new cv.Mat();
//     let ksize = 5; // Kích thước của kernel, thường là số lẻ
//     cv.medianBlur(img, median, ksize); D
// }
// const thiif = (image) => {
//     let img = cv.imread(image);

//     // Chuyển đổi ảnh sang ảnh xám
//     let gray = new cv.Mat();
//     cv.cvtColor(img, gray, cv.COLOR_RGBA2GRAY, 0);

//     // Áp dụng ngưỡng để tạo ảnh nhị phân
//     let binary = new cv.Mat();
//     cv.threshold(gray, binary, 127, 255, cv.THRESH_BINARY);

//     // Tạo một phần tử cấu trúc cho phép ăn mòn và giãn nở
//     let M = cv.Mat.ones(5, 5, cv.CV_8U);

//     // Thực hiện ăn mòn
//     let eroded = new cv.Mat();
//     cv.erode(binary, eroded, M);

//     // Thực hiện giãn nở
//     let dilated = new cv.Mat();
//     cv.dilate(eroded, dilated, M);
// }
=======

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
>>>>>>> b01cda4f08df921019b432dd5366a3930168d45f
