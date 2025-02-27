
const headerContent = document.getElementById("header");
const footerContent = document.getElementById("footer");

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
            
            <a class="navbar-brand link-dark fw-bold" href="#"><i class="fa-solid fa-book-open me-2"></i>Books4All</a>
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

let serviceContent = document.getElementById("services");
let swapLists = document.getElementById("swapLists");
let saleLists = document.getElementById("saleLists");

let services =[
    {
        id: '1',
        img: 'https://i.pinimg.com/736x/17/2d/2c/172d2c44ea316d1a70dbb4fd53bf8696.jpg',
        alt: 'stacks of books',
        cardTitle1: 'Register Your Books',
        cardTitle2: '',
        cardText: 'Register your books to find the ideal candidate to exchange them with.',
        btnText: 'Register Now',
        link:'/bookListingForm.html'
    },
    {
        id: '2',
        img: 'https://i.pinimg.com/736x/ab/67/fb/ab67fbeb22c88e58d85166785e5c7dac.jpg',
        alt: 'stacks of books',
        cardTitle1: 'Browse Book Offers',
        cardTitle2: '',
        cardText: 'See the listed book offers up for grab.',
        btnText: 'Check Out',
        link:'/bookSwapPage.html'
    }
];

for (let i of services) {
serviceContent.innerHTML += `
    <div class="col-12 col-lg-6">
    <div class="card border-0 rounded-0 text-dark h-100">
        <img class="card-img-body img-fluid h-100 object-fit-cover" src="${i.img}" alt="${i.alt}" style="max-height:500px;">
        <div class="card-img-overlay d-flex flex-column justify-content-end p-3 p-md-4 p-lg-5">
            <!--bg-opacity needs fixing--!>
            <h5 class="card-title"><span class="fw-bold" style="background-color: #e3f2fd; color:#000;">${i.cardTitle1}</span><br> <span class="" style="background-color: #e3f2fd; color:#000;">${i.cardTitle2}</span></h5>
            <p class="card-text"><span class="" style="background-color: #e3f2fd; color:#000;">${i.cardText}</span></p>
            <a class="btn btn-lg fw-bold" href="${i.link}" role="button" style="width: fit-content; background-color: #e3f2fd; color:#000;">${i.btnText}</a>
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
]
for(let i of swapItems){
    swapLists.innerHTML += `
    <div class="col-12 col-md-6 col-lg-4">
        <div class="card">
            <img class="card-img-top h-50" src="${i.img}" alt="A book">
            <div class="card-body">
                <div class="d-flex justify-content-between align-items-start">
                    <h5 class="card-title">${i.title}</h5> 
                    <button class="border-0 bg-transparent"><i class="fa-regular fa-star"></i></button>
                </div>
                <p class="card-text author-name">by ${i.author}</p>
                <a href="#" class="btn btn-dark">Offer exchange</a>
            </div>
        </div>
    </div>`;

}

footerContent.innerHTML += `
    <hr class="">
    <div class="row my-3">
        <div class="col-12 col-lg-6">
        <h3>About Us</h3>
        <p><b>Books4All</b> is a community-built program dedicated to book lovers. The costly price of books shouldn't discourage literature enjoyers from reading. Exchanging books open people to different literary taste without spending more, and you might find friends who share this interest with you as well. </p>
        </div>
        <div class="col-12 col-md-6 col-lg-3">
        <h3>Books4All</h3>
        <ul class="list-unstyled">
            <li>About Us</li>
            <li>Our Services</li>
            <li>Privacy Policy</li>
        </ul>
        </div>
        <div class="col-12 col-md-6 col-lg-3">
        <form action="">
            <h3 class="text-start text-md-center">Subscribe to our newsletter</h3>
            <p class="text-start text-md-center">To follow the lastest updates</p>
            <div class="d-flex flex-column">
            <input class="mb-2 rounded-1 border-light" id="email" type="email" placeholder="you@example.com"/>
            <button class="btn btn-dark me-auto ms-lg-auto py-1" style="width: fit-content;">Submit</button>
            </div>
        </form>
        </div>
    </div>
    </div>
`;