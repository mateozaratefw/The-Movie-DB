window.addEventListener('DOMContentLoad', navigator(), false);
window.addEventListener('hashchange', navigator(), false);

function navigator() {
    console.log({ location });
    
    if (location.hash.startsWith('#trends')) {
        trendsPage()
    } else if (location.hash.startsWith('#search=')) {
        searchPage()
    } else if (location.hash.startsWith('#movie=')) {
        moviesPage()
    } else if (location.hash.startsWith('#category=')) {
        categoriesPage();
    } else {
        homePage();
    };

};


function homePage() {
    console.log('we are at home');
    getTrendingMoviesPreview();
    getCategoriesMoviesPreview();
};
function categoriesPage() {
    console.log('we are at categories');
};
function moviesPage() {
    console.log('we are at movies');
};
function searchPage() {
    console.log('we are at search');
};
function trendsPage() {
    console.log('we are at trends');
};
