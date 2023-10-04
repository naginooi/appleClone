const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

document.querySelector('.latest-container').insertAdjacentHTML(
  'beforeend',
  `
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <!-- Slides -->
      <div class="swiper-slide iPhone15PRO">
        <div class="img-box">
            <img src="./img/latest/store-card-40-iphone-15-pro-202309.jpeg" srcset="">
        </div>
        <div class="img-text">
          <div class="date">
            10월 6일 사전 주문. <br> IPHONE 15 PRO
          </div>
          <h3>티타늄</h3>
          <div class="price">₩1,550,000부터</div>
        </div>
      </div>
      <div class="swiper-slide iPhone15">
        <div class="img-box">
            <img src="./img/latest/store-card-40-iphone-15-202309.jpeg" srcset="">
        </div>
        <div class="img-text">
          <div class="date">
            10월 6일 사전 주문. <br> IPHONE 15
          </div>
          <h3>새로움 물씬</h3>
          <div class="price">₩599,000부터</div>
        </div>
      </div>
      <div class="swiper-slide watch9">
        <div class="img-box">
            <img src="./img/latest/store-card-40-watch-s9-202309_GEO_KR.jpeg" srcset="">
        </div>
        <div class="img-text">
          <div class="date">
            10월 6일 주문. <br> APPLE WATCH SERIES 9
          </div>
          <h3>보다 똑똑. 보다 또렷. 보다 강력</h3>
          <div>₩599,000부터</div>
        </div>
      </div>
      <div class="swiper-slide watchUltra">
        <div class="img-box">
            <img src="./img/latest/store-card-40-watch-ultra-202309_GEO_KR.jpeg" srcset="">
        </div>
        <div class="img-text">
          <div class="date">
            10월 6일 주문. <br> APPLE WATCH ULTRA 2
          </div>
          <h3>한 차원 높은 모험</h3>
          <div>₩1,149,000부터</div>
        </div>
      </div>
      <div class="swiper-slide 15PRO">
        <div class="img-box">
            <img src="./img/latest/store-card-40-iphone-15-pro-202309.jpeg" srcset="">
        </div>
        <div class="img-text">
          <div class="date">
            10월 6일 사전 주문. <br> IPHONE 15 PRO
          </div>
          <h3>티타늄</h3>
          <div>₩1,550,000부터</div>
        </div>
      </div>
      <div class="swiper-slide 15PRO">
        <div class="img-box">
            <img src="./img/latest/store-card-40-iphone-15-pro-202309.jpeg" srcset="">
        </div>
        <div class="img-text">
          <div class="date">
            10월 6일 사전 주문. <br> IPHONE 15 PRO
          </div>
          <h3>티타늄</h3>
          <div>₩1,550,000부터</div>
        </div>
      </div>
      <div class="swiper-slide 15PRO">
        <div class="img-box">
            <img src="./img/latest/store-card-40-iphone-15-pro-202309.jpeg" srcset="">
        </div>
        <div class="img-text">
          <div class="date">
            10월 6일 사전 주문. <br> IPHONE 15 PRO
          </div>
          <h3>티타늄</h3>
          <div>₩1,550,000부터</div>
        </div>
      </div>
    </div>

    <!-- If we need navigation buttons -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
`
);
