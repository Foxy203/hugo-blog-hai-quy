---
title: "Advanced Exception Handling Patterns: Resilience & Reliability"
date: 2025-12-28
description: "Nâng tầm xử lý lỗi với các pattern nâng cao: Retry, Fallback, Exception Chaining và Global Error Handling trong hệ thống phân tán."
image: "/images/custom/java-advanced-exceptions.png"
categories: ["Java", "Architecture"]
tags: ["Exception Patterns", "Resilience", "Microservices", "Best Practices"]
draft: false
---

*Thiết kế xử lý lỗi bền vững: logging, retry, fallback, propagation & patterns nâng cao*

---

## 🧠 1. Tại sao phải thiết kế Exception Handling chuyên nghiệp?

Exception không chỉ là “bắt và in ra console”. Trong ứng dụng thực tế — đặc biệt ứng dụng backend, distributed systems hoặc microservices — bạn cần:

✔ **Log có ngữ cảnh đầy đủ** để debug nhanh.
✔ **Không nuốt lỗi vô nghĩa**.
✔ **Retry logic** cho lỗi tạm thời (transient failure).
✔ **Fallback** để giữ hệ thống hoạt động với degraded behavior.
✔ **Exception chaining** để giữ nguyên nhân gốc của lỗi.

---

## 🧠 2. Logging & Propagation

### 📌 2.1 Logging có ngữ cảnh
Khi bạn bắt exception, *đừng chỉ print stack trace*. Hãy ghi log đầy đủ **message + context** (userId, inputs...).

```java
try {
    processOrder(orderId);
} catch (OrderProcessingException ex) {
    logger.error("Order failed for user={}, orderId={}", userId, orderId, ex);
}
```

### 📌 2.2 Rethrowing & Exception Chaining
Đôi khi method bạn gọi không thể xử lý lỗi đó — tốt hơn là **chuyển lên caller**.
**Exception chaining** là pattern bọc exception gốc trong một exception mới để không mất thông tin gốc.

```java
catch (SQLException ex) {
    throw new DataAccessException("Failed to access DB", ex);
}
```

---

## 🧠 3. Retry Pattern — Tái thử lỗi tạm thời

Trong các hệ thống gọi API/DB, **lỗi tạm thời (transient)** thường xảy ra (timeout, network blink). Thay vì fail ngay, hãy retry:

```java
int attempts = 0;
while (attempts < MAX_RETRY) {
    try {
        result = externalService.call();
        break;
    } catch (TransientException ex) {
        attempts++;
        Thread.sleep(backoffDelay);
    }
}
```
🚀 **Tip:** Dùng thư viện như **Resilience4j** để hỗ trợ Exponential Backoff chuẩn.

---

## 🧠 4. Fallback Pattern — Giảm thiểu sự cố

Khi retry vẫn thất bại, hãy dùng **fallback** — cung cấp kết quả mặc định để giữ hệ thống *alive*:

```java
String result;
try {
    result = externalService.call();
} catch (ExternalServiceException ex) {
    result = cache.getDefaultValue(); // Fallback về Cache
}
```

---

## 🧠 5. Tránh Anti-patterns

❌ **Nuốt exception:** `catch (Exception e) {}` là điều cấm kỵ.
❌ **Catch quá chung:** Đừng catch `Throwable` hoặc `Error` (như OOM).
❌ **Log rồi Rethrow:** Chỉ nên chọn 1 trong 2, tránh log trùng lắp gây nhiễu.

---

## 🧠 6. Global Exception Handling

Trong Spring Boot, luôn dùng `@ControllerAdvice` để xử lý lỗi tập trung:

```java
@ControllerAdvice
public class GlobalExceptionHandler {
    @ExceptionHandler(Exception.class)
    public ResponseEntity<String> handleAll(Exception ex) {
        return new ResponseEntity<>(ex.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
```

---

## 📌 Kết luận

Thiết kế patterns tốt giúp:
✅ Ứng dụng **resilient** (bền vững) hơn trước lỗi.
✅ **Logs** dễ debug chính xác vấn đề.
✅ **UX** tốt hơn nhờ Fallback.
