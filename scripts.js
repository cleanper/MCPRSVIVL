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
};
