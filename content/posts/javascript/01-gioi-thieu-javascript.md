---
title: "Bài 1: Giới thiệu JavaScript - Ngôn ngữ của Web"
date: 2025-01-01  
categories: ["javascript"]
tags: ["javascript-basics", "beginner", "web-development"]
featured: true
image: "https://via.placeholder.com/800x400/F7DF1E/000000?text=JavaScript"
---

# Giới thiệu JavaScript

JavaScript là ngôn ngữ lập trình phổ biến nhất thế giới, được sử dụng để tạo ra các trang web tương tác và ứng dụng động.

## Tại sao học JavaScript?

1. **Ngôn ngữ của Web** - Chạy trên mọi trình duyệt
2. **Full-stack** - Frontend và Backend (Node.js)
3. **Cộng đồng lớn** - Nhiều thư viện và framework
4. **Dễ học** - Cú pháp đơn giản, linh hoạt
5. **Job nhiều** - Nhu cầu tuyển dụng cao

## Môi trường phát triển

### 1. Trình duyệt (Browser)
- Chrome DevTools (F12)
- Firefox Developer Tools
- Edge DevTools

### 2. Code Editor
- Visual Studio Code (khuyên dùng)
- Sublime Text
- Atom

### 3. Node.js (optional)
```bash
# Download tại: https://nodejs.org/
node --version
npm --version
```

## Hello World

### Cách 1: Trong HTML
```html
<!DOCTYPE html>
<html>
<head>
    <title>Hello JS</title>
</head>
<body>
    <h1>JavaScript Demo</h1>
    
    <script>
        console.log("Hello, World!");
        alert("Chào mừng đến với JavaScript!");
    </script>
</body>
</html>
```

### Cách 2: File riêng
```javascript
// script.js
console.log("Hello from external file!");

// Gọi trong HTML
// <script src="script.js"></script>
```

## Console Methods

```javascript
console.log("Thông tin thường");
console.warn("Cảnh báo");
console.error("Lỗi");
console.table({name: "Quý", age: 21});
```

## Comments

```javascript
// Comment một dòng

/*
  Comment
  nhiều dòng
*/

/**
 * JSDoc comment
 * @param {string} name
 */
```

## Kết luận

JavaScript là công cụ mạnh mẽ để tạo ra các ứng dụng web hiện đại. Trong bài tiếp theo, chúng ta sẽ học về biến và kiểu dữ liệu.

**Bài tiếp theo**: [Bài 2: Biến và kiểu dữ liệu trong JavaScript](/posts/javascript-02-variables/)
