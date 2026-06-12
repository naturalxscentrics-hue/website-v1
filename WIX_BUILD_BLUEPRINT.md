# Natural XScentrics Wix Build Blueprint

This file translates the approved local website prototype into practical Wix
build instructions.

## Build Rule

Use the local files in `website-redesign/current-site/` as the visual and copy
reference. Rebuild pages natively in Wix where possible instead of uploading the
static HTML as the final website.

## Navigation

Recommended live navigation:

1. Home
2. About
3. Services
4. Shop
5. Wellness
6. Media
7. Gift Cards
8. Digital
9. Merch
10. Book & Contact

Before publishing, decide whether `Merch` should stay in the main navigation
while the page is still coming soon.

## Page Build Notes

### Home

- Use `index.html` as the visual reference.
- Preserve the approved hero promise and the line `Care that meets the skin,
  the story, and the routine.`
- Keep cream retail/action cards and dark founder/story moments.

### About

- Use `about.html`.
- Include the Behind the Rainbow section.
- Use the approved rainbow explanation:
  `The rainbow in the Natural XScentrics logo represents God's promise, hope
  after hardship, and the reminder that even in low moments, we are still
  covered, carried, and called forward.`

### Services

- Use `services.html`.
- Use `NXS Facial Care Service`, not `NXS Facial Treatment`.
- Connect service CTAs to Wix Bookings.
- Add or confirm Wix Bookings services for facial care, foot massage and
  exfoliation, hand massage and exfoliation, private self-care events,
  community wellness workshops, and retail activation experiences.

### Shop

- Use `shop.html` and `shop-by-scent.html`.
- Connect product buttons to the exact product links listed in
  `WIX_TRANSFER_CHECKLIST.md`.
- Keep matching Butter + Scrub set buttons routed to `/shop` until dedicated
  bundle products are created.

### Wellness

- Use `wellness.html`.
- Build order requests as a Wix Form named `Wellness Order Request`.
- Keep wellness copy refreshment-focused and avoid medical, detox, or treatment
  claims.

### Media

- Use `media.html`.
- Replace the local video placeholder with a specific Natural XScentrics video,
  channel, playlist, or a deliberate Wix placeholder block.
- Do not use generic YouTube search embeds.

### Gift Cards

- Use `gift-cards.html`.
- Use native Wix eGift Card checkout as the primary customer path.
- Primary CTA: `https://www.naturalxscentrics.com/gift-card`
- Customer-facing amounts should match Wix: `$25`, `$50`, `$100`, `$150`,
  `$200`, plus custom amount.
- Keep the request form only for printable, physical, custom, or assisted gift
  card needs.
- Build the request form as a Wix Form named `Gift Card Assistance Request`.

### Digital Products

- Use `digital-products.html`.
- Build the free 4-Step Glow Guide path as a Wix Form plus Wix Automation:
  form name `4-Step Glow Guide Download`, no checkout required.
- Upload the Glow Guide PDF and use the automation email to deliver the download
  link.
- The 30-Day Skin Care Tracker exists in Wix as a hidden digital product:
  SKU `NXS-DIG-TRACKER-30DAY`, price `$7`, PDF attached, product image saved.
- Checkout and customer download were tested successfully outside the Codex
  in-app browser.
- Do not add a public purchase button until Tiffany intentionally approves
  public launch.
- Keep the page live only as a customer-facing education page until launch.

### Merchandise

- Use `merchandise.html`.
- Keep as coming soon unless actual SKUs are ready.
- Decide whether this belongs in the main nav or footer-only before publishing.

### Events

- Use `events.html`.
- Treat it as an inquiry and upcoming-events page until exact dates are
  approved.
- Do not publish unconfirmed event dates.

### Contact

- Use `contact.html`.
- Build the inquiry section as a Wix Form named `General Inquiry`.
- Route submissions to `NaturalXscentrics@gmail.com`.

## Pre-Publish Gate

Do not publish until:

- All prototype forms are replaced with Wix Forms, Wix Bookings, or Wix Store
  checkout.
- The 4-Step Glow Guide form and delivery automation are tested.
- Mobile layout is checked page by page.
- Gift card flow uses native Wix eGift Card checkout as the primary path, with
  an assistance form for printable, physical, or custom requests.
- Digital tracker remains hidden until Tiffany intentionally approves public
  launch.
- Media video choice is final or intentionally marked as coming soon.
- Merchandise navigation decision is made.
- Events page contains no unapproved dates.
