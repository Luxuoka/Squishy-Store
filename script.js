document.addEventListener("DOMContentLoaded", function() {
    let currentSlide = 0;
    const slides = document.querySelectorAll(".slider-container .slide");
    const totalSlides = slides.length;

    if (totalSlides > 0) {
        // Set the first slide as active
        slides[0].classList.add("active");
        
        function showNextSlide() {
            slides[currentSlide].classList.remove("active");
            currentSlide = (currentSlide + 1) % totalSlides;
            slides[currentSlide].classList.add("active");
        }
        setInterval(showNextSlide, 4000);
    }

    const products = {
        1: {
            brand: "Squishy",
            name: "Marshmallow Ghost",
            price: "Rp 168.544,80",
            image: "./img/1.png",
            description: "The super popular Marshmallow Ghost Eggs have now grown into a cute jiangshi-style fluffy squishy, available in two scents (marshmallow and raspberry), measuring about H8.3×W7.4×D9cm, and recommended for ages 15+.",
            specs: []
        },
        2: {
            brand: "Squishy",
            name: "Fluffy Butter Bread",
            price: "Rp 162.208,53",
            image: "./img/2.jpg",
            description: "The super fluffy Butter Bread is now a realistic squishy with yummy-looking baking marks, available in two types (Honey Butter Bread with strawberry scent and Strawberry Butter Bread with honey scent), measuring about H7.6×W12×D5cm, and recommended for ages 15+.",
            specs: []
        },
        3: {
            brand: "Squishy",
            name: "Millie Whale",
            price: "Rp 168.544,80",
            image: "./img/3.jpg",
            description: "The classic iBLOOM character Millie the Whale has been renewed❣️ The shining eyes and round body are super cute 💕 The tail and belly are heart-shaped 💕",
            specs: []
        },
        4: {
            brand: "Squishy",
            name: "Good night Puchi",
            price: "Rp 162.208,53",
            image: "./img/4.jpg",
            description: "The fluffy whipped cream character Puchi ✨ Sleeping in an adorable pose, a new Puchi squishy is now available❣️ Be sure not to wake up Puchi when you gently pet them",
            specs: []
        },
        5: {
            brand: "Squishy",
            name: "Marmo Moon Cake",
            price: "Rp 139.320,20",
            image: "./img/5.jpg",
            description: "The traditional Chinese sweet known as moon cakes are now a squishy ✨ The Marmo design is super cute 💕 Soft and fluffy, it has a sweet scent! Why don't you take them moon viewing? 🎑🌕",
            specs: []
        },
        6: {
            brand: "Squishy",
            name: "Melty Marmo",
            price: "Rp 168.450,79",
            image: "./img/6.jpg",
            description: "Marmo the marshmallow bear has melted⁉️ The new Melty Marmo is available now! Make your desk or shelf cute by decorating it with the melting bear ✨ With a super soft texture, we think you'll be able to relax like Melty Marmo❣️",
            specs: []
        },
        7: {
            brand: "Elektronik",
            name: "Power Bank 10000mAh",
            price: "Rp 250.000,00",
            image: "https://via.placeholder.com/300x200?text=Electronic+Product",
            description: "Power bank dengan kapasitas 10000mAh yang dapat mengisi daya berbagai perangkat elektronik Anda. Dilengkapi dengan dual output dan input USB-C.",
            specs: ["Kapasitas: 10000mAh", "Dual Output", "Input USB-C", "LED Indicator"]
        },
        8: {
            brand: "Aksesoris",
            name: "Gelang Kawaii",
            price: "Rp 45.000,00",
            image: "https://via.placeholder.com/300x200?text=Accessory",
            description: "Gelang dengan desain kawaii yang lucu dan menarik. Cocok untuk melengkapi penampilan Anda sehari-hari.",
            specs: ["Bahan: Silicone", "Tahan Air", "Desain Kawaii", "One Size"]
        }
    };

    const sellerWhatsAppNumber = "6281234567890";
    const navbarToggle = document.getElementById('navbar-toggle');
    const navbarMenu = document.getElementById('navbar-menu');
    
    navbarToggle.addEventListener('click', () => {
        navbarMenu.classList.toggle('active');
    });

    document.querySelectorAll('.navbar-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navbarMenu.classList.remove('active');
        });
    });

    // Kategori Filter
    const categoryBtns = document.querySelectorAll('.category-btn');
    const productCards = document.querySelectorAll('.product-card');
    
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active button
            categoryBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const category = btn.getAttribute('data-category');
            
            // Filter products
            productCards.forEach(card => {
                if (category === 'all' || card.getAttribute('data-category') === category) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Form handling
    const orderForm = document.getElementById('orderForm');
    const productCategory = document.getElementById('productCategory');
    const productName = document.getElementById('productName');
    
    // Update product options based on category
    productCategory.addEventListener('change', function() {
        const category = this.value;
        productName.innerHTML = '<option value="">-- Pilih Produk --</option>';
        
        if (category) {
            Object.keys(products).forEach(id => {
                const product = products[id];
                if (product.brand.toLowerCase() === category.toLowerCase()) {
                    const option = document.createElement('option');
                    option.value = id;
                    option.textContent = product.name;
                    productName.appendChild(option);
                }
            });
        }
    });
    
    // Handle form submission
    orderForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        const productId = formData.get('productName');
        const product = products[productId];
        
        if (product) {
            const message = `Halo, saya ingin melakukan pemesanan dengan detail sebagai berikut:\n\n` +
                          `Nama: ${formData.get('fullName')}\n` +
                          `Username: ${formData.get('username')}\n` +
                          `Email: ${formData.get('email')}\n` +
                          `Nomor Telepon: ${formData.get('phone')}\n` +
                          `Jenis Kelamin: ${formData.get('gender')}\n\n` +
                          `Pesanan:\n` +
                          `Produk: ${product.brand} ${product.name}\n` +
                          `Harga: ${product.price}\n` +
                          `Jumlah: ${formData.get('quantity')}\n\n` +
                          `Total: ${calculateTotal(product.price, formData.get('quantity'))}\n\n` +
                          `Mohon informasi selanjutnya untuk proses pembayaran. Terima kasih.`;
            
            const whatsappURL = `https://wa.me/${sellerWhatsAppNumber}?text=${encodeURIComponent(message)}`;
            window.open(whatsappURL, '_blank');
        }
    });
    
    function calculateTotal(price, quantity) {
        // Remove currency symbol and dots, then parse as float
        const numericPrice = parseFloat(price.replace('Rp ', '').replace('.', '').replace(',', '.'));
        const qty = parseInt(quantity);
        const total = numericPrice * qty;
        
        // Format back to Indonesian currency format
        return 'Rp ' + total.toLocaleString('id-ID', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    }

    const modal = document.getElementById('product-modal');
    const modalClose = document.getElementById('modal-close');
    const modalCloseBtn = document.getElementById('modal-close-btn');
    const modalProductImg = document.getElementById('modal-product-img');
    const modalProductBrand = document.getElementById('modal-product-brand');
    const modalProductName = document.getElementById('modal-product-name');
    const modalProductPrice = document.getElementById('modal-product-price');
    const modalProductDescription = document.getElementById('modal-product-description');
    const modalProductSpecsList = document.getElementById('modal-product-specs-list');
    const modalBuyNow = document.getElementById('modal-buy-now');

    function openWhatsApp(product) {
        const message = `Halo, saya tertarik dengan produk ${product.brand} ${product.name} dengan harga ${product.price}. Apakah masih tersedia?`;
        const whatsappURL = `https://wa.me/${sellerWhatsAppNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappURL, '_blank');
    }

    document.querySelectorAll('.btn-primary').forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            const productId = this.closest('.product-card').getAttribute('data-id');
            const product = products[productId];
            openWhatsApp(product);
        });
    });

    document.querySelectorAll('.btn-secondary').forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            const productId = this.closest('.product-card').getAttribute('data-id');
            const product = products[productId];
            
            modalProductImg.src = product.image;
            modalProductImg.alt = product.name;
            modalProductBrand.textContent = product.brand;
            modalProductName.textContent = product.name;
            modalProductPrice.textContent = product.price;
            modalProductDescription.textContent = product.description;
            
            modalProductSpecsList.innerHTML = '';
            product.specs.forEach(spec => {
                const li = document.createElement('li');
                li.textContent = spec;
                modalProductSpecsList.appendChild(li);
            });
            
            modalBuyNow.setAttribute('data-id', productId);
            modal.classList.add('active');
        });
    });

    modalClose.addEventListener('click', () => {
        modal.classList.remove('active');
    });

    modalCloseBtn.addEventListener('click', () => {
        modal.classList.remove('active');
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });

    modalBuyNow.addEventListener('click', function() {
        const productId = this.getAttribute('data-id');
        const product = products[productId];
        openWhatsApp(product);
        modal.classList.remove('active');
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
});