function confirmRobotCheck(isHuman) {
    const robotCheck = document.getElementById('robot-check');
    if (isHuman) {
        robotCheck.style.display = 'none';
        localStorage.setItem('robotCheck', 'passed');
    } else {
        alert('很抱歉，您未能通过验证。');
    }
}

window.onload = () => {
    const robotCheckPassed = localStorage.getItem('robotCheck') === 'passed';
    if (!robotCheckPassed) {
        document.getElementById('robot-check').style.display = 'flex';
    }
};