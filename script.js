/**
 * ==========================================================================
 * HOÀN CHỈNH MÃ NGUỒN JAVASCRIPT - LỄ DẠM NGÕ NGÂN PHƯƠNG & NHẬT LONG
 * Phiên bản 2.0 - Đa dạng layout & hiệu ứng phong phú
 * ==========================================================================
 */

/* ==========================================================================
   1. CẤU HÌNH & DỮ LIỆU
   ========================================================================== */
const CONFIG = {
    couple: {
        bride: "Ngân Phương",
        groom: "Nhật Long",
        eventTitle: "Lễ Dạm Ngõ",
        eventDateDisplay: "01 . 10 . 2026",
        loveStartDate: "2022-07-09"
    },
    gallery: [
        { layout: "fullwidth", src: "./anh/IMG_0921.jpeg", caption: "Ngày Trọng Đại Đã Đến", desc: "Không khí trang nghiêm và ấm áp bao phủ khắp không gian buổi lễ dạm ngõ đặc biệt này." },
        { layout: "duo", images: [{ src: "./anh/IMG_0923.jpeg", caption: "Sẵn Sàng Cho Chặng Đường Mới" }, { src: "./anh/IMG_0937.jpeg", caption: "Tươi Tắn Rạng Ngời" }] },
        { layout: "story", src: "./anh/IMG_7909.jpeg", caption: "Hội Tụ Hai Họ", desc: "Hai gia đình chung bàn, chung vui trong ngày dấu mốc quan trọng nhất — bắt đầu hành trình gắn kết hai dòng họ và hai tâm hồn." },
        { type: "quote", text: "\"Những khoảnh khắc hôm nay sẽ trở thành ký ức đẹp theo chúng ta suốt cuộc đời.\"" },
        { layout: "story", src: "./anh/IMG_7755.jpeg", caption: "Rạng Rỡ Đón Chào Ngày Trọng Đại", desc: "Nụ cười rạng ngời và sự háo hức trọn vẹn trong ngày lễ dạm ngõ — khoảnh khắc khởi đầu đẹp nhất." },
        { layout: "story", src: "./anh/IMG_7861.jpeg", caption: "Khoảnh Khắc Ngọt Ngào Bên Nhau", desc: "Tình yêu dịu dàng đong đầy trong từng ánh mắt và nụ cười — hai tâm hồn giao thoa một cách tự nhiên nhất." },
        { layout: "polaroid", images: [{ src: "./anh/IMG_7761.jpeg", caption: "Chu Đáo Sẵn Sàng" }, { src: "./anh/IMG_7764.jpeg", caption: "Nghi Lễ Trang Trọng" }, { src: "./anh/IMG_7766.jpeg", caption: "Hạnh Phúc Ý Nghĩa" }, { src: "./anh/IMG_7768.jpeg", caption: "Hai Họ Hội Ngộ" }] },
        { type: "quote", text: "\"Gia đình là nơi tình yêu bắt đầu và cũng là nơi hạnh phúc được vun đắp.\"" },
        { layout: "fullwidth", src: "./anh/IMG_7871.jpeg", caption: "Lời Gửi Gắm Từ Đấng Sinh Thành", desc: "Những lời dặn dò chân thành từ ba mẹ hai bên — tiếp thêm niềm tin và sức mạnh cho chặng đường mới phía trước." },
        { layout: "duo", images: [{ src: "./anh/IMG_7772.jpeg", caption: "Trái Tim Cùng Nhịp Đập" }, { src: "./anh/IMG_7774.jpeg", caption: "Nụ Cười Hạnh Phúc" }] },
        { layout: "story", src: "./anh/IMG_7857.jpeg", caption: "Gắn Kết Bền Chặt Trọn Đời", desc: "Từng cái nắm tay tiếp thêm sức mạnh cho hành trình tương lai — cùng nhau vượt qua mọi thăng trầm." },
        { layout: "trio", images: [{ src: "./anh/IMG_7776.jpeg", caption: "Ánh Mắt Trao Nhau" }, { src: "./anh/IMG_7777.jpeg", caption: "Kỷ Niệm Đáng Nhớ" }, { src: "./anh/IMG_7779.jpeg", caption: "Nâng Ly Chung Vui" }] },
        { type: "quote", text: "\"Tình yêu thực sự là khi hai người cùng nhìn về một hướng.\"" },
        { layout: "story", src: "./anh/IMG_7780.jpeg", caption: "Sự Hiện Diện Của Người Thân Yêu", desc: "Niềm tự hào và hạnh phúc khi nhận được muôn vàn lời chúc phúc từ những người thân quý giá nhất." },
        { layout: "polaroid", images: [{ src: "./anh/IMG_7782.jpeg", caption: "Nụ cười rạng rỡ" }, { src: "./anh/IMG_7775.jpeg", caption: "Góc Kỷ Niệm Đầm Ấm" }, { src: "./anh/IMG_7858.jpeg", caption: "Bình Yên Bên Nhau" }, { src: "./anh/IMG_7756.jpeg", caption: "Chung Bước Đường Đời" }] },
        { layout: "story", src: "./anh/IMG_7903.jpeg", caption: "Sự Đón Nhận Nồng Hậu", desc: "Tình thân gia đình mở rộng, đón chào một người con mới trong không khí ấm áp và tràn đầy yêu thương." },
        { type: "quote", text: "\"Hạnh phúc không phải là điểm đến, mà là một hành trình cùng nhau bước đi.\"" },
        { layout: "duo", images: [{ src: "./anh/IMG_7867.jpeg", caption: "Hạnh Phúc Trong Chúc Phúc" }, { src: "./anh/IMG_7869.jpeg", caption: "Những Thước Phim Đáng Giá" }] },
        { layout: "story", src: "./anh/IMG_7911.jpeg", caption: "Rạng Ngời Nụ Cười Đôi Lứa", desc: "Ấm áp và ngọt ngào trong từng hơi thở — khi hai ta thuộc về nhau, mọi khoảnh khắc đều trở nên có ý nghĩa." },
        { layout: "trio", images: [{ src: "./anh/IMG_7771.jpeg", caption: "Ngày vui cùng họ hàng" }, { src: "./anh/IMG_7880.jpeg", caption: "Dấu Ấn Tình Thân" }, { src: "./anh/IMG_7881.jpeg", caption: "Khoảnh Khắc Sum Vầy" }] },
        { type: "quote", text: "\"Yêu và được yêu là cảm giác hạnh phúc nhất trên thế giới này.\"" },
        { layout: "fullwidth", src: "./anh/IMG_7883.jpeg", caption: "Chúc Phúc Ngọt Ngào", desc: "Ý Nghĩa Khi Nhận Được Tình Cảm Từ Họ Hàng" },
        { layout: "polaroid", images: [{ src: "./anh/IMG_7884.jpeg", caption: "Nguyện Cầu Tương Lai" }, { src: "./anh/IMG_7888.jpeg", caption: "Tình Cảm Đong Đầy" }, { src: "./anh/IMG_7889.jpeg", caption: "Chân Thành & Bình Yên" }, { src: "./anh/IMG_7895.jpeg", caption: "Thước Ảnh Đáng Giữ" }] },
        { layout: "duo", images: [{ src: "./anh/IMG_7896.jpeg", caption: "Giai Điệu Hạnh Phúc" }, { src: "./anh/IMG_7897.jpeg", caption: "Dịu Dàng Trao Nhau" }] },
        { type: "quote", text: "\"Cảm ơn vì đã đến và trở thành một phần tuyệt vời nhất trong cuộc đời nhau.\"" },
        { layout: "story", src: "./anh/IMG_7898.jpeg", caption: "Tấm Lòng Gia Đình", desc: "Tình yêu thương vô bờ bến của cha mẹ dành cho hai con — nền tảng vững chắc cho một tương lai hạnh phúc." },
        { layout: "trio", images: [{ src: "./anh/IMG_7899.jpeg", caption: "Khung Hình Kỷ Niệm" }, { src: "./anh/IMG_7900.jpeg", caption: "Nét Đẹp Truyền Thống" }, { src: "./anh/IMG_7901.jpeg", caption: "Hạnh Phúc Giản Đơn" }] },
        { layout: "duo", images: [{ src: "./anh/IMG_7902.jpeg", caption: "Chúc Phúc Của Hai Họ" }, { src: "./anh/IMG_7865.jpeg", caption: "Gắn Kết Tâm Hồn" }] },
        { layout: "story", src: "./anh/IMG_7904.jpeg", caption: "Cùng Nhau Trưởng Thành", desc: "Dựa vào nhau để trở thành phiên bản tốt hơn — hành trình yêu thương là hành trình không ngừng học hỏi và khám phá." },
        { type: "quote", text: "\"Tình yêu không làm thế giới quay tròn, tình yêu là thứ làm chuyến đi đó trở nên đáng giá.\"" },
        { layout: "polaroid", images: [{ src: "./anh/IMG_7905.jpeg", caption: "Nụ Cười Mãn Nguyện" }, { src: "./anh/IMG_7906.jpeg", caption: "Rạng Rỡ Tương Lai" }, { src: "./anh/IMG_7908.jpeg", caption: "Trọn Vẹn Tình Yêu" }, { src: "./anh/IMG_7753.jpeg", caption: "Dấu Ấn Không Quên" }] },
        { layout: "duo", images: [{ src: "./anh/IMG_7910.jpeg", caption: "Đơm Hoa Kết Trái" }, { src: "./anh/IMG_7870.jpeg", caption: "Mãi Mãi Bên Nhau" }] }
    ]
};

