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

let saleItems = [
    {
        id: `001`,
        title: `Everything I know about love`,
        img: `https://i.pinimg.com/736x/74/ba/8c/74ba8c684044bc9097393554394f3cf7.jpg`,
        author: `Dolly Alderton`,
        price: `$5.99`
    },
    {
        id: `002`,
        title: `Everything I know about love`,
        img: `https://i.pinimg.com/736x/74/ba/8c/74ba8c684044bc9097393554394f3cf7.jpg`,
        author: `Dolly Alderton`,
        price: `$5.99`
    },
    {
        id: `003`,
        title: `Everything I know about love`,
        img: `https://i.pinimg.com/736x/74/ba/8c/74ba8c684044bc9097393554394f3cf7.jpg`,
        author: `Dolly Alderton`,
        price: `$5.99`
    },
    {
        id: `004`,
        title: `Everything I know about love`,
        img: `https://i.pinimg.com/736x/74/ba/8c/74ba8c684044bc9097393554394f3cf7.jpg`,
        author: `Dolly Alderton`,
        price: `$5.99`
    }
]
for(let i of saleItems){
    saleLists.innerHTML += `
    <div class="col-12 col-md-6 col-lg-4">
        <div class="card ">
            <img class="card-img-top" src="${i.img}" alt="A book">
            <div class="card-body">
                <div class="d-flex justify-content-between align-items-start">
                    <h5 class="card-title">${i.title}</h5> 
                    <button class="border-0 bg-transparent"><i class="fa-regular fa-star"></i></button>
                </div>
                <p class="card-text author-name">by ${i.author}</p>
                <div class="d-flex justify-content-between align-items-baseline">
                    <p class="lead text-secondary">${i.price}</p>
                    <a href="#" class="btn btn-dark">Buy Now</a>
                </div>
            </div>
        </div>
    </div>`;

}