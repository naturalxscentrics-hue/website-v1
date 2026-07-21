const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");
const topbar = document.querySelector(".topbar");
const page = document.body.dataset.page;
const leadFunnelConfig = {
  delayMs: 3000,
  endpoint: "https://formsubmit.co/ajax/NaturalXscentrics@gmail.com",
  fallbackEndpoint: "https://formsubmit.co/NaturalXscentrics@gmail.com",
  sessionKey: "nxsLeadFunnelSessionDismissed",
  submissionKey: "nxsLeadFunnelSubmittedAt",
};

// Centralized external commerce links for the live Square booking and eGift
// card paths plus current product checkout destinations.
const commerceLinkOverrides = {
  "https://www.naturalxscentrics.com/book-online":
    "https://app.squareup.com/appointments/book/b4kjzgy1iy7icr/LNQBHJB6WAM9N/start",
  "https://www.naturalxscentrics.com/gift-card":
    "https://app.squareup.com/gift/ML4VNNDQ66659/order",
  "https://www.naturalxscentrics.com/shop":
    "https://www.naturalxscentrics.com/shop",
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

const escapeHtml = (value) =>
  String(value).replace(/[&<>"']/g, (char) => {
    const map = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return map[char] || char;
  });

const shouldShowLeadFunnel = () => {
  if (/\/(cart|you-may-also-like)\.html$/.test(window.location.pathname)) {
    return false;
  }

  try {
    return !sessionStorage.getItem(leadFunnelConfig.sessionKey) &&
      !localStorage.getItem(leadFunnelConfig.submissionKey);
  } catch (error) {
    return true;
  }
};

const markLeadFunnelDismissed = () => {
  try {
    sessionStorage.setItem(leadFunnelConfig.sessionKey, "true");
  } catch (error) {
    // Ignore storage failures and keep the UI usable.
  }
};

const markLeadFunnelSubmitted = () => {
  try {
    localStorage.setItem(leadFunnelConfig.submissionKey, new Date().toISOString());
    sessionStorage.setItem(leadFunnelConfig.sessionKey, "true");
  } catch (error) {
    // Ignore storage failures and keep the UI usable.
  }
};

const createLeadFunnel = () => {
  if (!document.body || document.querySelector("[data-lead-funnel]")) {
    return null;
  }

  const modalMarkup = `
    <div class="lead-funnel" data-lead-funnel aria-hidden="true">
      <div class="lead-funnel__backdrop" data-lead-funnel-close></div>
      <section
        class="lead-funnel__dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="lead-funnel-title"
      >
        <button
          class="lead-funnel__close"
          type="button"
          aria-label="Close sign-up form"
          data-lead-funnel-close
        >&times;</button>
        <p class="eyebrow">Stay connected</p>
        <h2 id="lead-funnel-title">Join the Natural XScentrics community.</h2>
        <p class="lead-funnel__intro">
          Get brand updates, self-care drops, and product news from Natural XScentrics.
        </p>
        <form
          class="lead-funnel__form"
          action="${leadFunnelConfig.fallbackEndpoint}"
          method="post"
          data-lead-funnel-form
        >
          <input type="hidden" name="_subject" value="Website lead funnel submission" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="source_page" value="${escapeHtml(document.title)}" />
          <input type="hidden" name="source_url" value="${escapeHtml(window.location.href)}" />
          <div class="lead-funnel__grid">
            <label>
              First name
              <input type="text" name="first_name" autocomplete="given-name" required />
            </label>
            <label>
              Last name
              <input type="text" name="last_name" autocomplete="family-name" required />
            </label>
            <label class="full">
              Email address
              <input type="email" name="email" autocomplete="email" required />
            </label>
            <label class="full">
              How did you hear about us?
              <input
                type="text"
                name="referral_source"
                placeholder="Instagram, a friend, an event, Google, etc."
                required
              />
            </label>
          </div>
          <div class="lead-funnel__actions">
            <button class="button button-primary" type="submit">Stay in the loop</button>
            <button class="button button-secondary" type="button" data-lead-funnel-close>Maybe later</button>
          </div>
          <p class="lead-funnel__status" data-lead-funnel-status aria-live="polite"></p>
        </form>
      </section>
    </div>
  `;

  document.body.insertAdjacentHTML("beforeend", modalMarkup);

  const modal = document.querySelector("[data-lead-funnel]");
  const form = modal?.querySelector("[data-lead-funnel-form]");
  const status = modal?.querySelector("[data-lead-funnel-status]");
  const submitButton = form?.querySelector('button[type="submit"]');

  if (!modal || !(form instanceof HTMLFormElement) || !status || !(submitButton instanceof HTMLButtonElement)) {
    return null;
  }

  const setLeadFunnelOpen = (isOpen) => {
    modal.classList.toggle("is-visible", isOpen);
    modal.setAttribute("aria-hidden", String(!isOpen));
    document.body.classList.toggle("has-lead-funnel-open", isOpen);

    if (isOpen) {
      requestAnimationFrame(() => {
        const firstInput = form.querySelector('input:not([type="hidden"])');
        if (firstInput instanceof HTMLInputElement) {
          firstInput.focus();
        }
      });

      if (typeof window.gtag === "function") {
        window.gtag("event", "lead_funnel_open", {
          page_title: document.title,
          page_location: window.location.href,
        });
      }
    }
  };

  modal.querySelectorAll("[data-lead-funnel-close]").forEach((control) => {
    control.addEventListener("click", () => {
      markLeadFunnelDismissed();
      setLeadFunnelOpen(false);
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("is-visible")) {
      markLeadFunnelDismissed();
      setLeadFunnelOpen(false);
    }
  });

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    submitButton.disabled = true;
    submitButton.textContent = "Submitting...";
    status.textContent = "";

    const formData = new FormData(form);

    try {
      const response = await fetch(leadFunnelConfig.endpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Lead funnel request failed with status ${response.status}`);
      }

      form.reset();
      markLeadFunnelSubmitted();
      status.textContent = "Thank you. You are on the list.";
      submitButton.textContent = "Submitted";

      if (typeof window.gtag === "function") {
        window.gtag("event", "generate_lead", {
          method: "website popup",
          page_title: document.title,
          page_location: window.location.href,
        });
      }

      window.setTimeout(() => {
        setLeadFunnelOpen(false);
      }, 1400);
    } catch (error) {
      form.submit();
      return;
    } finally {
      window.setTimeout(() => {
        submitButton.disabled = false;
        submitButton.textContent = "Stay in the loop";
      }, 1600);
    }
  });

  return {
    open() {
      setLeadFunnelOpen(true);
    },
  };
};

if (shouldShowLeadFunnel()) {
  const leadFunnel = createLeadFunnel();

  if (leadFunnel) {
    window.setTimeout(() => {
      if (shouldShowLeadFunnel()) {
        leadFunnel.open();
      }
    }, leadFunnelConfig.delayMs);
  }
}
