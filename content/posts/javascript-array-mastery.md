---
title: "JavaScript Array Methods Mastery: Map, Filter, Reduce & Find"
date: 2025-12-28
description: "Tạm biệt vòng lặp for truyền thống. Làm chủ các method xử lý mảng hiện đại để code gọn gàng, functional hơn."
image: "/images/custom/js-array-methods.png"
categories: ["JavaScript", "Frontend"]
tags: ["Array Methods", "Functional Programming", "Best Practices"]
draft: false
---

**map(), filter(), reduce(), find() — Transform, Filter, Aggregate & Search**

*Trong JavaScript hiện đại, xử lý mảng không chỉ là `for` hay `forEach` — mà còn là những hàm “functional style” giúp code ngắn gọn, rõ mục đích và dễ bảo trì.* Đây là những kỹ năng **phỏng vấn frontend & fullstack cơ bản mà bạn nên nắm thật chắc**.

---

## 🧠 **1. Giới thiệu Array Methods**

JavaScript cung cấp một loạt các method dùng để xử lý array theo cách *declarative* (mô tả mục đích) thay vì *imperative* (làm sao thực hiện). Bốn method bạn nhất định phải biết là:

*   `map()` → biến đổi dữ liệu
*   `filter()` → chọn lọc theo điều kiện
*   `reduce()` → gộp thành giá trị tổng hợp
*   `find()` → tìm phần tử đầu tiên thỏa mãn điều kiện

**Ưu điểm:**
✔ Không làm thay đổi mảng ban đầu (Immutable).
✔ Code ngắn, rõ ý định.
✔ Dễ đọc & dễ test hơn so với vòng lặp thủ công.

---

## 🧩 **2. `map()` — Transform Array**

### 📌 Mục đích
`map()` tạo một **mảng mới** bằng cách áp dụng một hàm lên từng phần tử của mảng cũ. Nó **không thay đổi** mảng ban đầu mà trả về một mảng mới có độ dài bằng mảng gốc.

### 🧪 Ví dụ 1 — Bình phương từng số
```js
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(num => num * num);
console.log(squares); // [1, 4, 9, 16, 25]
```

### 🧪 Ví dụ 2 — Chuyển mảng đối tượng thành mảng giá trị
```js
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Carol" }
];

const ids = users.map(user => user.id);
console.log(ids); // [1, 2, 3]
```

---

## 🧠 **3. `filter()` — Select Subset**

### 📌 Mục đích
`filter()` tạo một mảng mới chứa **chỉ những phần tử thỏa điều kiện** trong hàm callback.

### 🧪 Ví dụ — Lọc số chẵn
```js
const numbers = [1, 2, 3, 4, 5];
const evens = numbers.filter(num => num % 2 === 0);
console.log(evens); // [2, 4]
```

👉 **Khi nào dùng?** Khi bạn cần tạo một **tập con** của mảng ban đầu.

---

## 🧠 **4. `reduce()` — Aggregate / Gộp Lại**

### 📌 Mục đích
`reduce()` dùng để **thu gọn mảng thành một giá trị duy nhất** bằng cách áp dụng một hàm lặp qua từng phần tử.

### 🧪 Ví dụ 1 — Tính tổng
```js
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 15
```
*   `acc` là *accumulator* (giá trị tích lũy).
*   Bắt đầu từ `0` → cộng dồn từng số.

### 🧪 Ví dụ 2 — Đếm số lần xuất hiện
```js
const pets = ['dog', 'cat', 'dog', 'rabbit'];
const count = pets.reduce((obj, pet) => {
  obj[pet] = (obj[pet] || 0) + 1;
  return obj;
}, {});

console.log(count);
// { dog: 2, cat: 1, rabbit: 1 }
```

---

## 🧠 **5. `find()` — Tìm phần tử đầu tiên**

### 📌 Mục đích
`find()` trả về phần tử **đầu tiên** thỏa điều kiện trong callback, nếu không tìm thấy trả về `undefined`.

### 🧪 Ví dụ — Tìm độ tuổi >= 18
```js
const ages = [12, 17, 21, 15];
const adult = ages.find(age => age >= 18);
console.log(adult); // 21
```

👉 Khác với `filter()`, `find()` chỉ trả về **một phần tử duy nhất**.

---

## 🔗 **6. Kết hợp các phương thức (Chaining)**

Bạn có thể *chain* (kết hợp) nhiều method để giải quyết các bài toán phức tạp.

```js
const numbers = [1,2,3,4,5];
const result = numbers
  .filter(x => x % 2 === 0)       // [2, 4] (Lọc số chẵn)
  .map(x => x * x)               // [4, 16] (Bình phương)
  .reduce((acc, x) => acc + x, 0); // 20      (Tính tổng)

console.log(result); // 20
```

---

## 📊 **7. So sánh với vòng lặp truyền thống (`for`)**

| Approach | Số dòng | Dễ đọc | Biến đổi dữ liệu | Scope an toàn |
| :--- | :--- | :--- | :--- | :--- |
| `for` loop | 📉 thấp | ❌ thấp | ❌ thường lằng nhằng | ❌ |
| Array Methods | 📈 cao | ✅ cao | ✅ rõ ràng | ✅ |

---

## ⭐ **8. Best Practices**

1.  Dùng **Arrow Function** để code ngắn gọn.
2.  Không **mutate** (thay đổi) mảng gốc.
3.  Chỉ dùng `reduce()` khi cần thật sự kết quả duy nhất (nếu mapping thì dùng `map`).
4.  Viết rõ ràng mục tiêu logic (Declarative).

---

*Biết sử dụng thành thạo map/filter/reduce chính là dấu hiệu của một JS Developer có tư duy hiện đại.*