/* ==========================================================================
   2. KHỞI TẠO
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
    initLoveCounter();
    renderGallery();
    initScrollAnimations();
    initParallaxEffect();
    initFallingCanvas();
    initMusicPlayer();
    initLightbox();
    initNavBarScroll();
});

/* ==========================================================================
   3. BỘ ĐẾM THỜI GIAN
   ========================================================================== */
function initLoveCounter() {
    const startDate = new Date(CONFIG.couple.loveStartDate).getTime();
    function updateCounter() {
        const now = new Date().getTime();
        const diff = now - startDate;
        if (diff < 0) return;
        document.getElementById("daysCount").innerText = Math.floor(diff / 86400000);
        document.getElementById("hoursCount").innerText = Math.floor((diff % 86400000) / 3600000);
        document.getElementById("minutesCount").innerText = Math.floor((diff % 3600000) / 60000);
        document.getElementById("secondsCount").innerText = Math.floor((diff % 60000) / 1000);
    }
    updateCounter();
    setInterval(updateCounter, 1000);
}

/* ==========================================================================
   4. RENDER GALLERY ĐA DẠNG BỐ CỤC
   ========================================================================== */
const REVEAL_EFFECTS = ["reveal-fade-up", "reveal-left", "reveal-right", "reveal-zoom", "reveal-tilt-left", "reveal-tilt-right", "reveal-flip", "reveal-drop"];
let effectIndex = 0;
function nextEffect() {
    return REVEAL_EFFECTS[(effectIndex++) % REVEAL_EFFECTS.length];
}

