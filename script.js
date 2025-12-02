const megaMenu = document.getElementById("megaMenu");

const menuData = {
  slots: [
    { img: "imgs/pp_slots.webp", name: "Pragmatic" },
    { img: "imgs/m2.webp", name: "Habanero" },
    { img: "imgs/m3.webp", name: "PG Soft" },
    { img: "imgs/m4.webp", name: "PG Soft" },

    { img: "imgs/m5.webp", name: "PG Soft" },

    { img: "imgs/m6.webp", name: "PG Soft" },
    { img: "imgs/m7.webp", name: "PG Soft" },
    { img: "imgs/m8.webp", name: "PG Soft" },

    { img: "imgs/m9.webp", name: "PG Soft" },

    { img: "imgs/m10.webp", name: "PG Soft" },
    { img: "imgs/m11.webp", name: "PG Soft" },

    { img: "imgs/m12.webp", name: "PG Soft" },

    { img: "imgs/m13.webp", name: "PG Soft" },
    { img: "imgs/m14.webp", name: "PG Soft" },

    { img: "imgs/m15.webp", name: "PG Soft" },

    { img: "imgs/m21.webp", name: "PG Soft" },
    { img: "imgs/m22.webp", name: "PG Soft" },

    { img: "imgs/m2.webp", name: "PG Soft" },
    { img: "imgs/m19.webp", name: "PG Soft" },
    { img: "imgs/m20.webp", name: "PG Soft" },
    { img: "imgs/m23.webp", name: "PG Soft" },
    { img: "imgs/m24.webp", name: "PG Soft" },

    { img: "imgs/m22.webp", name: "PG Soft" },

    { img: "imgs/m26.webp", name: "PG Soft" },
    { img: "imgs/m27.webp", name: "PG Soft" },
    { img: "imgs/m28.webp", name: "PG Soft" },
    { img: "imgs/m30.webp", name: "PG Soft" },
    { img: "imgs/m31.webp", name: "PG Soft" },
    { img: "imgs/m32.webp", name: "PG Soft" },
  ],
  live: [
    { img: "imgs/l1.webp", name: "Evolution" },
    { img: "imgs/l2.webp", name: "Sexy Baccarat" },
    { img: "imgs/l3.webp", name: "XPG" },
    { img: "imgs/l4.webp", name: "XPG" },
    { img: "imgs/l5.webp", name: "XPG" },
    { img: "imgs/l6.webp", name: "XPG" },

    { img: "imgs/l7.webp", name: "XPG" },

    { img: "imgs/l8.webp", name: "XPG" },

    { img: "imgs/l13.webp", name: "XPG" },
    { img: "imgs/l10.webp", name: "XPG" },

    { img: "imgs/l15.webp", name: "XPG" },

    { img: "imgs/l12.webp", name: "XPG" },
  ],
  sports: [{ img: "imgs/demo3.png", name: "SBO Bet" }],
  casino: [{ img: "imgs/demo1.png", name: "Roulette" }],
  p2p: [{ img: "imgs/demo2.png", name: "Poker" }],
  fish: [{ img: "imgs/demo6.png", name: "Fishing World" }],
};

document.querySelectorAll(".menu-item").forEach((item) => {
  item.addEventListener("mouseenter", () => {
    const type = item.getAttribute("data-target");
    megaMenu.innerHTML = menuData[type]
      .map(
        (x) =>
          `<div class="mega-item"><img src="${x.img}"><span>${x.name}</span></div>`
      )
      .join("");

    megaMenu.classList.add("show-menu");
  });
});

