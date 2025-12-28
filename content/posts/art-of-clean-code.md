---
title: "Nghệ thuật Clean Code: Code không chỉ để chạy, Code là để đọc"
date: 2025-01-04T08:30:00+07:00
draft: false
categories: ["Software Engineering"]
tags: ["Clean Code", "Best Practices", "Refactoring"]
image: "/images/custom/art-of-clean-code.png"
description: "Martin Fowler từng nói: 'Ai cũng có thể viết code cho máy hiểu. Lập trình viên giỏi viết code cho con người hiểu'."
---

Tại sao chúng ta dành 80% thời gian để đọc code và chỉ 20% để viết code mới? Nếu code của bạn "bốc mùi" (code smell), 80% thời gian đó sẽ là cực hình cho đồng nghiệp và chính bạn trong tương lai.

![Clean Code Art](/images/posts/clean-code.png)

## 1. Đặt tên: Hãy kể một câu chuyện

Tên biến, tên hàm là thứ giao tiếp đầu tiên. Đừng đặt tên kiểu đánh đố.

*   ❌ **Tệ:** `int d; // elapsed time in days`
*   ✅ **Tốt:** `int elapsedTimeInDays;`
*   ❌ **Tệ:** `public List<int[]> getThem() { ... }`
*   ✅ **Tốt:** `public List<Cell> getFlaggedCells() { ... }`

## 2. Hàm (Function): Làm MỘT việc và làm TỐT việc đó

Nguyên tắc **SRP (Single Responsibility Principle)** áp dụng cho cả hàm. Nếu tên hàm của bạn có từ "And" (ví dụ: `validateAndSaveUser`), khả năng cao nó đang làm quá nhiều việc.

Một hàm clean code nên:
1.  Nhỏ (thường dưới 20 dòng).
2.  Chỉ có một mức độ trừu tượng (abstraction level).
3.  Không có hoặc có rất ít tham số (lý tưởng là 0-2).

## 3. Comments: Sự thất bại trong việc biểu đạt

Đừng viết comment để giải thích Code ĐANG LÀM GÌ (What). Hãy viết comment để giải thích TẠI SAO (Why) bạn làm vậy nếu logic đó không rõ ràng.

> "Don't comment bad code - rewrite it." — Brian W. Kernighan

Nếu bạn thấy mình cần viết một đoạn comment dài để giải thích một khối code, hãy xem xét việc tách khối code đó ra thành một hàm riêng với cái tên mô tả chính xác những gì comment đó viết.

## 4. Boy Scout Rule: Định luật Hướng đạo sinh

"Luôn trả lại khu cắm trại sạch sẽ hơn lúc bạn đến."

Mỗi khi bạn commit code, hãy cố gắng làm sạch nó một chút. Đổi tên một biến cho rõ nghĩa, tách một hàm quá dài, xóa một đoạn code thừa. Sự cải thiện nhỏ mỗi ngày sẽ ngăn chặn sự thối nát (rot) của phần mềm theo thời gian.

## 5. Kết luận

Clean Code không phải là luật cứng nhắc, nó là hệ giá trị. Nó đòi hỏi kỷ luật và sự tôn trọng đối với nghề nghiệp và đồng nghiệp. Code sạch là code thể hiện sự quan tâm (Code that cares).


