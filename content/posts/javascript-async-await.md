---
title: "JavaScript Bất đồng bộ: Từ Callback Hell đến Async/Await"
date: 2025-01-02T09:00:00+07:00
draft: false
categories: ["JavaScript"]
tags: ["Async", "ES6", "Frontend"]
image: "/images/posts/AsyncAwait.jpg"
description: "Hiểu bản chất của Event Loop, chôn vùi Callback Hell và viết code bất đồng bộ đẹp như thơ với Async/Await."
---

JavaScript là ngôn ngữ **đơn luồng (single-threaded)**. Điều này có nghĩa là nó chỉ có thể làm một việc tại một thời điểm. Vậy làm thế nào để nó xử lý hàng ngàn request mạng, đọc file, và tương tác với người dùng cùng lúc mà không bị "đơ"?

Câu trả lời nằm ở **Asynchronous Programming** (Lập trình bất đồng bộ).

![JS Async](/images/posts/js-async.png)

## 1. Vấn đề: Callback Hell 😈

Ngày xửa ngày xưa, chúng ta xử lý bất đồng bộ bằng callback. Và khi các tác vụ phụ thuộc lẫn nhau, ta có thảm họa này:

```javascript
getData(function(a) {
    getMoreData(a, function(b) {
        getMoreData(b, function(c) {
            getMoreData(c, function(d) {
                getMoreData(d, function(e) {
                    // ... Chào mừng đến địa ngục!
                });
            });
        });
    });
});
```

Code này khó đọc, khó debug và cực khó bảo trì.

## 2. Vị cứu tinh: Promise 🤝

ES6 giới thiệu `Promise` - một đối tượng đại diện cho một giá trị trong tương lai (có thể thành công hoặc thất bại). Code trở nên phẳng hơn:

```javascript
getData()
    .then(a => getMoreData(a))
    .then(b => getMoreData(b))
    .then(c => getMoreData(c))
    .catch(error => console.error(error));
```

Tuyệt hơn nhiều! Nhưng vẫn còn khá nhiều `.then()` dây dợ.

## 3. Chân ái: Async/Await ✨

ES2017 mang đến `async/await`, cú pháp *syntactic sugar* trên nền Promise. Nó cho phép bạn viết code bất đồng bộ trông giống hệt code đồng bộ.

```javascript
async function processData() {
    try {
        const a = await getData();
        const b = await getMoreData(a);
        const c = await getMoreData(b);
        console.log(c);
    } catch (error) {
        console.error("Lỗi rồi:", error);
    }
}
```

### Tại sao Async/Await lại "bá đạo"?
1.  **Dễ đọc:** Code chạy từ trên xuống dưới, logic rõ ràng.
2.  **Error Handling:** Sử dụng `try/catch` quen thuộc thay vì `.catch()`.
3.  **Debug:** Dễ đặt breakpoint hơn so với trong callback chain.

### Lưu ý quan trọng
`await` chỉ có thể dùng trong hàm có từ khóa `async`. Và hãy nhớ, `async` function luôn trả về một Promise!

### Ví dụ thực tế: Fetch Data từ API

```javascript
async function fetchUser(userId) {
    try {
        const response = await fetch(`https://api.example.com/users/${userId}`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const user = await response.json();
        return user;
    } catch (e) {
        console.log("Có lỗi khi lấy data user:", e);
    }
}
```

Thành thạo Async/Await là kỹ năng bắt buộc của mọi JS developer hiện đại. Hãy tạm biệt callback hell và viết code sạch hơn ngay hôm nay!