function renderGallery() {
    const galleryContainer = document.getElementById("storyGallery");
    if (!galleryContainer) return;

    let html = "";
    let storyDir = 0;

    CONFIG.gallery.forEach(item => {
        if (item.type === "quote") {
            html += `<div class="interstitial-quote reveal-blur"><div class="quote-deco">❝</div><p>${item.text}</p><div class="quote-deco bottom">❞</div></div>`;
            return;
        }
        const layout = item.layout || "story";
        switch (layout) {
            case "fullwidth": {
                const imgIdx = galleryImageItems.length;
                galleryImageItems.push(item);
                html += `<div class="gl-fullwidth ${nextEffect()}" onclick="openLightboxByIndex(${imgIdx})"><img data-src="${item.src}" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'%3E%3C/svg%3E" alt="${item.caption}" class="lazy-img gl-fw-img"><div class="gl-fullwidth-overlay"><h3 class="gl-fw-caption">${item.caption}</h3><p class="gl-fw-desc">${item.desc || ''}</p></div><div class="gl-zoom-icon"><i class="fas fa-expand-alt"></i></div></div>`;
                break;
            }
            case "story": {
                const imgIdx = galleryImageItems.length;
                galleryImageItems.push(item);
                const isEven = storyDir++ % 2 === 0;
                const ri = isEven ? "reveal-left" : "reveal-right";
                const rt = isEven ? "reveal-right" : "reveal-left";
                html += `<div class="gl-story ${isEven ? '' : 'gl-story--reverse'}"><div class="gl-story-img-wrap ${ri}" onclick="openLightboxByIndex(${imgIdx})"><img data-src="${item.src}" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'%3E%3C/svg%3E" alt="${item.caption}" class="lazy-img"><div class="gallery-img-overlay"><i class="fas fa-search-plus"></i></div></div><div class="gl-story-text ${rt}"><span class="gl-story-num">0${imgIdx + 1}</span><h3 class="gallery-caption">${item.caption}</h3><p class="gallery-desc">${item.desc || ''}</p></div></div>`;
                break;
            }
            case "duo": {
                const imgs = item.images || [];
                let h = `<div class="gl-duo ${nextEffect()}">`;
                imgs.forEach(img => {
                    const imgIdx = galleryImageItems.length;
                    galleryImageItems.push(img);
                    h += `<div class="gl-duo-item" onclick="openLightboxByIndex(${imgIdx})"><img data-src="${img.src}" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'%3E%3C/svg%3E" alt="${img.caption}" class="lazy-img"><div class="gl-duo-caption"><span>${img.caption}</span></div><div class="gallery-img-overlay"><i class="fas fa-search-plus"></i></div></div>`;
                });
                html += h + `</div>`;
                break;
            }
            case "trio": {
                const imgs = item.images || [];
                let h = `<div class="gl-trio ${nextEffect()}">`;
                imgs.forEach((img, i) => {
                    const imgIdx = galleryImageItems.length;
                    galleryImageItems.push(img);
                    h += `<div class="gl-trio-item gl-trio-item--${i}" onclick="openLightboxByIndex(${imgIdx})"><img data-src="${img.src}" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'%3E%3C/svg%3E" alt="${img.caption}" class="lazy-img"><div class="gl-trio-caption">${img.caption}</div><div class="gallery-img-overlay"><i class="fas fa-search-plus"></i></div></div>`;
                });
                html += h + `</div>`;
                break;
            }
            case "polaroid": {
                const imgs = item.images || [];
                const rots = [-3, 2, -1.5, 2.5];
                let h = `<div class="gl-polaroid-grid">`;
                imgs.forEach((img, i) => {
                    const imgIdx = galleryImageItems.length;
                    galleryImageItems.push(img);
                    h += `<div class="gl-polaroid ${nextEffect()}" style="--rot:${rots[i % rots.length]}deg;--delay:${i * 150}ms" onclick="openLightboxByIndex(${imgIdx})"><div class="gl-polaroid-inner"><img data-src="${img.src}" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'%3E%3C/svg%3E" alt="${img.caption}" class="lazy-img"><p class="gl-polaroid-label">${img.caption}</p></div></div>`;
                });
                html += h + `</div>`;
                break;
            }
        }
    });

    galleryContainer.innerHTML = html;
    initLazyLoading();
}

