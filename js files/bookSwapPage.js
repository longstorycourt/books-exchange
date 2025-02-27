
const headerContent = document.getElementById("header");

let navItems = [
    {
        id: `1`,
        navItem: `Home`,
        href:`#`
    },
    {
        id: `2`,
        navItem: `About`,
        href:`#footer`
    },
    {
        id: `3`,
        navItem: `Books4Swap`,
        href:`#books4Swap`
    },
    {
        id: `4`,
        navItem: `Contact`,
        href:`#footer`
    },
];
let navItemsHtml = ``;
for(let i of navItems){
    navItemsHtml += `<a class="nav-items text-uppercase fw-bold text-dark mx-0 mx-lg-2 text-decoration-none" href="${i.href}">${i.navItem}</a>`;
}

headerContent.innerHTML = `
    <nav class="navbar fixed-top navbar-light navbar-expand-lg" style="background-color: #e3f2fd;">
        <div class="container px-1 px-md-2 px-lg-3 mx-auto">
            <a class="navbar-brand link-dark fw-bold" href="#">Books4All</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <div class="navbar-nav nav-underline align-items-lg-center align-content-start">
                ${navItemsHtml}
            </div>
            </div>
        </div>
    </nav>`;

let swapLists = document.getElementById("swapLists");

let swapItems = [
    {
        id: `001`,
        title: `Everything I know about love`,
        img: `https://i.pinimg.com/736x/74/ba/8c/74ba8c684044bc9097393554394f3cf7.jpg`,
        author: `Dolly Alderton`,
    },
    {
        id: `002`,
        title: `Everything I know about love`,
        img: `https://i.pinimg.com/736x/74/ba/8c/74ba8c684044bc9097393554394f3cf7.jpg`,
        author: `Dolly Alderton`,
    },
    {
        id: `003`,
        title: `Everything I know about love`,
        img: `https://i.pinimg.com/736x/74/ba/8c/74ba8c684044bc9097393554394f3cf7.jpg`,
        author: `Dolly Alderton`,
    },
    {
        id: `004`,
        title: `Everything I know about love`,
        img: `https://i.pinimg.com/736x/74/ba/8c/74ba8c684044bc9097393554394f3cf7.jpg`,
        author: `Dolly Alderton`,
    },
    {
        id: `005`,
        title: `Everything I know about love`,
        img: `https://i.pinimg.com/736x/74/ba/8c/74ba8c684044bc9097393554394f3cf7.jpg`,
        author: `Dolly Alderton`,
    },
    {
        id: `006`,
        title: `Everything I know about love`,
        img: `https://i.pinimg.com/736x/74/ba/8c/74ba8c684044bc9097393554394f3cf7.jpg`,
        author: `Dolly Alderton`,
    },
    {
        id: `007`,
        title: `Everything I know about love`,
        img: `https://i.pinimg.com/736x/74/ba/8c/74ba8c684044bc9097393554394f3cf7.jpg`,
        author: `Dolly Alderton`,
    },
    {
        id: `008`,
        title: `Everything I know about love`,
        img: `https://i.pinimg.com/736x/74/ba/8c/74ba8c684044bc9097393554394f3cf7.jpg`,
        author: `Dolly Alderton`,
    },
    {
        id: `009`,
        title: `Everything I know about love`,
        img: `https://i.pinimg.com/736x/74/ba/8c/74ba8c684044bc9097393554394f3cf7.jpg`,
        author: `Dolly Alderton`,
    },
    {
        id: `010`,
        title: `Everything I know about love`,
        img: `https://i.pinimg.com/736x/74/ba/8c/74ba8c684044bc9097393554394f3cf7.jpg`,
        author: `Dolly Alderton`,
    }

]
for(let i = 0; i < 9; i++){
    swapLists.innerHTML += `
    <div class="col-12 col-md-6 col-lg-4">
        <div class="card">
            <img class="card-img-top h-50" src="${swapItems[i].img}" alt="A book">
            <div class="card-body">
                <div class="d-flex justify-content-between align-items-start">
                    <h5 class="card-title">${swapItems[i].title}</h5> 
                    <button class="border-0 bg-transparent"><i class="fa-regular fa-star"></i></button>
                </div>
                <p class="card-text author-name">by ${swapItems[i].author}</p>
                <a href="#" class="btn btn-dark">Offer exchange</a>
            </div>
        </div>
    </div>`;

}

