
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
        href:`../index.html#about-us`
    },
    {
        id: `3`,
        navItem: `Books4Swap`,
        href:`bookSwapPage.html`
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
        <div class="nav-item">
            <a class="nav-link text-uppercase mx-0" href="${i.href}">${i.navItem}</a>
        </div>
            `;
}

headerContent.innerHTML = `
    <nav class="navbar fixed-top navbar-light navbar-expand-lg" style="background-color: #e3f2fd;">
        <div class="container px-1 px-md-2 px-lg-3 mx-auto">
            <a class="navbar-brand link-dark" style="font-size: larger;" href="../index.html"><i class="fa-solid fa-book-open me-2"></i>Books4All</a>
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

const title = document.getElementById(`bookTitle`);
const author = document.getElementById(`bookAuthor`);
const condition = document.querySelector('input[name="condition"]:checked');
const desc = document.getElementById(`description`);
const msg = document.getElementById(`message`);
const modeOfDel  = document.querySelector('input[name="modeOfDelivery"]:checked');
const anon = document.getElementById("anon");

// not working
function submit(){
    let titleValue = title.value;
    let authorValue = author.value;
    let condValue = condition.value;
    let descValue = desc.value;
    let msgValue = title.value;
    let modeOfDelValue = modeOfDel.value;
    let anonValue = anon.value;

    let msg = `Title: ${titleValue}\nAuthor: ${authorValue}\nCondition: ${condValue}\nDescription: ${descValue}\nMessage: ${msgValue}\nMode of Delivery:${modeOfDelValue}\nAnonymous:${anonValue}`;

    console.log(msg);

    window.alert(`Thank you for submitting your form! You'll be notified when someone has made an offer!`);
}