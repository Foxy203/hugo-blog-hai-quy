---
title: "Java Core & JVM: Bộ Nhớ, String Pool và Immutable String"
date: 2025-12-28
description: "Giải mã chi tiết về JVM, sự khác biệt giữa Stack vs Heap, bí mật String Pool và tại sao String lại Immutable trong Java."
image: "/images/custom/java-jvm-architecture.jpg"
categories: ["Java", "Backend"]
tags: ["Java Core", "JVM", "Memory Management", "Performance"]
draft: false
---

*Giải thích chi tiết về JVM, Stack vs Heap, String Pool và lý do `String` là immutable*

---

## 🧠 1. Giới thiệu

Java là một ngôn ngữ lập trình hướng đối tượng nổi tiếng với triết lý “*viết một lần, chạy mọi nơi*” (Write Once, Run Anywhere). Điều này được thực hiện nhờ vào **Java Virtual Machine – JVM**: một lớp trừu tượng giữa mã Java và hệ điều hành thực thi.

Không chỉ hiểu cú pháp, một developer chuyên sâu cần biết **JVM hoạt động như thế nào**, **bộ nhớ được tổ chức ra sao**, và **tại sao lại có String Pool & immutable String**. Những hiểu biết này không chỉ giúp **tối ưu hiệu năng** mà còn **tránh bug liên quan đến bộ nhớ hoặc logic xử lý chuỗi**.

---

## 🧠 2. JVM là gì?

JVM (Java Virtual Machine) là môi trường chạy bytecode Java. Sau khi bạn biên dịch `.java` thành `.class`, JVM:

*   Nạp & xác thực bytecode.
*   Quản lý bộ nhớ (Heap & Stack).
*   Thực thi mã.
*   Tự động *Garbage Collect* các object không còn dùng.

JVM làm cho Java trở nên **cross-platform**: bytecode không phụ thuộc OS cụ thể.

---

## 🧠 3. Bộ nhớ JVM: Stack vs Heap

### ☁️ Heap
Heap là nơi lưu trữ **object** được tạo bằng `new` hoặc bởi JVM.
*   **Chứa:** đối tượng, mảng, String Pool.
*   Quản lý bởi **Garbage Collector**.
*   Là vùng chia sẻ giữa các thread.

### 📦 Stack
Stack là nơi lưu trữ:
*   Biến cục bộ.
*   Tham số method.
*   Frame của mỗi method gọi.

Stack hoạt động theo cơ chế **LIFO** (Last In First Out) và được *thu dọn ngay khi method kết thúc*. Nó chỉ chứa dữ liệu có thời gian tồn tại ngắn hạn.

🔥 **Điểm khác biệt:**
*   **Heap:** chứa object, lâu dài, chậm hơn.
*   **Stack:** chứa biến cục bộ, nhanh hơn, ngắn hạn.

> Stack & Heap là hai phần khác nhau trong bộ nhớ JVM. Object hoặc literal **không nằm trên stack** — tất cả object đều nằm trong heap, stack chỉ chứa **tham chiếu và biến nguyên thuần**.

---

## 🧠 4. String trong Java

### 📌 Thông thường
```java
String s = "Hello";
```
Java sẽ **kiểm tra String Pool** trước khi tạo object mới → nếu `"Hello"` đã tồn tại trong pool, JVM sẽ trả về reference tới literal đó. Nếu chưa, JVM thêm nó vào pool.

**Lợi ích:**
✔ Tối ưu bộ nhớ — tránh tạo nhiều object trùng giá trị.
✔ So sánh các literal bằng `==` là nhanh vì cùng reference.

### 📌 Khi dùng `new`
```java
String t = new String("Hello");
```
Điều này **luôn tạo object mới trên heap** dù giá trị giống với literal trong pool. Bạn cũng có thể ép JVM **intern** chuỗi đó để đưa vào pool bằng `intern()`.

---

## 🧠 5. String Pool là gì?

**String Pool** (hay String Constant Pool) là một vùng đặc biệt trong heap để **lưu trữ các chuỗi literal**. Khi JVM gặp literal, nó sẽ:
1.  Kiểm tra trong pool.
2.  Nếu đã tồn tại → dùng lại reference.
3.  Nếu chưa → tạo mới và thêm vào pool.

**Ví dụ:**
```java
String a = "Java";
String b = "Java";
```
Hai biến `a` và `b` sẽ trỏ vào cùng một object trong pool.

---

## 🧠 6. Tại sao String lại **immutable**?

Java thiết kế `String` là **immutable (bất biến)** — một chuỗi đã được tạo thì *không thể thay đổi nội dung*.

Ví dụ:
```java
String s = "Hello";
s = s + " World";
```
Lệnh trên không sửa `"Hello"` — mà tạo một object mới `"Hello World"` và gán lại cho `s`.

### 🧩 Lợi ích của việc Immutable:
1.  **Tối ưu bộ nhớ với String Pool:** JVM reuse an toàn các literal vì chúng không thể thay đổi sau khi tạo.
2.  **Thread-safe tự nhiên:** An toàn khi chia sẻ giữa nhiều thread mà không cần synchronization.
3.  **Bảo mật:** Tránh rủi ro dữ liệu nhạy cảm (URL, token) bị thay đổi ngẫu nhiên.

---

## 🧠 7. Ví dụ thực tế minh họa

```java
public class StringPoolExample {
   public static void main(String[] args) {
       String s1 = "Java";
       String s2 = "Java";

       System.out.println(s1 == s2); // true (Cùng tham chiếu Pool)

       String s3 = new String("Java");
       System.out.println(s1 == s3); // false (s3 ở Heap, s1 ở Pool)

       String s4 = s3.intern();
       System.out.println(s1 == s4); // true (s4 trỏ về Pool)
   }
}
```

---

## 🧠 8. Khi nào concatenation tạo object mới?

Nếu bạn sử dụng các biến thay vì literal trong phép nối, JVM sẽ tạo một object mới trong heap:

```java
String a = "Hello";
String b = "World";
String c = a + b; // Tạo mới ở Heap
```

Ở đây, vì toán hạng không phải literal thuần tuý, JVM sẽ tạo object mới chứ không reuse pool.

---

## 🧠 9. Tối ưu String

Nếu bạn cần xây dựng chuỗi phức tạp bằng nhiều vòng lặp hoặc concat, dùng `StringBuilder`/`StringBuffer` sẽ hiệu quả hơn vì `String` immutable tạo nhiều object gây overhead GC.

---

## 🧠 10. Tổng kết

✔ JVM quản lý bộ nhớ thông minh — tách rõ **Stack & Heap**.
✔ **String Pool** tối ưu bộ nhớ bằng cách reuse literal.
✔ **String Immutable** giúp an toàn, thread-safe và dễ tối ưu.
✔ Phải hiểu rõ cách JVM lưu trữ để tránh lỗi logic và memory inefficiency.

---

*Hiểu sâu về JVM Memory Model là bước đệm quan trọng để trở thành Senior Java Developer.*
