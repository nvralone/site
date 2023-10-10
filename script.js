var loader;
// opacity, display content
function loadNow(opacity) {
    if (opacity <= 0) {
        displayContent();
    } else {
        loader.style.opacity = opacity;
        window.setTimeout(function() {
            loadNow(opacity - 0.05);
        },100);
    }
}
// get style element
function displayContent() {
    loader.style.display = 'none';
    document.getElementById('content').style.display = 'block';
}
// event listener
document.addEventListener("DOMContentLoaded", function() {
    loader = document.getElementById('loader');
    loadNow(1);
});
