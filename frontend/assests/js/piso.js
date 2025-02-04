document.addEventListener('DOMContentLoaded', function() {
    const insertCoinButton = document.querySelector('.insert-coin');
    
    insertCoinButton.addEventListener('click', function() {
        logger.info('Insert Coin button clicked on piso.html.');
        alert('Coin inserted!');
    });
});
