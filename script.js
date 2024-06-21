document.addEventListener('DOMContentLoaded', function() {
    fetch('gifs.json')
        .then(response => response.json())
        .then(data => {
            const gifContainer = document.getElementById('gifContainer');
            data.gifs.forEach(gif => {
                const img = document.createElement('img');
                img.src = gif.url;
                img.className = 'img-fluid mt-3';
                gifContainer.appendChild(img);
            });
        });
});