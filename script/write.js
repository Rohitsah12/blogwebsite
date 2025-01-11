/**
 * Validates all required fields in the blog creation form.
 * Displays an error message if any field is empty and prevents further actions.
 * Returns the valid data if all fields are filled.
 */
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



/**
 * Publishes the blog after validating the input fields.
 * Redirects to the homepage and shows a success message if validation is successful.
 */
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

/**
 * Executes the formatting command on the content editor (e.g., justify text, bold, italic).
 * Manages the active state of formatting buttons for better UI feedback.
 */
function format(command) {
    if (['justifyLeft', 'justifyCenter', 'justifyRight'].includes(command)) {
        deactivateAlignmentButtons();
    }
    document.execCommand(command, false, null);
    toggleActiveState(command);
}

/**
 * Toggles the active state of a formatting button based on its current state.
 * Highlights buttons to indicate the applied formatting.
 */
function toggleActiveState(command) {
    const button = document.querySelector(`[onclick="format('${command}')"]`);
    if (document.queryCommandState(command)) {
        button.classList.add('active');
    } else {
        button.classList.remove('active');
    }
}


/**
 * Deactivates alignment formatting buttons by removing their active state.
 * Ensures only the currently selected alignment is highlighted.
 */
function deactivateAlignmentButtons() {
    const alignButtons = ['justifyLeft', 'justifyCenter', 'justifyRight'];
    alignButtons.forEach(cmd => {
        const button = document.querySelector(`[onclick="format('${cmd}')"]`);
        button.classList.remove('active');
    });
}

/**
 * Prompts the user to input a URL and creates a hyperlink in the content editor.
 */
function addLink() {
    const url = prompt('Enter URL:');
    if (url) document.execCommand('createLink', false, url);
}

// References to image upload elements
const imageUpload = document.getElementById('imageUpload');
const imageInput = document.getElementById('imageInput');
const imagePreview = document.getElementById('imagePreview');
let uploadedImage = null;

/**
 * Triggers the file input dialog for uploading an image.
 */
imageUpload.addEventListener('click', () => imageInput.click());


/**
 * Handles image selection and displays a preview of the uploaded image.
 * Stores the image data as a base64 string.
 */
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


/**
 * Validates the form fields and prepares a preview of the blog.
 * Stores blog data in session storage and opens a preview page in a new tab.
 */
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


/**
 * Validates the form fields and marks the blog as featured.
 * Redirects to the homepage and shows a success message if validation is successful.
 */
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