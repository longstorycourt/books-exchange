let serviceContent = document.getElementById("services");

let services =[
{
    id: '1',
    img: 'https://i.pinimg.com/736x/ab/67/fb/ab67fbeb22c88e58d85166785e5c7dac.jpg',
    alt: 'stacks of books',
    cardTitle1: 'Need to free up',
    cardTitle2: 'Books?',
    cardText: 'If you wish to put your books up for sale, click the button below.',
    btnText: 'Sell your book',
    link:'/signUpPage.html'
},
{
    id: '2',
    img: 'https://i.pinimg.com/736x/17/2d/2c/172d2c44ea316d1a70dbb4fd53bf8696.jpg',
    alt: 'stacks of books',
    cardTitle1: 'Wanna swap your books',
    cardTitle2: 'with other?',
    cardText: 'Register your books with us to find the ideal candidate to exchange them with.',
    btnText: 'Exchange your book',
    link:'/signUpPage.html'
}
];

for (let i of services) {
serviceContent.innerHTML += `
    <div class="col-12 col-md-6">
    <div class="card border-0 rounded-0 bg-dark text-white h-100">
        <img class="card-img-body px-0 img-fluid object-fit-cover" src="${i.img}" alt="${i.alt}" style="max-height:500px;">
        <div class="card-img-overlay d-flex flex-column justify-content-end px-3 px-lg-5">
            <h5 class="card-title"><span class="bg-dark bg-opacity-25">${i.cardTitle1}</span><br> <span class="bg-dark bg-opacity-25">${i.cardTitle2}</span></h5>
            <p class="card-text d-none d-md-block"><span class="bg-dark bg-opacity-25">${i.cardText}</span></p>
            <a class="btn btn-primary" href="${i.link}" role="button" style="width: fit-content;">${i.btnText}</a>
        </div>
        </div>
    </div>
`;
}