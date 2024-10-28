  window.onload = function() {
            // Function to create the popup
            function createPopup() {
                // Create a div for the popup background
                const popupBackground = document.createElement('div');
                popupBackground.id = 'popup-background';
                popupBackground.style.cssText = `
                    position: fixed !important;
                    top: 0 !important;
                    left: 0 !important;
                    width: 100% !important;
                    height: 100% !important;
                    background-color: rgba(0, 0, 0, 1) !important;
                    display: flex !important;
                    justify-content: center !important;
                    align-items: center !important;
                    z-index: 9999 !important;
                `;

                // Create a div for the popup content
                const popupContent = document.createElement('div');
                popupContent.id = 'popup-content';
                popupContent.style.cssText = `
                    width: 300px !important;
                    padding: 20px !important;
                    background-color: #000 !important;
                    border-radius: 10px !important;
                    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2) !important;
                    text-align: center !important;
                `;
                popupContent.innerHTML = `
                    <h2>Your Popup Title</h2>
                    <p>Your Popup Content</p>
                `;

                // Append the content to the background
                popupBackground.appendChild(popupContent);

                // Append the popup background as the last element in the body
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

            // Call the function to show the popup
            showPopup();
        }
