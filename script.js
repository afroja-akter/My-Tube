// Fetch API catagories

function loadCategories(){
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data => dataCategories(data.categories)));
}

// Display Catagories

function dataCategories(categories){
    const categoryContainer = document.getElementById('category-container');
    for(let cat of categories){
        const categoryDiv = document.createElement('div')
        categoryDiv.innerHTML = `<button onclick="loadCategoriesVideo(${cat.category_id})" class=" btn btn-sm hover:bg-[#FF1F3D] hover:text-white">${cat.category}</button>`;
        categoryContainer.appendChild(categoryDiv);
    }
}

// Fetch API Videos

function loadVideos(){
    fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((response) => response.json())
    .then((data) => displayVideos(data.videos));
}

// Fetch categories video

const loadCategoriesVideo = (id) =>{
    const url = `https://openapi.programming-hero.com/api/phero-tube/category/${id}`;
    fetch(url)
    .then((res)=>res.json())
    .then((data)=> displayVideos(data.category));
}

// Display Videos

const displayVideos = (videos) => {
    // console.log(videos);
    const videosContainer = document.getElementById("video-container");
    videosContainer.innerHTML = '';
     videos.forEach((video) => {
        const videoCart = document.createElement("div");
        videoCart.innerHTML = `
        
        <div class="card bg-base-100">
            <figure class="relative">
                <img class="w-full h-[250px] object.cover"
                src="${video.thumbnail}"
                alt="Shoes" />
                <span class="text-sm text-white bg-black rounded p-2 absolute bottom-2 right-2 ">3hrs 56 min ago</span>
            </figure>
            <div class="flex gap-3 p-3">
                <div class="profile">
                <div class="avatar">
                    <div class="ring-primary ring-offset-base-100 w-6 rounded-full ring-2 ring-offset-2">
                        <img src="${video.authors[0].profile_picture}" />
                    </div>
                    </div>
                </div>
                <div class="info">
                <h2 class="text-sm font-semibold">${video.title}</h2>
                <p class="text-sm text-gray-400 flex">${video.authors[0].profile_name}
                    <img src="https://cdn-icons-png.flaticon.com/128/15050/15050690.png" alt="" class="w-5 h-5">
                </p>
                <p class="text-sm text-gray-400 flex">${video.others.views} views</p>
                </div>
            </div>
        </div>
        `
        videosContainer.appendChild(videoCart)
     });
}


loadCategories();


