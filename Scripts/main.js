/**
 * ========================================================
 * THE GREEN CORNER - CORE JAVASCRIPT SYSTEM
 * E-commerce Engine, Cart, Wishlist, Modals & Micro-interactions
 * ========================================================
 */

// Ngăn chặn chạy trùng lặp khi nạp cả Scripts/main.js và scripts/main.js
if (window.__TGC_INITIALIZED__) {
    console.log("The Green Corner Engine already initialized.");
} else {
    window.__TGC_INITIALIZED__ = true;

// 1. DỮ LIỆU SẢN PHẨM HỆ THỐNG (Database Sản phẩm)
const PRODUCTS = [
    {
        id: 1,
        name: "Cây Trầu Bà Lá Xẻ Đột Biến",
        scientificName: "Monstera Deliciosa Albo Variegata",
        category: "Cây trong nhà",
        categories: ["Cây trong nhà", "Cây phong thủy", "Độc lạ"],
        price: 850000,
        oldPrice: 1050000,
        rating: 5.0,
        reviewsCount: 38,
        image: "Images/Cây Trầu Bà Lá Xẻ Đột Biến.jpg",
        thumbnails: [
            "Images/Cây Trầu Bà Lá Xẻ Đột Biến.jpg",
            "Images/Cây Bắt Ruồi.jpg",
            "Images/Cây Dong Kiểng.jpg",
            "Images/Cây Dương Xỉ.jpg"
        ],
        isFeatured: true,
        isSale: true,
        discountPercent: 19,
        tag: "HOT",
        stock: 14,
        sku: "TGC-MON-01",
        description: "Dòng cây đột biến cẩm thạch quý hiếm bậc nhất với các vệt màu trắng tinh khôi điểm xuyết trên nền lá xẻ tự nhiên. Thích hợp trang trí phòng khách sang trọng, văn phòng giám đốc và không gian kiến trúc hiện đại.",
        careGuide: {
            light: "Ánh sáng gián tiếp 60-70%, tránh nắng gắt buổi trưa chiếu trực diện.",
            water: "Tưới 2-3 lần/tuần khi bề mặt giá thể khô khoảng 2-3cm.",
            temp: "Nhiệt độ lý tưởng từ 20°C - 30°C, phòng điều hòa thoáng khí.",
            fertilizer: "Bón phân trùn quế hoặc NPK hữu cơ pha loãng mỗi tháng 1 lần."
        }
    },
    {
        id: 2,
        name: "Cây Bắt Ruồi",
        scientificName: "Dionaea Muscipula (Venus Flytrap)",
        category: "Độc lạ",
        categories: ["Độc lạ", "Cây để bàn"],
        price: 160000,
        oldPrice: 1950000,
        rating: 4.8,
        reviewsCount: 24,
        image: "Images/Cây Bắt Ruồi.jpg",
        thumbnails: [
            "Images/Cây Bắt Ruồi.jpg",
            "Images/Cây Trầu Bà Lá Xẻ Đột Biến.jpg",
            "Images/Cây Rau Má Cản.jpg",
            "Images/Cây Dứa Cảnh.jpg"
        ],
        isFeatured: true,
        isSale: true,
        discountPercent: 18,
        tag: "ĐỘC LẠ",
        stock: 22,
        sku: "TGC-VFT-02",
        description: "Thực vật ăn thịt độc đáo với các phiến lá dạng kẹp hai mảnh có gai cảm ứng siêu nhạy. Khi côn trùng chạm vào 2 lần, bẫy sẽ khép lại trong 0.1 giây. Cực kỳ lôi cuốn cho bàn làm việc, góc sáng tạo.",
        careGuide: {
            light: "Ưa nắng nhiều, cần 4-6 giờ ánh sáng mỗi ngày.",
            water: "Dùng nước mưa, nước tinh khiết hoặc nước cất, khay lót đáy chậu luôn có 1-2cm nước.",
            temp: "Thích nghi tốt 18°C - 32°C.",
            fertilizer: "Tuyệt đối không bón phân hóa học; cây tự hấp thu dinh dưỡng từ côn trùng."
        }
    },
    {
        id: 3,
        name: "Cây Dong Kiểng Tam Thể",
        scientificName: "Stromanthe Sanguinea 'Triostar'",
        category: "Cây trong nhà",
        categories: ["Cây trong nhà", "Cây để bàn"],
        price: 190000,
        oldPrice: 250000,
        rating: 4.9,
        reviewsCount: 19,
        image: "Images/Cây Dong Kiểng.jpg",
        thumbnails: [
            "Images/Cây Dong Kiểng.jpg",
            "Images/Cây Dương Xỉ.jpg",
            "Images/Cây Trầu Bà Lá Xẻ Đột Biến.jpg",
            "Images/Cây Rau Má Cản.jpg"
        ],
        isFeatured: true,
        isSale: true,
        discountPercent: 24,
        tag: "SALE",
        stock: 18,
        sku: "TGC-STR-03",
        description: "Bản hòa tấu màu sắc tuyệt mỹ với mặt trên loang lổ trắng - xanh ngọc và mặt dưới lá màu hồng mận quyến rũ. Vào ban đêm, lá cây xếp dựng đứng lại như đôi bàn tay cầu nguyện bình an.",
        careGuide: {
            light: "Ánh sáng tán xạ vừa phải, không để trực tiếp dưới ánh nắng mặt trời gắt.",
            water: "Tưới đều đặn 2 lần/tuần, giữ ẩm đều cho bầu đất.",
            temp: "20°C - 28°C, tránh gió lùa mạnh.",
            fertilizer: "Phun dưỡng lá hữu cơ định kỳ 3 tuần/lần."
        }
    },
    {
        id: 4,
        name: "Cây Dứa Cảnh Nến Đỏ",
        scientificName: "Bromeliad Guzmania Lingulata",
        category: "Cây phong thủy",
        categories: ["Cây phong thủy", "Cây để bàn"],
        price: 150000,
        oldPrice: 180000,
        rating: 4.7,
        reviewsCount: 16,
        image: "Images/Cây Dứa Cảnh.jpg",
        thumbnails: [
            "Images/Cây Dứa Cảnh.jpg",
            "Images/Cây Trầu Bà Lá Xẻ Đột Biến.jpg",
            "Images/Cây Dong Kiểng.jpg",
            "Images/Cây Bắt Ruồi.jpg"
        ],
        isFeatured: true,
        isSale: false,
        discountPercent: 0,
        tag: "MAY MẮN",
        stock: 30,
        sku: "TGC-BRO-04",
        description: "Hoa nến nở rực rỡ màu đỏ cam hình ngọn đuốc, bền bỉ từ 2 đến 3 tháng. Trong phong thủy, loài cây này biểu trưng cho ngọn lửa tài lộc, sự hoan hỷ và may mắn hanh thông trong công việc.",
        careGuide: {
            light: "Thích hợp ánh sáng văn phòng, đèn huỳnh quang hoặc gần cửa sổ.",
            water: "Đổ nước vào phễu giữa các nách lá, thay nước mỗi tuần một lần.",
            temp: "18°C - 28°C.",
            fertilizer: "Hòa tan phân bón vi lượng phun nhẹ lên lá mỗi 2 tháng."
        }
    },
    {
        id: 5,
        name: "Cây Rau Má Cảnh Mini",
        scientificName: "Hydrocotyle Verticillata (Cỏ Đồng Tiền)",
        category: "Cây để bàn",
        categories: ["Cây để bàn", "Cây thủy sinh", "Cây phong thủy"],
        price: 120000,
        oldPrice: 150000,
        rating: 5.0,
        reviewsCount: 52,
        image: "Images/Cây Rau Má Cản.jpg",
        thumbnails: [
            "Images/Cây Rau Má Cản.jpg",
            "Images/Cây Dương Xỉ.jpg",
            "Images/Cây Bắt Ruồi.jpg",
            "Images/Cây Dứa Cảnh.jpg"
        ],
        isFeatured: true,
        isSale: true,
        discountPercent: 20,
        tag: "BEST SELLER",
        stock: 45,
        sku: "TGC-HYD-05",
        description: "Những chiếc lá tròn xoe hình đồng xu xanh biếc sum sê tượng trưng cho sự dồi dào, thuận buồm xuôi gió. Cây có thể trồng đất xốp hoặc trồng thủy sinh trong bình thủy tinh trong suốt rất duyên dáng.",
        careGuide: {
            light: "Rất ưa sáng, cần nơi thoáng đãng hoặc gần cửa sổ đón sáng.",
            water: "Rất thích nước, luôn giữ đất ẩm ướt hoặc thay nước thủy sinh 1 lần/tuần.",
            temp: "Chịu nhiệt tốt từ 16°C - 35°C.",
            fertilizer: "Nhỏ 2-3 giọt dinh dưỡng thủy canh mỗi lần thay nước."
        }
    },
    {
        id: 6,
        name: "Cây Dương Xỉ Cổ Đại",
        scientificName: "Nephrolepis Exaltata (Boston Fern)",
        category: "Cây trong nhà",
        categories: ["Cây trong nhà", "Cây ban công"],
        price: 140000,
        oldPrice: 175000,
        rating: 4.8,
        reviewsCount: 29,
        image: "Images/Cây Dương Xỉ.jpg",
        thumbnails: [
            "Images/Cây Dương Xỉ.jpg",
            "Images/Cây Trầu Bà Lá Xẻ Đột Biến.jpg",
            "Images/Cây Dong Kiểng.jpg",
            "Images/Cây Rau Má Cản.jpg"
        ],
        isFeatured: true,
        isSale: false,
        discountPercent: 0,
        tag: "LỌC KHÍ",
        stock: 25,
        sku: "TGC-FER-06",
        description: "Tán lá mềm mại rủ xuống như dải lụa xanh mát mắt. Theo nghiên cứu không gian của NASA, Dương xỉ là quán quân lọc độc chất formaldehyde, khói thuốc và bụi mịn trong không khí.",
        careGuide: {
            light: "Ánh sáng nhẹ bán râm, thích hợp treo ban công râm mát hoặc góc nhà tắm thoáng.",
            water: "Phun sương giữ ẩm cho tán lá mỗi ngày, tưới gốc 2-3 lần/tuần.",
            temp: "18°C - 26°C, độ ẩm cao.",
            fertilizer: "Bón phân hữu cơ loãng 1 tháng/lần vào mùa sinh trưởng."
        }
    },
    {
        id: 7,
        name: "Cây Kim Tiền Phát Tài",
        scientificName: "Zamioculcas Zamiifolia",
        category: "Cây phong thủy",
        categories: ["Cây phong thủy", "Cây trong nhà", "Cây để bàn"],
        price: 260000,
        oldPrice: 320000,
        rating: 4.9,
        reviewsCount: 64,
        image: "https://images.unsplash.com/photo-1632207691143-643e2a9a9361?w=600&auto=format&fit=crop&q=80",
        thumbnails: [
            "https://images.unsplash.com/photo-1632207691143-643e2a9a9361?w=600&auto=format&fit=crop&q=80",
            "Images/Cây Trầu Bà Lá Xẻ Đột Biến.jpg",
            "Images/Cây Dong Kiểng.jpg"
        ],
        isFeatured: true,
        isSale: true,
        discountPercent: 18,
        tag: "HOT",
        stock: 20,
        sku: "TGC-ZAM-07",
        description: "Lá mọc đối xứng màu xanh đậm bóng bẩy, thân cây mọng nước dồi dào sức sống. Loài cây phong thủy số 1 biểu trưng cho tài lộc dồi dào, thăng quan tiến chức.",
        careGuide: {
            light: "Chịu bóng râm rất tốt, sống bền trong phòng điều hòa.",
            water: "Chỉ tưới khi đất khô hoàn toàn (khoảng 7-10 ngày/lần). Tránh úng rễ.",
            temp: "22°C - 32°C.",
            fertilizer: "Bón phân tan chậm 3 tháng/lần."
        }
    },
    {
        id: 8,
        name: "Cây Bàng Singapore Mini",
        scientificName: "Ficus Lyrata Dwarf",
        category: "Cây trong nhà",
        categories: ["Cây trong nhà", "Cây để bàn", "Cây phong thủy"],
        price: 290000,
        oldPrice: 350000,
        rating: 5.0,
        reviewsCount: 45,
        image: "https://images.unsplash.com/photo-1597055181300-e3633a917c9c?w=600&auto=format&fit=crop&q=80",
        thumbnails: [
            "https://images.unsplash.com/photo-1597055181300-e3633a917c9c?w=600&auto=format&fit=crop&q=80",
            "Images/Cây Trầu Bà Lá Xẻ Đột Biến.jpg",
            "Images/Cây Dương Xỉ.jpg"
        ],
        isFeatured: true,
        isSale: true,
        discountPercent: 17,
        tag: "SANG TRỌNG",
        stock: 16,
        sku: "TGC-FIC-08",
        description: "Dáng cây thẳng tắp kiêu hãnh với những phiến lá to bản hình đàn violon, gân lá sắc nét. Rất được ưa chuộng trong phong cách thiết kế nội thất Bắc Âu và Japandi tối giản.",
        careGuide: {
            light: "Cần nhiều ánh sáng khuếch tán, nên đặt gần ban công hoặc cửa sổ kính.",
            water: "Tưới 1-2 lần/tuần khi thấy đất se khô, lau bụi trên mặt lá thường xuyên.",
            temp: "20°C - 30°C.",
            fertilizer: "Bón phân giàu đạm vào mùa xuân và hè."
        }
    }
];

// 2. HELPER UTILITIES (Định dạng tiền tệ, sao đánh giá)
function formatCurrency(amount) {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount).replace('₫', 'đ');
}

function renderStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalf = rating - fullStars >= 0.5;
    let html = '';
    for (let i = 0; i < fullStars; i++) {
        html += '<i class="fa-solid fa-star"></i>';
    }
    if (hasHalf) {
        html += '<i class="fa-solid fa-star-half-stroke"></i>';
    }
    const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
        html += '<i class="fa-regular fa-star"></i>';
    }
    return html;
}

// 3. SOUND SYNTHESIZER (Hiệu ứng âm thanh ngọt ngào qua Web Audio API & Audio file fallback)
function playChimeSound() {
    try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (!AudioContext) return;
        const ctx = new AudioContext();
        
        // Tạo nốt ngân 1 (E6)
        const osc1 = ctx.createOscillator();
        const gain1 = ctx.createGain();
        osc1.type = 'sine';
        osc1.frequency.setValueAtTime(1318.51, ctx.currentTime);
        gain1.gain.setValueAtTime(0.12, ctx.currentTime);
        gain1.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.4);
        osc1.connect(gain1);
        gain1.connect(ctx.destination);
        osc1.start();
        osc1.stop(ctx.currentTime + 0.4);

        // Tạo nốt ngân 2 (G#6)
        setTimeout(() => {
            const osc2 = ctx.createOscillator();
            const gain2 = ctx.createGain();
            osc2.type = 'sine';
            osc2.frequency.setValueAtTime(1661.22, ctx.currentTime);
            gain2.gain.setValueAtTime(0.15, ctx.currentTime);
            gain2.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.5);
            osc2.connect(gain2);
            gain2.connect(ctx.destination);
            osc2.start();
            osc2.stop(ctx.currentTime + 0.5);
        }, 100);
    } catch (e) {
        // Fallback nhẹ nhàng
    }
}

