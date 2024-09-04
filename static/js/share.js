function shareReport() {
    const url = window.location.href; // Get the current page URL
    const text = `Check out this report: ${url}`; // The text to share
    
    // Check if the Web Share API is supported
    if (navigator.share) {
        navigator.share({
            title: 'Generated Report',
            text: text,
            url: url
        }).then(() => {
            console.log('Report shared successfully.');
        }).catch((error) => {
            console.error('Error sharing report:', error);
        });
    } else {
        // Fallback for browsers that do not support the Web Share API
        alert('Sharing is not supported on this browser.');
    }
}
