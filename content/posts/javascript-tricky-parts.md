---
title: "JavaScript: The Tricky Parts - Scope, Hoisting & Closure"
date: 2025-12-28
description: "Giải mã những khái niệm dễ gây nhầm lẫn nhất trong JavaScript: var vs let/const, cơ chế Hoisting và Closure - Những câu hỏi phỏng vấn kinh điển."
image: "/images/posts/es6javascript.jpg"
categories: ["JavaScript", "Frontend"]
tags: ["JavaScript Core", "Interview Questions", "ES6"]
draft: false
---

*Giải thích `var`, `let`, `const`, Hoisting, Closure — những câu hỏi phỏng vấn Frontend kinh điển*

## 🧠 1. Giới thiệu

JavaScript là ngôn ngữ chủ đạo cho web hiện đại. Dù là Frontend hay Fullstack, bạn *phải* nắm rõ những khái niệm cơ bản nhưng dễ gây nhầm lẫn sau đây — vì chúng liên quan tới **scope**, **runtime behavior** và cách engine JS xử lý mã.

---

## 🔹 2. `var`, `let`, `const` — Sự khác biệt cơ bản

### 📌 2.1 Phạm vi (Scope)

*   **`var`**:
    *   Là *function-scoped*: chỉ giới hạn trong hàm chứa nó, không phải block `{}`.
    *   Có thể bị truy cập *ngoài block* trong cùng function → dễ gây bug.

*   **`let` và `const`**:
    *   Đều có *block scope* — chỉ tồn tại trong `{}` nơi khai báo.
    *   Đây là cách hiện đại và *an toàn hơn* vì tránh **leak biến** ngoài block.

**Ví dụ minh họa:**

```js
if (true) {
  var a = "hello";
  let b = "hi";
  const c = "hey";
}
console.log(a); // "hello"
console.log(b); // ReferenceError
console.log(c); // ReferenceError
```

👉 **Kết luận:** Không nên dùng `var` nữa trong code hiện đại — hãy ưu tiên `const`, nếu biến cần *thay đổi* thì dùng `let`.

---

### 📌 2.2 Hoisting — Hoạt động như thế nào?

**Hoisting** là cơ chế JavaScript *di chuyển các khai báo* (variable & function) lên đầu phạm vi của nó trước khi thực thi code. Nhưng **điều này không giống nhau** cho từng kiểu khai báo.

*   Với **`var`**:
    *   Biến được hoisted và **được khởi tạo với `undefined`**, nên bạn có thể *access* trước khi khai báo (trả về `undefined`).
*   Với **`let` / `const`**:
    *   Biến bị hoisted nhưng không khởi tạo → truy cập trước khi khai báo sẽ **ReferenceError** vì bị rơi vào *Temporal Dead Zone (TDZ)*.

**Ví dụ:**

```js
console.log(x); // undefined (var)
var x = 3;

console.log(y); // ReferenceError (let/const)
let y = 5;

console.log(z); // ReferenceError (const)
const z = 10;
```

👉 Nhờ **TDZ**, JavaScript ngăn lỗi truy cập biến trước khi khai báo — điều này giúp mã an toàn và dễ debug hơn.

---

## 🔹 3. Closure — Ăn sâu fundamental

Closure là một trong những khái niệm *khó nhưng cực kỳ quan trọng* trong JavaScript — và đây cũng là câu hỏi phỏng vấn rất phổ biến.

### 📌 Closure là gì?

> **Closure** là khi hàm *inner* có thể truy cập biến từ hàm *outer* ngay cả khi outer đã kết thúc thực thi.

Nghĩa là: JavaScript giữ lại *scope chain* cho inner function, không xóa biến ngoài ngay khi outer function return.

### 📌 Ví dụ đơn giản

```js
function createCounter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
```

Trong ví dụ trên:
*   Hàm `createCounter` trả về một function.
*   Function này **vẫn nhớ được biến `count`** dù `createCounter()` đã kết thúc.
*   Closure giữ *state* — đối với JavaScript, đây là foundation cho *modules*, *encapsulation* và *private data*.

---

## 🧠 4. Tại sao closure hữu ích?

*   **Giữ trạng thái qua các lần gọi**
*   **Khai báo biến private** (thay vì biến global)
*   **Callback, asynchronous patterns** như event handlers sẽ thường dùng closure.

👉 Closure là một trong những khái niệm làm nên sự “năng động” của JS.

---

## 🧪 5. Kết luận & Best Practices

| Concept | Nên/Không nên |
| :--- | :--- |
| `var` | ❌ Tránh dùng |
| `let` | ✅ Khi cần thay đổi giá trị |
| `const` | ✅ Khi giá trị không đổi |
| Hoisting | ⚠ Biết để tránh lỗi truy cập biến |
| Closure | ✅ Nắm vững cho phỏng vấn và async |

---

## 📌 Tóm tắt nhanh

*   **Scope** xác định nơi biến tồn tại trong chương trình. (`var`: function, `let/const`: block)
*   **Hoisting** di chuyển khai báo lên đầu scope; `var` khác với `let/const` ở cách khởi tạo.
*   **Closure** cho phép function truy cập *environment* nơi nó được creation.

---

*Tham khảo các tài liệu chuyên sâu để nắm vững hơn về các concept này trước khi đi phỏng vấn!*
