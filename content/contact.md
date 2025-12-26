---
title: "Contact"
date: 2025-12-25
layout: "single"
---

# Liên hệ với mình

Bạn cần hỗ trợ hoặc muốn sử dụng dịch vụ? Điền form bên dưới nhé!

## Form liên hệ
<form id="contactForm" class="contact-form">
<div class="form-group">
<label for="name">Tên của bạn *</label>
<input type="text" id="name" name="name" required placeholder="Nguyễn Văn A">
</div>
<div class="form-group">
<label for="email">Email *</label>
<input type="email" id="email" name="email" required placeholder="example@gmail.com">
</div>
<div class="form-group">
<label for="service">Loại dịch vụ *</label>
<select id="service" name="service" required>
<option value="">-- Chọn dịch vụ --</option>
<option value="code">Tư vấn Code / Debug</option>
<option value="facebook">Tăng Like/Follow Facebook</option>
<option value="nhau">Tìm người đi nhậu 🍺</option>
<option value="other">Khác</option>
</select>
</div>
<div class="form-group">
<label for="message">Nội dung *</label>
<textarea id="message" name="message" rows="6" required placeholder="Mô tả chi tiết yêu cầu của bạn..."></textarea>
</div>
<button type="submit" class="submit-btn">Gửi tin nhắn</button>
</form>
<div id="formMessage" class="form-message"></div>

## Thông tin liên hệ

📧 **Email**: [quysun2356@gmail.com](mailto:quysun2356@gmail.com)  
📱 **Facebook**: [Hải Quý](https://www.facebook.com/HaiQuyThatTha24092003)  
🎵 **TikTok**: [@boiboi_249](https://www.tiktok.com/@boiboi_249)  
📺 **YouTube**: [Hải Quý Channel](https://www.youtube.com/@haiquythattha12a97)

---

## Dịch vụ cung cấp

### 1. 💙 Tăng Like/Follow Facebook
- Tăng tương tác thật
- Giá cả hợp lý
- Uy tín, bảo mật

### 2. 💻 Tư vấn Code
- Java, JavaScript
- An Ninh Mạng
- Review code, Debug

### 3. 🍻 Đi nhậu cuối tuần
- Hòa đồng, vui vẻ
- Khu vực TP.HCM
- Liên hệ sớm để book lịch!

<script>
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        service: document.getElementById('service').value,
        message: document.getElementById('message').value
    };
    
    // Hiển thị thông báo
    const messageDiv = document.getElementById('formMessage');
    messageDiv.style.display = 'block';
    messageDiv.className = 'form-message success';
    messageDiv.innerHTML = `
        <h3>✅ Đã nhận tin nhắn!</h3>
        <p>Cảm ơn <strong>${formData.name}</strong>! Mình sẽ phản hồi qua email <strong>${formData.email}</strong> trong vòng 24h.</p>
        <p><em>Dịch vụ: ${formData.service}</em></p>
    `;
    
    // Reset form
    this.reset();
    
    // Scroll to message
    messageDiv.scrollIntoView({ behavior: 'smooth' });
    
    // Auto hide after 5s
    setTimeout(() => {
        messageDiv.style.display = 'none';
    }, 5000);
});
</script>

<style>
.contact-form {
    max-width: 600px;
    margin: 30px 0;
}

.form-group {
    margin-bottom: 20px;
}

.form-group label {
    display: block;
    font-weight: 600;
    margin-bottom: 8px;
    color: var(--primary-dark);
}

.form-group input,
.form-group select,
.form-group textarea {
    width: 100%;
    padding: 12px;
    border: 1px solid var(--border-gray);
    border-radius: 4px;
    font-family: var(--font-body);
    font-size: 16px;
    transition: border-color 0.3s ease;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
    outline: none;
    border-color: var(--accent-cyan);
}

.submit-btn {
    background: var(--primary-dark);
    color: #fff;
    padding: 15px 40px;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
}

.submit-btn:hover {
    background: var(--accent-coral);
    transform: translateY(-2px);
}

.form-message {
    display: none;
    padding: 20px;
    margin: 20px 0;
    border-radius: 4px;
    border-left: 4px solid var(--accent-cyan);
    background: var(--bg-white);
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.form-message.success {
    border-left-color: #27ae60;
}

.form-message h3 {
    margin-top: 0;
    color: #27ae60;
}
</style>
