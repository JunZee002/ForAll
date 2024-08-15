function loadHomeSection() {
    const homeSectionHTML = `
        <section class="home" id="home">
            <div class="swiper home-slider">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <div class="box" style="background: url(https://cdn.comedy.co.uk/images/channels/tnt_sports_1.jpg) no-repeat; cursor: pointer;" onclick="location.href='Sports/TNTSports1.html';"></div>
                        <div class="content" style="text-align: left;">
                            <h3>TNT Sports 1</h3>
                            <a href="Sports/TNTSports1.html" class="btn">Watch</a>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="box second" style="background: url('img/home-img-3.jpeg') no-repeat;">
                            <div class="content">
                                <h3>DEATH NOTE</h3>
                                <p>When a Japanese high schooler comes into possession of a mystical<br>
                                notebook, he finds he has the power to kill anybody whose name he<br>
                                enters in it.</p>
                                <a href="#" class="btn">Download</a>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="box" style="background: url('img/home-img-4.jpeg') no-repeat;">
                            <div class="content">
                                <h3>One-Punch Man</h3>
                                <p>The most powerful superhero in the world can kill anyone with one<br>
                                blow. But nothing can challenge him, so he struggles with ennui and<br>
                                depression</p>
                                <a href="#" class="btn">Download</a>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="box" style="background: url('img/home-img-2.jpeg') no-repeat;">
                            <div class="content">
                                <h3>Naruto</h3>
                                <p>Guided by the spirit demon within him, orphaned Naruto learns<br>
                                to harness his powers as a ninja in this anime adventure series.</p>
                                <a href="#" class="btn">Download</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;

    // Append the generated HTML to the body or a specific element
    document.getElementById('home-section-container').innerHTML = homeSectionHTML;
}

// Call the function to load the home section
document.addEventListener('DOMContentLoaded', loadHomeSection);
