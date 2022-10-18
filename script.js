const likeButton = document.querySelectorAll(".like-button");
const showGraphButton = document.querySelector(".cap__open-info");
const capInfo = document.querySelector(".cap__info");
const capInner = document.querySelector(".cap__info-inner");
const employeeCard = document.querySelectorAll(".card");
const sliderNav = document.querySelector(".employees__arrows");
const alloctorsBtn = document.querySelector(".all-doctors");
const iWorkHere = document.querySelector(".cap__work-button");
const photosBtn = document.querySelector(".cap__photos-button");
const photosSection = document.querySelector(".photos");
const aboutBtn = document.querySelector(".cap__about-button");
const map = document.querySelector("iFrame");
const mapBtn = document.querySelector(".cap__location-button");
const workHereBtn = document.querySelector(".cap__work-button");
const employeeCards = document.querySelector(".employees__cards");
const logInBtn = document.querySelectorAll(".log-in");
const modalField = document.querySelector(".modal");
const closeModalBtn = document.querySelector(".cls-mdl");
const headerMenuBtn = document.querySelector(".header__menu");
const panelMenuField = document.querySelector(".pannel__menu");
const langBtn = document.querySelector(".header__language-button");
const employees = document.querySelector(".employees");
const mobileMenu = document.querySelector(".header-mobile__menu");
const allDoctirsSec = document.querySelector(".all-doctors-section");
const overlay = document.querySelector(".overlay");

//graph info table
const showWorkGraph = () => {
  showGraphButton.addEventListener("click", () => {
    capInfo.classList.toggle("cap-active");
    capInner.classList.toggle("cap-inner-active");
  });
};
showWorkGraph();

//like button
const changeLikeButtonState = () => {
  likeButton.forEach((item) => {
    item.addEventListener("click", () => {
      item.classList.toggle("liked");
    });
  });
};
changeLikeButtonState();

//employee card extantion
const showExtendedCard = () => {
  employeeCard.forEach((item) => {
    item.addEventListener("mouseover", () => {
      sliderNav.style.zIndex = 10;
    });
    item.addEventListener("mouseout", () => {
      sliderNav.style.zIndex = 25;
    });
  });
};
showExtendedCard();

//show photos-slider
const showPhotosSlider = () => {
  photosBtn.addEventListener("click", () => {
    photosSection.classList.toggle("visible");
    photosBtn.classList.toggle("button-fill");
    mapBtn.classList.remove("button-fill");
    aboutBtn.classList.remove("button-fill");
    map.classList.remove("visible");
  });
};
showPhotosSlider();

//show about info
const showAboutInfo = () => {
  aboutBtn.addEventListener("click", () => {
    aboutBtn.classList.toggle("button-fill");
    photosSection.classList.remove("visible");
    map.classList.remove("visible");
    photosBtn.classList.remove("button-fill");
    mapBtn.classList.remove("button-fill");
  });
};
showAboutInfo();

//show map
const showMap = () => {
  mapBtn.addEventListener("click", () => {
    map.classList.toggle("visible");
    mapBtn.classList.toggle("button-fill");
    photosBtn.classList.remove("button-fill");
    aboutBtn.classList.remove("button-fill");
    photosSection.classList.remove("visible");
  });
};
showMap();

//workHere button
const changeWorkButtonState = () => {
  workHereBtn.addEventListener("click", () => {
    workHereBtn.classList.toggle("button-fill");
    if (workHereBtn.textContent == "Я тут працюю") {
      workHereBtn.innerHTML = "Я тут не працюю";
    } else if (workHereBtn.textContent == "Я тут не працюю") {
      workHereBtn.innerHTML = "Я тут працюю";
    }
  });
};
changeWorkButtonState();

//open log-in modal
const openLoginModal = () => {
  logInBtn.forEach((item) => {
    item.addEventListener("click", () => {
      modalField.style.display = "block";
    });
  });
};
openLoginModal();

//close modal by button
const closeModal = () => {
  modalField.style.display = "none";
};

closeModalBtn.addEventListener("click", closeModal);
modalField.addEventListener("click", (e) => {
  if (e.target == modalField) {
    closeModal();
  }
});

