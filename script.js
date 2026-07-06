const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");
const topbar = document.querySelector(".topbar");
const page = document.body.dataset.page;

// Centralized external commerce links for the live Square booking and eGift
// card paths plus current product checkout destinations.
const commerceLinkOverrides = {
  "https://www.naturalxscentrics.com/book-online":
    "https://app.squareup.com/appointments/book/b4kjzgy1iy7icr/LNQBHJB6WAM9N/start",
  "https://www.naturalxscentrics.com/gift-card":
    "https://app.squareup.com/gift/ML4VNNDQ66659/order",
  "https://www.naturalxscentrics.com/shop":
    "https://www.naturalxscentrics.com/shop",
  "https://www.naturalxscentrics.com/product-page/love-calls-1":
    "https://square.link/u/hCPox1jZ",
  "https://www.naturalxscentrics.com/product-page/love-calls":
    "https://square.link/u/DEYTTABn",
  "https://www.naturalxscentrics.com/product-page/daydreaming":
    "https://square.link/u/92uxtyW8",
  "https://www.naturalxscentrics.com/product-page/daydreaming-1":
    "https://square.link/u/m8iNTgCN",
  "https://www.naturalxscentrics.com/product-page/gentle-woods-1":
    "https://square.link/u/LOhZQl9y",
  "https://www.naturalxscentrics.com/product-page/gentle-woods":
    "https://square.link/u/bd80DRvT",
  "https://www.naturalxscentrics.com/product-page/sunkissed-glow-2":
    "https://square.link/u/Wv1GvW6z",
  "https://www.naturalxscentrics.com/product-page/sunkissed-glow":
    "https://square.link/u/SWncq7rk",
  "https://www.naturalxscentrics.com/product-page/cool-running-1":
    "https://square.link/u/KswaZPl5",
  "https://www.naturalxscentrics.com/product-page/cool-running":
    "https://square.link/u/vpzGo1ZY",
  "https://www.naturalxscentrics.com/product-page/sweet-melanin-1":
    "https://square.link/u/ztsf4eyn",
  "https://www.naturalxscentrics.com/product-page/sweet-melanin":
    "https://square.link/u/aQ9IINrV",
  "https://www.naturalxscentrics.com/product-page/hair-oil":
    "https://square.link/u/b0gGw9Qa",
  "https://www.naturalxscentrics.com/product-page/face-oil-1":
    "https://square.link/u/tHn6DWhn",
  "https://www.naturalxscentrics.com/product-page/beard-oil-1":
    "https://square.link/u/QH1Sagr2",
  "https://www.naturalxscentrics.com/product-page/4-step-facial-routine":
    "https://square.link/u/xjhcmvdM",
};

document.querySelectorAll("a[href]").forEach((link) => {
  const originalHref = link.getAttribute("href");
  const replacementHref = commerceLinkOverrides[originalHref];
  if (replacementHref) {
    link.setAttribute("href", replacementHref);
  }
});

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
    const recipient = form.dataset.mailtoRecipient;
    const subject = form.dataset.mailtoSubject;
    const email = recipient || "NaturalXscentrics@gmail.com";

    if (subject) {
      const fields = Array.from(form.elements).filter((field) => {
        if (!(field instanceof HTMLInputElement || field instanceof HTMLSelectElement || field instanceof HTMLTextAreaElement)) {
          return false;
        }

        if (!field.name || field.disabled) {
          return false;
        }

        if ((field instanceof HTMLInputElement) && (field.type === "submit" || field.type === "button")) {
          return false;
        }

        return true;
      });

      const body = fields
        .map((field) => {
          const label = field.name
            .replace(/[-_]+/g, " ")
            .replace(/\b\w/g, (char) => char.toUpperCase());
          return `${label}: ${field.value || ""}`;
        })
        .join("\n");

      const mailtoHref =
        `mailto:${encodeURIComponent(email)}` +
        `?subject=${encodeURIComponent(subject)}` +
        `&body=${encodeURIComponent(body)}`;

      window.location.href = mailtoHref;
    }

    if (message && message.classList.contains("success-message")) {
      message.classList.add("is-visible");
    }
  });
});
