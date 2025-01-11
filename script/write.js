function checkAllFields() {
    const title = document.getElementById('blogTitle').value.trim();
    const author = document.getElementById('authorName').value.trim();
    const category = document.getElementById('blogCategory').value;
    const content = document.getElementById('editor').innerHTML.trim();
    const errorMsg = document.getElementById('errorMsg');

    if (!title || !author || !category || !content) {
        errorMsg.style.display = 'block';
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return false;
    }

    // Hide error message if all fields are filled
    errorMsg.style.display = 'none';
    return { title, author, category, content }; // Return the valid data
}

function publishBlog() {
    const validData = checkAllFields();
    if (!validData) {
        return false; // Stop if validation failed
    }
    
    // Proceed with publishing only if validation passed
    window.location.href = './index.html';
    alert('Your blog has been published successfully!');
    return true;
}

function format(command) {
    if (['justifyLeft', 'justifyCenter', 'justifyRight'].includes(command)) {
        deactivateAlignmentButtons();
    }
    document.execCommand(command, false, null);
    toggleActiveState(command);
}

function toggleActiveState(command) {
    const button = document.querySelector(`[onclick="format('${command}')"]`);
    if (document.queryCommandState(command)) {
        button.classList.add('active');
    } else {
        button.classList.remove('active');
    }
}

function deactivateAlignmentButtons() {
    const alignButtons = ['justifyLeft', 'justifyCenter', 'justifyRight'];
    alignButtons.forEach(cmd => {
        const button = document.querySelector(`[onclick="format('${cmd}')"]`);
        button.classList.remove('active');
    });
}

function addLink() {
    const url = prompt('Enter URL:');
    if (url) document.execCommand('createLink', false, url);
}

const imageUpload = document.getElementById('imageUpload');
const imageInput = document.getElementById('imageInput');
const imagePreview = document.getElementById('imagePreview');
let uploadedImage = null;

imageUpload.addEventListener('click', () => imageInput.click());

imageInput.addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
            imagePreview.src = event.target.result;
            imagePreview.style.display = 'block';
            uploadedImage = event.target.result;
        };
        reader.readAsDataURL(file);
    }
});

function validateAndPreview() {
    const validData = checkAllFields();
    if (!validData) {
        return false; // Stop if validation failed
    }

    // Proceed with preview only if validation passed
    const blogData = {
        title: validData.title,
        author: validData.author,
        category: validData.category,
        content: validData.content,
        image: uploadedImage
    };

    sessionStorage.setItem('previewBlog', JSON.stringify(blogData));
    window.open('./previewBlog.html', '_blank');
    return true;
}

function addToFeatured() {
    const validData = checkAllFields();
    if (!validData) {
        return false; // Stop if validation failed
    }

    // Proceed with featuring only if validation passed
    window.location.href = './index.html';
    alert('Your blog has been featured successfully!');
    return true;
}