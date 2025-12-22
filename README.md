# Blog Hải Quý Onii-chan

Blog chia sẻ kiến thức về Network Programming, Java và JavaScript - Dự án bài tập đại học.

## 🚀 Giới thiệu

Đây là một blog tĩnh được xây dựng bằng Hugo, tập trung vào các chủ đề:
- ☕ **Java**: Lập trình hướng đối tượng, Collections, và nhiều hơn
- 🟨 **JavaScript**: DOM manipulation, Async programming
- 🌐 **Network Programming**: Mô hình OSI, địa chỉ IP, lập trình mạng

## 📋 Yêu cầu hệ thống

- [Hugo](https://gohugo.io/) phiên bản 0.120.0 hoặc mới hơn
- Git

## 🛠️ Cài đặt

### 1. Cài đặt Hugo

**Windows:**
```powershell
choco install hugo-extended
```

**macOS:**
```bash
brew install hugo
```

**Linux:**
```bash
snap install hugo
```

### 2. Clone repository

```bash
git clone <repository-url>
cd crimson-kepler
```

## 🎨 Chạy local

Để preview blog trên máy local:

```bash
hugo server -D
```

Sau đó mở trình duyệt và truy cập: `http://localhost:1313`

## 🏗️ Build cho production

Để build trang web tĩnh:

```bash
hugo
```

Nội dung build sẽ nằm trong thư mục `public/`.

## 🚢 Deploy lên GitHub Pages

### Phương pháp 1: Tự động với GitHub Actions (Khuyến nghị)

1. Push code lên GitHub repository
2. Vào **Settings > Pages** của repository
3. Chọn **Source**: GitHub Actions
4. Workflow `.github/workflows/hugo.yml` sẽ tự động chạy khi bạn push code lên nhánh `main`
5. Cập nhật `baseURL` trong `config.toml` thành URL GitHub Pages của bạn (ví dụ: `https://username.github.io/repository/`)

### Phương pháp 2: Manual deploy

Xem hướng dẫn chi tiết trong file `deploy_prompt.txt`.

## 📁 Cấu trúc dự án

```
crimson-kepler/
├── config.toml              # Cấu hình Hugo
├── content/                 # Nội dung blog
│   ├── blog/
│   │   ├── java/           # Bài viết Java
│   │   ├── javascript/     # Bài viết JavaScript
│   │   └── network/        # Bài viết Network
│   └── profile.md          # Trang profile
├── themes/simple/          # Theme tùy chỉnh
│   ├── layouts/            # HTML templates
│   └── static/             # CSS, JavaScript, assets
└── .github/workflows/      # GitHub Actions
```

## ✨ Tính năng

- ✅ Thiết kế tối giản, sạch sẽ
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Dark/Light mode toggle
- ✅ Syntax highlighting cho code
- ✅ Taxonomies (Categories, Tags)
- ✅ Tự động deploy với GitHub Actions
- ✅ SEO-friendly

## 📝 Thêm bài viết mới

Tạo file markdown mới trong thư mục tương ứng:

```bash
hugo new content/blog/java/ten-bai-viet.md
```

Hoặc tạo file thủ công với frontmatter:

```markdown
---
title: "Tiêu đề bài viết"
date: 2025-12-22T10:00:00+07:00
categories: ["Java"]
tags: ["tag1", "tag2"]
draft: false
---

Nội dung bài viết...
```

## 🎯 Customization

### Thay đổi màu sắc

Chỉnh sửa CSS variables trong:
- `themes/simple/static/css/style.css` (Light mode)
- `themes/simple/static/css/dark-mode.css` (Dark mode)

### Thay đổi menu

Chỉnh sửa section `[menu]` trong `config.toml`

## 📄 License

Dự án này được tạo cho mục đích học tập - Bài tập đại học.

## 👤 Tác giả

Hải Quý Onii-chan

---

**Happy Coding! 💻**