function initLazyLoading() {
    const lazyImages = document.querySelectorAll(".lazy-img");
    if ("IntersectionObserver" in window) {
        const obs = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.onload = () => img.classList.add("loaded");
                    img.classList.remove("lazy-img");
                    observer.unobserve(img);
                }
            });
        }, { rootMargin: "200px 0px" });
        lazyImages.forEach(img => obs.observe(img));
    } else {
        lazyImages.forEach(img => { img.src = img.dataset.src; });
    }
}

/* ==========================================================================
   5. SCROLL ANIMATIONS
   ========================================================================== */
function initScrollAnimations() {
    const sel = ".reveal-fade-up,.reveal-left,.reveal-right,.reveal-zoom,.reveal-blur,.reveal-tilt-left,.reveal-tilt-right,.reveal-flip,.reveal-drop,.reveal,.gl-polaroid";
    const els = document.querySelectorAll(sel);
    const obs = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = entry.target.style.getPropertyValue("--delay") || "0ms";
                entry.target.style.transitionDelay = delay;
                entry.target.classList.add("active");
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.08, rootMargin: "0px 0px -60px 0px" });
    els.forEach(el => obs.observe(el));
}

function initNavBarScroll() {
    const navBar = document.querySelector(".nav-bar");
    window.addEventListener("scroll", () => {
        navBar.classList.toggle("scrolled", window.scrollY > 100);
    });
}

