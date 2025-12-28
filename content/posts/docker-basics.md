---
title: "Docker nhập môn: Tại sao 'nó chạy trên máy tôi' không còn là cái cớ"
date: 2025-01-06T15:00:00+07:00
draft: false
categories: ["DevOps"]
tags: ["Docker", "Container", "Deployment"]
image: "/images/custom/docker-basics.png"
description: "Hiểu về Containerization, Image, Container và cách Docker thay đổi hoàn toàn cách chúng ta deploy phần mềm."
---

"Chạy trên máy tôi ngon lành mà ta?" 🤷‍♂️
Câu nói kinh điển này đã giết chết bao nhiêu tình đồng nghiệp giữa Dev và Tester/Ops. Môi trường (OS, thư viện, version) khác nhau chính là nguyên nhân.

**Docker** ra đời để giải quyết tận gốc vấn đề này.

![Docker Containers](/images/posts/docker-basics.png)

## 1. Container vs Virtual Machine (Máy ảo)

Trước Docker, ta dùng Virtual Machine (VM). VM ảo hóa phần cứng (Hardware), mỗi VM cần cài cả một hệ điều hành (OS) riêng => Nặng nề, khởi động chậm (vài phút).

Docker sử dụng công nghệ **Container**. Các container chia sẻ chung kernel của Host OS nhưng hoạt động độc lập (Isolated).
*   **Nhẹ:** Chỉ vài MB đến vài trăm MB.
*   **Nhanh:** Khởi động tính bằng mili-giây.
*   **Portable:** Đóng gói 1 lần, chạy mọi nơi (Write Once, Run Anywhere... thật sự).

## 2. Docker Image & Container

Hãy nghĩ về tư duy hướng đối tượng (OOP):
*   **Image** giống như **Class**: Là bản thiết kế (readonly), chứa code, thư viện, environment variables, config files.
*   **Container** giống như **Object**: Là instance đang chạy của một Image. Bạn có thể tạo hàng trăm container từ 1 image.

## 3. Dockerfile: Công thức nấu ăn

Để tạo ra Image, ta viết một file text tên là `Dockerfile`.

```dockerfile
# 1. Chọn Base Image (Nền móng)
FROM openjdk:17-jdk-alpine

# 2. Tạo thư mục làm việc trong container
WORKDIR /app

# 3. Copy file JAR của ứng dụng vào
COPY target/my-app.jar app.jar

# 4. Mở port
EXPOSE 8080

# 5. Lệnh chạy ứng dụng
ENTRYPOINT ["java", "-jar", "app.jar"]
```

## 4. Docker Compose: Nhạc trưởng

Một ứng dụng thực tế không chạy lẻ loi. Nó cần Database, Redis, RabbitMQ... Thay vì chạy từng lệnh `docker run`, ta định nghĩa toàn bộ stack trong `docker-compose.yml` và khởi động tất cả chỉ với 1 lệnh:

`docker-compose up -d`

Docker không chỉ là công cụ của DevOps. Là Developer thời đại mới, Docker là kỹ năng sinh tồn cơ bản giúp bạn làm chủ môi trường phát triển của mình.


