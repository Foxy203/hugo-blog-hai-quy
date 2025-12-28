---
title: "Exception Handling trong Java: Checked, Unchecked & Best Practices"
date: 2025-12-28
description: "Làm chủ Exception Handling để viết code an toàn, dễ bảo trì. Phân biệt Checked vs Unchecked, Custom Exception và những điều cần tránh (Anti-patterns)."
image: "/images/posts/ExceptionHandling.jpg"
categories: ["Java", "Best Practices"]
tags: ["Exception Handling", "Java Core", "Clean Code"]
draft: false
---

*Phân biệt Checked vs Unchecked, khi nào bắt, custom exception và best practice*

---

## 🧠 1. Giới thiệu

Exception (ngoại lệ) là một **tình huống bất thường** xảy ra trong quá trình thực thi chương trình, làm gián đoạn luồng bình thường của ứng dụng. Java cung cấp cơ chế **Exception Handling** giúp bạn xử lý các tình huống này một cách rõ ràng, an toàn và tránh crash chương trình.

---

## 📌 2. Kiến trúc Exception trong Java

Trong Java, tất cả exception đều kế thừa từ lớp `Throwable`. `Throwable` có hai nhánh chính:
*   **Exception**: đại diện cho các tình huống có thể xử lý được (Logic, I/O...).
*   **Error**: các lỗi nghiêm trọng, thường không thể xử lý (ví dụ: `OutOfMemoryError`).

> Phần lớn chúng ta sẽ chỉ quan tâm tới **Exception** vì đây là thứ xảy ra trong lập trình thường ngày. Error thường là những điều ngoài tầm kiểm soát như hết bộ nhớ JVM.

---

## 🧠 3. Checked vs Unchecked Exception

### 🟦 Checked Exception
*   Được kiểm tra **tại thời điểm compile-time**.
*   Phải **catch** hoặc **khai báo (`throws`)**, nếu không code sẽ lỗi compile.
*   Ví dụ: `IOException`, `SQLException`.
*   **Mục đích**: Buộc developer phải nghĩ tới cách xử lý khi tương tác với hệ thống bên ngoài.

### 🟥 Unchecked Exception
*   Không được Java kiểm tra ở compile-time.
*   Thường do **lỗi logic** (bug) của lập trình viên.
*   Kế thừa `RuntimeException`.
*   Ví dụ: `NullPointerException`, `ArithmeticException`.
*   **Mục đích**: Không ép bắt lỗi, vì đây là lỗi cần fix trong code chứ không phải tình huống phục hồi.

---

## 🧠 4. Cách xử lý Exception

### ✔ try-catch cơ bản
```java
try {
    int value = 10 / 0;
} catch (ArithmeticException e) {
    System.out.println("Cannot divide by zero!");
}
```

### ✔ try-with-resources (Tự động đóng file)
Dành cho tài nguyên như `FileReader`, `InputStream` cần đóng sau khi dùng:
```java
try (FileReader fr = new FileReader("data.txt")) {
    // đọc file
} catch (IOException e) {
    e.printStackTrace();
}
```

### ✔ throw & throws
*   `throw`: Ném ra 1 exception cụ thể.
*   `throws`: Khai báo method có thể ném exception (đẩy trách nhiệm cho caller).

```java
void readFile() throws IOException { ... }
```

---

## 🧠 5. Custom Exception

Bạn có thể tự định nghĩa exception để phản ánh lỗi nghiệp vụ rõ ràng hơn:

```java
public class InvalidUserException extends RuntimeException {
    public InvalidUserException(String msg) {
        super(msg);
    }
}
```
Custom exception giúp code rõ ràng hơn: *không chỉ biết có lỗi, mà còn biết là lỗi nghiệp vụ gì*.

---

## 🧠 6. Best Practices - Nên & Không Nên

✔ **Không swallow exception:** Tránh `catch (Exception e) {}` rỗng. Luôn log hoặc xử lý.
✔ **Chỉ catch những gì xử lý được:** Nếu không biết làm gì với lỗi đó, hãy để nó throw lên trên.
✔ **Dùng Unchecked cho lỗi logic:** Đừng ép caller catch những lỗi mà họ không thể làm gì để sửa (như null pointer).
✔ **Log đầy đủ Stack Trace:** Để dễ debug sau này.

---

## 📌 7. Kết luận

Exception handling đúng đắn giúp:
✅ Tăng độ tin cậy của ứng dụng.
✅ Dễ dàng debug và bảo trì.
✅ Thể hiện tư duy code cẩn thận của developer.

*Hãy nhớ: Exception không phải để giấu bug, mà là để xử lý tình huống bất thường một cách duyên dáng.*
