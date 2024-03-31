const categoriesData = [
    {
        name: "Racing",
        img: "https://store.steampowered.com/categories/homepageimage/category/racing?cc=us&l=english",
        bgColor: "gradient-red"
    },
    {
        name: "Anime",
        img: "https://store.steampowered.com/categories/homepageimage/category/anime?cc=us&l=english",
        bgColor: "gradient-blue"
    },
    {
        name: "Puzzle",
        img: "https://store.steampowered.com/categories/homepageimage/category/puzzle_matching/?cc=us&l=english",
        bgColor: "gradient-yellow"
    },
    {
        name: "Simulation",
        img: "https://store.steampowered.com/categories/homepageimage/category/simulation?cc=us&l=english",
        bgColor: "gradient-green"
    }
];
const browsesData = ["New Release", "Specials", "Free Games", "By User Tags"];

main()

function main() {
    gameCardMoreBtnFunc();
    showCategoryContainer(categoriesData);
    showBrowsesContainer(browsesData);
}

function gameCardMoreBtnFunc() {
    const gameCardMoreBtn = document.querySelectorAll(".game-card-more-btn");
    gameCardMoreBtn.forEach((element, index) => {
        const gameCardMore = document.getElementsByClassName("game-card-more")[index];
        element.addEventListener("click", function () {
            gameCardMore.classList.remove("hidden");

            setTimeout(() => {
                gameCardMore.classList.add("opacity-100");
            }, 50);
        })
        gameCardMore.addEventListener("mouseleave", function () {
            gameCardMore.classList.remove("opacity-100");

            setTimeout(() => {
                gameCardMore.classList.add("hidden");
            }, 200);
        })
    });
}

function createCategoryCard(category) {
    return (
        `
        <a href="#" class="block grow relative shrink-0">
            <img src="${category.img}" alt="" class="w-full h-full">
            <div class="uppercase absolute right-0 left-0 flex justify-center items-center bottom-7 z-10">
                <span class="drop-shadow-lg">${category.name}</span>
            </div>
            <div class="absolute top-0 right-0 left-0 bottom-0 ${category.bgColor}">
            </div>
        </a>`
    )
}

function createBrowseCard(browse) {
    return (
        `
        <a href="#" class="gradient-browse-btn px-8 py-[0.9rem] rounded-[0.2rem] uppercase text-lg shadow-sm">
            ${browse}
        </a>`
    )
}

function showCategoryContainer(categories) {
    const categoryContainer = document.getElementById("categoryContainer");
    categories.forEach(category => {
        categoryContainer.innerHTML += createCategoryCard(category);
    })
}

function showBrowsesContainer(browses) {
    const browsesContainer = document.getElementById("browsesContainer");
    browses.forEach(browse => {
        browsesContainer.innerHTML += createBrowseCard(browse);
    })
}