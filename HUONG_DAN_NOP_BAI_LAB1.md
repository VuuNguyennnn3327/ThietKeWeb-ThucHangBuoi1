# HƯỚNG DẪN HOÀN THIỆN, DEPLOY VERCEL & NỘP BÀI THỰC HÀNH LAB 1-2
**Môn học:** Thiết Kế Web - GV: Nguyễn Thiện Dương  
**Đề tài E-commerce:** The Green Corner (Phát triển theo mô hình 100% chuẩn Organi)  
**Sinh viên thực hiện:** Nguyễn Trường Vũ - MSSV: 6651071094  

---

## 📁 I. CẤU TRÚC THƯ MỤC DỰ ÁN (Chuẩn 100% Yêu Cầu Của Giảng Viên)

```text
6651071094_NguyenTruongVu_LAB1/
│
├── index.html            # Trang chủ Organi (Banner toàn màn hình, Categories, Featured, Triple Column, Video, Blog)
├── shop.html             # Trang cửa hàng (Sidebar lọc theo danh mục & giá, sắp xếp, phân trang)
├── shop-details.html     # Trang chi tiết sản phẩm (Gallery ảnh, thông số chăm sóc, đánh giá)
├── cart.html             # Trang giỏ hàng tương tác (Thêm/bớt số lượng, xóa, mã coupon, tính tiền)
├── checkout.html         # Trang thanh toán (Form giao hàng, chọn COD / VietQR quét mã chuyển khoản)
├── blog.html             # Cẩm nang chăm sóc cây & mẹo làm vườn
├── contact.html          # Trang liên hệ (Bản đồ Google Maps, form gửi tin nhắn, FAQ)
├── 404.html              # Trang thông báo lỗi 404 tùy biến chuyên nghiệp
├── vercel.json           # File cấu hình chuẩn tối ưu hiệu năng và định tuyến cho Vercel
├── .gitignore            # Bỏ qua các file rác của hệ điều hành và trình soạn thảo
│
├── Images/               # Chứa toàn bộ hình ảnh sản phẩm & banner
│   ├── Cây Trầu Bà Lá Xẻ Đột Biến.jpg
│   ├── Cây Bắt Ruồi.jpg
│   ├── Cây Dong Kiểng.jpg
│   ├── Cây Dứa Cảnh.jpg
│   ├── Cây Rau Má Cản.jpg
│   └── Cây Dương Xỉ.jpg
│
├── Scripts/              # Chứa mã Javascript xử lý toàn bộ logic hệ thống
│   └── main.js           # Database sản phẩm, LocalStorage Cart, Wishlist, Quick View, Live Search, Toasts
│
├── Sounds/               # Chứa file audio theo yêu cầu đề bài
│   └── notification.mp3  # Âm thanh thông báo khi thao tác giỏ hàng / đặt hàng
│
├── Styles/               # Chứa file giao diện CSS
│   └── style.css         # Hệ thống thiết kế chuẩn Organi, Animation, Responsive mọi thiết bị
│
└── Videos/               # Chứa file video theo yêu cầu đề bài
    └── intro-video.mp4   # Video hướng dẫn trồng & chăm sóc cây cảnh
```

---

## 🚀 II. CÁCH ĐẨY LÊN GITHUB & LIÊN KẾT VỚI VERCEL ĐỂ DEPLOY LÊN DOMAIN

### BƯỚC 1: Đẩy mã nguồn lên GitHub
1. Mở cửa sổ dòng lệnh (Terminal / PowerShell / Git Bash) tại thư mục `6651071094_NguyenTruongVu_LAB1`.
2. Chạy lần lượt các lệnh:
   ```bash
   git init
   git add .
   git commit -m "Khoi tao website The Green Corner day du cau hinh Vercel"
   ```
