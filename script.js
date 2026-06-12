const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");
const topbar = document.querySelector(".topbar");
const page = document.body.dataset.page;
const siteShell = document.querySelector(".site-shell");

const liveAnnouncement = {
  eyebrow: "Limited-time promotion",
  headline: "Father's Day Flash Sale: 20% Off Select Categories",
  detail: "Celebrate him with purposeful natural care. Shop the Father's Day sale before it ends.",
  href: "./shop.html",
  cta: "Shop Now",
};

if (siteShell && topbar) {
  const announcementBar = document.createElement("section");
  announcementBar.className = "promo-banner";
  announcementBar.setAttribute("aria-label", "Limited-time promotion");
  announcementBar.innerHTML = `
    <div class="promo-banner-copy">
      <p class="promo-banner-eyebrow">${liveAnnouncement.eyebrow}</p>
      <strong>${liveAnnouncement.headline}</strong>
      <p>${liveAnnouncement.detail}</p>
    </div>
    <a class="promo-banner-cta" href="${liveAnnouncement.href}">${liveAnnouncement.cta}</a>
  `;

  siteShell.insertBefore(announcementBar, topbar);
}

if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    topbar?.classList.toggle("is-menu-open", isOpen);
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    if (link.dataset.nav === page) {
      link.classList.add("is-active");
    }

    link.addEventListener("click", () => {
      siteNav.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
      topbar?.classList.remove("is-menu-open");
    });
  });
}

if (topbar) {
  const syncTopbarScrollState = () => {
    topbar.classList.toggle("is-scrolled", window.scrollY > 24);
  };

  syncTopbarScrollState();
  window.addEventListener("scroll", syncTopbarScrollState, { passive: true });
}

document.querySelectorAll("[data-demo-form]").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const message = form.nextElementSibling;
    if (message && message.classList.contains("success-message")) {
      message.classList.add("is-visible");
    }
    form.reset();
  });
});