/* ==========================================================================
   6. PARALLAX
   ========================================================================== */
function initParallaxEffect() {
    const heroBg = document.getElementById("heroBg");
    if (!heroBg) return;
    window.addEventListener("scroll", () => {
        if (window.scrollY < window.innerHeight)
            heroBg.style.transform = `translateY(${window.scrollY * 0.35}px)`;
    });
}

/* ==========================================================================
   7. CANVAS FALLING PARTICLES (hearts, petals, stars)
   ========================================================================== */
function initFallingCanvas() {
    const canvas = document.getElementById("falling-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let W = canvas.width = window.innerWidth;
    let H = canvas.height = window.innerHeight;
    window.addEventListener("resize", () => { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; });

    class Particle {
        constructor() { this.reset(true); }
        reset(initial = false) {
            this.x = Math.random() * W; this.y = initial ? Math.random() * H : -20;
            this.sz = Math.random() * 12 + 8; this.vy = Math.random() * 1.2 + 0.6;
            this.vx = Math.random() * 0.8 - 0.4; this.op = Math.random() * 0.5 + 0.25;
            this.rot = Math.random() * 360; this.rs = Math.random() * 2 - 1;
            this.type = Math.floor(Math.random() * 3);
        }
        update() {
            this.y += this.vy; this.x += Math.sin(this.y * 0.015) * 0.8 + this.vx; this.rot += this.rs;
            if (this.y > H + 20) this.reset();
        }
        draw() {
            ctx.save(); ctx.translate(this.x, this.y); ctx.rotate(this.rot * Math.PI / 180);
            ctx.globalAlpha = this.op; ctx.fillStyle = this.type === 2 ? "#D4AF37" : "#C97285";
            if (this.type === 0) {
                const t = this.sz * 0.3; ctx.beginPath(); ctx.moveTo(0, t);
                ctx.bezierCurveTo(0, 0, -this.sz / 2, 0, -this.sz / 2, t);
                ctx.bezierCurveTo(-this.sz / 2, (this.sz + t) / 2, 0, this.sz, 0, this.sz);
                ctx.bezierCurveTo(0, this.sz, this.sz / 2, (this.sz + t) / 2, this.sz / 2, t);
                ctx.bezierCurveTo(this.sz / 2, 0, 0, 0, 0, t); ctx.closePath(); ctx.fill();
            } else if (this.type === 1) {
                ctx.beginPath(); ctx.ellipse(0, 0, this.sz / 2, this.sz / 3.5, Math.PI / 4, 0, 2 * Math.PI); ctx.fill();
            } else {
                const R = this.sz / 2, r = this.sz / 4.5; ctx.beginPath();
                for (let i = 0; i < 10; i++) { const a = (i * Math.PI / 5) - Math.PI / 2, rad = i % 2 === 0 ? R : r; i === 0 ? ctx.moveTo(Math.cos(a) * rad, Math.sin(a) * rad) : ctx.lineTo(Math.cos(a) * rad, Math.sin(a) * rad); }
                ctx.closePath(); ctx.fill();
            }
            ctx.restore();
        }
    }

    const particles = Array.from({ length: 25 }, () => new Particle());
    (function animate() { ctx.clearRect(0, 0, W, H); particles.forEach(p => { p.update(); p.draw(); }); requestAnimationFrame(animate); })();
}

/* ==========================================================================
   8. MUSIC PLAYER
   ========================================================================== */
function initMusicPlayer() {
    const btn = document.getElementById("musicBtn");
    const music = document.getElementById("bgMusic");
    if (!btn || !music) return;
    let playing = false;
    btn.addEventListener("click", () => {
        if (playing) { music.pause(); btn.classList.remove("playing"); }
        else { music.play().then(() => btn.classList.add("playing")).catch(e => console.log(e)); }
        playing = !playing;
    });
    const first = () => { if (!playing) { music.play().then(() => { playing = true; btn.classList.add("playing"); }).catch(() => { }); } document.removeEventListener("click", first); };
    document.addEventListener("click", first);
}

/* ==========================================================================
   9. LIGHTBOX
   ========================================================================== */
let galleryImageItems = [];
let currentImageIndex = 0;

function initLightbox() {
    const modal = document.getElementById("lightboxModal");
    const closeBtn = document.getElementById("closeLightbox");
    const prevBtn = document.getElementById("lightboxPrev");
    const nextBtn = document.getElementById("lightboxNext");
    if (closeBtn && modal) {
        closeBtn.addEventListener("click", () => modal.classList.remove("active"));
        modal.addEventListener("click", e => { if (e.target === modal) modal.classList.remove("active"); });
    }
    if (prevBtn) prevBtn.addEventListener("click", e => { e.stopPropagation(); navigateLightbox(-1); });
    if (nextBtn) nextBtn.addEventListener("click", e => { e.stopPropagation(); navigateLightbox(1); });
    document.addEventListener("keydown", e => {
        if (!modal || !modal.classList.contains("active")) return;
        if (e.key === "ArrowLeft") navigateLightbox(-1);
        if (e.key === "ArrowRight") navigateLightbox(1);
        if (e.key === "Escape") modal.classList.remove("active");
    });
    let tx = 0;
    modal.addEventListener("touchstart", e => { tx = e.changedTouches[0].screenX; }, { passive: true });
    modal.addEventListener("touchend", e => { const d = tx - e.changedTouches[0].screenX; if (Math.abs(d) > 50) navigateLightbox(d > 0 ? 1 : -1); });
}

function openLightboxByIndex(index) {
    if (index < 0 || index >= galleryImageItems.length) return;
    currentImageIndex = index; updateLightboxContent();
    const modal = document.getElementById("lightboxModal");
    if (modal) modal.classList.add("active");
}

function navigateLightbox(dir) {
    if (!galleryImageItems.length) return;
    currentImageIndex = (currentImageIndex + dir + galleryImageItems.length) % galleryImageItems.length;
    updateLightboxContent();
}

function updateLightboxContent() {
    const img = document.getElementById("lightboxImg");
    const cap = document.getElementById("lightboxCaption");
    const ctr = document.getElementById("lightboxCounter");
    const item = galleryImageItems[currentImageIndex];
    if (img && cap && item) {
        img.style.opacity = "0"; img.src = item.src;
        img.onload = () => { img.style.opacity = "1"; };
        cap.innerText = item.caption || "";
    }
    if (ctr) ctr.innerText = `${currentImageIndex + 1} / ${galleryImageItems.length}`;
}




