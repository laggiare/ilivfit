document.getElementById("ytButton").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent page reload

    let videoContainer = document.getElementById("videoContainer");

    // Clear previous iframe if it exists
    videoContainer.innerHTML = '';

    let iframe = document.createElement("iframe");
    iframe.width = "560";
    iframe.height = "315";
    iframe.src = "https://www.youtube.com/embed/dQw4w9WgXcQ";  // Embed URL
    iframe.title = "YouTube video player";
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    iframe.allowFullscreen = true;

    videoContainer.appendChild(iframe);
    videoContainer.style.display = "block"; // Show the video
});
