function checkImageSize() {
    const imageInput = document.getElementById('imageInput');
    const image = imageInput.files[0];

    
    if (!image) {
         showMessage ('Please select an Image.');
         return;
    }

    if (image.size > 5 * 1024 * 1024) {
        showMessage ('Image size is too large. Please select an image smaller than 5MB.');
    }
    else{
        showMessage ('Image size is OK.');
    }
}

function showMessage(x) {
    document.getElementById('message').textContent = x;
}
