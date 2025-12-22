---
title: "Mạng máy tính: Khái niệm cơ bản"
date: 2025-12-16T08:00:00+07:00
categories: ["Mạng máy tính"]
tags: ["Mạng", "máy tính", "khái niệm", "OSI"]
draft: false
---

Mạng máy tính là hệ thống các thiết bị và máy tính kết nối với nhau để trao đổi dữ liệu. Một khái niệm quan trọng trong mạng máy tính là địa chỉ IP và hostname của thiết bị. Ví dụ dưới đây sử dụng Python để lấy tên máy và địa chỉ IP của máy tính trong mạng cục bộ. Kết quả giúp minh họa khái niệm địa chỉ IP và cách xác định thiết bị trong mạng.

```python
import socket

hostname = socket.gethostname()
local_ip = socket.gethostbyname(hostname)
print("Tên máy:", hostname)
print("Địa chỉ IP:", local_ip)
```

Đoạn mã Python trên sử dụng module socket để lấy tên máy và địa chỉ IP cục bộ. Hàm gethostname() trả về tên máy chủ của hệ thống, còn gethostbyname(hostname) cho địa chỉ IP tương ứng. Kết quả in ra sẽ hiển thị tên máy tính và địa chỉ IP của máy trong mạng. Ví dụ này giúp minh họa khái niệm địa chỉ IP và hostname cơ bản trong mạng máy tính.
