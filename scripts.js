function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
}
function loadContent(page) {
    const contentDiv = document.getElementById('content');
    fetch(`${page}.html`)
        .then(response => response.text())
        .then(html => {
            contentDiv.innerHTML = html;
        })
        .catch(error => {
            contentDiv.innerHTML = `<p>加载内容时出错：${error}</p>`;
        });
}
function playMusic() {
    const music = document.getElementById('background-music');
    music.play();
}
function confirmRobotCheck(isHuman) {
    const robotCheck = document.getElementById('robot-check');
    if (isHuman) {
        robotCheck.style.display = 'none';
        document.body.classList.remove('no-interaction');
    } else {
        window.location.href = 'https://www.bing.com';
    }
}
window.onload = function() {
    loadContent('introduction');
    playMusic();
    setTimeout(() => {
        document.getElementById('robot-check').style.display = 'flex';
    }, 5000);
    document.addEventListener('click', function(event) {
        const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
        const triangle = document.createElement('div');
        triangle.classList.add('triangle');
        triangle.style.left = `${event.clientX}px`;
        triangle.style.top = `${event.clientY}px`;
        triangle.style.borderBottomColor = colors[Math.floor(Math.random() * colors.length)];
        document.body.appendChild(triangle);
        setTimeout(() => {
            document.body.removeChild(triangle);
        }, 2000);
    });
};