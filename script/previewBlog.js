window.onload = function() {
    // Retrieve the blog data stored in sessionStorage
    const blogData = JSON.parse(sessionStorage.getItem('previewBlog'));
    if (blogData) { // Check if blog data exists in sessionStorage
        // Handle image display: Set the image source and make it visible if an image is provided
        const previewImage = document.getElementById('previewImage');
        if (blogData.image) {
            previewImage.src = blogData.image;
            previewImage.style.display = 'block'; // Show image if exists
        }
        // Populate the title, author, and date fields with blog data
        document.getElementById('title').textContent = blogData.title;
        document.getElementById('author').textContent = blogData.author;
        document.getElementById('date').textContent = new Date().toLocaleDateString();

        // Set the category and blog content with the corresponding data
        document.getElementById('category').textContent = blogData.category;
        document.getElementById('content').innerHTML = blogData.content;
    }
}