3. Đăng nhập vào [github.com](https://github.com), bấm **New repository**:
   * Đặt tên repository: `6651071094_NguyenTruongVu_LAB1`
   * Chọn chế độ: **Public**
   * Bấm **Create repository**
4. Đẩy mã nguồn lên:
   ```bash
   git remote add origin https://github.com/<tai-khoan-github-cua-ban>/6651071094_NguyenTruongVu_LAB1.git
   git branch -M main
   git push -u origin main
   ```

---

### BƯỚC 2: Liên kết GitHub với Vercel để Deploy tự động
1. Truy cập trang web chính thức của Vercel: [https://vercel.com](https://vercel.com)
2. Bấm **Log In** hoặc **Sign Up** -> Chọn **Continue with GitHub** để liên kết tài khoản GitHub của bạn.
3. Sau khi vào màn hình quản lý (Dashboard), bấm nút **Add New...** (hoặc **New Project**) ở góc phải:
   * Chọn **Project**
   * Trong danh sách các repository GitHub, tìm thấy repo `6651071094_NguyenTruongVu_LAB1`
   * Bấm nút **Import** bên cạnh.
4. Ở màn hình cấu hình dự án (*Configure Project*):
   * **Project Name:** Để mặc định `6651071094-nguyentruongvu-lab1`
   * **Framework Preset:** Để `Other` (Vercel tự động nhận diện dự án HTML/CSS/JS tĩnh)
   * **Root Directory:** Để `./` (mặc định)
   * Các phần Build & Environment Variables không cần chỉnh sửa gì vì đã có sẵn file `vercel.json`.
5. Bấm nút **Deploy** (màu xanh).
6. Chờ khoảng 15 đến 20 giây:
   * Vercel sẽ tự động tải mã nguồn, nén tài nguyên, kích hoạt SSL miễn phí và thông báo *Congratulations!*
   * Bạn sẽ nhận được ngay 1 tên miền miễn phí cực nhanh của Vercel có dạng:
     `https://6651071094-nguyentruongvu-lab1.vercel.app`

---

### BƯỚC 3: Gắn Tên Miền Riêng (Custom Domain) Trên Vercel
Nếu bạn đã mua hoặc có sẵn tên miền (ví dụ: `.vn`, `.com`, `.shop`, `.id.vn`...):
1. Trên giao diện dự án tại Vercel, chọn tab **Settings** -> mục **Domains** ở menu bên trái.
2. Nhập tên miền của bạn vào ô (Ví dụ: `thegreencorner.vn` hoặc `shop.yourname.com`) rồi bấm **Add**.
3. Vercel sẽ hiển thị bảng hướng dẫn trỏ DNS cực kỳ rõ ràng:
   * **Đối với tên miền gốc (`yourdomain.com`):**
     * Loại bản ghi (Type): `A`
     * Tên (Name): `@`
     * Giá trị (Value): `76.76.21.21`
   * **Đối với tên miền phụ (`www.yourdomain.com` hoặc `subdomain`):**
     * Loại bản ghi (Type): `CNAME`
     * Tên (Name): `www` (hoặc tên subdomain)
     * Giá trị (Value): `cname.vercel-dns.com`
4. Vào trang quản lý tên miền (nơi bạn mua domain như Inet, Tenten, Mắt Bão, Namecheap, Cloudflare...), thêm 2 bản ghi DNS trên.
5. Quay lại Vercel, bấm **Refresh**. Chỉ sau 1 đến 5 phút, Vercel sẽ kiểm tra thành công, tự động cấp chứng chỉ bảo mật HTTPS (SSL) và website sẽ chạy trực tiếp trên tên miền riêng của bạn!

> 💡 **Điểm mạnh khi Deploy qua Vercel:**
> - Tốc độ CDN toàn cầu siêu nhanh.
> - Hỗ trợ file `vercel.json` định tuyến đường dẫn sạch (`cleanUrls: true`).
> - Mỗi khi bạn chỉnh sửa code và `git push` lên GitHub, Vercel sẽ **tự động deploy lại bản mới nhất** mà bạn không cần phải làm thủ công!

---

## 📝 IV. QUY TRÌNH NỘP BÀI THEO YÊU CẦU CỦA THẦY DƯƠNG

### 1. Quay video demo (Mục 5)
* Mở trình duyệt truy cập vào link Vercel đã deploy thành công.
* Dùng `Win + G` hoặc phần mềm quay màn hình để ghi lại các thao tác:
  * Banner toàn màn hình, chuyển slide.
  * Thử tìm kiếm trực tiếp (Live Search gõ từ khóa).
  * Xem nhanh sản phẩm (Quick View Modal).
  * Thêm vào giỏ hàng, mở Mini Cart Drawer.
  * Tăng giảm số lượng, nhập mã giảm giá `MAMXANH` tại `cart.html`.
  * Trang thanh toán `checkout.html`, chọn chuyển khoản VietQR hiện mã ngân hàng.
* Xuất file video (ví dụ `demo_lab1.mp4`) và đẩy lên repository GitHub.

### 2. Tạo file PDF nộp trên LMS (Mục 6)
Soạn 1 trang Word rồi xuất sang `.pdf` với nội dung:

```text
BÀI THỰC HÀNH BUỔI 1-2 - THIẾT KẾ WEB
Giảng viên hướng dẫn: ThS. Nguyễn Thiện Dương

Họ và tên sinh viên: NGUYỄN TRƯỜNG VŨ
Mã số sinh viên: 6651071094
Đề tài: Website thương mại điện tử Cây Cảnh & Không Gian Xanh (The Green Corner)

1. Đường dẫn Repository GitHub:
https://github.com/<tai-khoan-github-cua-ban>/6651071094_NguyenTruongVu_LAB1

2. Đường dẫn Website đã triển khai (Vercel / Domain):
https://6651071094-nguyentruongvu-lab1.vercel.app
(Hoặc tên miền riêng của bạn nếu có: https://thegreencorner.vn)

3. Video demo dự án:
Đã đính kèm trong repository tại file /demo_lab1.mp4
```
Nộp file PDF này lên LMS là hoàn tất 100%!
