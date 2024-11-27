
// 动态获取图片数量
const imageCount = 30; // 增加图片数量
const images = Array.from({ length: imageCount }, (_, i) => `img/${i + 1}.png`);

const container = document.getElementById('heart-container');
const heartSize = 450; // 心形的大小

function heartShape(t) {
    const x = 16 * Math.pow(Math.sin(t), 3);
    const y = -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));
    return { x, y };
}

for (let i = 0; i < imageCount; i++) {
    const t = (i / imageCount) * 2 * Math.PI;
    const { x, y } = heartShape(t);

    const img = document.createElement('img');
    img.src = images[i % images.length];
    img.alt = `Image ${i + 1}`;
    img.className = 'heart-image';

    const scale = heartSize / 40; // 调整缩放因子
    img.style.top = `${(y * scale + heartSize / 2)}px`;
    img.style.left = `${(x * scale + heartSize / 2)}px`;

    // 添加动画效果
    setTimeout(() => {
        img.classList.add('visible');
    }, i * 10); // 减少延迟时间以加快显示速度

    container.appendChild(img);
}