// 4. TOAST NOTIFICATION SYSTEM
function showToast(message, type = 'success', duration = 3000) {
    let container = document.getElementById('toast-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toast-container';
        container.className = 'toast-container';
        document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `toast-item toast-${type}`;
    
    let icon = 'fa-check';
    if (type === 'info') icon = 'fa-info';
    if (type === 'warning') icon = 'fa-triangle-exclamation';

    toast.innerHTML = `
        <div class="toast-icon"><i class="fa-solid ${icon}"></i></div>
        <div class="toast-text">${message}</div>
        <button class="toast-close" onclick="this.parentElement.remove()">&times;</button>
        <div class="toast-progress"></div>
    `;

    container.appendChild(toast);
    playChimeSound();

    setTimeout(() => {
        toast.classList.add('toast-exit');
        setTimeout(() => toast.remove(), 350);
    }, duration);
}

// 5. STORAGE & STATE MANAGEMENT (Cart & Wishlist Engine)
const STORAGE_KEYS = {
    CART: 'tgc_cart_v1',
    WISHLIST: 'tgc_wishlist_v1',
    COUPON: 'tgc_coupon_v1'
};

function getCart() {
    try {
        const data = localStorage.getItem(STORAGE_KEYS.CART);
        return data ? JSON.parse(data) : [];
    } catch (e) {
        return [];
    }
}

function saveCart(cart) {
    localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify(cart));
    updateCartBadges();
    renderMiniCart();
}

function getWishlist() {
    try {
        const data = localStorage.getItem(STORAGE_KEYS.WISHLIST);
        return data ? JSON.parse(data) : [];
    } catch (e) {
        return [];
    }
}

function saveWishlist(list) {
    localStorage.setItem(STORAGE_KEYS.WISHLIST, JSON.stringify(list));
    updateWishlistBadges();
}

// 6. CART OPERATIONS
function addToCart(productIdOrName, qty = 1, openDrawer = false) {
    let product;
    if (typeof productIdOrName === 'number') {
        product = PRODUCTS.find(p => p.id === productIdOrName);
    } else {
        product = PRODUCTS.find(p => p.name === productIdOrName || p.id === parseInt(productIdOrName));
    }

    if (!product) {
        product = PRODUCTS[0];
    }

    const cart = getCart();
    const existingIndex = cart.findIndex(item => item.id === product.id);

    if (existingIndex > -1) {
        cart[existingIndex].quantity += qty;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            sku: product.sku,
            quantity: qty
        });
    }

    saveCart(cart);
    showToast(`Đã thêm <b>${product.name}</b> (${qty}) vào giỏ hàng!`, 'success');

    if (openDrawer) {
        openCartDrawer();
    }
}

function updateCartQty(productId, newQty) {
    let cart = getCart();
    const item = cart.find(i => i.id === productId);
    if (item) {
        if (newQty <= 0) {
            cart = cart.filter(i => i.id !== productId);
            showToast(`Đã xóa sản phẩm khỏi giỏ hàng!`, 'info');
        } else {
            item.quantity = newQty;
        }
        saveCart(cart);
        
        // Nếu đang ở trang cart.html thì cập nhật lại giao diện
        if (typeof renderCartPage === 'function') {
            renderCartPage();
        }
        if (typeof renderCheckoutOrder === 'function') {
            renderCheckoutOrder();
        }
    }
}

function removeFromCart(productId) {
    let cart = getCart();
    const item = cart.find(i => i.id === productId);
    const name = item ? item.name : 'Sản phẩm';
    cart = cart.filter(i => i.id !== productId);
    saveCart(cart);
    showToast(`Đã xóa <b>${name}</b> khỏi giỏ hàng`, 'info');

    if (typeof renderCartPage === 'function') {
        renderCartPage();
    }
    if (typeof renderCheckoutOrder === 'function') {
        renderCheckoutOrder();
    }
}

function clearCart() {
    if (confirm('Bạn có chắc chắn muốn xóa tất cả sản phẩm trong giỏ hàng?')) {
        saveCart([]);
        showToast('Giỏ hàng đã được làm trống', 'info');
        if (typeof renderCartPage === 'function') {
            renderCartPage();
        }
    }
}

function toggleWishlist(productId) {
    const list = getWishlist();
    const product = PRODUCTS.find(p => p.id === productId);
    const name = product ? product.name : 'Sản phẩm';
    const index = list.indexOf(productId);

    if (index > -1) {
        list.splice(index, 1);
        showToast(`Đã bỏ <b>${name}</b> khỏi mục yêu thích`, 'info');
    } else {
        list.push(productId);
        showToast(`Đã lưu <b>${name}</b> vào mục yêu thích!`, 'success');
    }
    saveWishlist(list);
    updateWishlistCardButtons();
}

