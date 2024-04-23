// Make a GET request to the Instagram API
fetch('https://api.instagram.com/v1/media/popular?access_token=YOUR_ACCESS_TOKEN')
    .then(response => response.json())
    .then(data => {
        // Iterate over the retrieved data
        data.forEach(post => {
            // Extract the image URL and caption
            const imageUrl = post.images.standard_resolution.url;
            const caption = post.caption.text;

            // Create an image element and set its source
            const image = document.createElement('img');
            image.src = imageUrl;

            // Create a caption element and set its text
            const captionElement = document.createElement('p');
            captionElement.textContent = caption;

            // Append the image and caption to the document body
            document.body.appendChild(image);
            document.body.appendChild(captionElement);
        });
    })
    .catch(error => {
        console.error('Error:', error);
    });