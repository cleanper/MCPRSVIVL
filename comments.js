function showComments() {
    const introduction = document.getElementById('introduction');
    const howToUse = document.getElementById('how-to-use');
    const comments = document.getElementById('comments');
    introduction.style.display = 'none';
    howToUse.style.display = 'none';
    comments.style.display = 'block';
    loadComments();
}

function loadComments() {
    fetch('comments.json')
        .then(response => response.json())
        .then(data => {
            const commentsList = document.getElementById('comments-list');
            commentsList.innerHTML = '';
            data.comments.forEach(comment => {
                const commentElement = document.createElement('div');
                commentElement.classList.add('comment');
                commentElement.innerHTML = `
                    <strong>${comment.username}</strong>: ${comment.text}
                `;
                commentsList.appendChild(commentElement);
            });
        })
        .catch(error => console.error('Error loading comments:', error));
}

function submitComment() {
    const username = document.getElementById('username').value;
    const commentText = document.getElementById('comment').value;

    if (!username || !commentText) {
        alert('请输入用户名和评论内容！');
        return;
    }

    fetch('comments.json')
        .then(response => response.json())
        .then(data => {
            data.comments.push({ username, text: commentText });
            return fetch('comments.json', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
        })
        .then(() => {
            alert('评论已提交！');
            loadComments();
            document.getElementById('username').value = '';
            document.getElementById('comment').value = '';
        })
        .catch(error => console.error('Error submitting comment:', error));
}

function cancelComment() {
    const comments = document.getElementById('comments');
    comments.style.display = 'none';
}