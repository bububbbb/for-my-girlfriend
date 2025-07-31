document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const messages = document.querySelectorAll('.message');
    const bgMusic = document.getElementById('background-music');
    let currentSlide = 0;

    // Fungsi untuk menampilkan slide berikutnya
    function showSlide(index) {
        // Sembunyikan semua slide dan pesan
        slides.forEach(slide => {
            slide.style.display = 'none';
            slide.style.opacity = 0;
        });
        messages.forEach(message => {
            message.style.opacity = 0;
            message.style.transform = 'translateY(20px)';
        });

        // Tampilkan slide yang saat ini
        slides[index].style.display = 'flex';
        setTimeout(() => {
            slides[index].style.opacity = 1;
        }, 10); // sedikit delay untuk transisi

        // Tampilkan pesan secara perlahan
        setTimeout(() => {
            messages[index].style.opacity = 1;
            messages[index].style.transform = 'translateY(0)';
        }, 2000); // Teks muncul setelah 2 detik
    }

    // Fungsi untuk memutar slide secara otomatis
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    // Tampilkan slide pertama saat halaman dimuat
    showSlide(currentSlide);
    // Ganti slide setiap 8 detik (bisa diatur)
    setInterval(nextSlide, 8000);

    // Otomatis putar musik saat interaksi pertama
    document.body.addEventListener('click', () => {
        if (bgMusic.paused) {
            bgMusic.play();
        }
    }, { once: true }); // event hanya berjalan sekali

    // Fungsi untuk membuat hati yang jatuh
    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerHTML = '❤️'; // Karakter emoji hati
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 2 + 8 + 's'; // Durasi random 8-10s
        document.body.appendChild(heart);

        // Hapus elemen hati setelah animasinya selesai
        setTimeout(() => {
            heart.remove();
        }, 10000); // Sesuai dengan durasi animasi
    }

    // Buat hati setiap 300ms
    setInterval(createHeart, 300);
});
