document.addEventListener('DOMContentLoaded', function() {
    const learnMoreBtn = document.getElementById('learnMoreBtn');
    const filterBtn = document.getElementById('filterBtn');

    learnMoreBtn.addEventListener('click', function() {
        alert('En savoir plus sur nos produits!');
    });

    filterBtn.addEventListener('click', function() {
        // Logique de filtrage des produits ici
        alert('Filtrer les produits par catégorie!');
    });
});
