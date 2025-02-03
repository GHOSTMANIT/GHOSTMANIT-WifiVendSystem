// Basic functionality for Piso interface
document.addEventListener('DOMContentLoaded', function() {
    const insertCoinButton = document.querySelector('.insert-coin');
    
    insertCoinButton.addEventListener('click', function() {
        // Log button click
        logger.info('Insert Coin button clicked on piso.html.');

        alert('Coin inserted!'); // Alert for user feedback
        // Additional functionality can be added here
    });
});
