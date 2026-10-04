# 💍 Hướng Dẫn Tùy Chỉnh & Triển Khai Website Lễ Dạm Ngõ
## 💑 Ngân Phương & Nhật Long 💑

Website được xây dựng theo phong cách **Storytelling Landing Page cao cấp**, sử dụng **HTML, CSS và JavaScript thuần** (Vanilla JS). Giao diện tối ưu hoàn hảo cho điện thoại thông minh (Mobile First), hiệu ứng cuộn mượt mà, bộ đếm ngày yêu nhau và nhạc nền lãng mạn.

---

## 🛠️ Hướng Dẫn Chỉnh Sửa Nội Dung (Customization Guide)

### 1. Thay Đổi Tên Cặp Đôi, Ngày Lễ & Ngày Bắt Đầu Yêu
Mở file [`script.js`](file:///c:/Users/ACER/Downloads/Damngo/script.js#L11-L17) và chỉnh sửa phần `CONFIG.couple`:

```javascript
const CONFIG = {
    couple: {
        bride: "Ngân Phương",
        groom: "Nhật Long",
        eventTitle: "Lễ Dạm Ngõ",
        eventDateDisplay: "20 . 10 . 2024", // Ngày hiển thị trên Hero Banner
        loveStartDate: "2021-02-15"         // Định dạng YYYY-MM-DD để chạy đồng hồ đếm ngày yêu
    },
    ...
```

---

### 2. Thêm, Xóa Hoặc Chỉnh Sửa Album Ảnh (Gallery)
Mở file [`script.js`](file:///c:/Users/ACER/Downloads/Damngo/script.js#L41-L135), tìm mảng `CONFIG.gallery`.

- **Thêm ảnh mới**: Thêm một đoạn object như sau vào vị trí mong muốn trong mảng:
```javascript
{
    id: 15,
    src: "./duong-dan-anh-moi.jpg",
    caption: "Tiêu đề bức ảnh",
    desc: "Mô tả ngắn cho khoảnh khắc này"
},
```

- **Thêm đoạn thông điệp xen giữa**:
```javascript
{
    type: "quote",
    text: "Những khoảnh khắc hôm nay sẽ trở thành ký ức đẹp theo chúng ta suốt cuộc đời."
},
```

---

### 3. Đổi Nội Dung Lời Cảm Ơn Cuối Trang
Mở file [`index.html`](file:///c:/Users/ACER/Downloads/Damngo/index.html#L140-L157) và chỉnh sửa đoạn văn bản trong thẻ `<p class="thankyou-body">`.

---

### 4. Thay Đổi Nhạc Nền
Mở file [`index.html`](file:///c:/Users/ACER/Downloads/Damngo/index.html#L28-L30), thay URL nhạc trong thẻ `<source>` bằng link MP3 mới của bạn.

---

## 🚀 Hướng Dẫn Triển Khai (Deployment Guide)

Bạn có thể dễ dàng tải toàn bộ thư mục này lên các dịch vụ hosting miễn phí tốt nhất hiện nay:

1. **GitHub Pages**:
   - Đưa source code lên một repository GitHub public.
   - Nhấn vào **Settings** > **Pages** > Chọn branch `main` và ấn **Save**.

2. **Netlify**:
   - Truy cập [Netlify Drop](https://app.netlify.com/drop).
   - Kéo thả toàn bộ thư mục `Damngo` vào trang web để có ngay link chia sẻ trong 5 giây!

3. **Vercel**:
   - Import dự án qua ứng dụng Vercel CLI hoặc kết nối GitHub.
