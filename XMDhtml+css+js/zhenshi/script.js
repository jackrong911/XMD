// 移动端菜单切换
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.querySelector('.nav-links');
const imageViewer = document.getElementById('imageViewer');
const viewerImage = document.getElementById('viewerImage');
const closeViewer = document.getElementById('closeViewer');
const screenshotItems = document.querySelectorAll('.screenshot-item');


menuBtn.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

// 平滑滚动（点击导航链接跳转到对应区块）
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        window.scrollTo({
            top: targetElement.offsetTop - 80, // 减去导航栏高度
            behavior: 'smooth'
        });
        // 移动端点击后关闭菜单
        if (window.innerWidth <= 768) {
            navLinks.style.display = 'none';
        }
    });
});


// 打开图片查看器
screenshotItems.forEach(item => {
    item.addEventListener('click', () => {
        const imgSrc = item.querySelector('img').getAttribute('data-img');
        viewerImage.setAttribute('src', imgSrc);
        imageViewer.classList.add('active');
        // 防止页面滚动
        document.body.style.overflow = 'hidden';
    });
});

// 关闭图片查看器
closeViewer.addEventListener('click', () => {
    imageViewer.classList.remove('active');
    document.body.style.overflow = 'auto';
});

// 点击空白处关闭
imageViewer.addEventListener('click', (e) => {
    if (e.target === imageViewer) {
        imageViewer.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// 按ESC键关闭
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && imageViewer.classList.contains('active')) {
        imageViewer.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});