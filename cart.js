(() => {
  const STORE = "https://natural-xscentrics.square.site";
  const RECENT_KEY = "nxsRecentlyViewedProducts";
  const products = {
    "https://www.naturalxscentrics.com/product-page/love-calls-1": ["Love Calls Body Butter", "/product/love-calls-body-butter/7YJVF62SERNWLZZYCPY26PW2"],
    "https://www.naturalxscentrics.com/product-page/love-calls": ["Love Calls Sugar Scrub", "/product/love-calls-sugar-scrub/R6ZV4IN3L764MS4M5IB5OJGD"],
    "https://www.naturalxscentrics.com/product-page/daydreaming": ["Daydreaming Body Butter", "/product/daydreaming-body-butter/YQRB6CUA364L46T4E3T6NLXV"],
    "https://www.naturalxscentrics.com/product-page/daydreaming-1": ["Daydreaming Sugar Scrub", "/s/shop"],
    "https://www.naturalxscentrics.com/product-page/gentle-woods-1": ["Gentle Woods Body Butter", "/product/gentle-woods-body-butter/3EXSFAYCZGOHVX7ELUY7YNP7"],
    "https://www.naturalxscentrics.com/product-page/gentle-woods": ["Gentle Woods Sugar Scrub", "/product/gentle-woods-sugar-scrub/CAUMVC5UFQ5BUKO7ZJUNQD3Y"],
    "https://www.naturalxscentrics.com/product-page/sunkissed-glow-2": ["Sunkissed Glow Body Butter", "/product/sunkissed-glow-body-butter/WFXKFOC76WBSANHTOYGNJFV3"],
    "https://www.naturalxscentrics.com/product-page/sunkissed-glow": ["Sunkissed Glow Sugar Scrub", "/product/sunkissed-glow-sugar-scrub/WGBMGFBZNAPQ3KJWOCVHCT76"],
    "https://www.naturalxscentrics.com/product-page/cool-running-1": ["Cool Running Body Butter", "/product/cool-running-body-butter/TPLTLQNNR53WSLIQCWVYITPI"],
    "https://www.naturalxscentrics.com/product-page/cool-running": ["Cool Running Sugar Scrub", "/product/cool-running-sugar-scrub/DWS6W4KNRQVUAE2LX3UP5DIG"],
    "https://www.naturalxscentrics.com/product-page/sweet-melanin-1": ["Sweet Melanin Body Butter", "/product/sweet-melanin-body-butter/VSXVEEJPL3S7UUTX5CSNXYCC"],
    "https://www.naturalxscentrics.com/product-page/sweet-melanin": ["Sweet Melanin Sugar Scrub", "/product/sweet-melanin-sugar-scrub/I4MDYQ73GXM47IBFY7BIZKE3"],
    "https://www.naturalxscentrics.com/product-page/hair-oil": ["Hair Oil", "/product/hair-oil/8"],
    "https://www.naturalxscentrics.com/product-page/face-oil-1": ["Face Oil", "/s/shop"],
    "https://www.naturalxscentrics.com/product-page/beard-oil-1": ["Beard Oil", "/product/beard-oil/6"],
    "https://www.naturalxscentrics.com/product-page/4-step-facial-routine": ["Four-Step Daily Facial Kit", "/product/4-step-facial-kit/2BV5FYPG72KM7M3UDNTOUDA7"],
    "https://square.link/u/7cGZEug5": ["Oatmeal Soap", "/s/shop"],
    "https://square.link/u/fQ8yNQql": ["Turmeric Soap", "/product/turmeric-soap/BEZSOFXEJO6TLZB5GO6WSE2Q"],
  };
  const suggestions = [
    ["Four-Step Daily Facial Kit", "/product/4-step-facial-kit/2BV5FYPG72KM7M3UDNTOUDA7", "./assets/shop-facial-care-edu.jpg"],
    ["Hair Oil", "/product/hair-oil/8", "./assets/shop-hair-oil-edu.jpg"],
    ["Oatmeal Soap", "/s/shop", "./assets/soap-oatmeal.jpg"],
    ["30-Day Skin Care Tracker", "/product/30-day-skin-care-tracker/BEDPAEAWLLPQDE5CGYYUNGN5", "./assets/logo.png"],
  ];
  const remember = (name) => { try { const old = JSON.parse(localStorage.getItem(RECENT_KEY)) || []; localStorage.setItem(RECENT_KEY, JSON.stringify([name, ...old.filter((item) => item !== name)].slice(0, 8))); } catch (error) {} };

  document.querySelectorAll("a[href]").forEach((link) => {
    const product = products[link.getAttribute("href")];
    if (!product) return;
    link.href = `${STORE}${product[1]}`;
    link.removeAttribute("target");
    link.removeAttribute("rel");
    link.addEventListener("click", () => remember(product[0]));
  });

  const bag = document.createElement("a");
  bag.className = "floating-cart";
  bag.href = "./you-may-also-like.html";
  bag.innerHTML = "Bag <span aria-hidden=\"true\">&rarr;</span>";
  bag.setAttribute("aria-label", "Review recommendations before viewing your secure cart");
  document.body.appendChild(bag);

  const recommendationRoot = document.querySelector("[data-recommendations]");
  if (recommendationRoot) {
    let recent = [];
    try { recent = JSON.parse(localStorage.getItem(RECENT_KEY)) || []; } catch (error) {}
    recommendationRoot.innerHTML = suggestions.filter(([name]) => !recent.includes(name)).slice(0, 3).map(([name, path, image]) => `<article class="recommendation-card"><img src="${image}" alt="${name}" /><div><p class="eyebrow">A thoughtful add-on</p><h2>${name}</h2><p>Pair it with your current picks to support a more complete care routine.</p><a class="button button-secondary" href="${STORE}${path}">View in unified shop</a></div></article>`).join("");
  }

  const checkoutLinks = document.querySelector("[data-checkout-links]");
  if (checkoutLinks) checkoutLinks.innerHTML = `<a class="checkout-line" href="${STORE}/s/cart"><span><strong>Review your complete order</strong><small>One cart, one secure Square checkout</small></span><span>Open secure cart &rarr;</span></a><a class="checkout-line checkout-line--secondary" href="${STORE}/s/shop"><span><strong>Keep shopping</strong><small>Browse every available product</small></span><span>Visit unified shop &rarr;</span></a>`;

  const legacyCart = document.querySelector("[data-cart-items]");
  if (legacyCart) {
    legacyCart.innerHTML = `<article class="content-panel"><p class="eyebrow">Unified checkout is live</p><h2>Your bag now lives securely in Square.</h2><p>All available products can share one cart and one payment transaction.</p><div class="cta-row"><a class="button button-primary" href="${STORE}/s/cart">Open secure bag</a><a class="button button-secondary" href="./you-may-also-like.html">See recommendations first</a></div></article>`;
    document.querySelector("[data-cart-empty]")?.classList.add("is-hidden");
    document.querySelector("[data-cart-continue]")?.setAttribute("href", "./you-may-also-like.html");
  }
})();
