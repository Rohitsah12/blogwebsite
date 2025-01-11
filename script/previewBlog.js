window.onload = function() {
    const blogData = JSON.parse(sessionStorage.getItem('previewBlog'));
    if (blogData) {
        // Handle image display
        const previewImage = document.getElementById('previewImage');
        if (blogData.image) {
            previewImage.src = blogData.image;
            previewImage.style.display = 'block'; // Show image if exists
        }

        document.getElementById('title').textContent = blogData.title;
        document.getElementById('author').textContent = blogData.author;
        document.getElementById('date').textContent = new Date().toLocaleDateString();
        document.getElementById('category').textContent = blogData.category;
        document.getElementById('content').innerHTML = blogData.content;
    }
}