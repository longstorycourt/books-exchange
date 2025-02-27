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