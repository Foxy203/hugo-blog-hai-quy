---
title: "Làm chủ 4 Tính chất của Lập trình Hướng đối tượng (OOP) trong Java"
date: 2025-01-01T08:00:00+07:00
draft: false
categories: ["Java"]
tags: ["OOP", "Java Core", "Lập trình"]
image: "/images/posts/OOP.jpg"
description: "Phân tích sâu sắc về Đóng gói, Kế thừa, Đa hình và Trừu tượng. Không chỉ là lý thuyết, đây là cách áp dụng chúng vào dự án thực tế."
---

Lập trình hướng đối tượng (**OOP**) không chỉ là một mô hình lập trình, nó là "tư duy" để mô hình hóa thế giới thực vào phần mềm. Là một Java Developer, việc hiểu sâu 4 trụ cột này sẽ phân biệt bạn giữa một "coder" và một "software engineer".

![Java OOP Concepts](/images/posts/java-oop.png)

## 1. Tính Đóng gói (Encapsulation) - "Chiếc hộp đen bảo mật"

Hãy tưởng tượng một viên thuốc con nhộng 💊. Bạn sử dụng nó để chữa bệnh nhưng không hề biết (và không nên biết) các thành phần hóa học bên trong được trộn như thế nào. Bạn chỉ quan tâm đến lớp vỏ và tác dụng của nó.

Trong Java, Đóng gói là kỹ thuật **ẩn giấu thông tin** và chi tiết cài đặt của đối tượng.

### Tại sao cần Đóng gói?
- **Bảo mật dữ liệu:** Ngăn chặn việc truy cập trực tiếp và sửa đổi field trái phép.
- **Dễ bảo trì:** Bạn có thể thay đổi logic bên trong method setter mà không ảnh hưởng đến code sử dụng class đó.

```java
public class BankAccount {
    // 1. Private fields - Dữ liệu được bảo vệ
    private double balance; 

    public BankAccount(double initialBalance) {
        if (initialBalance > 0) {
            this.balance = initialBalance;
        }
    }

    // 2. Public method - Cổng giao tiếp kiểm soát
    public void deposit(double amount) {
        if (amount > 0) {
            this.balance += amount;
            System.out.println("Đã nạp: " + amount);
        } else {
            System.out.println("Số tiền không hợp lệ!");
        }
    }

    // Getter - Chỉ đọc
    public double getBalance() {
        return balance;
    }
}
```

> **Pro Tip:** Luôn sử dụng `private` cho các biến instance và cung cấp `public` getter/setter chỉ khi thực sự cần thiết. Đừng tạo getter/setter cho mọi field một cách máy móc!

---

## 2. Tính Kế thừa (Inheritance) - "Cha truyền con nối"

Kế thừa cho phép một class (con) sở hữu các thuộc tính và phương thức của một class khác (cha). Nó giúp ta tuân thủ nguyên tắc **DRY (Don't Repeat Yourself)**.

### Ví dụ thực tế
Bạn có class `Animal`. `Dog` và `Cat` đều là động vật, chúng đều có thể `eat()` và `sleep()`. Thay vì viết lại code này 2 lần, ta dùng kế thừa.

```java
// Class Cha
public class Animal {
    protected String name;

    public void eat() {
        System.out.println("Đang ăn...");
    }
}

// Class Con
public class Dog extends Animal {
    public void bark() {
        System.out.println("Gâu gâu!");
    }
}
```

### Cạm bẫy của Kế thừa
Đừng lạm dụng kế thừa! Nếu bạn thấy mình chỉ kế thừa để "tái sử dụng code" mà mối quan hệ giữa chúng không phải là "IS-A" (Là một), hãy cẩn trọng.
* **Tốt:** `Dog` **IS-A** `Animal`.
* **Xấu:** `Ostrich` (Đà điểu) kế thừa `Bird` (Chim) nếu class `Bird` có hàm `fly()`, vì đà điểu không bay được!

---

## 3. Tính Đa hình (Polymorphism) - "Một tên gọi, nhiều hình thái"

Đây là tính chất thú vị và mạnh mẽ nhất. Nó cho phép một biến tham chiếu có thể trỏ đến các đối tượng của các class con khác nhau và thực thi phương thức theo cách riêng của từng con.

### Polymorphism trong hành động

```java
Animal myPet = new Dog(); // Biến kiểu Animal, nhưng chứa đối tượng Dog
myPet.eat(); // Gọi hàm eat()

myPet = new Cat(); // Bây giờ nó là Cat
myPet.eat(); 
```

Điều này cực kỳ hữu ích khi bạn muốn viết code tổng quát. Ví dụ, một danh sách `List<Animal>` có thể chứa cả chó, mèo, gà, và bạn có thể lặp qua danh sách đó và gọi `makeSound()` mà không cần quan tâm cụ thể nó là con gì.

---

## 4. Tính Trừu tượng (Abstraction) - "Bản thiết kế cốt lõi"

Trừu tượng là việc tập trung vào **đối tượng làm được gì** (what) thay vì **làm như thế nào** (how). Trong Java, ta dùng `interface` và `abstract class`.

### Abstract Class vs Interface?

*   **Abstract Class:** Dùng khi các class có mối quan hệ chặt chẽ, chia sẻ code chung (fields, non-abstract methods). Ví dụ: `Vehicle` (Phương tiện).
*   **Interface:** Dùng để định nghĩa khả năng (capability), hành vi mà các class không liên quan có thể cùng làm. Ví dụ: `Flyable` (Có thể bay) - Chim bay được, Máy bay cũng bay được.

```java
// Interface định nghĩa "Hợp đồng"
interface PaymentProcessor {
    void processPayment(double amount);
}

// Các class thực thi "Hợp đồng" đó
class CreditCardPayment implements PaymentProcessor {
    public void processPayment(double amount) {
        System.out.println("Thanh toán thẻ: " + amount);
    }
}

class MomoPayment implements PaymentProcessor {
    public void processPayment(double amount) {
        System.out.println("Quét Momo: " + amount);
    }
}
```

### Tổng kết
4 Tính chất này không đứng độc lập, chúng hòa quyện vào nhau để tạo nên những hệ thống phần mềm linh hoạt, dễ mở rộng và bảo trì. Hãy luyện tập việc **thiết kế** class diagram trước khi bắt tay vào code!


