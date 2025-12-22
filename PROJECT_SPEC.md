•	config.toml:
 	title = "Blog Hải Quý Onii-chan"
baseURL = "http://example.com/"  # Địa chỉ trang web tạm thời, chỉnh lại khi deploy
languageCode = "vi"
theme = "simple"

[menu]
  [[menu.main]]
    name = "Home"
    url = "/"
    weight = 1
  [[menu.main]]
    name = "Blog"
    url = "/blog/"
    weight = 2
  [[menu.main]]
    name = "Profile"
    url = "/profile/"
    weight = 3

[taxonomies]
  category = "categories"
  tag = "tags"
•	content/blog/java/hello-world-java.md:
 	---
title: "Java: Hello World"
date: 2025-12-10T08:00:00+07:00
categories: ["Java"]
tags: ["Java", "cơ bản", "ví dụ"]
draft: false
---

Java là ngôn ngữ lập trình hướng đối tượng phổ biến. Bài viết này sẽ giới thiệu ví dụ cơ bản "Hello World" trong Java, nhằm minh họa cấu trúc của một chương trình Java. Cụ thể, chương trình sẽ in ra một thông điệp đơn giản trên màn hình. Đây là bước khởi đầu giúp người học làm quen với môi trường lập trình Java.

```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Xin chào, Java!");
    }
}
Trong ví dụ trên, ta định nghĩa một lớp HelloWorld. Phương thức main là điểm bắt đầu của chương trình Java. Dòng lệnh System.out.println("Xin chào, Java!"); sẽ in thông điệp "Xin chào, Java!" lên màn hình console. Khi biên dịch (javac) và chạy chương trình (java), kết quả thu được là dòng chữ chào xuất hiện. ```
•	content/blog/java/lap-trinh-huong-doi-tuong-java.md:
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
Trong ví dụ, lớp Person có thuộc tính name và một phương thức khởi tạo (constructor) để gán giá trị ban đầu. Phương thức getName() trả về tên của đối tượng. Trong phương thức main, chúng ta khởi tạo một đối tượng Person với tên "Hải Quý" và sử dụng getName(). Dòng System.out.println sẽ in ra tên của đối tượng vừa tạo, minh họa cách thức hoạt động của OOP trong Java. ```
•	content/blog/java/danh-sach-arraylist-co-ban.md:
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
Đoạn mã trên tạo một ArrayList chứa các số nguyên. Phương thức list.add(...) được sử dụng để thêm phần tử vào danh sách. Khi in ra, ArrayList sẽ hiển thị tất cả các phần tử trong ngoặc vuông. Kết quả của chương trình sẽ là Danh sách: [5, 10, 15]. Ví dụ này cho thấy cách quản lý tập hợp phần tử và tự động thay đổi kích thước trong ArrayList của Java. ```
•	content/blog/javascript/gioi-thieu-javascript.md:
 	---
title: "JavaScript: Giới thiệu và ví dụ cơ bản"
date: 2025-12-13T08:00:00+07:00
categories: ["JavaScript"]
tags: ["JavaScript", "cơ bản", "console", "ví dụ"]
draft: false
---

JavaScript là ngôn ngữ lập trình phổ biến cho phát triển web, chạy trực tiếp trên trình duyệt. Nó có cú pháp linh hoạt và cho phép tương tác trực tiếp với người dùng hoặc trang web. Ví dụ sau sẽ giới thiệu cách sử dụng lệnh `console.log` trong JavaScript để in thông báo ra bảng điều khiển (console). Qua đó, người học sẽ hiểu cách chạy JavaScript trong môi trường trình duyệt.

```javascript
console.log("Xin chào, JavaScript!");
Dòng lệnh console.log("Xin chào, JavaScript!"); sẽ in chuỗi ký tự vào bảng điều khiển của trình duyệt. Đây là cách đơn giản nhất để hiển thị thông tin khi học JavaScript. Khi mở công cụ phát triển (Developer Tools), ta sẽ thấy thông báo "Xin chào, JavaScript!" xuất hiện. Ví dụ này chứng minh cách chạy mã JS cơ bản trong trình duyệt mà không cần giao diện phức tạp. ```
•	content/blog/javascript/dom-javascript.md:
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
Trong ví dụ này, thẻ <p> ban đầu có nội dung "Nội dung ban đầu.". Dòng mã document.getElementById("demo").innerHTML = "Đã thay đổi nội dung bằng JavaScript."; sẽ tìm phần tử có id="demo" và cập nhật nội dung của nó. Sau khi trang được tải, văn bản trong thẻ <p> sẽ được thay thế bằng "Đã thay đổi nội dung bằng JavaScript.". Ví dụ này thể hiện khả năng của JavaScript trong việc truy cập và thay đổi nội dung của trang web thông qua DOM. ```
•	content/blog/javascript/async-javascript.md:
 	---
title: "JavaScript: Lập trình bất đồng bộ với Promise"
date: 2025-12-15T08:00:00+07:00
categories: ["JavaScript"]
tags: ["JavaScript", "Asynchronous", "Promise", "bất đồng bộ"]
draft: false
---

Trong JavaScript, lập trình bất đồng bộ (asynchronous) rất phổ biến, đặc biệt khi thực hiện các tác vụ như gọi API hoặc xử lý sau một khoảng thời gian. `Promise` là một đối tượng dùng để xử lý kết quả bất đồng bộ. Ví dụ dưới đây tạo một Promise giả lập lấy dữ liệu sau 1 giây rồi in ra màn hình. Nhờ Promise, ta có thể sử dụng `.then` để xử lý kết quả sau khi tác vụ hoàn thành.

```javascript
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Dữ liệu đã được lấy");
    }, 1000);
  });
}

