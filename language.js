function switchLanguage(lang) {
    const buttons = document.querySelectorAll('.lang-btn');
    if (lang === 'zh') {
        document.documentElement.lang = 'zh';
        buttons[0].textContent = '中文';
        buttons[1].textContent = 'EN';
    } else if (lang === 'en') {
        document.documentElement.lang = 'en';
        buttons[0].textContent = 'EN';
        buttons[1].textContent = '中文';
    }
}