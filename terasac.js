<script src='https://cdn.rawgit.com/naptha/tesseract.js/1.0.10/dist/tesseract.js'></script>


Tesseract.recognize(
  'image.png', // Đường dẫn đến hình ảnh của bạn
  'eng', // Ngôn ngữ của văn bản trong hình ảnh
  { logger: m => console.log(m) } // Hàm này sẽ được gọi trong quá trình nhận dạng
).then(({ data: { text } }) => {
  console.log(text); 
})

// import Tesseract from 'tesseract.js';

function recognizeTextFromImage(imageUrl) {
  return Tesseract.recognize(
      imageUrl,
      'eng',
      { logger: m => console.log(m) }
  ).then(({ data: { text } }) => {
      return text;
  });
}

// Trong file1.js
export const recognizeTextFromImage = (imageUrl) => {
  // Mã của hàm ở trên
};

// Trong file2.js
import { recognizeTextFromImage } from './file1.js';

recognizeTextFromImage('http://example.com/image.png').then(text => {
  console.log(text); // In văn bản đã nhận dạng được ra console
});
