---
title: "Java: Danh sách (ArrayList) cơ bản"
date: 2025-12-12T08:00:00+07:00
categories: ["Java"]
tags: ["Java", "ArrayList", "danh sách", "ví dụ"]
draft: false
---

Trong Java, `ArrayList` là một lớp trong thư viện chuẩn giúp lưu trữ danh sách các phần tử có thể thay đổi kích thước. Khác với mảng cố định, ArrayList có khả năng tự động điều chỉnh kích thước khi thêm hoặc xóa phần tử. Ví dụ dưới đây sẽ minh họa cách sử dụng `ArrayList` để thêm và duyệt qua các phần tử số nguyên. Điều này giúp hiểu cơ chế quản lý danh sách trong Java.

```java
import java.util.ArrayList;

public class ArrayListExample {
    public static void main(String[] args) {
        ArrayList<Integer> list = new ArrayList<>();
        list.add(5);
        list.add(10);
        list.add(15);
        System.out.println("Danh sách: " + list);
    }
}
```

Đoạn mã trên tạo một ArrayList chứa các số nguyên. Phương thức list.add(...) được sử dụng để thêm phần tử vào danh sách. Khi in ra, ArrayList sẽ hiển thị tất cả các phần tử trong ngoặc vuông. Kết quả của chương trình sẽ là Danh sách: [5, 10, 15]. Ví dụ này cho thấy cách quản lý tập hợp phần tử và tự động thay đổi kích thước trong ArrayList của Java.
