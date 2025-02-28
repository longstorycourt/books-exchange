const headerContent = document.getElementById("header");
const bookDetailsContent = document.getElementById(`bookDetails`);
const footerContent = document.getElementById("footer");

let navItems = [
    {
        id: `1`,
        navItem: `Home`,
        href:`#`
    },
    // {
    //     id: `2`,
    //     navItem: `About`,
    //     href:`#about-us`
    // },
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
    navItemsHtml += `<a class="nav-items text-uppercase text-dark mx-0 mx-lg-2 text-decoration-none" href="${i.href}">${i.navItem}</a>`;
}

headerContent.innerHTML = `
    <nav class="navbar fixed-top navbar-light navbar-expand-lg" style="background-color: #e3f2fd;">
        <div class="container px-1 px-md-2 px-lg-3 mx-auto">
            <a class="navbar-brand link-dark" style="font-size: larger;" href="#"><i class="fa-solid fa-book-open me-2"></i>Books4All</a>
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

let bookDetail = {
    id: `001`,
    img: `https://i.pinimg.com/736x/74/ba/8c/74ba8c684044bc9097393554394f3cf7.jpg`,
    alt: `Everything I know about love book`,
    title:`Everything I know about Love`,
    author:`Dolly Alderton`,
    cond: `Used`,
    desc: `The wildly funny, occasionally heartbreaking internationally bestselling memoir about growing up, growing older, and learning to navigate friendships, jobs, loss, and love along the ride.`,
    msg: `I am looking for a romance book to swap with. Anything by Emily Henry would be ideal, but anything else will also do.`,
    modeofDel: `Pick Up`,
}

bookDetailsContent.innerHTML = `
    <div class="col-12 col-lg-5">
        <div class="card px-5 px-lg-0 border-0">
            <img id="bookImage" src="${bookDetail.img}" class="card-img rounded-0 mx-auto" alt="${bookDetail.alt}">
        </div>
    </div>
    
    <div class="col-12 col-lg-7 d-flex flex-column ">
        <div class="">
            <h2 class="fw-bold">${bookDetail.title}</h2>
            <p>by <b>${bookDetail.author}</b></p>
            <p><b>Condition</b>: ${bookDetail.cond}</p>
            <p><b>Description</b>: ${bookDetail.desc}</p>
            <p><b>Message</b>: ${bookDetail.msg}</p>
            <p><b>Mode of Delivery</b>: ${bookDetail.modeofDel}</p>
        </div>
        <div class="d-flex mt-3 mt-md-4 mt-lg-5">
            <button class="w-25 btn btn-dark btn-lg me-auto mx-lg-auto" type="button">Offer exchange</button>
        </div>
    </div>`;


let relatedItems = [
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
]

for(let i of relatedItems){
    swapLists.innerHTML += `
    <div class="col-12 col-md-6 col-lg-4">
        <div class="card">
            <img class="card-img-top h-50" src="${i.img}" alt="A book">
            <div class="card-body">
                <div class="d-flex justify-content-between align-items-start">
                    <h4 class="card-title">${i.title}</h4> 
                    <button class="border-0 bg-transparent "><i class="fa-regular fa-star"></i></button>
                </div>
                <p class="card-text author-name" style="font-size:large;">by ${i.author}</p>
            </div>
        </div>
    </div>`;
}

footerContent.innerHTML += `
    <div class="row">
        <div class="col-12 col-md-6 col-lg-4">
            <h3>Books4All</h3>
            <hr class="w-25">
            <ul class="list-unstyled">
                <li>About Us</li>
                <li>Our Services</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div class="col-12 col-md-6 col-lg-4">
            <h3>Find Us On</h3>
            <hr class="w-25">
            <ul class="list-unstyled">
                <li><a href="fb.com" class="text-decoration-none link-dark" title="Visit our Facebook Page" target="_blank" >Facebook</a></li>
                <li><a href="instagram.com" class="text-decoration-none link-dark" title="Visit our Instagram Page" target="_blank">Instagram</a></li>
                <li><a href="#" class="text-decoration-none link-dark" title="Visit our Twitter Page" target="_blank">Twitter</a></li>
            </ul>
        </div>
        <div class="col-12 col-md-6 col-lg-4">
            <form action="">
                <h3 class="">Subscribe to our newsletter</h3>
                <p class="d-none d-lg-block">To follow the lastest updates</p>
                <hr class="w-25">

                <div class="d-flex flex-column">
                <input class="mb-3 rounded-1 border-light" id="email" type="email" placeholder="you@example.com"/>
                <button class="btn btn-dark me-auto ms-lg-auto py-1" style="width: fit-content;">Submit</button>
                </div>
            </form>
        </div>
    </div>
    </div>
`;