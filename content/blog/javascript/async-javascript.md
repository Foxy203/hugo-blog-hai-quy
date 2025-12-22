---
title: "JavaScript: Lập trình bất đồng bộ với Promise"
date: 2025-12-15T08:00:00+07:00
categories: ["JavaScript"]
tags: ["JavaScript", "Asynchronous", "Promise", "bất đồng bộ"]
draft: false
---

Trong JavaScript, lập trình bất đồng bộ (asynchronous) rất phổ biến, đặc biệt khi thực hiện các tác vụ như gọi API hoặc xử lý sau một khoảng thời gian. `Promise` là một đối tượng dùng để xử lý kết quả bất đồng bộ. Ví dụ dưới đây tạo một Promise giả lập lấy dữ liệu sau 1 giây rồi in ra màn hình. Nhờ Promise, ta có thể sử dụng `.then` để xử lý kết quả sau khi tác vụ hoàn thành.

```javascript
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Dữ liệu đã được lấy");
    }, 1000);
  });
}

fetchData().then(data => {
  console.log(data);
});
```

Trong ví dụ, hàm fetchData trả về một Promise. Bên trong Promise, setTimeout giả lập độ trễ 1 giây trước khi gọi resolve với thông điệp "Dữ liệu đã được lấy". Khi Promise hoàn thành, hàm .then sẽ nhận được kết quả và chạy hàm callback, in ra thông báo đó. Đoạn mã trên minh họa cách sử dụng Promise để xử lý tác vụ bất đồng bộ trong JavaScript.
