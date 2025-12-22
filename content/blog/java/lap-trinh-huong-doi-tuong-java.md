---
title: "Java: Lập trình hướng đối tượng"
date: 2025-12-11T08:00:00+07:00
categories: ["Java"]
tags: ["Java", "OOP", "lớp", "đối tượng"]
draft: false
---

Lập trình hướng đối tượng (OOP) là phương pháp lập trình dựa trên khái niệm lớp (class) và đối tượng (object). Java hỗ trợ OOP mạnh mẽ, cho phép định nghĩa các lớp với thuộc tính và phương thức. Ví dụ dưới đây sẽ minh họa cách tạo lớp đơn giản và sử dụng đối tượng trong Java. Qua đó, người đọc hiểu được cách khai báo thuộc tính và khởi tạo đối tượng.

```java
public class Person {
    private String name;
    public Person(String name) {
        this.name = name;
    }
    public String getName() {
        return name;
    }
    public static void main(String[] args) {
        Person person = new Person("Hải Quý");
        System.out.println("Tên của người: " + person.getName());
    }
}
```

Trong ví dụ, lớp Person có thuộc tính name và một phương thức khởi tạo (constructor) để gán giá trị ban đầu. Phương thức getName() trả về tên của đối tượng. Trong phương thức main, chúng ta khởi tạo một đối tượng Person với tên "Hải Quý" và sử dụng getName(). Dòng System.out.println sẽ in ra tên của đối tượng vừa tạo, minh họa cách thức hoạt động của OOP trong Java.