// 7. HEADER BADGES & MINI CART DRAWER
function updateCartBadges() {
    const cart = getCart();
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const badges = document.querySelectorAll('.cart-badge');
    badges.forEach(badge => {
        badge.innerText = totalItems;
        badge.style.transform = 'scale(1.35)';
        setTimeout(() => badge.style.transform = 'scale(1)', 220);
    });

    const priceLabels = document.querySelectorAll('.header-cart-total');
    priceLabels.forEach(label => {
        label.innerText = formatCurrency(totalPrice);
    });
}

function updateWishlistBadges() {
    const list = getWishlist();
    const badges = document.querySelectorAll('.wishlist-badge');
    badges.forEach(badge => {
        badge.innerText = list.length;
    });
}

function updateWishlistCardButtons() {
    const list = getWishlist();
    document.querySelectorAll('[data-wishlist-id]').forEach(btn => {
        const id = parseInt(btn.getAttribute('data-wishlist-id'));
        if (list.includes(id)) {
            btn.classList.add('active');
            const icon = btn.querySelector('i');
            if (icon) {
                icon.className = 'fa-solid fa-heart';
            }
        } else {
            btn.classList.remove('active');
            const icon = btn.querySelector('i');
            if (icon) {
                icon.className = 'fa-regular fa-heart';
            }
        }
    });
}

