---
title: "Git Flow & Version Control: Quy trình làm việc nhóm chuyên nghiệp"
date: 2025-12-28
description: "Hướng dẫn các lệnh Git cơ bản và quy trình Git Flow chuẩn (Feature, Release, Hotfix) để làm việc hiệu quả trong team dự án."
image: "/images/custom/git-workflow.png"
categories: ["DevOps", "Tools"]
tags: ["Git", "Version Control", "Teamwork", "Workflow"]
draft: false
---

*Quy trình làm việc với Git chuyên nghiệp cho dự án Frontend/Fullstack/Backend*

---

## 🧠 1. Giới thiệu

Trong lập trình chuyên nghiệp, **Version Control System (VCS)** — đặc biệt là **Git** — là kỹ năng không thể thiếu. Git cho phép bạn:
*   Lưu lịch sử thay đổi mã nguồn (History).
*   Làm việc nhóm hiệu quả (Collaboration).
*   Theo dõi lỗi/cải tiến dễ dàng.
*   Hỗ trợ CI/CD và deployment tự động.

Tuy nhiên, chỉ biết vài lệnh Git cơ bản thôi là chưa đủ — bạn cần nắm **workflow (quy trình làm việc)** đúng chuẩn để tránh “conflict”, giữ *main branch* luôn ổn định.

---

## 📌 3. Git Flow là gì?

**Git Flow** là một mô hình *branching model* (mô hình phân nhánh) giúp tổ chức công việc theo các giai đoạn phát triển: feature, release, hotfix… thay vì commit trực tiếp vào `main` hoặc `develop`.

---

## 🎯 4. Các loại nhánh trong Git Flow

### ✔ **main (hoặc master)**
*   Chứa mã nguồn *production-ready* — luôn ở trạng thái ổn định.
*   **Không code trực tiếp** ở đây.
*   Mọi commit ở `main` thường được gắn **tag version** (ví dụ: `v1.0.0`).

### ✔ **develop**
*   Nhánh tích hợp chính để *tập hợp các feature hoàn chỉnh*.
*   Dev merge feature branch vào `develop` để kiểm thử chung.

### ✔ **feature Branches**
*   Tạo ra để *phát triển 1 tính năng mới*.
*   Tiền tố: `feature/login-auth`, `feature/cart`.
*   Xuất phát từ `develop` → merge lại vào `develop`.

### ✔ **hotfix Branches**
*   Dùng để sửa lỗi *gấp trên production*.
*   Tạo từ `main` (!quan trọng) → merge vào cả `main` và `develop`.

---

## 🔄 5. Quy trình Git Flow chi tiết

### 📌 5.1 Phát triển tính năng (Feature Workflow)

**1. Tạo feature branch từ develop:**
```bash
git checkout develop
git checkout -b feature/login-page
```

**2. Code & Commit:**
```bash
git add .
git commit -m "feat: add login UI"
```

**3. Merge lại vào develop:**
```bash
git checkout develop
git merge feature/login-page
git branch -d feature/login-page
```

### 📌 5.2 Hỗ trợ Hotfix (Sửa lỗi nóng)

Khi có bug trên production (nhánh `main`), ta không thể đợi feature mới xong.

**1. Tạo hotfix từ main:**
```bash
git checkout main
git checkout -b hotfix/fix-login-error
```

**2. Sửa lỗi & Commit.**

**3. Merge vào cả Main và Develop:**
```bash
# Vào main
git checkout main
git merge hotfix/fix-login-error
git tag -a v1.0.1 -m "Fix login error"

# Vào develop
git checkout develop
git merge hotfix/fix-login-error
```

---

## 🧪 6. Webstorm / IDE Tips

Hầu hết các IDE hiện đại (IntelliJ, VS Code) đều hỗ trợ Git Graph. Tuy nhiên, hiểu rõ dòng lệnh giúp bạn xử lý các tình huống conflict phức tạp tốt hơn.

---

## 💡 7. Kết luận

Git không chỉ là lệnh commit hay push — *workflow đúng mới giúp bạn làm việc hiệu quả*. Git Flow giúp:
✔ Tách biệt tính năng & release.
✔ Hỗ trợ bugfix nhanh trên production (Hotfix).
✔ Giữ lịch sử commit sạch đẹp.

*Hãy áp dụng Git Flow ngay từ dự án cá nhân để rèn luyện thói quen chuyên nghiệp!*
