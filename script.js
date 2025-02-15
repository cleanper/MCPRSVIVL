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