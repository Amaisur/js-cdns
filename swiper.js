// Function to create the popup
function createPopup() {
    // Create a div for the popup background
    const popupBackground = document.createElement('div');
    popupBackground.id = 'popup-background';
    popupBackground.style.position = 'fixed';
    popupBackground.style.top = '0';
    popupBackground.style.left = '0';
    popupBackground.style.width = '100%';
    popupBackground.style.height = '100%';
    popupBackground.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
    popupBackground.style.display = 'flex';
    popupBackground.style.justifyContent = 'center';
    popupBackground.style.alignItems = 'center';
    popupBackground.style.zIndex = '9999';

    // Create a div for the popup content
    const popupContent = document.createElement('div');
    popupContent.id = 'popup-content';
    popupContent.style.width = '300px';
    popupContent.style.padding = '20px';
    popupContent.style.backgroundColor = '#fff';
    popupContent.style.borderRadius = '10px';
    popupContent.style.boxShadow = '0 0 15px rgba(0, 0, 0, 0.2)';
    popupContent.style.textAlign = 'center';
    popupContent.innerHTML = `
        <h2>Important Notice</h2>
        <p>Your Website is hacked by Nasa</p>
    `;

    // Append the content to the background
    popupBackground.appendChild(popupContent);

    // Append the popup background to the body
    document.body.appendChild(popupBackground);

    // Prevent right-click
    document.addEventListener('contextmenu', function (e) {
        e.preventDefault();
    });

    // Prevent F12, Ctrl+Shift+I, and other dev tools shortcuts
    document.addEventListener('keydown', function (e) {
        if (e.key === 'F12' || 
            (e.ctrlKey && e.shiftKey && e.key === 'I') || 
            (e.ctrlKey && e.shiftKey && e.key === 'C') || 
            (e.ctrlKey && e.shiftKey && e.key === 'J') || 
            (e.ctrlKey && e.key === 'U')) {
            e.preventDefault();
        }
    });
}

// Function to show the popup
function showPopup() {
    createPopup();
}

// Call the function to show the popup (you can also trigger this on an event)
showPopup();
