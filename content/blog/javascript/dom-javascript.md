---
title: "JavaScript: Truy cập và thay đổi DOM"
date: 2025-12-14T08:00:00+07:00
categories: ["JavaScript"]
tags: ["JavaScript", "DOM", "HTML", "tương tác"]
draft: false
---

DOM (Document Object Model) là cấu trúc dữ liệu đại diện cho các phần tử trên trang web. JavaScript cho phép ta tương tác và thay đổi nội dung của trang thông qua đối tượng DOM. Ví dụ dưới đây sẽ minh họa cách truy cập một thẻ HTML có `id` và thay đổi nội dung của nó. Kết quả sẽ là nội dung ban đầu của trang được cập nhật bởi JavaScript.

```html
<!DOCTYPE html>
<html>
<head><title>Thay đổi DOM</title></head>
<body>
  <p id="demo">Nội dung ban đầu.</p>
  <script>
    document.getElementById("demo").innerHTML = "Đã thay đổi nội dung bằng JavaScript.";
  </script>
</body>
</html>
```

Trong ví dụ này, thẻ `<p>` ban đầu có nội dung "Nội dung ban đầu.". Dòng mã document.getElementById("demo").innerHTML = "Đã thay đổi nội dung bằng JavaScript."; sẽ tìm phần tử có id="demo" và cập nhật nội dung của nó. Sau khi trang được tải, văn bản trong thẻ `<p>` sẽ được thay thế bằng "Đã thay đổi nội dung bằng JavaScript.". Ví dụ này thể hiện khả năng của JavaScript trong việc truy cập và thay đổi nội dung của trang web thông qua DOM.
