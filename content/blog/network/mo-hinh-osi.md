---
title: "Mạng máy tính: Mô hình OSI"
date: 2025-12-17T08:00:00+07:00
categories: ["Mạng máy tính"]
tags: ["Mạng", "OSI", "mô hình", "tầng"]
draft: false
---

Mô hình OSI (Open Systems Interconnection) chia quá trình truyền dữ liệu mạng thành 7 tầng riêng biệt, từ tầng vật lý đến tầng ứng dụng. Mỗi tầng đảm nhận một vai trò cụ thể, giúp thiết kế và xử lý mạng dễ dàng hơn. Ví dụ sau sẽ liệt kê thứ tự của 7 tầng trong mô hình OSI:

```python
layers = ["Vật lý", "Liên kết dữ liệu", "Mạng", "Giao vận", "Phiên", "Trình bày", "Ứng dụng"]
for i, layer in enumerate(layers, start=1):
    print(f"Tầng {i}: {layer}")
```

Đoạn mã Python trên tạo một danh sách layers chứa tên 7 tầng của mô hình OSI. Vòng lặp for sẽ in ra thứ tự các tầng kèm tên tương ứng (ví dụ: Tầng 1 là "Vật lý", Tầng 7 là "Ứng dụng"). Ví dụ này không thực hiện tính toán mạng thực tế, nhưng nó minh họa cách trình bày thông tin về mô hình OSI. Nhờ đó, người đọc có thể hình dung được cấu trúc phân lớp của mạng máy tính.
