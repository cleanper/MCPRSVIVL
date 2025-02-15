function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
}

function showContent(sectionId) {
    const introduction = document.getElementById('introduction');
    const howToUse = document.getElementById('how-to-use');
    if (sectionId === 'introduction') {
        introduction.style.display = 'block';
        howToUse.style.display = 'none';
    } else if (sectionId === 'how-to-use') {
        introduction.style.display = 'none';
        howToUse.style.display = 'block';
    }
    document.getElementById('sidebar').classList.remove('active');
}

document.addEventListener('click', (event) => {
    const sidebar = document.getElementById('sidebar');
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    if (!sidebar.contains(event.target) && !hamburgerMenu.contains(event.target)) {
        sidebar.classList.remove('active');
    }
});