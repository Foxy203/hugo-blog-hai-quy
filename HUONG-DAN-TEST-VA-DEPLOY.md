# 🚀 HƯỚNG DẪN TEST VÀ TRIỂN KHAI HUGO BLOG

## 📦 File đã đóng gói

File: **`hugo-blog-hai-quy.zip`** sẽ được tạo trên Desktop.

Nội dung bao gồm:
- ✅ Full Hugo project structure
- ✅ Theme "simple" hoàn chỉnh
- ✅ 9 bài viết content
- ✅ GitHub Actions workflow
- ✅ Documentation đầy đủ

---

## 📚 BƯỚC 1: GIẢI NÉN VÀ MỞ DỰ ÁN

### Giải nén file ZIP

1. **Tìm file** `hugo-blog-hai-quy.zip` trên Desktop
2. **Right-click** → **Extract All...**
3. **Chọn location** (ví dụ: `C:\Projects\hugo-blog`)
4. **Extract**

### Mở project trong VS Code

```powershell
cd C:\Projects\hugo-blog
code .
```

Hoặc: Mở VS Code → File → Open Folder → chọn thư mục vừa giải nén

---

## 🔧 BƯỚC 2: CÀI ĐẶT HUGO (Nếu chưa có)

### Kiểm tra Hugo đã cài chưa

```powershell
hugo version
```

### Nếu chưa có, cài đặt Hugo

**Phương pháp nhanh nhất (Manual Download):**

1. Truy cập: https://github.com/gohugoio/hugo/releases/latest
2. Download file: `hugo_extended_0.xxx.x_windows-amd64.zip`
3. Extract vào `C:\Hugo\bin`
4. Thêm `C:\Hugo\bin` vào PATH:
   ```powershell
   # PowerShell as Administrator
   [Environment]::SetEnvironmentVariable("Path", $env:Path + ";C:\Hugo\bin", [System.EnvironmentVariableTarget]::User)
   ```
5. Restart PowerShell và test: `hugo version`

**Chi tiết đầy đủ:** Xem phần "Cài đặt Hugo" trong walkthrough.md

---

## ✅ BƯỚC 3: TEST BUILD

### 3.1. Build trang web

```powershell
# Di chuyển vào thư mục project (nếu chưa)
cd C:\Projects\hugo-blog

# Build
hugo
```

**Kết quả mong đợi:**
```
Start building sites ...
hugo v0.xxx.x

                   | VI
-------------------+------
  Pages            |  25
  Paginator pages  |   0
  Non-page files   |   0
  Static files     |   3
  Processed images |   0
  Aliases          |   0
  Sitemaps         |   1
  Cleaned          |   0

Total in 123 ms
```

**Kiểm tra:**
- ✅ Thư mục `public/` được tạo
- ✅ Có file `index.html` trong `public/`
- ✅ Không có error messages

### 3.2. Preview local (Development Server)

```powershell
hugo server -D
```

**Kết quả mong đợi:**
```
Web Server is available at http://localhost:1313/ (bind address 127.0.0.1)
Press Ctrl+C to stop
```

**Mở browser:** http://localhost:1313

---

## 🧪 BƯỚC 4: CHECKLIST TESTING

Khi server đang chạy (`hugo server -D`), verify các features:

### 4.1. Homepage (http://localhost:1313)

- [ ] Hero section hiển thị "Chào mừng đến với Blog Hải Quý Onii-chan"
- [ ] 3 topic cards hiển thị:
  - ☕ Java
  - 🟨 JavaScript
  - 🌐 Mạng máy tính
- [ ] "Bài viết mới nhất" hiển thị tối đa 6 bài
- [ ] Click vào topic card → navigate đúng

### 4.2. Navigation Menu

- [ ] Header có 3 menu items: Home, Blog, Profile
- [ ] Click "Blog" → đến trang danh sách (9 bài)
- [ ] Click "Profile" → đến trang profile
- [ ] Click "Home" → về trang chủ
- [ ] Active state hiển thị đúng (underline)

### 4.3. Blog Listing Page (/blog/)

