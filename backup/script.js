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
            'spec_label': 'Thông Số Kỹ Thuật', 'contact_quote': 'LIÊN HỆ BÁO GIÁ'
        },
        'en': {
            'nav_home': 'Home', 'nav_menu': 'SUPERCAR MENU', 'nav_service': 'Services', 'nav_news': 'News', 'nav_contact': 'Contact',
            'hotline': 'HOTLINE: 1900 8888', 'lang_label': 'Language',
            'hero_title': 'MASTERPIECE OF <span>PERFECTION</span>', 'hero_desc': 'Where mechanical dreams come true. Explore the elite lifestyle with iconic automobiles.',
            'btn_showroom': 'Explore Showroom', 'btn_book': 'Private Booking',
            'section_collection': 'PREMIUM <span>COLLECTION</span>', 'section_sport': 'PURE <span>SPORT</span> COLLECTION', 'section_exclusive': 'LIMITED <span>EDITIONS</span>',
            'info_engine': 'ENGINE', 'info_power': 'POWER', 'info_speed': 'TOP SPEED', 'info_accel': 'ACCEL (0-100)', 'info_tech': 'NEW TECH',
            'info_trans': 'TRANSMISSION', 'info_year': 'YEAR', 'info_interior': 'INTERIOR', 'info_style': 'STYLE', 'info_status': 'STATUS',
            'spec_label': 'Technical Specifications', 'contact_quote': 'CONTACT FOR QUOTE'
        },
        'fr': {
            'nav_home': 'Accueil', 'nav_menu': 'MENU SUPERCARS', 'nav_service': 'Services', 'nav_news': 'Actualités', 'nav_contact': 'Contact',
            'hotline': 'HOTLINE: 1900 8888', 'lang_label': 'Langue',
            'hero_title': 'CHEF-D\'ŒUVRE DE <span>PERFECTION</span>', 'hero_desc': 'Où les rêves mécaniques deviennent réalité. Explorez le style de vie élite.',
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

    function updatePageContent(lang) {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });
        localStorage.setItem('zorenb_lang', lang);
        
        // Cập nhật nhãn chọn hiện tại
        const currentLangDisplay = document.querySelector('.current-lang-text');
        if (currentLangDisplay) {
            const langLabels = { 'vi': 'Tiếng Việt', 'en': 'English', 'fr': 'Français', 'zh': '简体中文', 'ja': '日本語' };
            currentLangDisplay.textContent = langLabels[lang];
        }
    }

    // Khoi tao ngon ngu tu localStorage
    const savedLang = localStorage.getItem('zorenb_lang') || 'vi';
    
    // Su kien chọn ngôn ngữ trong dropdown (se duoc hien thi qua CSS)
    document.addEventListener('click', (e) => {
        if (e.target.closest('.lang-option')) {
            const lang = e.target.closest('.lang-option').getAttribute('data-lang');
            updatePageContent(lang);
        }
    });

    // Chay ngay lan dau
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



    // --- ADVANCED 3D CAROUSEL LOGIC (ZORENB 2.0) ---
    const stage3D = document.getElementById('carouselStage');
    const container3D = document.getElementById('carouselContainer');
    const items3D = document.querySelectorAll('.item-car');
    const prevBtn3D = document.getElementById('prevBtn3D');
    const nextBtn3D = document.getElementById('nextBtn3D');

    if (stage3D && items3D.length > 0) {
        let currentRotation = 0;
        let isDragging = false;
        let startX = 0;
        let startRotation = 0;

        async function syncCarData() {
            try {
                const response = await fetch('banxe.html');
                const htmlStr = await response.text();
                const parser = new DOMParser();
                const doc = parser.parseFromString(htmlStr, 'text/html');
                const sourceCars = doc.querySelectorAll('.item-car');

                items3D.forEach(showroomCar => {
                    const carName = showroomCar.querySelector('h3').textContent.trim();
                    
                    // Tim xe tuong ung trong banxe.html
                    sourceCars.forEach(sourceCar => {
                        const sourceName = sourceCar.querySelector('h3').textContent.trim();
                        if (carName === sourceName) {
                            const sourceInfo = sourceCar.querySelector('.detail-info');
                            const showroomInfo = showroomCar.querySelector('.detail-info');
                            if (sourceInfo && showroomInfo) {
                                showroomInfo.innerHTML = sourceInfo.innerHTML;
                            }
                        }
                    });
                });
                console.log("ZORENB: Data Synced from banxe.html Successfully.");
                updatePageContent(savedLang); // Cap nhat ngon ngu cho noi dung moi sync
            } catch (err) {
                console.error("ZORENB: Failed to sync data:", err);
            }
        }

        function update3DCarousel() {
            stage3D.style.transform = `rotateY(${currentRotation}deg)`;
            
            let normalizedRotation = ((-currentRotation % 360) + 360) % 360;
            let focusedIndex = Math.round(normalizedRotation / 45) % 8;
            
            // Logic Hien thi 3 xe: Cu, trai, phai
            const leftIndex = (focusedIndex - 1 + items3D.length) % items3D.length;
            const rightIndex = (focusedIndex + 1) % items3D.length;

            items3D.forEach((item, index) => {
                // Hien thi 3 xe gan nhat, an cac xe con lai hoan toan
                if (index === focusedIndex || index === leftIndex || index === rightIndex) {
                    item.classList.add('visible');
                } else {
                    item.classList.remove('visible');
                }

                if (index === focusedIndex) {
                    item.classList.add('focused');
                } else {
                    item.classList.remove('focused');
                }
            });
        }

        // Double click de dua xe ve trung tam va Hien thi Thong tin (Active)
        items3D.forEach((item, index) => {
            item.addEventListener('dblclick', (e) => {
                e.stopPropagation();
                
                // 1. Xoay ve trung tam
                currentRotation = -(index * 45);
                update3DCarousel();

                // 2. Bat/Tat thong tin chi tiet (Toggle Active)
                const isActive = item.classList.contains('active-detail');
                
                items3D.forEach(i => i.classList.remove('active-detail'));
                if (!isActive) {
                    item.classList.add('active-detail');
                }
            });
        });

        if (prevBtn3D) prevBtn3D.addEventListener('click', () => {
            currentRotation += 45;
            update3DCarousel();
        });

        if (nextBtn3D) nextBtn3D.addEventListener('click', () => {
            currentRotation -= 45;
            update3DCarousel();
        });

        window.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                currentRotation += 45;
                update3DCarousel();
            } else if (e.key === 'ArrowRight') {
                currentRotation -= 45;
                update3DCarousel();
            }
        });

        container3D.addEventListener('mousedown', (e) => {
            isDragging = true;
            startX = e.pageX;
            startRotation = currentRotation;
            stage3D.style.transition = 'none';
        });

        window.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            const x = e.pageX;
            const walk = (x - startX) * 0.3;
            currentRotation = startRotation + walk;
            update3DCarousel();
        });

        window.addEventListener('mouseup', () => {
            if (!isDragging) return;
            isDragging = false;
            stage3D.style.transition = 'transform 0.8s cubic-bezier(0.23, 1, 0.32, 1)';
            currentRotation = Math.round(currentRotation / 45) * 45;
            update3DCarousel();
        });

        container3D.addEventListener('wheel', (e) => {
            e.preventDefault();
            if (e.deltaY > 0) currentRotation -= 45;
            else currentRotation += 45;
            update3DCarousel();
        }, { passive: false });

        // Bat dau dong bo du lieu va khoi tao carousel
        syncCarData();
        update3DCarousel();
    }

    // --- HERO VIDEO AUDIO INTELLIGENCE (ZORENB 2.0) ---
    const heroVideo = document.getElementById('hero-video-cinematic');
    if (heroVideo) {
        // 1. Logic phat lap nhung TAT TIENG (Mute after first play)
        heroVideo.addEventListener('ended', () => {
            heroVideo.muted = true; // Tat tieng cho cac lan sau
            heroVideo.play();
        });

        // 2. Logic BAT TIENG moi 5 phut (Unmute every 5 mins)
        // 300,000 miligiây = 5 phút
        setInterval(() => {
            console.log("ZORENB: periodic audio activation triggered.");
            heroVideo.muted = false; // Bat tieng lai cho vong lap nay
        }, 300000); 

        // Co gang phat co tieng ban dau (Trong truong hop trinh duyet cho phep)
        heroVideo.muted = false;
        heroVideo.play().catch(err => {
            console.warn("ZORENB: Autoplay with sound restricted. Muting to play.");
            heroVideo.muted = true;
            heroVideo.play();
        });
    }

    console.log("ZORENB Advanced 3D Showroom Active.");
});