document.querySelector(".second-nav").addEventListener("mouseleave", () => {
  megaMenu.classList.remove("show-menu");
});
document.addEventListener("DOMContentLoaded", function () {
  // Slider functionality (existing code)
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  const slider = document.querySelector(".slider");
  let currentSlide = 0;
  let slideInterval;
  const slideDuration = 6000;

  function showSlide(index) {
    if (slider) {
      slider.style.transform = `translateX(-${index * 200}%)`;
      dots.forEach((dot) => dot.classList.remove("active"));
      if (dots[index]) {
        dots[index].classList.add("active");
      }
      currentSlide = index;
    }
  }

  function nextSlide() {
    let nextIndex = (currentSlide + 1) % slides.length;
    showSlide(nextIndex);
  }

  function prevSlide() {
    let prevIndex = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(prevIndex);
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", function () {
      clearInterval(slideInterval);
      nextSlide();
      startAutoSlide();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", function () {
      clearInterval(slideInterval);
      prevSlide();
      startAutoSlide();
    });
  }

  dots.forEach((dot) => {
    dot.addEventListener("click", function () {
      clearInterval(slideInterval);
      const slideIndex = parseInt(this.getAttribute("data-slide"));
      showSlide(slideIndex);
      startAutoSlide();
    });
  });

  function startAutoSlide() {
    slideInterval = setInterval(nextSlide, slideDuration);
  }

  if (slides.length > 0) {
    showSlide(currentSlide);
    startAutoSlide();
  }

  const sliderContainer = document.querySelector(".slider-container");
  if (sliderContainer) {
    sliderContainer.addEventListener("mouseenter", function () {
      clearInterval(slideInterval);
    });

    sliderContainer.addEventListener("mouseleave", function () {
      startAutoSlide();
    });

    let touchStartX = 0;
    let touchEndX = 0;

    sliderContainer.addEventListener("touchstart", function (e) {
      touchStartX = e.changedTouches[0].screenX;
      clearInterval(slideInterval);
    });

    sliderContainer.addEventListener("touchend", function (e) {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    });

    function handleSwipe() {
      const swipeThreshold = 50;
      if (touchEndX < touchStartX - swipeThreshold) {
        nextSlide();
      }
      if (touchEndX > touchStartX + swipeThreshold) {
        prevSlide();
      }
      startAutoSlide();
    }
  }

  // Game Cards Scroll Functionality - Infinite Loop with Smooth Animation
  const gameCardsContainer = document.querySelector(".game-cards-container");
  const gameNextBtn = document.querySelector(".game-next-btn");
  const gameCardsViewport = document.querySelector(".game-cards-viewport");

  if (gameCardsContainer && gameNextBtn) {
    let currentGamePage = 0;
    let isAnimating = false;

    function getCardsPerView() {
      const viewportWidth = window.innerWidth;
      if (viewportWidth <= 575) {
        return 2;
      } else if (viewportWidth <= 767) {
        return 2;
      } else if (viewportWidth <= 991) {
        return 3;
      }
      return 3;
    }

    function getCardWidth() {
      const firstCard = document.querySelector(".game-card-item");
      if (firstCard) {
        const style = window.getComputedStyle(firstCard);
        const width = parseFloat(style.width);
        const gap = 15;
        return width + gap;
      }
      return 195;
    }

    function scrollGameCards() {
      if (isAnimating) return;

      isAnimating = true;
      const cardsPerView = getCardsPerView();
      const cardWidth = getCardWidth();
      const scrollAmount = cardWidth * cardsPerView;
      const allCards = document.querySelectorAll(".game-card-item");
      const totalCardsInRow = document.querySelectorAll(
        ".game-cards-row:first-child .game-card-item"
      ).length;
      const maxPages = Math.ceil(totalCardsInRow / cardsPerView);

      currentGamePage++;

      if (currentGamePage >= maxPages) {
        const translateX = -(currentGamePage * scrollAmount);
        const rows = document.querySelectorAll(".game-cards-row");

        rows.forEach((row) => {
          row.style.transition = "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)";
          row.style.transform = `translateX(${translateX}px)`;
        });

        setTimeout(() => {
          currentGamePage = 0;
          rows.forEach((row) => {
            row.style.transition = "none";
            row.style.transform = "translateX(0)";
          });

          setTimeout(() => {
            rows.forEach((row) => {
              row.style.transition =
                "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)";
            });
            isAnimating = false;
          }, 50);
        }, 600);
      } else {
        const translateX = -(currentGamePage * scrollAmount);
        const rows = document.querySelectorAll(".game-cards-row");

        rows.forEach((row) => {
          row.style.transform = `translateX(${translateX}px)`;
        });

        setTimeout(() => {
          isAnimating = false;
        }, 600);
      }

      gameNextBtn.style.transform = "scale(0.95)";
      setTimeout(() => {
        gameNextBtn.style.transform = "scale(1)";
      }, 150);
    }

    gameNextBtn.addEventListener("click", scrollGameCards);

    let touchStartXGame = 0;
    let touchEndXGame = 0;

    gameCardsViewport.addEventListener("touchstart", function (e) {
      touchStartXGame = e.changedTouches[0].screenX;
    });

    gameCardsViewport.addEventListener("touchend", function (e) {
      touchEndXGame = e.changedTouches[0].screenX;
      handleGameCardsSwipe();
    });

    function handleGameCardsSwipe() {
      const swipeThreshold = 50;
      if (touchEndXGame < touchStartXGame - swipeThreshold) {
        scrollGameCards();
      }
    }

    let resizeTimeout;
    window.addEventListener("resize", function () {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(function () {
        if (!isAnimating) {
          currentGamePage = 0;
          const rows = document.querySelectorAll(".game-cards-row");
          rows.forEach((row) => {
            row.style.transition = "none";
            row.style.transform = "translateX(0)";
          });

          setTimeout(() => {
            rows.forEach((row) => {
              row.style.transition =
                "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)";
            });
          }, 50);
        }
      }, 250);
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "ArrowRight" && gameCardsViewport.matches(":hover")) {
        scrollGameCards();
      }
    });
  }

  // Login Modal Functionality
  const loginModal = document.getElementById("loginModal");
  const closeModal = document.getElementById("closeModal");
  const loginForm = document.getElementById("loginForm");

  // Get all Demo and Play buttons
  const demoButtons = document.querySelectorAll(".game-demo-btn");
  const playButtons = document.querySelectorAll(".game-play-btn");

  // Open modal when clicking Demo or Play buttons
  function openModal() {
    loginModal.classList.add("active");
    document.body.style.overflow = "hidden"; // Prevent background scrolling
  }

  // Close modal
  function closeModalFunc() {
    loginModal.classList.remove("active");
    document.body.style.overflow = ""; // Re-enable scrolling
  }

  // Add click event to all demo buttons
  demoButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      openModal();
    });
  });

  // Add click event to all play buttons
  playButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      openModal();
    });
  });

  // Close modal when clicking close button
  closeModal.addEventListener("click", closeModalFunc);

  // Close modal when clicking outside
  loginModal.addEventListener("click", function (e) {
    if (e.target === loginModal) {
      closeModalFunc();
    }
  });

  // Close modal on ESC key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && loginModal.classList.contains("active")) {
      closeModalFunc();
    }
  });

  // Input functionality
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const clearUsername = document.getElementById("clearUsername");
  const clearPassword = document.getElementById("clearPassword");
  const togglePassword = document.getElementById("togglePassword");

  // Clear username
  clearUsername.addEventListener("click", function () {
    usernameInput.value = "";
    usernameInput.focus();
  });

  // Clear password
  clearPassword.addEventListener("click", function () {
    passwordInput.value = "";
    passwordInput.focus();
  });

  // Toggle password visibility
  togglePassword.addEventListener("click", function () {
    const type =
      passwordInput.getAttribute("type") === "password" ? "text" : "password";
    passwordInput.setAttribute("type", type);
  });

  // Form submission
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = usernameInput.value;
    const password = passwordInput.value;
    const rememberMe = document.getElementById("rememberMe").checked;

    // Here you can add your login logic
    console.log("Login attempt:", {
      username: username,
      password: password,
      rememberMe: rememberMe,
    });

    // For demo purposes, just close the modal
    alert("Login functionality would be implemented here!");
    closeModalFunc();
  });

  // Google login button
  const googleBtn = document.querySelector(".google-btn");
  googleBtn.addEventListener("click", function (e) {
    e.preventDefault();
    alert("Google login would be implemented here!");
  });

  // Register button
  const registerBtn = document.querySelector(".register-btn");
  registerBtn.addEventListener("click", function (e) {
    e.preventDefault();
    alert("Registration page would open here!");
  });

  // Forgot password link
  const forgotPassword = document.querySelector(".forgot-password");
  forgotPassword.addEventListener("click", function (e) {
    e.preventDefault();
    alert("Password recovery would be implemented here!");
  });

  // Signup link
  const signupLink = document.querySelector(".signup-link");
  signupLink.addEventListener("click", function (e) {
    e.preventDefault();
    alert("Registration page would open here!");
  });
});

