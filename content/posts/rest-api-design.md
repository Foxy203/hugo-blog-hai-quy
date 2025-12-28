---
title: "RESTful API là gì? Tư duy thiết kế API chuẩn cho Backend Developer"
date: 2025-01-05T14:20:00+07:00
draft: false
categories: ["Networking"]
tags: ["API", "Backend", "Web Service"]
image: "/images/custom/rest-api-design.png"
description: "Phân biệt GET vs POST, hiểu đúng về HTTP Status Code và quy tắc đặt tên URL để API của bạn trở nên chuyên nghiệp."
---

Trong thế giới microservices và frontend frameworks (React/Vue) hiện nay, API đóng vai trò mạch máu 🩸 kết nối mọi thứ. REST (Representational State Transfer) là tiêu chuẩn phổ biến nhất, nhưng nhiều người vẫn đang thiết kế API... sai bét.

![REST API Architecture](/images/posts/rest-api.png)

## 1. Resource-Oriented Design (Tư duy hướng tài nguyên)

Sai lầm phổ biến nhất là đặt URL theo hành động (Action-based).

*   ❌ **Sai:** `/getAllUsers`, `/createUser`, `/deleteUser?id=1`
*   ✅ **Đúng:** `GET /users`, `POST /users`, `DELETE /users/1`

Trong REST, URL định danh **Tài nguyên (Noun)**, còn **HTTP Method (Verb)** định danh hành động.

## 2. Sử dụng đúng HTTP Methods

Đừng dùng `POST` cho mọi thứ! Hãy tôn trọng ngữ nghĩa của HTTP:

*   **GET**: Lấy dữ liệu (An toàn, có thể cache).
*   **POST**: Tạo mới tài nguyên (Không an toàn).
*   **PUT**: Cập nhật toàn bộ tài nguyên (Idempotent - Gửi 1 lần hay n lần kết quả như nhau).
*   **PATCH**: Cập nhật một phần tài nguyên.
*   **DELETE**: Xóa tài nguyên.

## 3. HTTP Status Codes: Ngôn ngữ của server

Server cần trả về mã trạng thái chính xác để Client biết chuyện gì đã xảy ra, thay vì trả về 200 OK kèm theo JSON `{ "error": "Lỗi rồi" }`.

*   **2xx (Success):**
    *   `200 OK`: Thành công.
    *   `201 Created`: Tạo mới thành công (thường kèm header Location).
    *   `204 No Content`: Xóa thành công, không trả về body.
*   **4xx (Client Error):**
    *   `400 Bad Request`: Input sai format.
    *   `401 Unauthorized`: Chưa đăng nhập.
    *   `403 Forbidden`: Đăng nhập rồi nhưng không có quyền.
    *   `404 Not Found`: Không tìm thấy tài nguyên.
*   **5xx (Server Error):**
    *   `500 Internal Server Error`: Code server bị bug.

## 4. Versioning (Phân phiên bản)

API sẽ thay đổi. Đừng bao giờ break client cũ. Luôn đánh version cho API của bạn ngay từ ngày đầu tiên.

*   Cách phổ biến nhất: URL Path (`/api/v1/users`).
*   Cách khác: Header (`Accept: application/vnd.company.v1+json`).

Thiết kế API tốt giống như thiết kế giao diện cho developer vậy. Nó cần trực quan, nhất quán và dễ sử dụng.


