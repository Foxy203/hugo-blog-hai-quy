---
title: "Mạng máy tính: Địa chỉ IP và phân đoạn mạng (Subnet)"
date: 2025-12-18T08:00:00+07:00
categories: ["Mạng máy tính"]
tags: ["Mạng", "IP", "Subnet", "địa chỉ"]
draft: false
---

Địa chỉ IP (Internet Protocol) là định danh của thiết bị trên mạng. Một địa chỉ IPv4 thường có dạng bốn số (0-255) cách nhau bằng dấu chấm, như `192.168.0.1`. Phân đoạn mạng (Subnet) giúp chia một mạng lớn thành nhiều mạng con nhỏ hơn để quản lý hiệu quả hơn. Ví dụ dưới đây sử dụng Python để tính địa chỉ mạng và địa chỉ quảng bá của một mạng con /24.

```python
import ipaddress

network = ipaddress.ip_network('192.168.0.0/24')
print("Địa chỉ mạng:", network.network_address)
print("Địa chỉ quảng bá:", network.broadcast_address)
print("Số lượng địa chỉ host tối đa:", network.num_addresses - 2)
```

Đoạn mã trên sử dụng thư viện ipaddress của Python để phân tích mạng con. Phương thức ip_network('192.168.0.0/24') khởi tạo mạng con với tiền tố /24 (tương đương subnet mask 255.255.255.0). Kết quả network_address là địa chỉ mạng (192.168.0.0), còn broadcast_address là địa chỉ quảng bá (192.168.0.255). Biến num_addresses cho biết tổng số địa chỉ bao gồm cả địa chỉ mạng và quảng bá, nên trừ 2 để được số địa chỉ host khả dụng (trong trường hợp này là 254). Ví dụ này minh họa cách tính toán các tham số quan trọng của một địa chỉ IP trong mạng con.
