---
title: "Bài 1: Giới thiệu Java - Ngôn ngữ lập trình hướng đối tượng"
date: 2025-01-01
categories: ["java"]
tags: ["java-basics", "beginner"]
featured: true
image: "https://via.placeholder.com/800x400/4A90E2/FFFFFF?text=Java+Basics"
---

# Giới thiệu Java

Java là một ngôn ngữ lập trình hướng đối tượng (OOP) mạnh mẽ, được phát triển bởi Sun Microsystems (nay thuộc Oracle) vào năm 1995.

## Đặc điểm nổi bật

1. **Write Once, Run Anywhere (WORA)** - Viết một lần, chạy mọi nơi
2. **Hướng đối tượng** - OOP paradigm
3. **Bảo mật cao** - Built-in security features  
4. **Đa nền tảng** - Cross-platform support
5. **Tự động quản lý bộ nhớ** - Garbage Collection

## Cài đặt Java

### Bước 1: Download JDK
```bash
# Truy cập: https://www.oracle.com/java/technologies/downloads/
```

### Bước 2: Cài đặt
- Windows: Chạy file .exe
- Linux: `sudo apt install openjdk-17-jdk`
- Mac: `brew install java`

### Bước 3: Kiểm tra
```bash
java -version
javac -version
```

## Hello World

```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
```

### Biên dịch và chạy
```bash
javac HelloWorld.java
java HelloWorld
```

## Kết luận

Java là nền tảng vững chắc để bắt đầu học lập trình. Trong bài tiếp theo, chúng ta sẽ tìm hiểu về cú pháp cơ bản của Java.

**Bài tiếp theo**: [Bài 2: Cú pháp cơ bản Java](/posts/java-02-cu-phap-co-ban/)
