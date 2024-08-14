// header.jss

document.addEventListener('DOMContentLoaded', () => {
    const header = `
        <header>
            <a href="#" class="logo"><i class="fas fa-infinity"></i>TV.</a>
            <nav class="navbar">
                <a class="active" href="https://tv.freeforall.rf.gd">home</a>
                <a href="BD.html">BD</a>
                <a href="#IN Channels">IN</a>
                <a href="#Infotainment">Infotainment</a>
                <a href="#Kids Channels">Kids</a>
                <a href="#LifeStyle Channels">LifeStyle</a>
                <a href="#Sports Channels">Sports</a>
            </nav>
            <div class="icons">
                <i class="fas fa-bars" id="menu-bars"></i>
                <i class="fas fa-search" id="search-icon"></i>
                <a href="#" class="fas fa-heart"></a>
            </div>
        </header>
    `;
    document.body.insertAdjacentHTML('afterbegin', header);
});
