---
title: "Bài 2: Cú pháp cơ bản Java - Biến và kiểu dữ liệu"
date: 2025-01-02
categories: ["java"]
tags: ["java-basics", "variables", "data-types"]
image: "https://via.placeholder.com/800x400/E74C3C/FFFFFF?text=Java+Variables"
---

# Cú pháp cơ bản Java

## Biến (Variables)

Biến là nơi lưu trữ dữ liệu trong bộ nhớ.

### Khai báo biến
```java
// Cú pháp: kiểu_dữ_liệu tên_biến = giá_trị;
int age = 20;
String name = "Hải Quý";
double price = 99.99;
boolean isStudent = true;
```

## Kiểu dữ liệu (Data Types)

### Kiểu nguyên thủy (Primitive Types)

| Kiểu | Kích thước | Giá trị mặc định | Ví dụ |
|------|------------|------------------|-------|
| byte | 1 byte | 0 | `byte b = 100;` |
| short | 2 bytes | 0 | `short s = 1000;` |
| int | 4 bytes | 0 | `int i = 100000;` |
| long | 8 bytes | 0L | `long l = 15000000000L;` |
| float | 4 bytes | 0.0f | `float f = 3.14f;` |
| double | 8 bytes | 0.0d | `double d = 3.14159;` |
| boolean | 1 bit | false | `boolean b = true;` |
| char | 2 bytes | '\u0000' | `char c = 'A';` |

### Kiểu tham chiếu (Reference Types)
```java
String text = "Hello Java";
int[] numbers = {1, 2, 3, 4, 5};
```

## Quy tắc đặt tên biến

✅ **Đúng**:
```java
int studentAge;
String firstName;
int _count;
double $price;
```

❌ **Sai**:
```java
int 2students;  // Không bắt đầu bằng số
String first-name;  // Không dùng dấu -
int class;  // Không dùng từ khóa
```

## Ví dụ thực tế

```java
public class StudentInfo {
    public static void main(String[] args) {
        // Thông tin sinh viên
        String name = "Nguyễn Hải Quý";
        int age = 21;
        String major = "An Ninh Mạng";
        double gpa = 3.8;
        boolean isGraduated = false;
        
        // In thông tin
        System.out.println("Tên: " + name);
        System.out.println("Tuổi: " + age);
        System.out.println("Ngành: " + major);
        System.out.println("GPA: " + gpa);
        System.out.println("Đã tốt nghiệp: " + isGraduated);
    }
}
```

## Bài tập

1. Khai báo biến lưu thông tin cá nhân của bạn
2. Tính tổng 2 số nguyên
3. Chuyển đổi từ Celsius sang Fahrenheit

**Bài tiếp theo**: [Bài 3: Toán tử trong Java](/posts/java-03-toan-tu/)
