---
title: "Bài 1: Mô hình OSI - 7 tầng mạng máy tính"
date: 2025-01-01
categories: ["network"]
tags: ["networking", "osi-model", "fundamentals"]
featured: true
image: "https://via.placeholder.com/800x400/2ECC71/FFFFFF?text=OSI+Model"
---

# Mô hình OSI - Open Systems Interconnection

Mô hình OSI là khung tham chiếu tiêu chuẩn để truyền thông mạng, gồm 7 tầng.

## 7 Tầng OSI (từ trên xuống)

### 7. Application Layer (Tầng Ứng dụng)
- **Chức năng**: Giao tiếp với người dùng
- **Protocols**: HTTP, HTTPS, FTP, SMTP, DNS
- **Ví dụ**: Trình duyệt web, Email client

### 6. Presentation Layer (Tầng Trình bày)
- **Chức năng**: Mã hóa/giải mã, nén dữ liệu
- **Protocols**: SSL/TLS, JPEG, GIF
- **Ví dụ**: Chuyển đổi format file

### 5. Session Layer (Tầng Phiên)
- **Chức năng**: Quản lý phiên kết nối
- **Protocols**: NetBIOS, PPTP
- **Ví dụ**: Đăng nhập/đăng xuất

### 4. Transport Layer (Tầng Giao vận)
- **Chức năng**: Truyền dữ liệu end-to-end
- **Protocols**: TCP, UDP
- **Ví dụ**: Port numbers (80, 443, 22)

### 3. Network Layer (Tầng Mạng)
- **Chức năng**: Định tuyến gói tin
- **Protocols**: IP, ICMP, ARP
- **Ví dụ**: Địa chỉ IP (192.168.1.1)

### 2. Data Link Layer (Tầng Liên kết dữ liệu)
- **Chức năng**: Truyền dữ liệu giữa các node
- **Protocols**: Ethernet, Wi-Fi, PPP
- **Ví dụ**: MAC address, Switch

### 1. Physical Layer (Tầng Vật lý)
- **Chức năng**: Truyền bit qua môi trường vật lý
- **Devices**: Cable, Hub, Repeater
- **Ví dụ**: Cáp mạng, sóng radio

## Quá trình truyền dữ liệu

```
Sender                          Receiver
  |                                |
  | 7. Application                 |
  | 6. Presentation                |
  | 5. Session                     |
  | 4. Transport                   |
  | 3. Network                     |
  | 2. Data Link                   |
  | 1. Physical  ======>  Physical |
                         Data Link |
                         Network   |
                         Transport |
                         Session   |
                    Presentation   |
                    Application    |
                                   |
```

## Mnemonic để nhớ

**Từ dưới lên**: "**P**lease **D**o **N**ot **T**hrow **S**ausage **P**izza **A**way"
- Physical
- Data Link
- Network
- Transport
- Session
- Presentation
- Application

## TCP/IP vs OSI

| OSI | TCP/IP |
|-----|--------|
| Application, Presentation, Session | Application |
| Transport | Transport |
| Network | Internet |
| Data Link, Physical | Network Access |

## Ứng dụng trong thực tế

1. **Troubleshooting** - Xác định lỗi ở tầng nào
2. **Security** - Bảo mật từng tầng
3. **Design** - Thiết kế hệ thống mạng

## Bài tập

1. Liệt kê 7 tầng OSI và chức năng
2. So sánh TCP/IP và OSI
3. Cho ví dụ protocol ở mỗi tầng

**Bài tiếp theo**: [Bài 2: TCP/IP Protocol Suite](/posts/network-02-tcp-ip/)