// 8. MINI-CART DRAWER COMPONENT
function initMiniCartDrawer() {
    let drawer = document.getElementById('cart-drawer');
    if (!drawer) {
        drawer = document.createElement('div');
        drawer.id = 'cart-drawer';
        drawer.className = 'cart-drawer';
        drawer.innerHTML = `
            <div class="cart-drawer__overlay" onclick="closeCartDrawer()"></div>
            <div class="cart-drawer__body">
                <div class="cart-drawer__header">
                    <h3><i class="fa-solid fa-bag-shopping"></i> Giỏ Hàng Của Bạn</h3>
                    <button class="cart-drawer__close" onclick="closeCartDrawer()">&times;</button>
                </div>
                <div class="cart-drawer__content" id="cart-drawer-items">
                    <!-- Danh sách sản phẩm mini cart -->
                </div>
                <div class="cart-drawer__footer">
                    <div class="cart-drawer__subtotal">
                        <span>Tạm tính:</span>
                        <strong id="cart-drawer-subtotal">0đ</strong>
                    </div>
                    <div class="cart-drawer__actions">
                        <a href="cart.html" class="btn btn-outline-dark w-100">XEM GIỎ HÀNG</a>
                        <a href="checkout.html" class="btn btn-primary w-100">TIẾN HÀNH THANH TOÁN</a>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(drawer);
    }

    // Gắn sự kiện mở drawer cho tất cả nút giỏ hàng trên header
    document.querySelectorAll('.cart-btn, [data-open-cart]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            openCartDrawer();
        });
    });

    renderMiniCart();
}

function openCartDrawer() {
    renderMiniCart();
    const drawer = document.getElementById('cart-drawer');
    if (drawer) {
        drawer.classList.add('open');
        document.body.classList.add('no-scroll');
    }
}

function closeCartDrawer() {
    const drawer = document.getElementById('cart-drawer');
    if (drawer) {
        drawer.classList.remove('open');
        document.body.classList.remove('no-scroll');
    }
}

function renderMiniCart() {
    const container = document.getElementById('cart-drawer-items');
    const subtotalEl = document.getElementById('cart-drawer-subtotal');
    if (!container || !subtotalEl) return;

    const cart = getCart();
    if (cart.length === 0) {
        container.innerHTML = `
            <div class="cart-empty-box">
                <i class="fa-solid fa-leaf"></i>
                <p>Giỏ hàng của bạn đang trống</p>
                <a href="shop.html" class="btn btn-primary btn-sm" onclick="closeCartDrawer()">Khám phá cây ngay</a>
            </div>
        `;
        subtotalEl.innerText = '0đ';
        return;
    }

    let subtotal = 0;
    container.innerHTML = cart.map(item => {
        subtotal += item.price * item.quantity;
        return `
            <div class="mini-cart-item">
                <img src="${item.image}" alt="${item.name}" class="mini-cart-img">
                <div class="mini-cart-info">
                    <h5 class="mini-cart-title">${item.name}</h5>
                    <div class="mini-cart-meta">
                        <span class="mini-cart-price">${formatCurrency(item.price)}</span>
                        <div class="mini-cart-qty-ctrl">
                            <button onclick="updateCartQty(${item.id}, ${item.quantity - 1})">-</button>
                            <span>${item.quantity}</span>
                            <button onclick="updateCartQty(${item.id}, ${item.quantity + 1})">+</button>
                        </div>
                    </div>
                </div>
                <button class="mini-cart-remove" onclick="removeFromCart(${item.id})" title="Xóa">
                    <i class="fa-regular fa-trash-can"></i>
                </button>
            </div>
        `;
    }).join('');

    subtotalEl.innerText = formatCurrency(subtotal);
}

// 9. QUICK VIEW MODAL
function initQuickViewModal() {
    let modal = document.getElementById('quickview-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'quickview-modal';
        modal.className = 'quickview-modal';
        modal.innerHTML = `
            <div class="quickview-overlay" onclick="closeQuickView()"></div>
            <div class="quickview-container">
                <button class="quickview-close" onclick="closeQuickView()">&times;</button>
                <div class="quickview-body" id="quickview-content">
                    <!-- Nội dung nạp động -->
                </div>
            </div>
        `;
        document.body.appendChild(modal);
    }
}

function openQuickView(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const content = document.getElementById('quickview-content');
    content.innerHTML = `
        <div class="qv-gallery">
            <div class="qv-main-img">
                <img id="qv-large-img" src="${product.image}" alt="${product.name}">
                ${product.discountPercent > 0 ? `<span class="qv-badge">-${product.discountPercent}%</span>` : ''}
            </div>
            <div class="qv-thumbs">
                ${product.thumbnails.map((t, idx) => `
                    <img src="${t}" class="${idx === 0 ? 'active' : ''}" onclick="changeQvThumb(this, '${t}')">
                `).join('')}
            </div>
        </div>
        <div class="qv-details">
            <span class="qv-cat">${product.category}</span>
            <h2 class="qv-title">${product.name}</h2>
            <div class="qv-rating">
                ${renderStars(product.rating)}
                <span>(${product.reviewsCount} đánh giá từ khách hàng)</span>
            </div>
            <div class="qv-price-box">
                <span class="qv-price">${formatCurrency(product.price)}</span>
                ${product.oldPrice ? `<span class="qv-old-price">${formatCurrency(product.oldPrice)}</span>` : ''}
            </div>
            <p class="qv-desc">${product.description}</p>
            <div class="qv-stock ${product.stock > 0 ? 'in-stock' : 'out-stock'}">
                <i class="fa-solid ${product.stock > 0 ? 'fa-circle-check' : 'fa-circle-xmark'}"></i>
                ${product.stock > 0 ? `Tình trạng: Còn hàng (${product.stock} chậu tại vườn)` : 'Tạm hết hàng'}
            </div>
            <div class="qv-actions">
                <div class="qty-stepper">
                    <button type="button" onclick="stepQvQty(-1)">-</button>
                    <input type="number" id="qv-qty-input" value="1" min="1" max="${product.stock}">
                    <button type="button" onclick="stepQvQty(1)">+</button>
                </div>
                <button class="btn btn-primary btn-add-cart-qv" onclick="addQvToCart(${product.id})">
                    <i class="fa-solid fa-cart-plus"></i> THÊM VÀO GIỎ HÀNG
                </button>
                <button class="qv-wishlist-btn" onclick="toggleWishlist(${product.id})" data-wishlist-id="${product.id}" title="Yêu thích">
                    <i class="fa-regular fa-heart"></i>
                </button>
            </div>
            <div class="qv-meta">
                <p><b>Mã SKU:</b> ${product.sku}</p>
                <p><b>Khoảng nhiệt:</b> ${product.careGuide.temp}</p>
                <p><b>Tưới nước:</b> ${product.careGuide.water}</p>
            </div>
            <div class="qv-view-more">
                <a href="shop-details.html?id=${product.id}">Xem toàn bộ thông tin chi tiết &rarr;</a>
            </div>
        </div>
    `;

    const modal = document.getElementById('quickview-modal');
    modal.classList.add('open');
    document.body.classList.add('no-scroll');
    updateWishlistCardButtons();
}

function closeQuickView() {
    const modal = document.getElementById('quickview-modal');
    if (modal) {
        modal.classList.remove('open');
        document.body.classList.remove('no-scroll');
    }
}

function changeQvThumb(imgEl, src) {
    document.getElementById('qv-large-img').src = src;
    imgEl.parentElement.querySelectorAll('img').forEach(el => el.classList.remove('active'));
    imgEl.classList.add('active');
}

function stepQvQty(delta) {
    const input = document.getElementById('qv-qty-input');
    if (!input) return;
    let val = parseInt(input.value) || 1;
    val += delta;
    if (val < 1) val = 1;
    input.value = val;
}

function addQvToCart(productId) {
    const input = document.getElementById('qv-qty-input');
    const qty = input ? parseInt(input.value) || 1 : 1;
    addToCart(productId, qty);
    closeQuickView();
    openCartDrawer();
}

// 10. LIVE SEARCH SYSTEM
function initLiveSearch() {
    const searchInputs = document.querySelectorAll('.header-search-input, #searchInput');
    searchInputs.forEach(input => {
        let resultsBox = input.parentElement.querySelector('.search-results-dropdown');
        if (!resultsBox) {
            resultsBox = document.createElement('div');
            resultsBox.className = 'search-results-dropdown';
            input.parentElement.appendChild(resultsBox);
        }

        input.addEventListener('input', () => {
            const query = input.value.trim().toLowerCase();
            if (query.length < 2) {
                resultsBox.classList.remove('active');
                resultsBox.innerHTML = '';
                return;
            }

            const matches = PRODUCTS.filter(p => 
                p.name.toLowerCase().includes(query) || 
                p.category.toLowerCase().includes(query) ||
                (p.scientificName && p.scientificName.toLowerCase().includes(query))
            );

            if (matches.length === 0) {
                resultsBox.innerHTML = `
                    <div class="search-empty">
                        <i class="fa-solid fa-magnifying-glass"></i>
                        <p>Không tìm thấy cây cảnh nào khớp với "<b>${query}</b>"</p>
                    </div>
                `;
            } else {
                resultsBox.innerHTML = `
                    <div class="search-count">Tìm thấy ${matches.length} kết quả:</div>
                    ${matches.map(p => `
                        <a href="shop-details.html?id=${p.id}" class="search-item">
                            <img src="${p.image}" alt="${p.name}">
                            <div class="search-item-info">
                                <h6>${p.name}</h6>
                                <span class="search-item-cat">${p.category}</span>
                                <span class="search-item-price">${formatCurrency(p.price)}</span>
                            </div>
                        </a>
                    `).join('')}
                    <div class="search-all-link">
                        <a href="shop.html?search=${encodeURIComponent(query)}">Xem tất cả kết quả &rarr;</a>
                    </div>
                `;
            }
            resultsBox.classList.add('active');
        });

        // Click bên ngoài thì đóng dropdown
        document.addEventListener('click', (e) => {
            if (!input.contains(e.target) && !resultsBox.contains(e.target)) {
                resultsBox.classList.remove('active');
            }
        });
    });
}

// 11. ACCORDION CHO SIDEBAR (Trang Cửa Hàng)
function toggleAccordion(headerElement) {
    const icon = headerElement.querySelector("i");
    const list = headerElement.nextElementSibling;

    if (list) {
        if (list.style.display === "none" || window.getComputedStyle(list).display === "none") {
            list.style.display = "block";
            if (icon) icon.className = "fa-solid fa-chevron-up";
        } else {
            list.style.display = "none";
            if (icon) icon.className = "fa-solid fa-chevron-down";
        }
    }
}

// 12. TRANG GIỎ HÀNG (cart.html)
function initCartPage() {
    const tableBody = document.getElementById('cart-table-body');
    if (!tableBody) return; // Không phải trang cart.html
    renderCartPage();

    // Lắng nghe sự kiện áp dụng mã giảm giá
    const couponBtn = document.getElementById('apply-coupon-btn');
    if (couponBtn) {
        couponBtn.addEventListener('click', applyCouponCode);
    }
}

function renderCartPage() {
    const tableBody = document.getElementById('cart-table-body');
    const emptyState = document.getElementById('cart-empty-state');
    const tableContainer = document.getElementById('cart-table-container');
    const subtotalEl = document.getElementById('cart-subtotal');
    const discountEl = document.getElementById('cart-discount');
    const shippingEl = document.getElementById('cart-shipping');
    const totalEl = document.getElementById('cart-total');

    if (!tableBody) return;

    const cart = getCart();

    if (cart.length === 0) {
        if (tableContainer) tableContainer.style.display = 'none';
        if (emptyState) emptyState.style.display = 'block';
        return;
    }

    if (tableContainer) tableContainer.style.display = 'block';
    if (emptyState) emptyState.style.display = 'none';

    let subtotal = 0;
    tableBody.innerHTML = cart.map(item => {
        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;
        return `
            <tr>
                <td class="cart-product-cell">
                    <img src="${item.image}" alt="${item.name}" class="cart-thumb">
                    <div class="cart-product-meta">
                        <h4><a href="shop-details.html?id=${item.id}">${item.name}</a></h4>
                        <span class="cart-sku">SKU: ${item.sku || 'TGC-00' + item.id}</span>
                    </div>
                </td>
                <td class="cart-price-cell">${formatCurrency(item.price)}</td>
                <td class="cart-qty-cell">
                    <div class="qty-stepper">
                        <button type="button" onclick="updateCartQty(${item.id}, ${item.quantity - 1})">-</button>
                        <input type="number" value="${item.quantity}" min="1" onchange="updateCartQty(${item.id}, parseInt(this.value) || 1)">
                        <button type="button" onclick="updateCartQty(${item.id}, ${item.quantity + 1})">+</button>
                    </div>
                </td>
                <td class="cart-total-cell">${formatCurrency(itemTotal)}</td>
                <td class="cart-remove-cell">
                    <button class="btn-remove-row" onclick="removeFromCart(${item.id})" title="Xóa cây này">
                        <i class="fa-solid fa-xmark"></i>
                    </button>
                </td>
            </tr>
        `;
    }).join('');

    // Tính mã giảm giá (nếu có lưu)
    let discount = 0;
    const savedCoupon = localStorage.getItem(STORAGE_KEYS.COUPON);
    if (savedCoupon === 'MAMXANH' || savedCoupon === 'GREENCORNER') {
        discount = subtotal * 0.1; // Giảm 10%
    }

    // Phí ship: Miễn phí nếu subtotal >= 300.000đ, ngược lại 30.000đ
    const shipping = subtotal >= 300000 ? 0 : 30000;
    const finalTotal = subtotal - discount + shipping;

    if (subtotalEl) subtotalEl.innerText = formatCurrency(subtotal);
    if (discountEl) discountEl.innerText = '-' + formatCurrency(discount);
    if (shippingEl) shippingEl.innerText = shipping === 0 ? 'Miễn phí' : formatCurrency(shipping);
    if (totalEl) totalEl.innerText = formatCurrency(finalTotal);
}

function applyCouponCode() {
    const input = document.getElementById('coupon-input');
    if (!input) return;
    const code = input.value.trim().toUpperCase();

    if (code === 'MAMXANH' || code === 'GREENCORNER') {
        localStorage.setItem(STORAGE_KEYS.COUPON, code);
        showToast('Áp dụng mã giảm giá 10% thành công!', 'success');
        renderCartPage();
    } else {
        showToast('Mã ưu đãi không hợp lệ. Hãy thử: MAMXANH', 'warning');
    }
}

// 13. TRANG THANH TOÁN (checkout.html)
function initCheckoutPage() {
    const orderListContainer = document.getElementById('checkout-items-list');
    if (!orderListContainer) return; // Không phải trang checkout.html
    renderCheckoutOrder();

    // Toggle hiện mã QR chuyển khoản khi chọn phương thức ngân hàng
    const paymentRadios = document.querySelectorAll('input[name="payment_method"]');
    paymentRadios.forEach(radio => {
        radio.addEventListener('change', (e) => {
            const qrBox = document.getElementById('bank-qr-box');
            if (qrBox) {
                if (e.target.value === 'bank') {
                    qrBox.style.display = 'block';
                } else {
                    qrBox.style.display = 'none';
                }
            }
        });
    });

    // Xử lý gửi đặt hàng
    const checkoutForm = document.getElementById('checkout-form');
    if (checkoutForm) {
        checkoutForm.addEventListener('submit', handlePlaceOrder);
    }
}

function renderCheckoutOrder() {
    const listEl = document.getElementById('checkout-items-list');
    const subtotalEl = document.getElementById('checkout-subtotal');
    const discountEl = document.getElementById('checkout-discount');
    const shippingEl = document.getElementById('checkout-shipping');
    const totalEl = document.getElementById('checkout-total');
    if (!listEl) return;

    const cart = getCart();
    if (cart.length === 0) {
        listEl.innerHTML = `<p class="text-muted">Không có sản phẩm nào để thanh toán. <a href="shop.html">Quay lại mua sắm</a></p>`;
        return;
    }

    let subtotal = 0;
    listEl.innerHTML = cart.map(item => {
        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;
        return `
            <div class="checkout-item-row">
                <div class="checkout-item-info">
                    <span class="checkout-item-name">${item.name}</span>
                    <span class="checkout-item-qty">x ${item.quantity}</span>
                </div>
                <span class="checkout-item-price">${formatCurrency(itemTotal)}</span>
            </div>
        `;
    }).join('');

    let discount = 0;
    const savedCoupon = localStorage.getItem(STORAGE_KEYS.COUPON);
    if (savedCoupon === 'MAMXANH' || savedCoupon === 'GREENCORNER') {
        discount = subtotal * 0.1;
    }

    const shipping = subtotal >= 300000 ? 0 : 30000;
    const total = subtotal - discount + shipping;

    if (subtotalEl) subtotalEl.innerText = formatCurrency(subtotal);
    if (discountEl) discountEl.innerText = '-' + formatCurrency(discount);
    if (shippingEl) shippingEl.innerText = shipping === 0 ? 'Miễn phí' : formatCurrency(shipping);
    if (totalEl) totalEl.innerText = formatCurrency(total);
}

function handlePlaceOrder(e) {
    e.preventDefault();
    const cart = getCart();
    if (cart.length === 0) {
        showToast('Giỏ hàng trống! Hãy thêm sản phẩm trước khi thanh toán.', 'warning');
        return;
    }

    const form = e.target;
    const fullName = form.querySelector('[name="fullname"]').value;
    const phone = form.querySelector('[name="phone"]').value;
    const address = form.querySelector('[name="address"]').value;
    const orderCode = 'TGC' + Math.floor(100000 + Math.random() * 900000);

    // Mở modal chúc mừng thành công
    showOrderSuccessModal(orderCode, fullName, phone, address);

    // Xóa giỏ hàng
    saveCart([]);
    localStorage.removeItem(STORAGE_KEYS.COUPON);
}

function showOrderSuccessModal(orderCode, name, phone, address) {
    let modal = document.getElementById('order-success-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'order-success-modal';
        modal.className = 'quickview-modal open';
        document.body.appendChild(modal);
    }

    modal.innerHTML = `
        <div class="quickview-overlay"></div>
        <div class="order-success-card">
            <div class="order-success-icon">
                <i class="fa-solid fa-circle-check"></i>
            </div>
            <h2>ĐẶT HÀNG THÀNH CÔNG!</h2>
            <p class="order-code-badge">Mã đơn hàng: <b>#${orderCode}</b></p>
            <p class="order-thank-msg">Cảm ơn bạn <b>${name}</b> đã tin chọn The Green Corner. Đội ngũ chuyên gia cây trồng của chúng tôi sẽ liên hệ qua SĐT <b>${phone}</b> để xác nhận và đóng gói cẩn thận gửi tới địa chỉ:</p>
            <div class="order-address-box">
                <i class="fa-solid fa-location-dot"></i> ${address}
            </div>
            <div class="order-success-actions">
                <a href="index.html" class="btn btn-primary">VỀ TRANG CHỦ</a>
                <a href="shop.html" class="btn btn-outline-dark">TIẾP TỤC MUA CÂY</a>
            </div>
        </div>
    `;
    playChimeSound();
}

// 14. TRANG CHI TIẾT SẢN PHẨM (shop-details.html)
function initShopDetailsPage() {
    const detailContainer = document.getElementById('product-detail-section');
    if (!detailContainer) return; // Không phải trang chi tiết

    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id')) || 1;
    const product = PRODUCTS.find(p => p.id === productId) || PRODUCTS[0];

    // Cập nhật tiêu đề trang
    document.title = `${product.name} - The Green Corner`;

    // Cập nhật Breadcrumb
    const breadcrumbName = document.getElementById('breadcrumb-product-name');
    if (breadcrumbName) breadcrumbName.innerText = product.name;

    // Render thông tin chi tiết
    const mainImg = document.getElementById('detail-main-img');
    const thumbContainer = document.getElementById('detail-thumbs');
    const titleEl = document.getElementById('detail-title');
    const priceEl = document.getElementById('detail-price');
    const oldPriceEl = document.getElementById('detail-old-price');
    const descEl = document.getElementById('detail-desc');
    const ratingEl = document.getElementById('detail-rating');
    const reviewsCountEl = document.getElementById('detail-reviews-count');
    const skuEl = document.getElementById('detail-sku');
    const catEl = document.getElementById('detail-category');
    const stockEl = document.getElementById('detail-stock');

    if (mainImg) mainImg.src = product.image;
    if (titleEl) titleEl.innerText = product.name;
    if (priceEl) priceEl.innerText = formatCurrency(product.price);
    if (oldPriceEl) {
        if (product.oldPrice) {
            oldPriceEl.innerText = formatCurrency(product.oldPrice);
            oldPriceEl.style.display = 'inline';
        } else {
            oldPriceEl.style.display = 'none';
        }
    }
    if (descEl) descEl.innerText = product.description;
    if (ratingEl) ratingEl.innerHTML = renderStars(product.rating);
    if (reviewsCountEl) reviewsCountEl.innerText = `(${product.reviewsCount} đánh giá từ khách hàng)`;
    if (skuEl) skuEl.innerText = product.sku;
    if (catEl) catEl.innerText = product.category;
    if (stockEl) {
        stockEl.innerHTML = `<i class="fa-solid fa-check"></i> Còn ${product.stock} chậu tại vườn`;
    }

    // Render Thumbs
    if (thumbContainer) {
        thumbContainer.innerHTML = product.thumbnails.map((thumb, idx) => `
            <div class="thumb-item ${idx === 0 ? 'active' : ''}" onclick="changeDetailThumb(this, '${thumb}')">
                <img src="${thumb}" alt="${product.name}">
            </div>
        `).join('');
    }

    // Nút thêm vào giỏ ở trang chi tiết
    const addBtn = document.getElementById('detail-add-cart-btn');
    if (addBtn) {
        addBtn.onclick = () => {
            const qtyInput = document.getElementById('detail-qty-input');
            const qty = qtyInput ? parseInt(qtyInput.value) || 1 : 1;
            addToCart(product.id, qty, true);
        };
    }

    // Hướng dẫn chăm sóc ở Tabs
    const careGuideEl = document.getElementById('tab-care-guide');
    if (careGuideEl && product.careGuide) {
        careGuideEl.innerHTML = `
            <div class="care-guide-grid">
                <div class="care-item">
                    <i class="fa-solid fa-sun"></i>
                    <h4>Ánh Sáng</h4>
                    <p>${product.careGuide.light}</p>
                </div>
                <div class="care-item">
                    <i class="fa-solid fa-droplet"></i>
                    <h4>Tưới Nước</h4>
                    <p>${product.careGuide.water}</p>
                </div>
                <div class="care-item">
                    <i class="fa-solid fa-temperature-half"></i>
                    <h4>Nhiệt Độ</h4>
                    <p>${product.careGuide.temp}</p>
                </div>
                <div class="care-item">
                    <i class="fa-solid fa-seedling"></i>
                    <h4>Dinh Dưỡng</h4>
                    <p>${product.careGuide.fertilizer}</p>
                </div>
            </div>
        `;
    }

    // Sản phẩm tương tự
    renderRelatedProducts(product.id, product.category);
}

function changeDetailThumb(thumbBox, src) {
    const mainImg = document.getElementById('detail-main-img');
    if (mainImg) mainImg.src = src;
    document.querySelectorAll('.thumb-item').forEach(el => el.classList.remove('active'));
    thumbBox.classList.add('active');
}

function renderRelatedProducts(currentId, category) {
    const container = document.getElementById('related-products-grid');
    if (!container) return;

    const related = PRODUCTS.filter(p => p.id !== currentId).slice(0, 4);
    container.innerHTML = related.map(p => createProductCardHTML(p)).join('');
    updateWishlistCardButtons();
}

// 15. TẠO HTML PRODUCT CARD CHUẨN ORGANI
function createProductCardHTML(p) {
    return `
        <div class="product-card" data-category="${p.category}" data-id="${p.id}">
            <div class="product-card__thumb">
                <a href="shop-details.html?id=${p.id}">
                    <img src="${p.image}" alt="${p.name}" loading="lazy" onerror="if(!this.dataset.retried){this.dataset.retried='1';this.src=this.src.replace('Images/','images/');}">
                </a>
                ${p.tag ? `<span class="product-badge badge-${p.tag.toLowerCase()}">${p.tag}</span>` : ''}
                
                <!-- Thanh công cụ nổi chuẩn mẫu Organi khi hover -->
                <div class="product-actions-bar">
                    <button class="action-icon-btn" onclick="toggleWishlist(${p.id})" data-wishlist-id="${p.id}" title="Yêu thích">
                        <i class="fa-regular fa-heart"></i>
                    </button>
                    <button class="action-icon-btn" onclick="openQuickView(${p.id})" title="Xem nhanh">
                        <i class="fa-regular fa-eye"></i>
                    </button>
                    <button class="action-icon-btn" onclick="addToCart(${p.id}, 1, true)" title="Thêm vào giỏ">
                        <i class="fa-solid fa-cart-shopping"></i>
                    </button>
                </div>
            </div>
            <div class="product-card__content">
                <span class="product-cat-label">${p.category}</span>
                <h4 class="product-title" title="${p.name}">
                    <a href="shop-details.html?id=${p.id}">${p.name}</a>
                </h4>
                <div class="product-rating">
                    ${renderStars(p.rating)}
                    <span class="rating-num">${p.rating.toFixed(1)}</span>
                </div>
                <div class="product-card__bottom">
                    <div class="price-wrap">
                        <span class="product-price">${formatCurrency(p.price)}</span>
                        ${p.oldPrice ? `<span class="old-price">${formatCurrency(p.oldPrice)}</span>` : ''}
                    </div>
                    <button class="btn-add-cart" onclick="addToCart(${p.id}, 1, false)" title="Thêm vào giỏ hàng">
                        <i class="fa-solid fa-plus"></i>
                    </button>
                </div>
            </div>
        </div>
    `;
}

// 16. TAB FILTER TRANG CHỦ & TRANG CỬA HÀNG
function initFeaturedFilterTabs() {
    const tabButtons = document.querySelectorAll('.filter-tab-btn');
    const container = document.getElementById('featured-products-grid');
    if (!tabButtons.length || !container) return;

    // Render danh sách sản phẩm ban đầu
    container.innerHTML = PRODUCTS.slice(0, 8).map(p => createProductCardHTML(p)).join('');

    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            tabButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');
            let filtered;
            if (filter === 'all') {
                filtered = PRODUCTS.slice(0, 8);
            } else {
                filtered = PRODUCTS.filter(p => p.categories && p.categories.includes(filter));
            }

            container.style.opacity = '0';
            setTimeout(() => {
                container.innerHTML = filtered.map(p => createProductCardHTML(p)).join('');
                container.style.opacity = '1';
                updateWishlistCardButtons();
            }, 180);
        });
    });
}

// 17. TRANG CỬA HÀNG (shop.html)
function initShopPage() {
    const grid = document.getElementById('shop-product-grid');
    if (!grid) return;

    let currentProducts = [...PRODUCTS];

    function renderShopGrid(list) {
        if (list.length === 0) {
            grid.innerHTML = `
                <div class="shop-empty-msg">
                    <i class="fa-solid fa-filter"></i>
                    <h3>Không tìm thấy sản phẩm phù hợp</h3>
                    <p>Hãy thử chọn mức giá hoặc danh mục khác nhé!</p>
                </div>
            `;
            return;
        }
        grid.innerHTML = list.map(p => createProductCardHTML(p)).join('');
        const countEl = document.getElementById('shop-product-count');
        if (countEl) countEl.innerText = `Hiển thị ${list.length} trên tổng ${PRODUCTS.length} cây cảnh`;
        updateWishlistCardButtons();
    }

    renderShopGrid(currentProducts);

    // Xử lý sắp xếp
    const sortSelect = document.getElementById('shop-sort-select');
    if (sortSelect) {
        sortSelect.addEventListener('change', (e) => {
            const val = e.target.value;
            if (val === 'price-asc') {
                currentProducts.sort((a, b) => a.price - b.price);
            } else if (val === 'price-desc') {
                currentProducts.sort((a, b) => b.price - a.price);
            } else if (val === 'rating') {
                currentProducts.sort((a, b) => b.rating - a.rating);
            } else {
                currentProducts = [...PRODUCTS];
            }
            renderShopGrid(currentProducts);
        });
    }

    // Xử lý bộ lọc danh mục bên sidebar
    document.querySelectorAll('[data-category-filter]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelectorAll('[data-category-filter]').forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            const cat = link.getAttribute('data-category-filter');
            if (cat === 'all') {
                currentProducts = [...PRODUCTS];
            } else {
                currentProducts = PRODUCTS.filter(p => p.categories && p.categories.includes(cat));
            }
            renderShopGrid(currentProducts);
        });
    });

    // Xử lý lọc theo khoảng giá
    document.querySelectorAll('[data-price-filter]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelectorAll('[data-price-filter]').forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            const range = link.getAttribute('data-price-filter');
            if (range === 'under-150') {
                currentProducts = PRODUCTS.filter(p => p.price < 150000);
            } else if (range === '150-300') {
                currentProducts = PRODUCTS.filter(p => p.price >= 150000 && p.price <= 300000);
            } else if (range === 'above-300') {
                currentProducts = PRODUCTS.filter(p => p.price > 300000);
            } else {
                currentProducts = [...PRODUCTS];
            }
            renderShopGrid(currentProducts);
        });
    });
}

// 18. XỬ LÝ LIÊN HỆ & FORM
function handleContactFormSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const name = form.querySelector('input[type="text"]')?.value || 'quý khách';

    showToast(`Cảm ơn bạn <b>${name}</b>! Lời nhắn đã được gửi thành công. Chúng tôi sẽ phản hồi trong 24h.`, 'success', 4000);
    form.reset();
}

// 19. MOBILE MENU & BACK TO TOP
function initMobileMenu() {
    const toggleBtn = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const overlay = document.querySelector('.mobile-menu-overlay');

    if (toggleBtn && navMenu) {
        toggleBtn.addEventListener('click', () => {
            navMenu.classList.toggle('mobile-open');
            if (overlay) overlay.classList.toggle('active');
        });
    }

    if (overlay) {
        overlay.addEventListener('click', () => {
            if (navMenu) navMenu.classList.remove('mobile-open');
            overlay.classList.remove('active');
        });
    }
}

function initBackToTop() {
    let btn = document.getElementById('back-to-top');
    if (!btn) {
        btn = document.createElement('button');
        btn.id = 'back-to-top';
        btn.className = 'back-to-top';
        btn.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';
        btn.title = 'Lên đầu trang';
        btn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
        document.body.appendChild(btn);
    }

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    });
}

// 20. KHỞI CHẠY TẤT CẢ KHI TẢI TRANG
document.addEventListener('DOMContentLoaded', () => {
    updateCartBadges();
    updateWishlistBadges();
    initMiniCartDrawer();
    initQuickViewModal();
    initLiveSearch();
    initMobileMenu();
    initBackToTop();

    // Khởi tạo theo từng trang
    initFeaturedFilterTabs();
    initShopPage();
    initCartPage();
    initCheckoutPage();
    initShopDetailsPage();
});
} // Kết thúc khối if (!window.__TGC_INITIALIZED__)
