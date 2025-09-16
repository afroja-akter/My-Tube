function loadCategories(){
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data => dataCategories(data.categories)));
}

function dataCategories(categories){
    console.log(categories);
}

loadCategories()