fetchData().then(data => {
  console.log(data);
});
Trong ví dụ, hàm fetchData trả về một Promise. Bên trong Promise, setTimeout giả lập độ trễ 1 giây trước khi gọi resolve với thông điệp "Dữ liệu đã được lấy". Khi Promise hoàn thành, hàm .then sẽ nhận được kết quả và chạy hàm callback, in ra thông báo đó. Đoạn mã trên minh họa cách sử dụng Promise để xử lý tác vụ bất đồng bộ trong JavaScript. ```
•	content/blog/network/gioi-thieu-mang-may-tinh.md:
 	---
title: "Mạng máy tính: Khái niệm cơ bản"
date: 2025-12-16T08:00:00+07:00
categories: ["Mạng máy tính"]
tags: ["Mạng", "máy tính", "khái niệm", "OSI"]
draft: false
---

Mạng máy tính là hệ thống các thiết bị và máy tính kết nối với nhau để trao đổi dữ liệu. Một khái niệm quan trọng trong mạng máy tính là địa chỉ IP và hostname của thiết bị. Ví dụ dưới đây sử dụng Python để lấy tên máy và địa chỉ IP của máy tính trong mạng cục bộ. Kết quả giúp minh họa khái niệm địa chỉ IP và cách xác định thiết bị trong mạng.

```python
import socket

hostname = socket.gethostname()
local_ip = socket.gethostbyname(hostname)
print("Tên máy:", hostname)
print("Địa chỉ IP:", local_ip)
Đoạn mã Python trên sử dụng module socket để lấy tên máy và địa chỉ IP cục bộ. Hàm gethostname() trả về tên máy chủ của hệ thống, còn gethostbyname(hostname) cho địa chỉ IP tương ứng. Kết quả in ra sẽ hiển thị tên máy tính và địa chỉ IP của máy trong mạng. Ví dụ này giúp minh họa khái niệm địa chỉ IP và hostname cơ bản trong mạng máy tính. ```
•	content/blog/network/mo-hinh-osi.md:
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
Đoạn mã Python trên tạo một danh sách layers chứa tên 7 tầng của mô hình OSI. Vòng lặp for sẽ in ra thứ tự các tầng kèm tên tương ứng (ví dụ: Tầng 1 là "Vật lý", Tầng 7 là "Ứng dụng"). Ví dụ này không thực hiện tính toán mạng thực tế, nhưng nó minh họa cách trình bày thông tin về mô hình OSI. Nhờ đó, người đọc có thể hình dung được cấu trúc phân lớp của mạng máy tính. ```
•	content/blog/network/dia-chi-ip-subnet.md:
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
Đoạn mã trên sử dụng thư viện ipaddress của Python để phân tích mạng con. Phương thức ip_network('192.168.0.0/24') khởi tạo mạng con với tiền tố /24 (tương đương subnet mask 255.255.255.0). Kết quả network_address là địa chỉ mạng (192.168.0.0), còn broadcast_address là địa chỉ quảng bá (192.168.0.255). Biến num_addresses cho biết tổng số địa chỉ bao gồm cả địa chỉ mạng và quảng bá, nên trừ 2 để được số địa chỉ host khả dụng (trong trường hợp này là 254). Ví dụ này minh họa cách tính toán các tham số quan trọng của một địa chỉ IP trong mạng con. ```
•	deploy_prompt.txt:
 	Hãy thực hiện các bước sau để triển khai blog Hugo lên GitHub Pages:
1. Trong thư mục gốc của dự án Hugo, chạy lệnh `hugo` để xây dựng trang web. Nội dung tĩnh sau khi build sẽ nằm trong thư mục `public/`.
2. Tạo hoặc chuyển sang nhánh `gh-pages` của repository. Sao chép (hoặc di chuyển) toàn bộ nội dung trong thư mục `public/` vào thư mục gốc của nhánh `gh-pages`.
3. Trong tệp `config.toml`, cập nhật giá trị `baseURL` thành URL thực tế của trang GitHub Pages (ví dụ: `https://<username>.github.io/<repository>/`).
4. Đảm bảo nếu cần, tệp `config.toml` có thể thiết lập `publishDir = "public"` (mặc định Hugo dùng `public`), nhưng với cách deploy dùng nhánh `gh-pages` thì có thể để mặc định.
5. Trên GitHub, vào phần **Settings > Pages** của repository, chọn nguồn (source) là nhánh `gh-pages` (thường mục "gh-pages branch"). Lưu cài đặt.
6. Đẩy (push) nhánh `gh-pages` lên GitHub. Lần đầu có thể cần tạo nhánh `gh-pages` trên remote.
7. Đảm bảo rằng sau khi build và push, các liên kết (ví dụ `{% raw %}{{ .Site.BaseURL }}{% endraw %}`) và nội dung trong `public/` phục vụ đúng theo `baseURL` đã cấu hình.

Sau khi hoàn tất, GitHub Pages sẽ tự động xuất bản trang tại URL tương ứng. Để cập nhật nội dung trong tương lai, cứ lặp lại các bước build và push cho nhánh `gh-pages`.