// Game Cards Horizontal Scroll
document.addEventListener("DOMContentLoaded", function () {
  // Slider functionality (existing code)
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  const slider = document.querySelector(".slider");
  let currentSlide = 0;
  let slideInterval;
  const slideDuration = 6000;

  function showSlide(index) {
    if (slider) {
      slider.style.transform = `translateX(-${index * 200}%)`;
      dots.forEach((dot) => dot.classList.remove("active"));
      if (dots[index]) {
        dots[index].classList.add("active");
      }
      currentSlide = index;
    }
  }

  function nextSlide() {
    let nextIndex = (currentSlide + 1) % slides.length;
    showSlide(nextIndex);
  }

  function prevSlide() {
    let prevIndex = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(prevIndex);
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", function () {
      clearInterval(slideInterval);
      nextSlide();
      startAutoSlide();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", function () {
      clearInterval(slideInterval);
      prevSlide();
      startAutoSlide();
    });
  }

  dots.forEach((dot) => {
    dot.addEventListener("click", function () {
      clearInterval(slideInterval);
      const slideIndex = parseInt(this.getAttribute("data-slide"));
      showSlide(slideIndex);
      startAutoSlide();
    });
  });

  function startAutoSlide() {
    slideInterval = setInterval(nextSlide, slideDuration);
  }

  if (slides.length > 0) {
    showSlide(currentSlide);
    startAutoSlide();
  }

  const sliderContainer = document.querySelector(".slider-container");
  if (sliderContainer) {
    sliderContainer.addEventListener("mouseenter", function () {
      clearInterval(slideInterval);
    });

    sliderContainer.addEventListener("mouseleave", function () {
      startAutoSlide();
    });

    let touchStartX = 0;
    let touchEndX = 0;

    sliderContainer.addEventListener("touchstart", function (e) {
      touchStartX = e.changedTouches[0].screenX;
      clearInterval(slideInterval);
    });

    sliderContainer.addEventListener("touchend", function (e) {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    });

    function handleSwipe() {
      const swipeThreshold = 50;
      if (touchEndX < touchStartX - swipeThreshold) {
        nextSlide();
      }
      if (touchEndX > touchStartX + swipeThreshold) {
        prevSlide();
      }
      startAutoSlide();
    }
  }

  // Game Cards Scroll Functionality - Infinite Loop with Smooth Animation
  const gameCardsContainer = document.querySelector(".game-cards-container");
  const gameNextBtn = document.querySelector(".game-next-btn");
  const gameCardsViewport = document.querySelector(".game-cards-viewport");

  if (gameCardsContainer && gameNextBtn) {
    let currentGamePage = 0;
    let isAnimating = false;

    function getCardsPerView() {
      const viewportWidth = window.innerWidth;
      if (viewportWidth <= 575) {
        return 2;
      } else if (viewportWidth <= 767) {
        return 2;
      } else if (viewportWidth <= 991) {
        return 3;
      }
      return 3;
    }

    function getCardWidth() {
      const firstCard = document.querySelector(".game-card-item");
      if (firstCard) {
        const style = window.getComputedStyle(firstCard);
        const width = parseFloat(style.width);
        const gap = 15;
        return width + gap;
      }
      return 195;
    }

    function scrollGameCards() {
      if (isAnimating) return;

      isAnimating = true;
      const cardsPerView = getCardsPerView();
      const cardWidth = getCardWidth();
      const scrollAmount = cardWidth * cardsPerView;
      const allCards = document.querySelectorAll(".game-card-item");
      const totalCardsInRow = document.querySelectorAll(
        ".game-cards-row:first-child .game-card-item"
      ).length;
      const maxPages = Math.ceil(totalCardsInRow / cardsPerView);

      currentGamePage++;

      if (currentGamePage >= maxPages) {
        const translateX = -(currentGamePage * scrollAmount);
        const rows = document.querySelectorAll(".game-cards-row");

        rows.forEach((row) => {
          row.style.transition = "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)";
          row.style.transform = `translateX(${translateX}px)`;
        });

        setTimeout(() => {
          currentGamePage = 0;
          rows.forEach((row) => {
            row.style.transition = "none";
            row.style.transform = "translateX(0)";
          });

          setTimeout(() => {
            rows.forEach((row) => {
              row.style.transition =
                "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)";
            });
            isAnimating = false;
          }, 50);
        }, 600);
      } else {
        const translateX = -(currentGamePage * scrollAmount);
        const rows = document.querySelectorAll(".game-cards-row");

        rows.forEach((row) => {
          row.style.transform = `translateX(${translateX}px)`;
        });

        setTimeout(() => {
          isAnimating = false;
        }, 600);
      }

      gameNextBtn.style.transform = "scale(0.95)";
      setTimeout(() => {
        gameNextBtn.style.transform = "scale(1)";
      }, 150);
    }

    gameNextBtn.addEventListener("click", scrollGameCards);

    let touchStartXGame = 0;
    let touchEndXGame = 0;

    gameCardsViewport.addEventListener("touchstart", function (e) {
      touchStartXGame = e.changedTouches[0].screenX;
    });

    gameCardsViewport.addEventListener("touchend", function (e) {
      touchEndXGame = e.changedTouches[0].screenX;
      handleGameCardsSwipe();
    });

    function handleGameCardsSwipe() {
      const swipeThreshold = 50;
      if (touchEndXGame < touchStartXGame - swipeThreshold) {
        scrollGameCards();
      }
    }

    let resizeTimeout;
    window.addEventListener("resize", function () {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(function () {
        if (!isAnimating) {
          currentGamePage = 0;
          const rows = document.querySelectorAll(".game-cards-row");
          rows.forEach((row) => {
            row.style.transition = "none";
            row.style.transform = "translateX(0)";
          });

          setTimeout(() => {
            rows.forEach((row) => {
              row.style.transition =
                "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)";
            });
          }, 50);
        }
      }, 250);
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "ArrowRight" && gameCardsViewport.matches(":hover")) {
        scrollGameCards();
      }
    });
  }

  // Login Modal Functionality
  const loginModal = document.getElementById("loginModal");
  const closeModal = document.getElementById("closeModal");
  const loginForm = document.getElementById("loginForm");

  // Get all Demo and Play buttons from game cards
  const demoButtons = document.querySelectorAll(".game-demo-btn");
  const playButtons = document.querySelectorAll(".game-play-btn");

  // Get all Play buttons from game ads section
  const gameAdsPlayButtons = document.querySelectorAll("[data-trigger-login]");

  // Open modal when clicking Demo or Play buttons
  function openModal() {
    loginModal.classList.add("active");
    document.body.style.overflow = "hidden"; // Prevent background scrolling
  }

  // Close modal
  function closeModalFunc() {
    loginModal.classList.remove("active");
    document.body.style.overflow = ""; // Re-enable scrolling
  }

  // Add click event to all demo buttons
  demoButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      openModal();
    });
  });

  // Add click event to all play buttons in game cards
  playButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      openModal();
    });
  });

  // Add click event to all play buttons in game ads section
  gameAdsPlayButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      openModal();
    });
  });

  // Close modal when clicking close button
  closeModal.addEventListener("click", closeModalFunc);

  // Close modal when clicking outside
  loginModal.addEventListener("click", function (e) {
    if (e.target === loginModal) {
      closeModalFunc();
    }
  });

  // Close modal on ESC key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && loginModal.classList.contains("active")) {
      closeModalFunc();
    }
  });

  // Input functionality
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const clearUsername = document.getElementById("clearUsername");
  const clearPassword = document.getElementById("clearPassword");
  const togglePassword = document.getElementById("togglePassword");

  // Clear username
  clearUsername.addEventListener("click", function () {
    usernameInput.value = "";
    usernameInput.focus();
  });

  // Clear password
  clearPassword.addEventListener("click", function () {
    passwordInput.value = "";
    passwordInput.focus();
  });

  // Toggle password visibility
  togglePassword.addEventListener("click", function () {
    const type =
      passwordInput.getAttribute("type") === "password" ? "text" : "password";
    passwordInput.setAttribute("type", type);
  });

  // Form submission
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = usernameInput.value;
    const password = passwordInput.value;
    const rememberMe = document.getElementById("rememberMe").checked;

    // Here you can add your login logic
    console.log("Login attempt:", {
      username: username,
      password: password,
      rememberMe: rememberMe,
    });

    // For demo purposes, just close the modal
    alert("Login functionality would be implemented here!");
    closeModalFunc();
  });

  // Google login button
  const googleBtn = document.querySelector(".google-btn");
  googleBtn.addEventListener("click", function (e) {
    e.preventDefault();
    alert("Google login would be implemented here!");
  });

  // Register button
  const registerBtn = document.querySelector(".register-btn");
  registerBtn.addEventListener("click", function (e) {
    e.preventDefault();
    alert("Registration page would open here!");
  });

  // Forgot password link
  const forgotPassword = document.querySelector(".forgot-password");
  forgotPassword.addEventListener("click", function (e) {
    e.preventDefault();
    alert("Password recovery would be implemented here!");
  });

  // Signup link
  const signupLink = document.querySelector(".signup-link");
  signupLink.addEventListener("click", function (e) {
    e.preventDefault();
    alert("Registration page would open here!");
  });
});

