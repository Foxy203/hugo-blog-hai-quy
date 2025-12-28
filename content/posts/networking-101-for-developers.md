---
title: "Networking 101: Kiến thức mạng cơ bản dành cho Developer"
date: 2025-12-28
description: "Hiểu sâu về OSI & TCP/IP, HTTP/HTTPS, DNS và cách Internet hoạt động để debug và tối ưu ứng dụng hiệu quả."
image: "/images/custom/network-basics.png"
categories: ["Networking", "Engineering"]
tags: ["OSI Model", "TCP/IP", "HTTP", "DNS", "Security"]
draft: false
---

*Hiểu OSI & TCP/IP, HTTP/HTTPS, DNS, IP/Subnetting để xây dựng và gỡ lỗi ứng dụng hiệu quả*

---

## 🧠 1. Giới thiệu

Lập trình web/mobile không chỉ là code — mà còn là **giao tiếp qua mạng**. Khi bạn gọi API, load tài nguyên từ server, hoặc debug lỗi kết nối, kiến thức networking chính là chìa khóa để hiểu điều gì *đang xảy ra phía dưới*.

Bài này tập trung vào các khái niệm cơ bản nhưng quan trọng nhất cho developer:
✔ Mô hình chuẩn OSI & TCP/IP.
✔ HTTP/HTTPS.
✔ DNS & cách hoạt động.
✔ Giao thức TCP & UDP.

---

## 🧠 2. OSI & TCP/IP — Khung lý thuyết của mạng

### 📌 Mô hình OSI (7 tầng)
OSI là một mô hình giúp tách bạch các lớp trong giao tiếp mạng:
1.  **Physical**: Vật lý (cáp, sóng).
2.  **Data Link**: Liên kết dữ liệu (MAC, switch).
3.  **Network**: Định tuyến (IP, router).
4.  **Transport**: Giao vận (TCP/UDP).
5.  **Session**: Phiên kết nối.
6.  **Presentation**: Mã hóa/định dạng.
7.  **Application**: Ứng dụng (HTTP, DNS, FTP).

### 📌 Mô hình TCP/IP (Thực tế)
| Tầng TCP/IP | Tương ứng OSI | Giao thức tiêu biểu |
| :--- | :--- | :--- |
| **Application** | Session + Presentation + Application | HTTP, DNS, SMTP |
| **Transport** | Transport | TCP, UDP |
| **Internet** | Network | IP, ICMP |
| **Link** | Physical + Data Link | Ethernet, Wi-Fi |

TCP/IP là mô hình thực tế mà mọi gói tin Internet đều tuân theo.

---

## 🧠 3. HTTP & HTTPS — Giao tiếp Web

### 📌 HTTP là gì?
HTTP (Hypertext Transfer Protocol) là giao thức *ứng dụng* để duyệt web. Mỗi request chứa: Method (GET/POST...), URL, Header/Body.

**HTTPS** là HTTP chạy trên lớp bảo mật **TLS/SSL**, giúp mã hóa dữ liệu giữa client và server.

> **Tip:** Hiểu rõ HTTP Status Code (200, 404, 500) là kỹ năng bắt buộc để debug API.

---

## 🧠 4. DNS — Sổ địa chỉ của Internet

**DNS (Domain Name System)** ánh xạ **tên miền** (google.com) sang **địa chỉ IP** (142.250.xxx.xxx) mà máy tính hiểu được.

**Quy trình:**
1.  Client hỏi DNS "IP của google.com là gì?".
2.  DNS trả về IP.
3.  Client dùng IP đó để kết nối server.

---

## 🧠 5. TCP vs UDP — Tầng vận chuyển

### 📌 TCP (Transmission Control Protocol)
*   **Có kết nối (Connection-oriented)**.
*   Đảm bảo độ tin cậy, thứ tự gói tin (gửi lại nếu mất).
*   Dùng cho: Web (HTTP), Email, File Transfer.

### 📌 UDP (User Datagram Protocol)
*   **Không kết nối (Connectionless)**.
*   Nhanh nhưng không đảm bảo nhận đủ gói tin.
*   Dùng cho: Streaming, Gaming, VoIp (chấp nhận mất vài frame nhưng cần nhanh).

---

## 📌 6. Kết luận

Networking không chỉ dành cho kỹ sư mạng (Network Engineer). Là một Developer, hiểu về HTTP, DNS và TCP/IP giúp bạn:
✅ Debug lỗi kết nối API nhanh chóng.
✅ Tối ưu performance tải trang.
✅ Hiểu về bảo mật (HTTPS, SSL).

*Đừng để Networking là "hộp đen" ma thuật. Hãy hiểu nó để làm chủ hệ thống của bạn.*
