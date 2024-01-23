document.addEventListener('DOMContentLoaded', (event) => {
    const footer = document.querySelector('footer'); // 找到页面的 footer 部分

    const beianLink = document.createElement('a'); // 创建一个新的 a（超链接）元素
    beianLink.href = "https://beian.miit.gov.cn/"; // 设置超链接的目标URL
    beianLink.target = "_blank"; // 设置链接在新标签页中打开
    beianLink.innerHTML = '苏ICP备2024057854号-1'; // 设置链接的显示文本（备案号）

    footer.appendChild(beianLink); // 将超链接添加到 footer 中
});