- [ ] Hiển thị tất cả 9 bài viết
- [ ] Mỗi bài có:
  - ✓ Title
  - ✓ Date (DD/MM/YYYY format)
  - ✓ Category badge (màu xanh)
  - ✓ Tags (#tag)
  - ✓ Excerpt/summary
- [ ] Click vào title → đến single post

### 4.4. Single Post Page

Click vào 1 bài viết bất kỳ, kiểm tra:

- [ ] Title hiển thị
- [ ] Metadata: date, categories, tags
- [ ] Content đầy đủ
- [ ] **Code blocks có syntax highlighting** (màu sắc code)
- [ ] Previous/Next navigation (nếu có)

**Test với các bài sau để verify code highlighting:**
- Java: hello-world-java.md
- JavaScript: async-javascript.md
- Network: dia-chi-ip-subnet.md

### 4.5. Categories & Tags

- [ ] Click vào category badge → filter posts theo category
- [ ] Click vào tag → filter posts theo tag
- [ ] Back button hoạt động

### 4.6. Dark/Light Mode

- [ ] Tìm button toggle (🌙) ở header nav
- [ ] **Click toggle:**
  - Background chuyển sang đen (#1a1a1a)
  - Text chuyển sang trắng (#e0e0e0)
  - Icon đổi thành ☀️
- [ ] **Click lại:**
  - Trở về light mode
  - Icon đổi lại thành 🌙
- [ ] **Refresh page:**
  - Theme được giữ nguyên (localStorage)

### 4.7. Responsive Design

**Test bằng Chrome DevTools:**
1. Press `F12` → Toggle device toolbar (Ctrl+Shift+M)
2. Test các breakpoints:

- [ ] **Mobile (375px):**
  - Navigation menu dạng compact
  - Topic cards stack vertically
  - Text readable
  
- [ ] **Tablet (768px):**
  - Topic cards: 2 columns
  - Layout adjusts
  
- [ ] **Desktop (1200px+):**
  - Topic cards: 3 columns
  - Full navigation
  - Optimal layout

### 4.8. Browser Compatibility

Test trên:
- [ ] Chrome/Edge (latest)
- [ ] Firefox (latest)
- [ ] Safari (nếu có Mac)

---

## 🎨 BƯỚC 5: CUSTOMIZATION (Tùy chọn)

### 5.1. Thay đổi màu sắc

**File:** `themes/simple/static/css/style.css`

```css
:root {
    --accent: #0066cc;        /* Màu chủ đạo - đổi thành màu bạn thích */
    --accent-hover: #0052a3;  /* Màu khi hover */
}
```

**Lưu file** → Hugo auto-reload → Xem kết quả ngay

### 5.2. Thêm bài viết mới

**Cách 1: Dùng Hugo CLI**
```powershell
hugo new content/blog/java/bai-viet-moi.md
```

**Cách 2: Tạo file thủ công**

Tạo file mới trong `content/blog/{category}/ten-bai.md`:

```markdown
---
title: "Tiêu đề bài viết"
date: 2025-12-22T10:00:00+07:00
categories: ["Java"]
tags: ["tag1", "tag2"]
draft: false
---

Nội dung bài viết...

```java
// Code example
public class Example {
    public static void main(String[] args) {
        System.out.println("Hello World");
    }
}
```
```

**Save** → Hugo auto-reload → Bài mới xuất hiện!

### 5.3. Chỉnh sửa Profile

**File:** `content/profile.md`

Sửa thông tin cá nhân, skills, mục tiêu theo ý bạn.

---

## 🚀 BƯỚC 6: DEPLOY LÊN GITHUB PAGES

### 6.1. Tạo GitHub Repository

1. Truy cập: https://github.com/new
2. Repository name: `hugo-blog` (hoặc tên bạn muốn)
3. Visibility: **Public**
4. **Không** check "Add README" (vì đã có)
5. Create repository

### 6.2. Push code lên GitHub

```powershell
# Trong thư mục project
cd C:\Projects\hugo-blog

# Init git (nếu chưa có)
git init

# Add all files
git add .

# Commit
git commit -m "Initial Hugo blog setup"

# Add remote (thay YOUR_USERNAME và REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# Push
git branch -M main
git push -u origin main
```

### 6.3. Enable GitHub Pages

1. Vào repository trên GitHub
2. **Settings** (tab trên cùng)
3. Sidebar bên trái → **Pages**
4. Source → Chọn: **GitHub Actions**
5. **Save**

### 6.4. Workflow tự động chạy

- Vào tab **Actions** → Sẽ thấy workflow "Deploy Hugo site to GitHub Pages" đang chạy
- Đợi ~1-2 phút để hoàn tất (dấu ✓ xanh)

### 6.5. Cập nhật baseURL

1. **Lấy URL GitHub Pages:**
   - Format: `https://YOUR_USERNAME.github.io/REPO_NAME/`
   - Ví dụ: `https://haiquy.github.io/hugo-blog/`

2. **Sửa file `config.toml`:**
   ```toml
   baseURL = "https://YOUR_USERNAME.github.io/REPO_NAME/"
   ```

3. **Commit và push lại:**
   ```powershell
   git add config.toml
   git commit -m "Update baseURL for GitHub Pages"
   git push
   ```

4. **Đợi workflow chạy lại** (~1-2 phút)

### 6.6. Truy cập blog online

Mở browser: `https://YOUR_USERNAME.github.io/REPO_NAME/`

**Verify:**
- [ ] Homepage load correctly
- [ ] All pages accessible
- [ ] CSS/JS load correctly
- [ ] Dark mode works
- [ ] Code highlighting works

---

## 📊 TROUBLESHOOTING

### Lỗi: "Error: Unable to locate config file"

**Nguyên nhân:** Đang ở sai thư mục

**Giải pháp:**
```powershell
cd C:\Projects\hugo-blog  # Di chuyển vào đúng thư mục
hugo version               # Verify Hugo working
```

### Lỗi: Code không có syntax highlighting

**Nguyên nhân:** Highlight.js chưa load

**Giải pháp:**
1. Check file `themes/simple/layouts/_default/baseof.html`
2. Verify có dòng:
   ```html
   <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js"></script>
   <script>hljs.highlightAll();</script>
   ```
3. Nếu thiếu thì add vào trước tag `</body>`

### Lỗi: GitHub Pages 404

**Nguyên nhân:** baseURL chưa đúng

**Giải pháp:**
1. Check `config.toml` → `baseURL` phải đúng format
2. Không có trailing slash thừa
3. Push lại và đợi workflow complete

### Dark mode không lưu state

**Nguyên nhân:** LocalStorage bị block hoặc script error

**Giải pháp:**
1. F12 → Console → check error
2. Verify file `themes/simple/static/js/theme-toggle.js` tồn tại
3. Clear browser cache và thử lại

---

## 📝 NEXT STEPS

### ✅ Sau khi test thành công local:

1. **Customize** theme theo ý thích (màu sắc, font)
2. **Thêm content** mới (thêm bài viết)
3. **Deploy** lên GitHub Pages
4. **Share** link blog với bạn bè / giảng viên

### 🎯 Advanced (Tùy chọn):

- **Custom Domain**: Mua domain và config DNS
- **Analytics**: Add Google Analytics
- **Comments**: Add Disqus/Giscus
- **Search**: Thêm search functionality
- **Performance**: Optimize images, minify CSS/JS

### 📚 học thêm:

- Hugo Documentation: https://gohugo.io/documentation/
- Hugo Themes: https://themes.gohugo.io/
- GitHub Pages: https://pages.github.com/

---

## 🎉 HOÀN THÀNH!

Bạn đã có:
- ✅ Hugo blog project hoàn chỉnh
- ✅ Theme responsive với dark mode
- ✅ 9 bài viết content
- ✅ Ready để deploy GitHub Pages

**Chúc bạn thành công!** 🚀

---

## 📞 Cần hỗ trợ?

- Xem lại `README.md` trong project
- Xem `walkthrough.md` cho thông tin chi tiết
- Check Hugo docs: https://gohugo.io/

**Happy Blogging! 💻✨**
