function confirmRobotCheck(isHuman) {
    const robotCheck = document.getElementById('robot-check');
    if (isHuman) {
        robotCheck.style.animation = 'slideOut 0.5s ease forwards';
        setTimeout(() => {
            robotCheck.style.display = 'none';
        }, 500);
    } else {
        window.location.href = 'https://www.bing.com';
    }
}