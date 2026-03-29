document.addEventListener('DOMContentLoaded', () => {
    // --- ZORENB i18n SYSTEM (MULTI-LANGUAGE) ---
    const translations = {
        'vi': {
            'nav_home': 'Trang chủ', 'nav_menu': 'MENU SIÊU XE', 'nav_service': 'Dịch vụ', 'nav_news': 'Tin tức', 'nav_contact': 'Liên hệ',
            'hotline': 'ĐƯỜNG DÂY NÓNG: 1900 8888', 'lang_label': 'Ngôn ngữ',
            'hero_title': 'KIỆT TÁC CỦA <span>SỰ HOÀN HẢO</span>', 'hero_desc': 'Nơi những giấc mơ cơ khí trở thành hiện thực. Khám phá phong cách sống thượng lưu cùng những mẫu xe biểu tượng thế giới.',
            'btn_showroom': 'Khám Phá Showroom', 'btn_book': 'Đặt Lịch Hẹn Riêng',
            'section_collection': 'BỘ SƯU TẬP <span>CHỌN LỌC</span>', 'section_sport': 'BỘ SƯU TẬP <span>THUẦN SPORT</span>', 'section_exclusive': 'PHIÊN BẢN <span>GIỚI HẠN</span>',
            'info_engine': 'ĐỘNG CƠ', 'info_power': 'CÔNG SUẤT', 'info_speed': 'TỐC ĐỘ TỐI ĐA', 'info_accel': 'TĂNG TỐC (0-100)', 'info_tech': 'CÔNG NGHỆ MỚI',
            'info_trans': 'HỘP SỐ', 'info_year': 'NĂM SẢN XUẤT', 'info_interior': 'NỘI THẤT', 'info_style': 'PHONG CÁCH', 'info_status': 'TÌNH TRẠNG',
            'spec_label': 'Thông Số Kỹ Thuật', 'contact_quote': 'LIÊN HỆ BÁO GIÁ',
            'news_main_title': 'TIN TỨC <span>& SỰ KIỆN NỔI BẬT</span>',
            'ferrari_title': 'Ferrari Concept', 'lambo_title': 'Lambo Hybrid', 'mclaren_title': 'McLaren Artura', 'rolls_title': 'Rolls Spectre'
        },
        'en': {
            'nav_home': 'Home', 'nav_menu': 'SUPERCAR MENU', 'nav_service': 'Services', 'nav_news': 'News', 'nav_contact': 'Contact',
            'hotline': 'HOTLINE: 1900 8888', 'lang_label': 'Language',
            'hero_title': 'MASTERPIECE OF <span>PERFECTION</span>', 'hero_desc': 'Where mechanical dreams come true. Explore the elite lifestyle with iconic automobiles.',
            'btn_showroom': 'Explore Showroom', 'btn_book': 'Private Booking',
            'section_collection': 'PREMIUM <span>COLLECTION</span>', 'section_sport': 'PURE <span>SPORT</span> COLLECTION', 'section_exclusive': 'LIMITED <span>EDITIONS</span>',
            'info_engine': 'ENGINE', 'info_power': 'POWER', 'info_speed': 'TOP SPEED', 'info_accel': 'ACCEL (0-100)', 'info_tech': 'NEW TECH',
            'info_trans': 'TRANSMISSION', 'info_year': 'YEAR', 'info_interior': 'INTERIOR', 'info_style': 'STYLE', 'info_status': 'STATUS',
            'spec_label': 'Technical Specifications', 'contact_quote': 'CONTACT FOR QUOTE',
            'news_main_title': 'NEWS <span>& EXCLUSIVE EVENTS</span>',
            'ferrari_title': 'Ferrari Concept', 'lambo_title': 'Lambo Hybrid', 'mclaren_title': 'McLaren Artura', 'rolls_title': 'Rolls Spectre'
        },
        'fr': {
            'nav_home': 'Accueil', 'nav_menu': 'MENU SUPERCARS', 'nav_service': 'Services', 'nav_news': 'Actualités', 'nav_contact': 'Contact',
            'hotline': 'HOTLINE: 1900 8888', 'lang_label': 'Langue',
            'hero_title': "CHEF-D'ŒUVRE DE <span>PERFECTION</span>", 'hero_desc': 'Où les rêves mécaniques deviennent réalité. Explorez le style de vie élite.',
            'btn_showroom': 'Explorer Showroom', 'btn_book': 'Réservation Privée',
            'section_collection': 'COLLECTION <span>PREMIUM</span>', 'section_sport': 'COLLECTION <span>PUR SPORT</span>', 'section_exclusive': 'ÉDITIONS <span>LIMITÉES</span>',
            'info_engine': 'MOTEUR', 'info_power': 'PUISSANCE', 'info_speed': 'VITESSE MAX', 'info_accel': 'ACCÉL (0-100)', 'info_tech': 'NOUV. TECH',
            'info_trans': 'TRANSMISSION', 'info_year': 'ANNÉE', 'info_interior': 'INTÉRIEUR', 'info_style': 'STYLE', 'info_status': 'STATUT',
            'spec_label': 'Spécifications Techniques', 'contact_quote': 'CONTACTER POUR DEVIS'
        },
        'zh': {
            'nav_home': '首页', 'nav_menu': '超跑菜单', 'nav_service': '服务', 'nav_news': '新闻', 'nav_contact': '联系',
            'hotline': '热线: 1900 8888', 'lang_label': '语言',
            'hero_title': '<span>完美</span>杰作', 'hero_desc': '机械梦想在此成真。探索拥有标志性汽车的精英生活。',
            'btn_showroom': '探索展厅', 'btn_book': '私人预订',
            'section_collection': '精品<span>系列</span>', 'section_sport': '纯<span>运动</span>系列', 'section_exclusive': '限量<span>版</span>',
            'info_engine': '发动机', 'info_power': '功率', 'info_speed': '最高时速', 'info_accel': '加速 (0-100)', 'info_tech': '新技术',
            'info_trans': '变速箱', 'info_year': '年份', 'info_interior': '内饰', 'info_style': '风格', 'info_status': '状态',
            'spec_label': '技术规格', 'contact_quote': '联系获取报价'
        },
        'ja': {
            'nav_home': 'ホーム', 'nav_menu': 'スーパーカー', 'nav_service': 'サービス', 'nav_news': 'ニュース', 'nav_contact': 'お問い合わせ',
            'hotline': 'ホットライン: 1900 8888', 'lang_label': '言語',
            'hero_title': '<span>完璧</span>な傑作', 'hero_desc': '機械の夢が叶う場所。アイコニックな車とともにエリートなライフスタイルを。',
            'btn_showroom': 'ショールーム', 'btn_book': 'プライベート予約',
            'section_collection': 'プレミアム<span>コレクション</span>', 'section_sport': '<span>スポーツ</span>コレクション', 'section_exclusive': '限定<span>モデル</span>',
            'info_engine': 'エンジン', 'info_power': '出力', 'info_speed': '最高速度', 'info_accel': '加速 (0-100)', 'info_tech': '最新技術',
            'info_trans': '変速機', 'info_year': '年式', 'info_interior': '内装', 'info_style': 'スタイル', 'info_status': 'ステータス',
            'spec_label': '技術仕様', 'contact_quote': 'お見積り'
        }
    };

    // ✅ FIX: Hàm updatePageContent với dấu ngoặc đúng + currentLangDisplay được querySelector
    function updatePageContent(lang) {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });
        localStorage.setItem('zorenb_lang', lang);

        // Re-trigger Luxury typing if it exists
        if (window.LuxuryExperience) window.LuxuryExperience.setupTyping();

        // ✅ ĐỒNG BỘ UI: Lấy nhãn ngôn ngữ trực tiếp từ class "lang-option" để cập nhật "current-lang-text"
        const currentLangDisplay = document.querySelector('.current-lang-text');
        const matchingOption = document.querySelector(`.lang-option[data-lang="${lang}"]`);
        if (currentLangDisplay && matchingOption) {
            currentLangDisplay.textContent = matchingOption.textContent.trim();
        }
    }

    // Khởi tạo ngôn ngữ từ localStorage
    const savedLang = localStorage.getItem('zorenb_lang') || 'vi';

    // Sự kiện chọn ngôn ngữ trong dropdown
    document.addEventListener('click', (e) => {
        if (e.target.closest('.lang-option')) {
            const lang = e.target.closest('.lang-option').getAttribute('data-lang');
            updatePageContent(lang);
        }
    });

    // Chạy ngay lần đầu
    updatePageContent(savedLang);

    // Logic cho Showroom Brand Menu
    const brandHeaders = document.querySelectorAll('.brand-header');

    brandHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const parent = header.parentElement;

            // Toggle active class cho brand item được bấm
            parent.classList.toggle('active');

            // Đóng các menu khác (Accordion effect)
            document.querySelectorAll('.brand-item').forEach(item => {
                if (item !== parent) {
                    item.classList.remove('active');
                }
            });
        });
    });

    // --- ZORENB ADVANCED 3D CAROUSEL (SHOWROOM) ---
    const carouselContainer = document.querySelector('.carousel-container, .carousel-3d-container');
    const carouselStage = document.getElementById('carouselStage');
    const items3D = document.querySelectorAll('.item-car');
    
    let currentRotation = 0;
    let isTransitioning = false;

    function update3DCarousel() {
        if (!carouselStage) return;
        
        // Cập nhật góc quay cho stage
        carouselStage.style.transform = `rotateY(${currentRotation}deg)`;

        // Tính toán xe nào đang ở trung tâm (Focused)
        let normalizedRotation = ((-currentRotation % 360) + 360) % 360;
        let focusedIndex = Math.round(normalizedRotation / 45) % 8;

        items3D.forEach((item, index) => {
            const itemIndex = parseInt(item.getAttribute('data-index'));
            
            // Chỉ hiển thị 3 - 5 xe gần mặt trước nhất để tối ưu hiệu năng và thẩm mỹ
            let diff = Math.abs(itemIndex - focusedIndex);
            if (diff > 4) diff = 8 - diff;

            if (diff <= 2) {
                item.classList.add('visible');
                item.style.opacity = "1";
                item.style.pointerEvents = "auto";
            } else {
                item.classList.remove('visible');
                item.style.opacity = "0";
                item.style.pointerEvents = "none";
            }

            if (itemIndex === focusedIndex) {
                item.classList.add('focused');
            } else {
                item.classList.remove('focused');
            }
        });
    }

    if (carouselContainer && carouselStage) {
        // Expose ZorenbCarousel globally for AI interaction
        window.ZorenbCarousel = {
            rotate: (deg) => {
                currentRotation += deg;
                update3DCarousel();
            },
            setRotation: (index) => {
                currentRotation = -(index * 45);
                update3DCarousel();
            },
            getFocusedItem: () => {
                let normalizedRotation = ((-currentRotation % 360) + 360) % 360;
                let focusedIndex = Math.round(normalizedRotation / 45) % 8;
                return Array.from(items3D).find(item => parseInt(item.getAttribute('data-index')) === focusedIndex);
            }
        };

        // Navigation Buttons
        const prevBtn = document.getElementById('prevBtn3D');
        const nextBtn = document.getElementById('nextBtn3D');

        if (prevBtn) prevBtn.addEventListener('click', () => window.ZorenbCarousel.rotate(45));
        if (nextBtn) nextBtn.addEventListener('click', () => window.ZorenbCarousel.rotate(-45));
        
        // --- TƯƠNG TÁC LĂN CHUỘT (MOUSE WHEEL) ---
        carouselContainer.addEventListener('wheel', (e) => {
            e.preventDefault(); // Ngăn trang web cuộn lên xuống khi đang ở vùng carousel
            if (e.deltaY > 0) {
                // Lăn xuống -> Xoay từ phải qua trái (-45)
                window.ZorenbCarousel.rotate(-45);
            } else {
                // Lăn lên -> Xoay từ trái qua phải (45)
                window.ZorenbCarousel.rotate(45);
            }
        }, { passive: false });

        // Thêm tính năng nhấp đúp vào xe để đưa nó ra giữa (Yêu cầu User)
        items3D.forEach(item => {
            item.addEventListener('dblclick', (e) => {
                e.stopPropagation();
                const idx = parseInt(item.getAttribute('data-index'));
                console.log("ZORENB Carousel: Centering car index", idx);
                window.ZorenbCarousel.setRotation(idx);
            });
        });

        // Khởi tạo ban đầu
        update3DCarousel();
    }

    // --- HERO VIDEO AUDIO INTELLIGENCE (ZORENB 2.0) ---
    const heroVideo = document.getElementById('hero-video-cinematic');
    if (heroVideo) {
        // 1. Logic phát lặp nhưng TẮT TIẾNG (Mute after first play)
        heroVideo.addEventListener('ended', () => {
            heroVideo.muted = true;
            heroVideo.play();
        });

        // 2. Logic BẬT TIẾNG mỗi 5 phút (Unmute every 5 mins)
        setInterval(() => {
            console.log("ZORENB: periodic audio activation triggered.");
            heroVideo.muted = false;
        }, 300000);

        // Cố gắng phát có tiếng ban đầu
        heroVideo.muted = false;
        heroVideo.play().catch(err => {
            console.warn("ZORENB: Autoplay with sound restricted. Muting to play.");
            heroVideo.muted = true;
            heroVideo.play();
        });
    }

    // --- NEWS HEADER REVEAL ANIMATION (ZORENB 2.0) ---
    const newsHeader = document.querySelector('.news-header');
    if (newsHeader) {
        const observerOptions = { threshold: 0.3 };

        const newsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('reveal-active');
                    console.log("ZORENB: News Header Revealed.");
                }
            });
        }, observerOptions);

        newsObserver.observe(newsHeader);
    }

    // --- EXPERT LUXURY: AI & AUDIO EXPERIENCE SYSTEM ---
    const LuxuryExperience = {
        voices: { 'vi': 'Vietnamese Female', 'en': 'Google US English' },
        engineSounds: {
            'lamborghini': 'https://assets.mixkit.co/active_storage/sfx/2567/2567-preview.mp3',
            'ferrari': 'https://assets.mixkit.co/active_storage/sfx/2564/2564-preview.mp3',
            'mclaren': 'https://www.soundjay.com/transportation/sports-car-driving-1.mp3',
            'rolls': 'https://www.soundjay.com/transportation/car-driving-1.mp3',
            'porsche': 'https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3',
            'bentley': 'https://assets.mixkit.co/active_storage/sfx/2555/2555-preview.mp3',
            'bugatti': 'https://assets.mixkit.co/active_storage/sfx/2566/2566-preview.mp3',
            'aston': 'https://assets.mixkit.co/active_storage/sfx/2563/2563-preview.mp3'
        },

        init() {
            this.setupTyping();
            this.setupHoverReading();
            this.setupSounds();
            // Expose globally so updatePageContent can call it
            window.LuxuryExperience = this;
            console.log("ZORENB: Luxury Contextual AI & Roar Active.");
        },

        // 1. AI TYPING ON SCROLL
        setupTyping() {
            const titles = document.querySelectorAll('[data-i18n="news_main_title"], .article-header h1, .hero-content-overlay h1');
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && !entry.target.classList.contains('typed')) {
                        this.typeText(entry.target);
                    }
                });
            }, { threshold: 0.2 });

            titles.forEach(t => {
                if (!t.getAttribute('data-original')) {
                    t.setAttribute('data-original', t.innerText);
                    t.innerText = '';
                }
                observer.observe(t);
            });
        },

        typeText(el) {
            const text = el.getAttribute('data-original');
            if (!text) return;
            let i = 0;
            el.classList.add('typed');
            el.innerHTML = '';

            const typeChar = () => {
                if (i < text.length) {
                    const char = text[i];
                    const span = document.createElement('span');
                    span.className = 'luxury-char';

                    if (char === ' ') span.classList.add('luxury-space');
                    if (char === '&') span.classList.add('luxury-amp');

                    span.innerText = char;
                    el.appendChild(span);
                    i++;

                    const randomDelay = Math.random() * (120 - 30) + 30;
                    setTimeout(typeChar, randomDelay);
                }
            };
            typeChar();
        },

        // 2. CONTEXTUAL AI VOICE (VIETNAMESE HOVER-TO-READ)
        setupHoverReading() {
            // Mở rộng phạm vi đọc văn bản: tiêu đề, đoạn văn, và các khối chi tiết
            const elements = document.querySelectorAll('.article-body p, .news-header h1, .news-info-overlay h2, .news-info h2, .news-info p, .category-tag, .spec-value, .logo-text');
            let readTimeout;

            elements.forEach(el => {
                el.addEventListener('mouseenter', () => {
                    // Cơ chế Debounce (trễ 150ms) để lọc bỏ các di chuyển chuột vô ý, giúp âm thanh không bị rè
                    clearTimeout(readTimeout);
                    readTimeout = setTimeout(() => {
                        this.readFragment(el.innerText);
                        el.style.color = 'var(--primary-gold)'; // Hiệu ứng nhẹ khi AI đang đọc
                        el.style.transition = '0.3s';
                    }, 150); 
                });
                
                el.addEventListener('mouseleave', () => {
                    el.style.color = ''; // Trả lại màu cũ
                    if (window.responsiveVoice) window.responsiveVoice.cancel();
                    else speechSynthesis.cancel();
                });
            });
        },

    readFragment(text) {
        if (!text || !text.trim()) return;

        // ƯU TIÊN SỬ DỤNG RESPONSIVE VOICE CHO CHẤT LƯỢNG HD TIẾNG VIỆT
        if (window.responsiveVoice) {
            window.responsiveVoice.cancel();
            window.responsiveVoice.speak(text, "Vietnamese Female", {
                rate: 1.05, 
                pitch: 1, 
                volume: 1,
                onstart: () => console.log("ZORENB AI: Đang phát giọng HD Chuẩn Tiếng Việt"),
                onerror: (e) => console.error("ZORENB AI: Lỗi âm thanh -", e)
            });
        } else {
            // Fallback sang SpeechSynthesis mặc định nếu thư viện chưa tải xong
            speechSynthesis.cancel();
            const ut = new SpeechSynthesisUtterance(text);
            const voices = speechSynthesis.getVoices();
            const viVoice = voices.find(v => v.lang.includes('vi-VN')) || voices.find(v => v.lang.includes('vi'));
            if (viVoice) ut.voice = viVoice;
            ut.lang = 'vi-VN';
            ut.rate = 1.0;
            ut.pitch = 1.0;
            speechSynthesis.speak(ut);
        }
    },

    // --- ZORENB ADVANCED ENGINE SYNTHESIZER (WEB AUDIO API) ---
    ZorenbEngine: {
        ctx: null,
        init() {
            try {
                if (!this.ctx) {
                    this.ctx = new (window.AudioContext || window.webkitAudioContext)();
                }
                if (this.ctx.state === 'suspended') {
                    this.ctx.resume();
                }
            } catch (e) { console.error("Synth Init Error", e); }
        },
        
        createNoise() {
            const bufferSize = this.ctx.sampleRate * 2;
            const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
            const data = buffer.getChannelData(0);
            for (let i = 0; i < bufferSize; i++) {
                data[i] = Math.random() * 2 - 1;
            }
            return buffer;
        },

        roar(brand = "Supercar") {
            try {
                this.init();
                const now = this.ctx.currentTime;
                
                // Fundamental Oscillators
                const osc1 = this.ctx.createOscillator();
                const osc2 = this.ctx.createOscillator();
                const gain = this.ctx.createGain();
                
                let baseFreq = 70; // Default V8
                if (brand && (brand.toLowerCase().includes('lamborghini') || brand.toLowerCase().includes('ferrari') || brand.toLowerCase().includes('bugatti'))) {
                    baseFreq = 100; // High-pitch V12
                } else if (brand && brand.toLowerCase().includes('rolls')) {
                    baseFreq = 35; // Deep luxury silence
                }

                osc1.type = 'sawtooth';
                osc2.type = 'square';
                osc1.frequency.setValueAtTime(baseFreq, now);
                osc2.frequency.setValueAtTime(baseFreq / 2, now);
                
                // Noise
                const noise = this.ctx.createBufferSource();
                noise.buffer = this.createNoise();
                const filter = this.ctx.createBiquadFilter();
                filter.type = 'lowpass';
                filter.frequency.setValueAtTime(600, now);

                // Ramp up (Startup)
                osc1.frequency.exponentialRampToValueAtTime(baseFreq * 4, now + 0.4);
                osc1.frequency.exponentialRampToValueAtTime(baseFreq * 1.2, now + 1.5);
                filter.frequency.exponentialRampToValueAtTime(3000, now + 0.4);
                filter.frequency.exponentialRampToValueAtTime(500, now + 1.5);

                // Gain Envelope
                gain.gain.setValueAtTime(0, now);
                gain.gain.linearRampToValueAtTime(0.3, now + 0.05);
                gain.gain.exponentialRampToValueAtTime(0.01, now + 2.5);

                osc1.connect(gain);
                osc2.connect(gain);
                noise.connect(filter);
                filter.connect(gain);
                gain.connect(this.ctx.destination);

                osc1.start(now);
                osc2.start(now);
                noise.start(now);
                osc1.stop(now + 2.6);
                osc2.stop(now + 2.6);
                noise.stop(now + 2.6);
                
                console.log(`ZORENB Engine Synth: LIVE simulated roar for ${brand}`);
            } catch (e) {
                console.error("ZORENB Synth Roar Error:", e);
                // Last ditch fallback to standard rev sound
                const audio = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-sports-car-engine-revving-1536.mp3');
                audio.volume = 0.5;
                audio.play().catch(() => {});
            }
        }
    },

        // 3. CINEMATIC ENGINE ROAR (STARTUP & INTERACTION)
        setupSounds() {
            const startupRoar = () => {
                this.playSound('roar');
                window.removeEventListener('scroll', startupRoar);
                window.removeEventListener('click', startupRoar);
            };
            window.addEventListener('scroll', startupRoar);
            window.addEventListener('click', startupRoar);

            const images = document.querySelectorAll('.hero-poster-placeholder, .gallery-img-box');
            images.forEach(img => {
                img.onclick = () => this.playSound('rev');
            });
        },

        playSound(type, brand = null) {
            // ƯU TIÊN SỬ DỤNG BỘ TỔNG HỢP ÂM THANH TRỰC TIẾP CHO LỆNH NỔ MÁY
            if (type === 'ignition' || type === 'rev' || type === 'roar') {
                this.ZorenbEngine.roar(brand || "Supercar");
                return;
            }

            const sounds = {
                'select': 'https://assets.mixkit.co/sfx/preview/mixkit-modern-technology-select-3124.mp3',
                'hover': 'https://assets.mixkit.co/sfx/preview/mixkit-interface-click-1126.mp3'
            };
            
            const isSubPage = window.location.pathname.includes('/news_detail/');
            const pathPrefix = isSubPage ? '../' : '';
            const source = sounds[type] || sounds['select'];
            
            const audio = new Audio(source);
            audio.volume = 0.3;
            audio.play().catch(e => console.warn(`ZORENB AI Audio silent: ${type}`));
        },

        readCarSpecs(card) {
            if (!card) return;
            const carName = card.querySelector('h3')?.innerText || "Siêu xe";
            const price = card.querySelector('.price-tag')?.innerText || "Liên hệ";
            const details = Array.from(card.querySelectorAll('.detail-info div'))
                .map(d => d.innerText.replace('\n', ': '))
                .join('. ');

            const fullText = `Chi tiết xe ${carName}. Thông số kỹ thuật: ${details}. Giá niêm yết: ${price}.`;
            this.readFragment(fullText);
        }
    };

    LuxuryExperience.init();

    // --- ZORENB AI ASSISTANT 3.0: SPEECH RECOGNITION & NAVIGATION SYSTEM ---
    const ZorenbaAssistant = {
        isListening: false,
        recognition: null,
        commands: {
            'bật đèn': 'action_lights',
            'bat den': 'action_lights',
            'nổ máy': 'action_ignition',
            'no may': 'action_ignition'
        },

        init() {
            if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
                console.warn("ZORENB: Speech Recognition not supported in this browser.");
                this.setupUI(); // Vẫn setup UI dù không có mic
                return;
            }

            this.harvestNavCommands();
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            this.recognition = new SpeechRecognition();
            this.recognition.lang = 'vi-VN';
            this.recognition.continuous = false;
            this.recognition.interimResults = false;

            this.recognition.onstart = () => {
                this.isListening = true;
                this.updateUI('listening');
            };

            this.recognition.onresult = (event) => {
                const result = event.results[0][0].transcript.toLowerCase();
                console.log("ZORENB AI Heard:", result);
                this.handleCommand(result);
            };

            this.recognition.onerror = (event) => {
                console.warn("ZORENB AI Recognition Error:", event.error);
                this.isListening = false;
                this.updateUI('idle');
            };

            this.recognition.onend = () => {
                this.isListening = false;
                this.updateUI('idle');
            };

            this.setupUI();
        },

        setupUI() {
            if (document.querySelector('.zorenba-orb-container')) return;

            const orbHTML = `
                <div class="zorenba-orb-container" id="zorenbOrbContainer">
                    <div class="zorenba-orb" id="zorenbaOrb">
                        <div class="orb-core"></div>
                        <div class="orb-wave"></div>
                    </div>
                    <span class="orb-label">AI VOICE ZOREN</span>
                </div>
            `;
            document.body.insertAdjacentHTML('beforeend', orbHTML);

            const orbContainer = document.getElementById('zorenbOrbContainer');
            const orb = document.getElementById('zorenbaOrb');

            // --- RESTORE SAVED POSITION (LocalStorage) ---
            const savedPos = JSON.parse(localStorage.getItem('zorenb_orb_pos') || 'null');
            if (savedPos) {
                orbContainer.style.left = savedPos.left;
                orbContainer.style.top = savedPos.top;
                orbContainer.style.bottom = 'auto';
                orbContainer.style.right = 'auto';
            }

            // --- DRAG & DROP LOGIC ---
            let isDragging = false, startX = 0, startY = 0, startLeft = 0, startTop = 0;

            const onDragStart = (e) => {
                const clientX = e.touches ? e.touches[0].clientX : e.clientX;
                const clientY = e.touches ? e.touches[0].clientY : e.clientY;
                startX = clientX;
                startY = clientY;

                const rect = orbContainer.getBoundingClientRect();
                startLeft = rect.left;
                startTop = rect.top;
                isDragging = false;

                const onMove = (ev) => {
                    const cx = ev.touches ? ev.touches[0].clientX : ev.clientX;
                    const cy = ev.touches ? ev.touches[0].clientY : ev.clientY;
                    const dx = cx - startX;
                    const dy = cy - startY;

                    if (!isDragging && Math.abs(dx) + Math.abs(dy) > 5) {
                        isDragging = true;
                        orbContainer.classList.add('orb-dragging');
                    }

                    if (!isDragging) return;
                    ev.preventDefault();

                    // Boundary constraints: giữ Orb trong viewport
                    const newLeft = Math.min(Math.max(startLeft + dx, 10), window.innerWidth - orbContainer.offsetWidth - 10);
                    const newTop = Math.min(Math.max(startTop + dy, 10), window.innerHeight - orbContainer.offsetHeight - 10);

                    orbContainer.style.left = newLeft + 'px';
                    orbContainer.style.top = newTop + 'px';
                    orbContainer.style.bottom = 'auto';
                    orbContainer.style.right = 'auto';
                };

                const onDragEnd = () => {
                    if (isDragging) {
                        orbContainer.classList.remove('orb-dragging');
                        // Lưu vị trí vào LocalStorage
                        localStorage.setItem('zorenb_orb_pos', JSON.stringify({
                            left: orbContainer.style.left,
                            top: orbContainer.style.top
                        }));
                    }
                    isDragging = false;
                    document.removeEventListener('mousemove', onMove);
                    document.removeEventListener('mouseup', onDragEnd);
                    document.removeEventListener('touchmove', onMove);
                    document.removeEventListener('touchend', onDragEnd);
                };

                document.addEventListener('mousemove', onMove);
                document.addEventListener('mouseup', onDragEnd);
                document.addEventListener('touchmove', onMove, { passive: false });
                document.addEventListener('touchend', onDragEnd);
            };

            orbContainer.addEventListener('mousedown', onDragStart);
            orbContainer.addEventListener('touchstart', onDragStart, { passive: true });

            // Resize: giữ Orb trong viewport khi resize cửa sổ
            window.addEventListener('resize', () => {
                const rect = orbContainer.getBoundingClientRect();
                if (rect.right > window.innerWidth) {
                    orbContainer.style.left = (window.innerWidth - orbContainer.offsetWidth - 10) + 'px';
                }
                if (rect.bottom > window.innerHeight) {
                    orbContainer.style.top = (window.innerHeight - orbContainer.offsetHeight - 10) + 'px';
                }
            });

            // --- PUSH-TO-TALK (HOLD CTRL TO SPEAK) ---
            let isMicActive = false; // Trạng thái Toggle của Mic

            window.addEventListener('keydown', (e) => {
                if (e.key === 'Control') {
                    e.preventDefault(); // Ngăn trình duyệt can thiệp phím tắt
                    
                    if (!isMicActive) {
                        // --- TRƯỜNG HỢP 1: BẬT MIC ---
                        isMicActive = true;
                        this.unlockAudio();
                        
                        const welcomeText = "Zoren b nghe đây.";
                        if (window.responsiveVoice) {
                            window.responsiveVoice.cancel();
                            window.responsiveVoice.speak(welcomeText, "Vietnamese Female", {
                                rate: 1.1, pitch: 1, volume: 1
                            });
                        }

                        setTimeout(() => {
                            try {
                                if (this.recognition) {
                                    this.recognition.start();
                                    LuxuryExperience.playSound('select');
                                    const orb = document.getElementById('zorenbaOrb');
                                    if(orb) orb.classList.add('ai-pulse-active');
                                }
                            } catch(err) {}
                        }, 100);
                    } else {
                        // --- TRƯỜNG HỢP 2: TẮT MIC (Khi đang bật) ---
                        isMicActive = false;
                        if (this.recognition) {
                            this.recognition.stop();
                            LuxuryExperience.playSound('hover');
                            const orb = document.getElementById('zorenbaOrb');
                            if(orb) orb.classList.remove('ai-pulse-active');
                        }
                    }
                }
            });

            // Gỡ bỏ logic keyup cũ (đã chuyển sang Toggle ở keydown)
            window.addEventListener('keyup', (e) => {
                if (e.key === 'Control') {
                    // Không ngắt mic ở đây nữa
                }
            });

            // --- SHOWROOM MENU INTERACTION (AUTO-CLOSE & MANUAL TOGGLE) ---
            const brandNav = document.getElementById('brand-nav');
            const sidebarToggle = document.getElementById('sidebar-toggle');
            
            if (brandNav && sidebarToggle) {
                // Tắt menu khi di chuột ra khỏi vùng chọn (Yêu cầu người dùng)
                brandNav.addEventListener('mouseleave', () => {
                    if (brandNav.classList.contains('active-ai')) {
                        brandNav.classList.remove('active-ai');
                        sidebarToggle.classList.remove('active-ai');
                    }
                });

                // Nút X (Manual Close)
                sidebarToggle.addEventListener('click', () => {
                    if (sidebarToggle.classList.contains('active-ai')) {
                        sidebarToggle.classList.remove('active-ai');
                        brandNav.classList.remove('active-ai');
                    }
                });
            }

            // CLICK HANDLER — chỉ kích hoạt khi KHÔNG drag
            orb.addEventListener('click', () => {
                if (isDragging) return;
                
                // --- UNLOCK AUDIO CONTEXT ---
                this.unlockAudio();
                
                if (!this.recognition) return;
                if (!this.isListening) {
                    // --- AUTOMATIC VIETNAMESE GREETING ---
                    LuxuryExperience.readFragment("Xin chào, tôi là trợ lý ZORENB. Tôi có thể giúp gì cho bạn?");
                    setTimeout(() => {
                        this.recognition.start();
                    }, 2500); // Đợi chào xong mới nghe
                } else {
                    this.recognition.stop();
                }
            });
        },

        unlockAudio() {
            // Thủ thuật nhỏ để trình duyệt cho phép phát âm thanh sau đó
            if (LuxuryExperience && LuxuryExperience.ZorenbEngine) {
                LuxuryExperience.ZorenbEngine.init();
            }
            
            const silentSound = new Audio();
            silentSound.muted = true;
            silentSound.play().then(() => silentSound.pause()).catch(() => {});
            
            if (window.responsiveVoice) {
                // Đánh thức ResponsiveVoice bằng một khoảng trắng không tiếng
                window.responsiveVoice.speak(" ", "Vietnamese Female", { volume: 0 });
            }
        },

        harvestNavCommands() {
            // Tận dụng cả link Navbar và Menu ẩn (Mobile/Submenu)
            const navLinks = document.querySelectorAll('nav a, .luxury-nav-box a, .footer-links a');
            navLinks.forEach(link => {
                const label = link.innerText.toLowerCase().trim();
                const href = link.getAttribute('href');
                if (label && href && !href.startsWith('#') && !href.startsWith('tel:') && !href.startsWith('mailto:')) {
                    this.commands[label] = href;
                }
            });
            console.log("ZORENB AI: Commands synced with NAV:", Object.keys(this.commands));
        },

        getRelativePath(targetFile) {
            // Xử lý thông minh đường dẫn tương đối để AI có thể về 'Home' từ các trang sâu như news_detail/
            const isSubPage = window.location.pathname.includes('/news_detail/');
            return isSubPage ? `../${targetFile}` : targetFile;
        },

        updateUI(state) {
            const orb = document.getElementById('zorenbaOrb');
            if (orb) {
                if (state === 'listening') orb.classList.add('active');
                else orb.classList.remove('active');
            }
        },

        handleCommand(text) {
            let found = false;
            console.log("Processing AI Command:", text);

            // --- LỆNH GỌI TÊN AI (WAKE WORD "ZORENB" - ĐA DẠNG PHIÊN ÂM) ---
            const wakeWords = ['trợ lý', 'trợ lí', 'zorenb', 'zoren', 'zo ren', 'zo rên', 'giô rên', 'dô rên', 'dô rèn', 'giỏ rền', 'ơi'];
            if (wakeWords.some(word => text.includes(word))) {
                LuxuryExperience.readFragment("Trợ lý Zorenb nghe đây. Mời bạn ra lệnh.");
                return;
            }

            // 1. Carousel & Scroll & Cursor Controls
            if (window.ZorenbCarousel || true) {
                // Lệnh Cuộn trang (Scroll)
                if (text.includes('kéo xuống') || text.includes('keo xuong') || text.includes('cuộn xuống')) {
                    window.scrollBy({ top: 600, behavior: 'smooth' });
                    LuxuryExperience.readFragment("Đang thực hiện kéo xuống.");
                    return;
                }
                if (text.includes('kéo lên') || text.includes('keo len') || text.includes('cuộn lên')) {
                    window.scrollBy({ top: -600, behavior: 'smooth' });
                    LuxuryExperience.readFragment("Đang thực hiện kéo lên.");
                    return;
                }

                // Lệnh Di chuyển chuột (Ghost Cursor)
                const moveMatch = text.match(/chuột (qua trái|qua phải|lên|xuống|trai|phai|len|xuong|sang trái|sang phải|sang trai|sang phai)/);
                if (moveMatch) {
                    const dir = moveMatch[1].replace('qua ', '').replace('sang ', '');
                    console.log("ZORENB AI: Moving cursor to", dir);
                    this.cursor.move(dir);
                    return;
                }

                // Lệnh Mở (Thay thế Double Click)
                if (text.includes('mở') || text.includes('mo') || text.includes('vào ngay') || text.includes('xem ngay')) {
                    LuxuryExperience.readFragment("Đang mở nội dung tại vị trí con trỏ.");
                    this.cursor.doubleClick();
                    return;
                }

                // Lệnh mở/đóng Menu Hãng
                if (text.includes('menu hãng') || text.includes('menu hang')) {
                    const brandNav = document.getElementById('brand-nav');
                    const sidebarToggle = document.getElementById('sidebar-toggle');
                    if (brandNav && sidebarToggle) {
                        brandNav.classList.add('active-ai');
                        sidebarToggle.classList.add('active-ai');
                        LuxuryExperience.readFragment("Đang mở bảng danh mục thương hiệu siêu xe cho bạn.");
                    }
                    return;
                }

                if (text.includes('hủy menu') || text.includes('huy menu') || text.includes('đóng menu') || text.includes('dong menu') || text.includes('tắt menu') || text.includes('tat menu')) {
                    const brandNav = document.getElementById('brand-nav');
                    const sidebarToggle = document.getElementById('sidebar-toggle');
                    if (brandNav && sidebarToggle) {
                        brandNav.classList.remove('active-ai');
                        sidebarToggle.classList.remove('active-ai');
                        LuxuryExperience.readFragment("Đã đóng danh mục thương hiệu.");
                    }
                    return;
                }

                // Điều hướng thương hiệu động (Brand navigation)
                const brands = ['lamborghini', 'ferrari', 'porsche', 'mclaren', 'rolls', 'bentley', 'bugatti', 'aston', 'audi'];
                for (const b of brands) {
                    if (text.includes(b)) {
                        LuxuryExperience.readFragment(`Đang kết nối tới khu vực xe ${b}.`);
                        
                        // Tìm xe đầu tiên của hãng trong Carousel
                        const items = document.querySelectorAll('.item-car');
                        for (const item of items) {
                            if (item.innerText.toLowerCase().includes(b)) {
                                const idx = parseInt(item.getAttribute('data-index'));
                                window.ZorenbCarousel.setRotation(idx);
                                break;
                            }
                        }
                        return;
                    }
                }

                // Regex: Quay trái/phải [số] ô
                const rotateMatch = text.match(/(xoay|quay) (trái|phải|trai|phai) (\d+) (ô|o)/);
                if (rotateMatch) {
                    const direction = rotateMatch[2].includes('trái') || rotateMatch[2] === 'trai' ? 1 : -1;
                    const slots = parseInt(rotateMatch[3]);
                    const deg = slots * 45 * direction;
                    
                    LuxuryExperience.readFragment(`Đang xoay sang ${rotateMatch[2]} ${slots} ô.`);
                    window.ZorenbCarousel.rotate(deg);
                    return;
                }

                // Lệnh xoay cơ bản
                if (text.includes('xoay trái') || text.includes('xoay trai')) {
                    window.ZorenbCarousel.rotate(45);
                    return;
                }
                if (text.includes('xoay phải') || text.includes('xoay phai')) {
                    window.ZorenbCarousel.rotate(-45);
                    return;
                }

            // Chọn xe thứ [số]
            const selectMatch = text.match(/chọn xe thứ (\d+)/) || text.match(/chon xe thu (\d+)/);
            if (selectMatch) {
                const idx = parseInt(selectMatch[1]) - 1;
                if (idx >= 0 && idx < 8) {
                    LuxuryExperience.readFragment(`Đang di chuyển đến xe thứ ${selectMatch[1]}`);
                    window.ZorenbCarousel.setRotation(idx);
                } else {
                    LuxuryExperience.readFragment(`Xin lỗi, chỉ có 8 xe trong bộ sưu tập.`);
                }
                return;
            }
        }

        // 2. Info Reading & Specs (Hiển thị thông số)
        if (text.includes('hiển thị thông số') || text.includes('hien thi thong so') || text.includes('chi tiết xe') || text.includes('xem chi tiết')) {
            const card = window.ZorenbCarousel ? window.ZorenbCarousel.getFocusedItem() : this.findVisibleCard();
            if (card) {
                document.querySelectorAll('.item-car').forEach(c => c.classList.remove('active-detail-ai'));
                card.classList.add('active-detail-ai');
                LuxuryExperience.readCarSpecs(card);
                setTimeout(() => card.classList.remove('active-detail-ai'), 15000);
            }
            return;
        }

        // 3. Lights Control (Mở / Tắt Đèn) - Phân tách rõ ràng
        if (text.includes('mở đèn') || text.includes('bật đèn') || text.includes('sang den') || text.includes('sáng đèn')) {
            this.handleAction('action_lights_on');
            return;
        }
        if (text.includes('tắt đèn') || text.includes('tat den') || text.includes('ngắt đèn') || text.includes('ngat den')) {
            this.handleAction('action_lights_off');
            return;
        }

        // 4. Language Switching (Đồng bộ với DOM class="lang-option")
        const langMap = {
            'việt': 'vi', 'viet': 'vi',
            'anh': 'en', 'english': 'en',
            'pháp': 'fr', 'phap': 'fr',
            'trung': 'zh', 'china': 'zh',
            'nhật': 'ja', 'nhat': 'ja', 'japan': 'ja'
        };
        for (const [name, code] of Object.entries(langMap)) {
            if (text.includes(`tiếng ${name}`) || text.includes(`tieng ${name}`)) {
                const matchingOption = document.querySelector(`.lang-option[data-lang="${code}"]`);
                const langLabel = matchingOption ? matchingOption.textContent.trim() : name;
                
                LuxuryExperience.readFragment(`Đang đổi ngôn ngữ trang sang ${langLabel}`);
                updatePageContent(code);
                return;
            }
        }

        // 5. Default Commands & Navigation (Vòng lặp khép kín)
        for (const [cmd, action] of Object.entries(this.commands)) {
            if (text.includes(cmd)) {
                if (action && action.startsWith('action_')) {
                    this.handleAction(action);
                } else if (action) {
                    // Tự động điều chỉnh đường dẫn nếu di chuyển qua các cấp thư mục
                    let target = action;
                    const isSubPage = window.location.pathname.includes('/news_detail/');
                    if (isSubPage && !action.startsWith('http') && !action.includes('../')) {
                        target = `../${action}`;
                    }
                    
                    LuxuryExperience.readFragment(`Đang chuyển tới ${cmd}`);
                    setTimeout(() => window.location.href = target, 1500);
                }
                found = true;
                break;
            }
        }
        
        // Navigation shortcuts (Bổ sung bộ lệnh điều hướng chuẩn tiếng Việt)
        const navShortcuts = {
            'trang chủ': 'banxe.html',
            'trang chu': 'banxe.html',
            'về home': 'banxe.html',
            'showroom': 'showroom.html',
            'show room': 'showroom.html',
            'tin tức': 'tintuc.html',
            'tin tuc': 'tintuc.html',
            'xem tin': 'tintuc.html',
            'liên hệ': 'lienhe.html',
            'lien he': 'lienhe.html',
            'quay lại': 'javascript:history.back()',
            'quay ve': 'javascript:history.back()'
        };

        for (const [key, page] of Object.entries(navShortcuts)) {
            if (text.includes(key)) {
                let target = page;
                if (!page.startsWith('javascript')) {
                    target = this.getRelativePath(page);
                }
                
                LuxuryExperience.readFragment(`Đang chuyển tới ${key}`);
                setTimeout(() => {
                    if (target.startsWith('javascript:')) eval(target.split(':')[1]);
                    else window.location.href = target;
                }, 1500);
                return;
            }
        }

        if (!found) LuxuryExperience.readFragment("Xin lỗi, tôi chưa nhận diện được lệnh này. Bạn có thể thử 'xoay phải 2 ô' hoặc 'vào tin tức'.");
        },

        handleAction(action) {
            if (action === 'action_lights' || action === 'action_lights_on') {
                const cards = document.querySelectorAll('.item-car, .news-card-full, .news-card-standard');
                cards.forEach(card => card.classList.add('vehicle-lights-active'));
                LuxuryExperience.readFragment("Hệ thống đèn toàn showroom đã được bật.");

            } else if (action === 'action_lights_off') {
                const cards = document.querySelectorAll('.item-car, .news-card-full, .news-card-standard');
                cards.forEach(card => card.classList.remove('vehicle-lights-active'));
                LuxuryExperience.readFragment("Hệ thống đèn đã tắt.");

            } else if (action === 'action_ignition') {
                // Nhận diện thương hiệu xe linh hoạt (Showroom hoặc Tin tức)
                const activeCard = window.ZorenbCarousel ? window.ZorenbCarousel.getFocusedItem() : this.findVisibleCard();
                let brand = "Supercar";
                
                if (activeCard) {
                    // Ưu tiên data-brand, nếu không có thì trích xuất từ tiêu đề
                    const dataBrand = activeCard.getAttribute('data-brand');
                    if (dataBrand) {
                        brand = dataBrand;
                    } else {
                        const title = activeCard.innerText.toLowerCase();
                        if (title.includes('lamborghini')) brand = 'Lamborghini';
                        else if (title.includes('ferrari')) brand = 'Ferrari';
                        else if (title.includes('porsche')) brand = 'Porsche';
                        else if (title.includes('mclaren')) brand = 'McLaren';
                        else if (title.includes('rolls')) brand = 'Rolls-Royce';
                        else if (title.includes('aston')) brand = 'Aston Martin';
                        else if (title.includes('bugatti')) brand = 'Bugatti';
                        else if (title.includes('mercedes') || title.includes('amg')) brand = 'Mercedes';
                    }
                }

                LuxuryExperience.readFragment(`Khởi động động cơ ${brand}. Hãy cảm nhận uy lực.`);
                
                // Cố gắng phát âm thanh siêu xe theo brand, nếu không có brand cụ thể sẽ tự fallback sang supercar.wav
                LuxuryExperience.playSound('ignition', (brand === "Supercar" ? null : brand));

                if (activeCard) {
                    activeCard.classList.add('engine-vibrate');
                    setTimeout(() => activeCard.classList.remove('engine-vibrate'), 4000);
                }
            }
        },

        findVisibleCard() {
            // Tìm card gần trung tâm viewport nhất
            const cards = document.querySelectorAll('.news-card-full, .news-card-standard, .item-car');
            let closest = null;
            let minDistance = Infinity;
            const mid = window.innerHeight / 2;

            cards.forEach(card => {
                const rect = card.getBoundingClientRect();
                const center = rect.top + rect.height / 2;
                const distance = Math.abs(center - mid);
                if (distance < minDistance) {
                    minDistance = distance;
                    closest = card;
                }
            });
            return closest;
        }
    };

    // --- ZORENB GHOST CURSOR SYSTEM (AI VIRTUAL POINTER) ---
    const ZorenbCursor = {
        el: null,
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
        speed: 250, // Tăng tốc độ di chuyển để dễ nhận thấy

        init() {
            if (this.el) return;
            const cursorHTML = `<div id="ai-ghost-cursor" class="zorenb-ghost-cursor"></div>`;
            document.body.insertAdjacentHTML('beforeend', cursorHTML);
            this.el = document.getElementById('ai-ghost-cursor');
            this.update();
        },

        move(direction) {
            this.init();
            switch (direction) {
                case 'trái': case 'trai': this.x -= this.speed; break;
                case 'phải': case 'phai': this.x += this.speed; break;
                case 'lên': case 'len': this.y -= this.speed; break;
                case 'xuống': case 'xuong': this.y += this.speed; break;
            }
            // Giới hạn trong viewport
            this.x = Math.min(Math.max(this.x, 0), window.innerWidth);
            this.y = Math.min(Math.max(this.y, 0), window.innerHeight);
            this.update();
        },

        update() {
            if (this.el) {
                this.el.style.transform = `translate(${this.x}px, ${this.y}px)`;
            }
        },

        doubleClick() {
            this.init();
            const target = document.elementFromPoint(this.x, this.y);
            if (target) {
                LuxuryExperience.readFragment("Đang thực hiện nhấp đúp tại vị trí con trỏ.");
                const dblclickEvent = new MouseEvent('dblclick', {
                    bubbles: true,
                    cancelable: true,
                    view: window
                });
                target.dispatchEvent(dblclickEvent);
                
                // Fallback: Nếu không có dblclick handler, giả lập 2 lần click hoặc click thường
                target.click(); 
                setTimeout(() => target.click(), 100);
            }
        }
    };

    // Gắn ZorenbCursor vào trợ lý TRƯỚC khi init
    ZorenbaAssistant.cursor = ZorenbCursor;
    ZorenbaAssistant.init();

    console.log("ZORENB Advanced 3D Showroom & AI Assistant 3.0 Active.");
});
