
const headerContent = document.getElementById("header");
const footerContent = document.getElementById("footer");

let serviceContent = document.getElementById("services");
let swapLists = document.getElementById("swapLists");
let saleLists = document.getElementById("saleLists");

let navItems = [
    {
        id: `1`,
        navItem: `Home`,
        href:`#`
    },
    {
        id: `2`,
        navItem: `About`,
        href:`#about-us`
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
    navItemsHtml += `
        <a class="nav-item text-uppercase text-dark mx-0 mx-lg-2 text-decoration-none" href="${i.href}">${i.navItem}</a>
   `;
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

let services =[
    {
        id: '1',
        img: 'https://i.pinimg.com/736x/17/2d/2c/172d2c44ea316d1a70dbb4fd53bf8696.jpg',
        alt: 'stacks of books',
        cardTitle1: 'Register Your Books',
        cardTitle2: '',
        cardText: `To find the ideal candidate to exchange them with.`,
        btnText: 'Register Now',
        link:'./html files/bookListingForm.html'
    },
    {
        id: '2',
        img: 'https://i.pinimg.com/736x/ab/67/fb/ab67fbeb22c88e58d85166785e5c7dac.jpg',
        alt: 'stacks of books',
        cardTitle1: 'Browse Book Offers',
        cardTitle2: '',
        cardText: 'See the listed book offers up for grab.',
        btnText: 'Check Out',
        link:'./html files/bookSwapPage.html'
    }
];

for (let i of services) {
serviceContent.innerHTML += `
        <div class="col-12 col-lg-6">
        <div class="card border-0 rounded-0 text-dark h-100">
            <img class="card-img-body img-fluid h-100 object-fit-cover" src="${i.img}" alt="${i.alt}" style="max-height:500px;">
            <div class="card-img-overlay d-flex flex-column justify-content-end p-3 p-md-4 p-lg-5">
                <!--bg-opacity needs fixing--!>
                <h3 class="card-title"><span class="" style="background-color: #e3f2fd; color:#000;">${i.cardTitle1}</span><br> <span class="" style="background-color: #e3f2fd; color:#000;">${i.cardTitle2}</span></h3>
                <p class="card-text"><span class="" style="background-color: #e3f2fd; color:#000;">${i.cardText}</span></p>
                <a class="btn btn-lg fw-bold" href="${i.link}" role="button" style="width: fit-content; background-color: #fff; color:#000;">${i.btnText}</a>
            </div>
            </div>
        </div>
    `;
}

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
    }
    ,
    {
        id: `006`,
        title: `Everything I know about love`,
        img: `https://i.pinimg.com/736x/74/ba/8c/74ba8c684044bc9097393554394f3cf7.jpg`,
        author: `Dolly Alderton`,
    }
]

for(let i of swapItems){
    swapLists.innerHTML += `
    <div class="col-12 col-md-6 col-lg-4">
        <div class="card">
            <img class="card-img-top h-50" src="${i.img}" alt="A book">
            <div class="card-body">
                <div class="d-flex justify-content-between align-items-start">
                    <h4 class="card-title">${i.title}</h4> 
                    <button class="border-0 bg-transparent"><i class="fa-regular fa-star"></i></button>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                    <p class="card-text author-name" style="font-size:large;">by ${i.author}</p>
                    <a href="#" class="btn btn-dark">View Details</a>
                </div>
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
                <input class="mb-2 rounded-1 border-light" id="email" type="email" placeholder="you@example.com"/>
                <button class="btn btn-dark me-auto ms-lg-auto py-1" style="width: fit-content;">Submit</button>
                </div>
            </form>
        </div>
    </div>
    </div>
`;