//open pannel-menu
const openPanelMenu = () => {
  headerMenuBtn.addEventListener("click", () => {
    panelMenuField.classList.toggle("pannel__menu-active");
    document.body.classList.toggle("scroll-off");
    if (headerMenuBtn.textContent == "Меню") {
      headerMenuBtn.innerHTML = "";
    } else if (headerMenuBtn.textContent == ""){
      headerMenuBtn.innerHTML = "Меню";
    }
    logInBtn[0].classList.toggle("display-none");
    langBtn.classList.toggle("display-none");
  });
  
};
openPanelMenu();

overlay.addEventListener("click", () => {
  panelMenuField.classList.remove("pannel__menu-active");
  document.body.classList.remove("scroll-off");
  logInBtn[0].classList.remove("display-none");
  langBtn.classList.remove("display-none");
  headerMenuBtn.innerHTML = "Меню";
})

mobileMenu.addEventListener("click", (item) => {
  panelMenuField.classList.toggle("pannel__menu-active");
  document.body.classList.toggle("scroll-off");
});

// slider
$(document).ready(function () {
  $(".employees__cards").slick({
    prevArrow: ".employees__left-arrow",
    nextArrow: ".employees__right-arrow",
    dots: true,
    appendDots: $(document.querySelector(".employees__dots")),
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

// slider2
$(document).ready(function () {
  $(".photos-slider").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

// employee card for mobile
if (window.innerWidth <= 479) {

  employeeCard[0].innerHTML = `<div class="card__top">
    <div class="card__info">
        <div class="card__name">
            <a href="#">Лозовий Юрій  Володимирович</a>
        </div>
        <div class="card__desc">Інфекціонист, Лікар-нарколог дільничий</div>
        <div class="like-button"></div>
    </div>
    <div class="card__photo">
        <div class="card__photo-inner">
            <a href="#">
                <img src="img/Yurii-photo.png" alt="">
            </a>
            <div class="card__status"></div>
            <div class="like-button"></div>
        </div>
        <div class="card__photo-desc">Доступний</div>
    </div>
</div>
<div class="card__bottom">
    <div class="card__rating">
        <div class="card__rating-icon"></div>
        <div class="card__rating-point">
            <h6>4,9</h6>
            <h6>Рейтинг</h6>
        </div>
    </div>
    <div class="card__reviews">
        <div class="card__reviews-icon"></div>
        <div class="card__reviews-point">
            <h6>123</h6>
            <h6>Відгуків</h6>
        </div>
    </div>
    <div class="card__services">
        <div class="card__services-icon"></div>
        <div class="card__services-point">
            <h6>24</h6>
            <h6>Послуг</h6>
        </div>
    </div>
    <div class="card__location">
        <div class="card__location-address">
            <a href="#">м. Луцьк, пр. Соборності 89, каб. 102</a>
            <p>Луцька міська клінічна лікарня</p>
        </div>
        <div class="card__location-icon"></div>
    </div>
</div>
<div class="card__prices">
    <h4>Послуги та ціни:</h4>
    <h5>
        <span>Консультація</span> - від 100 грн
    </h5>
    <h5>
        <span>Сеанс терапії</span> - від 300 грн
    </h5>
    <div class="card__prices-buttons">
        <div class="card__write-btn">
            <a href="#">Написати</a>
        </div>
        <div class="card__details-btn">
            <a href="#">Сторінка лікаря</a>
        </div>
    </div>
</div>`;

employeeCard[1].innerHTML = `<div class="card__top">
    <div class="card__info">
        <div class="card__name">
            <a href="#">Москаленко Дмитро  Миколайович</a>
        </div>
        <div class="card__desc">Інфекціонист, Лікар-нарколог дільничий</div>
        <div class="like-button"></div>
    </div>
    <div class="card__photo">
        <div class="card__photo-inner">
            <a href="#">
                <img src="img/Dmytro-photo.png" alt="">
            </a>
            <div class="card__status dont-available"></div>
            <div class="like-button"></div>
        </div>
        <div class="card__photo-desc">Не доступний</div>
    </div>
</div>
<div class="card__bottom">
    <div class="card__rating">
        <div class="card__rating-icon"></div>
        <div class="card__rating-point">
            <h6>4,9</h6>
            <h6>Рейтинг</h6>
        </div>
    </div>
    <div class="card__reviews">
        <div class="card__reviews-icon"></div>
        <div class="card__reviews-point">
            <h6>123</h6>
            <h6>Відгуків</h6>
        </div>
    </div>
    <div class="card__services">
        <div class="card__services-icon"></div>
        <div class="card__services-point">
            <h6>1</h6>
            <h6>Послуг</h6>
        </div>
    </div>
    <div class="card__location">
        <div class="card__location-address">
            <a href="#">м. Луцьк, пр. Соборності 89, каб. 345</a>
            <p>Луцька міська клінічна лікарня</p>
        </div>
        <div class="card__location-icon"></div>
    </div>
</div>
<div class="card__prices">
    <h4>Послуги та ціни:</h4>
    <h5>
        <span>Консультація</span> - від 100 грн
    </h5>
    <h5>
        <span>Сеанс терапії</span> - від 300 грн
    </h5>
    <div class="card__prices-buttons">
        <div class="card__write-btn">
            <a href="#">Написати</a>
        </div>
        <div class="card__details-btn">
            <a href="#">Сторінка лікаря</a>
        </div>
    </div>
</div>`;

employeeCard[2].innerHTML = `<div class="card__top">
    <div class="card__info">
        <div class="card__name">
            <a href="#">Філатова Ірина  Миколаївна</a>
        </div>
        <div class="card__desc">Інфекціонист, Лікар-нарколог дільничий, дитячий невропатологб хірург</div>
        <div class="like-button"></div>
    </div>
    <div class="card__photo">
        <div class="card__photo-inner">
            <a href="#">
                <img src="img/Iryna-photo.png" alt="">
            </a>
            <div class="card__status dont-available"></div>
            <div class="like-button"></div>
        </div>
        <div class="card__photo-desc">Не доступний</div>
    </div>
</div>
<div class="card__bottom">
    <div class="card__rating">
        <div class="card__rating-icon"></div>
        <div class="card__rating-point">
            <h6>4,9</h6>
            <h6>Рейтинг</h6>
        </div>
    </div>
    <div class="card__reviews">
        <div class="card__reviews-icon"></div>
        <div class="card__reviews-point">
            <h6>123</h6>
            <h6>Відгуків</h6>
        </div>
    </div>
    <div class="card__services">
        <div class="card__services-icon"></div>
        <div class="card__services-point">
            <h6>99</h6>
            <h6>Послуг</h6>
        </div>
    </div>
    <div class="card__location">
        <div class="card__location-address">
            <a href="#">м. Луцьк, пр. Соборності 89, каб. 123</a>
            <p>Луцька міська клінічна лікарня</p>
        </div>
        <div class="card__location-icon"></div>
    </div>
</div>
<div class="card__prices">
    <h4>Послуги та ціни:</h4>
    <h5>
        <span>Консультація</span> - від 100 грн
    </h5>
    <h5>
        <span>Сеанс терапії</span> - від 300 грн
    </h5>
    <div class="card__prices-buttons">
        <div class="card__write-btn">
            <a href="#">Написати</a>
        </div>
        <div class="card__details-btn">
            <a href="#">Сторінка лікаря</a>
        </div>
    </div>
</div>`;

employeeCard[3].innerHTML = `<div class="card__top">
    <div class="card__info">
        <div class="card__name">
            <a href="#">Омельяненко Анатолій  Анатолійович</a>
        </div>
        <div class="card__desc">Інфекціонист, Лікар-нарколог дільничий</div>
        <div class="like-button"></div>
    </div>
    <div class="card__photo">
        <div class="card__photo-inner">
            <a href="#">
                <img src="img/Anatoliy-photo.png" alt="">
            </a>
            <div class="card__status dont-available"></div>
            <div class="like-button"></div>
        </div>
        <div class="card__photo-desc">Не доступний</div>
    </div>
</div>
<div class="card__bottom">
    <div class="card__rating">
        <div class="card__rating-icon"></div>
        <div class="card__rating-point">
            <h6>4,9</h6>
            <h6>Рейтинг</h6>
        </div>
    </div>
    <div class="card__reviews">
        <div class="card__reviews-icon"></div>
        <div class="card__reviews-point">
            <h6>123</h6>
            <h6>Відгуків</h6>
        </div>
    </div>
    <div class="card__services">
        <div class="card__services-icon"></div>
        <div class="card__services-point">
            <h6>11</h6>
            <h6>Послуг</h6>
        </div>
    </div>
    <div class="card__location">
        <div class="card__location-address">
            <a href="#">м. Луцьк, пр. Соборності 89, каб. 501</a>
            <p>Луцька міська клінічна лікарня</p>
        </div>
        <div class="card__location-icon"></div>
    </div>
</div>
<div class="card__prices">
    <h4>Послуги та ціни:</h4>
    <h5>
        <span>Консультація</span> - від 100 грн
    </h5>
    <h5>
        <span>Сеанс терапії</span> - від 300 грн
    </h5>
    <div class="card__prices-buttons">
        <div class="card__write-btn">
            <a href="#">Написати</a>
        </div>
        <div class="card__details-btn">
            <a href="#">Сторінка лікаря</a>
        </div>
    </div>
</div>`;


employeeCard[4].innerHTML = `<div class="card__top">
    <div class="card__info">
        <div class="card__name">
            <a href="#">Лозовий Юрій  Володимирович</a>
        </div>
        <div class="card__desc">Інфекціонист, Лікар-нарколог дільничий</div>
        <div class="like-button"></div>
    </div>
    <div class="card__photo">
        <div class="card__photo-inner">
            <a href="#">
                <img src="img/Yurii-photo.png" alt="">
            </a>
            <div class="card__status"></div>
            <div class="like-button"></div>
        </div>
        <div class="card__photo-desc">Доступний</div>
    </div>
</div>
<div class="card__bottom">
    <div class="card__rating">
        <div class="card__rating-icon"></div>
        <div class="card__rating-point">
            <h6>4,9</h6>
            <h6>Рейтинг</h6>
        </div>
    </div>
    <div class="card__reviews">
        <div class="card__reviews-icon"></div>
        <div class="card__reviews-point">
            <h6>123</h6>
            <h6>Відгуків</h6>
        </div>
    </div>
    <div class="card__services">
        <div class="card__services-icon"></div>
        <div class="card__services-point">
            <h6>24</h6>
            <h6>Послуг</h6>
        </div>
    </div>
    <div class="card__location">
        <div class="card__location-address">
            <a href="#">м. Луцьк, пр. Соборності 89, каб. 102</a>
            <p>Луцька міська клінічна лікарня</p>
        </div>
        <div class="card__location-icon"></div>
    </div>
</div>
<div class="card__prices">
    <h4>Послуги та ціни:</h4>
    <h5>
        <span>Консультація</span> - від 100 грн
    </h5>
    <h5>
        <span>Сеанс терапії</span> - від 300 грн
    </h5>
    <div class="card__prices-buttons">
        <div class="card__write-btn">
            <a href="#">Написати</a>
        </div>
        <div class="card__details-btn">
            <a href="#">Сторінка лікаря</a>
        </div>
    </div>
</div>`;

employeeCard[5].innerHTML = `<div class="card__top">
    <div class="card__info">
        <div class="card__name">
            <a href="#">Москаленко Дмитро  Миколайович</a>
        </div>
        <div class="card__desc">Інфекціонист, Лікар-нарколог дільничий</div>
        <div class="like-button"></div>
    </div>
    <div class="card__photo">
        <div class="card__photo-inner">
            <a href="#">
                <img src="img/Dmytro-photo.png" alt="">
            </a>
            <div class="card__status dont-available"></div>
            <div class="like-button"></div>
        </div>
        <div class="card__photo-desc">Не доступний</div>
    </div>
</div>
<div class="card__bottom">
    <div class="card__rating">
        <div class="card__rating-icon"></div>
        <div class="card__rating-point">
            <h6>4,9</h6>
            <h6>Рейтинг</h6>
        </div>
    </div>
    <div class="card__reviews">
        <div class="card__reviews-icon"></div>
        <div class="card__reviews-point">
            <h6>123</h6>
            <h6>Відгуків</h6>
        </div>
    </div>
    <div class="card__services">
        <div class="card__services-icon"></div>
        <div class="card__services-point">
            <h6>1</h6>
            <h6>Послуг</h6>
        </div>
    </div>
    <div class="card__location">
        <div class="card__location-address">
            <a href="#">м. Луцьк, пр. Соборності 89, каб. 345</a>
            <p>Луцька міська клінічна лікарня</p>
        </div>
        <div class="card__location-icon"></div>
    </div>
</div>
<div class="card__prices">
    <h4>Послуги та ціни:</h4>
    <h5>
        <span>Консультація</span> - від 100 грн
    </h5>
    <h5>
        <span>Сеанс терапії</span> - від 300 грн
    </h5>
    <div class="card__prices-buttons">
        <div class="card__write-btn">
            <a href="#">Написати</a>
        </div>
        <div class="card__details-btn">
            <a href="#">Сторінка лікаря</a>
        </div>
    </div>
</div>`;

employeeCard[6].innerHTML = `<div class="card__top">
    <div class="card__info">
        <div class="card__name">
            <a href="#">Філатова Ірина  Миколаївна</a>
        </div>
        <div class="card__desc">Інфекціонист, Лікар-нарколог дільничий, дитячий невропатологб хірург</div>
        <div class="like-button"></div>
    </div>
    <div class="card__photo">
        <div class="card__photo-inner">
            <a href="#">
                <img src="img/Iryna-photo.png" alt="">
            </a>
            <div class="card__status dont-available"></div>
            <div class="like-button"></div>
        </div>
        <div class="card__photo-desc">Не доступний</div>
    </div>
</div>
<div class="card__bottom">
    <div class="card__rating">
        <div class="card__rating-icon"></div>
        <div class="card__rating-point">
            <h6>4,9</h6>
            <h6>Рейтинг</h6>
        </div>
    </div>
    <div class="card__reviews">
        <div class="card__reviews-icon"></div>
        <div class="card__reviews-point">
            <h6>123</h6>
            <h6>Відгуків</h6>
        </div>
    </div>
    <div class="card__services">
        <div class="card__services-icon"></div>
        <div class="card__services-point">
            <h6>99</h6>
            <h6>Послуг</h6>
        </div>
    </div>
    <div class="card__location">
        <div class="card__location-address">
            <a href="#">м. Луцьк, пр. Соборності 89, каб. 123</a>
            <p>Луцька міська клінічна лікарня</p>
        </div>
        <div class="card__location-icon"></div>
    </div>
</div>
<div class="card__prices">
    <h4>Послуги та ціни:</h4>
    <h5>
        <span>Консультація</span> - від 100 грн
    </h5>
    <h5>
        <span>Сеанс терапії</span> - від 300 грн
    </h5>
    <div class="card__prices-buttons">
        <div class="card__write-btn">
            <a href="#">Написати</a>
        </div>
        <div class="card__details-btn">
            <a href="#">Сторінка лікаря</a>
        </div>
    </div>
</div>`;

employeeCard[7].innerHTML = `<div class="card__top">
    <div class="card__info">
        <div class="card__name">
            <a href="#">Омельяненко Анатолій  Анатолійович</a>
        </div>
        <div class="card__desc">Інфекціонист, Лікар-нарколог дільничий</div>
        <div class="like-button"></div>
    </div>
    <div class="card__photo">
        <div class="card__photo-inner">
            <a href="#">
                <img src="img/Anatoliy-photo.png" alt="">
            </a>
            <div class="card__status dont-available"></div>
            <div class="like-button"></div>
        </div>
        <div class="card__photo-desc">Не доступний</div>
    </div>
</div>
<div class="card__bottom">
    <div class="card__rating">
        <div class="card__rating-icon"></div>
        <div class="card__rating-point">
            <h6>4,9</h6>
            <h6>Рейтинг</h6>
        </div>
    </div>
    <div class="card__reviews">
        <div class="card__reviews-icon"></div>
        <div class="card__reviews-point">
            <h6>123</h6>
            <h6>Відгуків</h6>
        </div>
    </div>
    <div class="card__services">
        <div class="card__services-icon"></div>
        <div class="card__services-point">
            <h6>11</h6>
            <h6>Послуг</h6>
        </div>
    </div>
    <div class="card__location">
        <div class="card__location-address">
            <a href="#">м. Луцьк, пр. Соборності 89, каб. 501</a>
            <p>Луцька міська клінічна лікарня</p>
        </div>
        <div class="card__location-icon"></div>
    </div>
</div>
<div class="card__prices">
    <h4>Послуги та ціни:</h4>
    <h5>
        <span>Консультація</span> - від 100 грн
    </h5>
    <h5>
        <span>Сеанс терапії</span> - від 300 грн
    </h5>
    <div class="card__prices-buttons">
        <div class="card__write-btn">
            <a href="#">Написати</a>
        </div>
        <div class="card__details-btn">
            <a href="#">Сторінка лікаря</a>
        </div>
    </div>
</div>`;



}
