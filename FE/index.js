
/*search box*/
let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
    navbar.classList.remove('active');
}

/*hover ben dt */
let navbar = document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick = () => {
    navbar.classList.toggle('active');
    search.classList.remove('active');
}

/*keo len thanh mat */
window.onscroll = () =>{
    navbar.classList.remove('active');
    search.classList.remove('active');
}

/*lam mo header */
let header = document.querySelector('header');
window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});

// Chờ cho tài liệu HTML được tải hoàn chỉnh
document.addEventListener("DOMContentLoaded", function() {
    // Lấy phần tử cần thêm hiệu ứng
    var aboutSection = document.querySelector("#about");

    // Thêm lớp active để kích hoạt hiệu ứng
    function fadeInEffect() {
        aboutSection.classList.add("active");
    }

    // Kiểm tra khi phần tử vào vùng nhìn thấy của trình duyệt
    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Xác định khi nào phần tử vào vùng nhìn thấy để kích hoạt hiệu ứng
    function checkVisibility() {
        if (isElementInViewport(aboutSection)) {
            fadeInEffect();
            // Sau khi hiệu ứng được kích hoạt, loại bỏ sự kiện scroll để tránh kích hoạt lại
            window.removeEventListener('scroll', checkVisibility);
        }
    }

    // Kích hoạt kiểm tra khi cuộn trang
    window.addEventListener('scroll', checkVisibility);

    // Kiểm tra trạng thái hiện tại của phần tử khi tải trang
    checkVisibility();
});


