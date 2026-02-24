// Get the theme toggle button from the HTML
const themeToggle = document.getElementById('themeToggle');

// Initialize theme on page load
// Check if user has a saved theme preference in localStorage
window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    
    // If a saved theme exists, apply it
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeToggle.textContent = '☀️'; // Show sun icon in dark mode
    } else {
        document.body.classList.remove('dark-mode');
        themeToggle.textContent = '🌙'; // Show moon icon in light mode
    }
});

// Toggle theme when button is clicked
themeToggle.addEventListener('click', () => {
    // Toggle the dark-mode class on the body element
    document.body.classList.toggle('dark-mode');
    
    // Update the button icon based on current theme
    const isDarkMode = document.body.classList.contains('dark-mode');
    themeToggle.textContent = isDarkMode ? '☀️' : '🌙';
    
    // Save the user's theme preference to localStorage
    // This persists the preference even after page refresh
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
});

// ========================================
// SMOOTH SCROLLING FOR NAVIGATION LINKS
// ========================================

// Get all navigation links that point to sections
const navLinks = document.querySelectorAll('.nav-links a');

// Add click event listener to each navigation link
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        // Prevent default anchor behavior
        e.preventDefault();
        
        // Get the target section ID from the href attribute
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        // Scroll smoothly to the target section if it exists
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ========================================
// CTA BUTTON CLICK HANDLERS
// ========================================

// Get all call-to-action buttons
const ctaButtons = document.querySelectorAll('.cta-button');

// Add click event listener to each CTA button
ctaButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Log the click event (useful for debugging and analytics)
        console.log('CTA Button clicked!');
        
        // Show a friendly alert or perform an action
        alert('Thanks for your interest! This feature will be implemented soon.');
        
        // Future enhancement: Replace with actual form submission or navigation
    });
});

// ========================================
// UTILITY FUNCTION FOR FUTURE EXPANSION
// ========================================

/**
 * Generic function to log user interactions
 * Can be used for analytics or debugging
 * @param {string} eventName - Name of the event
 * @param {object} eventData - Additional data about the event
 */
function trackEvent(eventName, eventData = {}) {
    const timestamp = new Date().toLocaleString();
    console.log(`[${timestamp}] Event: ${eventName}`, eventData);
    
    // Future enhancement: Send this data to an analytics service
}

// ========================================
// RESPONSIVE BEHAVIOR
// ========================================

// Track window resize for responsive adjustments if needed
window.addEventListener('resize', () => {
    const screenWidth = window.innerWidth;
    
    // Log screen width for debugging responsive behavior
    console.log(`Window resized to: ${screenWidth}px`);
    
    // Can add mobile-specific behaviors here in the future
});