// Game Cards Horizontal Scroll
document.addEventListener("DOMContentLoaded", function () {
  const cardsScrollContainer = document.querySelector(
    ".cards-scroll-container"
  );
  const cardsRows = document.querySelectorAll(".cards-row");
  const nextBtn = document.querySelector(".next-btn");

  let currentScrollPosition = 0;
  const cardWidth = 200; // Width of each card
  const cardGap = 15; // Gap between cards
  const cardsPerView = 6; // Show 6 cards at a time
  const scrollAmount = (cardWidth + cardGap) * cardsPerView; // Scroll exactly 6 cards

  // Function to update button states
  function updateButtonStates() {
    const containerWidth = cardsScrollContainer.offsetWidth;
    const totalWidth = cardsRows[0].scrollWidth;
    const maxScroll = totalWidth - containerWidth;

    // Check if we're at the end
    if (currentScrollPosition <= -maxScroll) {
      nextBtn.style.opacity = "1";
      nextBtn.style.cursor = "pointer";
      nextBtn.dataset.atEnd = "true";
    } else {
      nextBtn.style.opacity = "1";
      nextBtn.style.cursor = "pointer";
      nextBtn.dataset.atEnd = "false";
    }
  }

  // Scroll to the right or reset to start
  function scrollRight() {
    const containerWidth = cardsScrollContainer.offsetWidth;
    const totalWidth = cardsRows[0].scrollWidth;
    const maxScroll = totalWidth - containerWidth;

    // Check if we're at the end
    if (nextBtn.dataset.atEnd === "true") {
      // Reset to start
      currentScrollPosition = 0;
      cardsRows.forEach((row) => {
        row.style.transform = `translateX(0px)`;
      });
      nextBtn.dataset.atEnd = "false";
    } else {
      // Scroll right
      currentScrollPosition -= scrollAmount;
      if (currentScrollPosition < -maxScroll) {
        currentScrollPosition = -maxScroll;
      }

      cardsRows.forEach((row) => {
        row.style.transform = `translateX(${currentScrollPosition}px)`;
      });
    }

    updateButtonStates();
  }

  // Event listener for next button only
  nextBtn.addEventListener("click", scrollRight);

  // Touch swipe support for mobile
  let touchStartX = 0;
  let touchEndX = 0;

  cardsScrollContainer.addEventListener("touchstart", function (e) {
    touchStartX = e.changedTouches[0].screenX;
  });

  cardsScrollContainer.addEventListener("touchend", function (e) {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  });

  function handleSwipe() {
    const swipeThreshold = 50;

    if (touchEndX < touchStartX - swipeThreshold) {
      // Swipe left - scroll right
      scrollRight();
    }

    if (touchEndX > touchStartX + swipeThreshold) {
      // Swipe right - scroll left (reset to start)
      if (currentScrollPosition < 0) {
        currentScrollPosition = 0;
        cardsRows.forEach((row) => {
          row.style.transform = `translateX(0px)`;
        });
        updateButtonStates();
      }
    }
  }

  // Initialize button states
  updateButtonStates();

  // Handle window resize
  window.addEventListener("resize", function () {
    updateButtonStates();
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const track = document.querySelector(".carousel-track");
  const btn = document.querySelector(".carousel-btn-next");
  const slides = document.querySelectorAll(".carousel-track .col-4");

  let currentIndex = 0;
  let slidesToShow = 3;

  // Function to update slides to show based on screen size
  function updateSlidesToShow() {
    const width = window.innerWidth;
    if (width <= 768) {
      slidesToShow = 1;
    } else if (width <= 1024) {
      slidesToShow = 2;
    } else {
      slidesToShow = 3;
    }
  }

  // Initial setup
  updateSlidesToShow();

  // Update on window resize
  window.addEventListener("resize", function () {
    updateSlidesToShow();
    currentIndex = 0;
    track.style.transform = "translateX(0)";
  });

  btn.addEventListener("click", function () {
    const maxIndex = slides.length - slidesToShow;

    if (currentIndex < maxIndex) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }

    const slideWidth = slides[0].offsetWidth + 20; // width + margin
    const offset = -currentIndex * slideWidth;
    track.style.transform = `translateX(${offset}px)`;
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const counterElement = document.getElementById("jackpot-counter");
  let currentValue = 6908700054;

  function formatNumber(num) {
    return "IDR " + num.toLocaleString("id-ID");
  }

  function updateCounter() {
    // Increase by random amount between 1000 and 10000 every 100ms
    const increment = Math.floor(Math.random() * 9000) + 1000;
    currentValue += increment;
    counterElement.textContent = formatNumber(currentValue);
  }

  // Update counter every 100ms for fast increase
  setInterval(updateCounter, 100);
});

const menuToggle = document.getElementById("menuToggle");
const iconsContainer = document.getElementById("iconsContainer");
const iconBoxes = document.querySelectorAll(".icon-box");

let isOpen = false;

menuToggle.addEventListener("click", () => {
  isOpen = !isOpen;

  menuToggle.classList.toggle("active");
  iconsContainer.classList.toggle("active");

  if (isOpen) {
    iconBoxes.forEach((box) => {
      box.classList.add("show");
    });
  } else {
    iconBoxes.forEach((box) => {
      box.classList.remove("show");
    });
  }
});

iconBoxes.forEach((box, index) => {
  box.addEventListener("click", (e) => {
    e.stopPropagation();
    console.log(`Icon ${index + 1} clicked`);
    // Add your functionality here
  });
});
