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