# Natural XScentrics Website Redesign Handoff

Prepared for: Natural XScentrics Brand Headquarters brand-alignment review  
Source project: `C:\dev\nxs-website`  
Date prepared: June 5, 2026  

## Review Intent

This handoff package moves the current Natural XScentrics website redesign into the Brand Headquarters review process. The receiving project should preserve the current website structure as much as possible while refining the design and copy against the approved Natural XScentrics brand system.

Brand Headquarters alignment requirements:

- Business name must be written exactly as `Natural XScentrics`.
- Current logo remains the approved logo direction.
- Rainbow meaning: God's promise, hope after hardship, and being covered, carried, and called forward.
- Visual direction: black/dark brand moments, cream product/card layouts, grounded brown, botanical green, restrained rainbow accents.
- Fonts: Cinzel Bold for display/headings, Montserrat for support/body text.
- Customer promise: Purposeful natural care designed to help you feel uplifted, empowered, and confident in the way you care for your body.
- Avoid unsupported treatment claims, including acne, blackheads, whiteheads, ingrown hairs, dandruff, hair growth, or medical-style claims.
- Keep product and offer copy retail-ready and aligned with approved product descriptions and cautions.
- Preserve the current site structure unless a change is necessary for brand clarity, customer trust, product education, or compliance.

## 1. Current Site Structure

### Active Page List

Primary local pages:

- `index.html` - Home
- `about.html` - About and Behind the Rainbow
- `services.html` - Services and Wix Bookings handoff
- `shop.html` - Main shop collection guide
- `shop-by-scent.html` - Scent-specific product shopping page
- `wellness.html` - Wellness Bar
- `media.html` - Media and education hub
- `gift-cards.html` - Gift cards
- `digital-products.html` - Digital products
- `merchandise.html` - Merch
- `events.html` - Calendar of events
- `contact.html` - Contact and inquiry pathways
- `juneteenth-sweet-melanin-sale.html` - Sweet Melanin seasonal promotion

Secondary/prototype files:

- `nxs-lifestyle-prototype.html` and `nxs-lifestyle-prototype.css` - earlier lifestyle prototype, not part of the current active build unless Brand Headquarters wants to mine ideas.
- `juneteenth-sweet-melanin-promotion.md` and `juneteenth-sweet-melanin-sale.png` - promo support files.
- `WIX_TRANSFER_CHECKLIST.md` - existing Wix implementation notes and verified links.

### Global Navigation

Current top navigation appears on the primary site pages:

1. Home -> `index.html`
2. About -> `about.html`
3. Services -> `services.html`
4. Shop -> `shop.html`
5. Wellness -> `wellness.html`
6. Media -> `media.html`
7. Gift Cards -> `gift-cards.html`
8. Digital -> `digital-products.html`
9. Merch -> `merchandise.html`
10. Book & Contact -> `contact.html`

Brand/logo lockup in the header:

- Logo image: `assets/logo.png`
- Text: `Natural XScentrics`
- Tagline: `Reset. Renew. Radiate.`

### Page Section Order

#### Home - `index.html`

1. Header/navigation
2. Hero: founder-led skincare and wellness brand statement, hero image, founder quote
3. Three linked metric/experience cards:
   - Feel the Reset -> `events.html`
   - Behind the Rainbow -> `about.html#behind-the-rainbow`
   - Trust the Care -> `media.html`
4. The Experience: three feature cards
5. Inside the Care: split section with care pathway bullets
6. Start Where You Are: six entry cards
7. Footer

Planned user flows from Home:

- Learn the founder story -> About
- Shop scent-led body care -> Shop by Scent
- Find events/workshops/retreats -> Events
- Learn brand education -> Media
- Book services -> Services
- Gift products/services -> Gift Cards

#### About - `about.html`

1. Header/navigation
2. Hero: founder story statement with founder photo/quote
3. Founder Story content card plus supporting image
4. Behind the Rainbow section
5. Footer

Key anchor:

- `#behind-the-rainbow` is linked from the Home page.

#### Services - `services.html`

1. Header/navigation
2. Hero: services positioning and Wix Bookings CTA
3. Signature Services:
   - NXS Facial Treatment
   - Foot Massage & Exfoliation
   - Hand Massage & Exfoliation
4. Wix Bookings appointment request form:
   - Full name
   - Email
   - Preferred service
   - Preferred date
   - Preferred time
   - Booking type
   - Notes
   - Continue to Wix Bookings
5. Footer

Planned booking flow:

- User chooses service path locally.
- User continues to Wix Bookings at `https://www.naturalxscentrics.com/book-online`.

#### Shop - `shop.html`

1. Header/navigation
2. Hero: shop collections message and CTAs
3. Core collections cards:
   - Body Butters
   - Scrubs
   - Soaps
   - Face Kit
   - Oils
   - Wellness Bar
4. Shop By Scent product cards:
   - Love Calls
   - Daydreaming
   - Gentle Woods
   - Sunkissed Glow
   - Cool Running
   - Sweet Melanin
5. Cleansing Bars / Soap Collection
6. Oil Collection / Oil Bar
7. Facial Care / Face Care System
8. Footer

Planned ecommerce flow:

- Main shop educates by category.
- Scent cards route to `shop-by-scent.html` anchors.
- Product-level options route to Wix product pages where exact products exist.
- Bundle/set options route to the Wix shop until exact bundle products are created.

#### Shop By Scent - `shop-by-scent.html`

1. Header/navigation
2. Hero: choose feeling first, then format
3. Scent menu pills:
   - Love Calls
   - Daydreaming
   - Gentle Woods
   - Sunkissed Glow
   - Cool Running
   - Sweet Melanin
4. Individual scent sections, each with:
   - Product image
   - Scent copy
   - Body Butter offer
   - Sugar Scrub offer
   - Butter + Scrub Set offer
5. Footer

#### Wellness - `wellness.html`

1. Header/navigation
2. Hero: Wellness Bar positioning
3. What You Can Order:
   - Ginger Shots
   - Juices
   - Detox Waters
   - Wellness Teas
4. Best For / customer and event use cases
5. How To Order
6. Custom Request form
7. Footer

#### Media - `media.html`

1. Header/navigation
2. Hero: media hub positioning
3. Content pillars
4. Featured video area
5. Media cards:
   - 4-step facial routine
   - Ingredient spotlight series
   - Brand story and behind the scenes
6. Footer

#### Gift Cards - `gift-cards.html`

1. Header/navigation
2. Hero: gift cards positioning
3. Gift tiers/cards:
   - Starter Glow
   - Reset Gift
   - Renew Gift
   - Radiate Gift
4. Gift card request form
5. Best live setup guidance
6. Footer

#### Digital Products - `digital-products.html`

1. Header/navigation
2. Hero: digital products positioning
3. Why this matters
4. Product cards:
   - 4-Step Glow Guide
   - 30-Day Skin Care Tracker
   - Ingredient Education Mini Class
5. Revenue strategy
6. Launch ideas
7. Footer

#### Merchandise - `merchandise.html`

1. Header/navigation
2. Hero: merch positioning
3. Best categories:
   - Signature Logo Tee
   - Care Carry Pouch
   - Glow Tumbler
4. Visual strategy
5. Sales strategy
6. Footer

#### Events - `events.html`

1. Header/navigation
2. Hero: calendar of events
3. Upcoming Experiences:
   - Sweet Melanin Celebration
   - Self-Care Market Day
   - Routine Reset Workshop
4. Event Types
5. Book the Brand
6. Footer

#### Contact - `contact.html`

1. Header/navigation
2. Hero: contact positioning
3. Direct Contact panel
4. Inquiry form
5. Best Uses / professional inquiry pathways
6. Footer

#### Sweet Melanin Seasonal Promotion - `juneteenth-sweet-melanin-sale.html`

1. Standalone flyer layout
2. Juneteenth Glow Sale / Sweet Melanin headline
3. Offer/pricing details
4. Product CTAs:
   - Body Butter
   - Sugar Scrub
   - Shop matching sets

### Ecommerce/Product/Catalog Areas

Main ecommerce surfaces:

- `shop.html`
- `shop-by-scent.html`
- `juneteenth-sweet-melanin-sale.html`
- `gift-cards.html`
- `wellness.html`
- `services.html`

Verified Wix routes already connected:

- Shop: `https://www.naturalxscentrics.com/shop`
- Bookings: `https://www.naturalxscentrics.com/book-online`

Verified product links already connected:

- Love Calls Body Butter: `https://www.naturalxscentrics.com/product-page/love-calls-1`
- Love Calls Sugar Scrub: `https://www.naturalxscentrics.com/product-page/love-calls`
- Daydreaming Body Butter: `https://www.naturalxscentrics.com/product-page/daydreaming`
- Daydreaming Sugar Scrub: `https://www.naturalxscentrics.com/product-page/daydreaming-1`
- Gentle Woods Body Butter: `https://www.naturalxscentrics.com/product-page/gentle-woods-1`
- Gentle Woods Sugar Scrub: `https://www.naturalxscentrics.com/product-page/gentle-woods`
- Sunkissed Glow Body Butter: `https://www.naturalxscentrics.com/product-page/sunkissed-glow-2`
- Sunkissed Glow Sugar Scrub: `https://www.naturalxscentrics.com/product-page/sunkissed-glow`
- Cool Running Body Butter: `https://www.naturalxscentrics.com/product-page/cool-running-1`
- Cool Running Sugar Scrub: `https://www.naturalxscentrics.com/product-page/cool-running`
- Sweet Melanin Body Butter: `https://www.naturalxscentrics.com/product-page/sweet-melanin-1`
- Sweet Melanin Sugar Scrub: `https://www.naturalxscentrics.com/product-page/sweet-melanin`
- Hair Oil: `https://www.naturalxscentrics.com/product-page/hair-oil`
- Face Oil: `https://www.naturalxscentrics.com/product-page/face-oil-1`
- Beard Oil: `https://www.naturalxscentrics.com/product-page/beard-oil-1`
- 4-Step Facial Routine: `https://www.naturalxscentrics.com/product-page/4-step-facial-routine`

Bundle/set buttons currently route to the main Wix shop until exact bundle product pages are created.

## 2. Current Design Direction

### Current Colors in `styles.css`

Current CSS variables:

- `--bg: #020202`
- `--surface: rgba(10, 10, 14, 0.78)`
- `--surface-strong: rgba(255, 255, 255, 0.04)`
- `--panel: rgba(10, 10, 14, 0.78)`
- `--ink: #f5f7fb`
- `--text: #f5f7fb`
- `--muted: #b2b8c7`
- `--line: rgba(255, 255, 255, 0.08)`
- `--lime: #bfd17b`
- `--orange: #ed6239`
- `--cyan: #10a0da`
- `--violet: #8b349a`
- `--blue: #0c60ae`
- `--green: #10ac54`
- `--gold: #e9aa57`

Current direction:

- Dark/black site shell and dark card panels.
- Logo palette colors used as accents.
- Orange/gold gradients on primary CTAs.
- Lime/cyan gradient on nav CTA.
- White logo tile background in the header.
- Some product sections still use dark product cards, which should be reviewed against the approved cream product/card layout direction.

Brand Headquarters alignment target:

- Keep black/dark brand moments.
- Shift product/card-heavy retail areas toward cream product/card layouts where appropriate.
- Add grounded brown and botanical green more intentionally.
- Use rainbow accents with restraint and meaning rather than generic decoration.

### Fonts

Current build:

- Google Fonts: Cinzel and Manrope
- Display/headings: Cinzel
- Body/support: Manrope

Approved brand system:

- Display/headings: Cinzel Bold
- Support/body: Montserrat

Review action:

- Replace Manrope with Montserrat.
- Ensure display headings use Cinzel Bold or comparable weight.
- Confirm letter spacing and all-caps eyebrow styles do not feel too generic or too compressed.

### Visual Style

Current style:

- Dark, editorial, founder-led, polished.
- Large serif headlines.
- Glass/dark cards with soft borders.
- Sticky top navigation with rounded shell when scrolled.
- High-contrast CTAs.
- Product cards use image-forward layouts with rounded containers.
- Homepage balances founder story, care education, and shopping pathways.

Brand review notes:

- Keep the emotional, founder-led feel.
- Make retail/product areas warmer and more grounded.
- Consider cream cards for product education and buying paths.
- Keep dark moments for hero/story sections.
- Use rainbow accents as meaning-driven story details, especially near Behind the Rainbow.

### Backgrounds

Current backgrounds:

- Overall site uses dark layered radial gradients.
- Hero and card sections use dark translucent surfaces.
- Product images sit inside dark rounded cards.
- Sweet Melanin promo is a standalone flyer layout.

Review action:

- Confirm whether full-site dark mode should remain or whether shop/product sections should be cream/card-based.
- Introduce grounded brown/botanical green where Brand Headquarters requires more warmth.

### Buttons

Current button styles:

- `.button-primary`: gold/orange gradient, dark text.
- `.button-secondary`: transparent/dark with light border and light text.
- `.nav-cta`: lime/cyan gradient pill.
- Product scent options: rounded dark rows with featured orange outline.

Review action:

- Align CTA palette with approved brand hierarchy.
- Decide whether primary CTA should remain orange/gold or move to botanical green/grounded brown/cream.
- Confirm button copy is retail-ready and compliant.

### Image/Photo Direction

Current image direction:

- Founder outdoor/garden images.
- Product education photos for body butters, soaps, oils, facial care.
- Logo displayed in header and footer.
- Sweet Melanin promo uses a flyer-style product sale visual.

Primary assets:

- `assets/logo.png`
- `assets/home-founder-garden.jpg`
- `assets/home-hero-botanical.jpg`
- `assets/founder-portrait.jpg`
- `assets/founder-rainbow.jpg`
- `assets/founder-studio.jpg`
- `assets/about-founder-bts.jpg`
- `assets/services-headshot.png`
- `assets/shop-hero-botanical.png`
- `assets/bb-love-calls-edu.jpg`
- `assets/bb-daydreaming-edu.jpg`
- `assets/bb-gentle-woods-edu.jpg`
- `assets/bb-sunkissed-glow-edu.jpg`
- `assets/bb-cool-running-edu.jpg`
- `assets/bb-sweet-melanin.jpg`
- `assets/soap-gentle-woods.jpg`
- `assets/soap-rose-gold.jpg`
- `assets/soap-oatmeal.jpg`
- `assets/shop-hair-oil-edu.jpg`
- `assets/shop-facial-care-edu.jpg`

Review action:

- Keep current logo.
- Confirm photo color grading against approved dark/cream/grounded/botanical direction.
- Review any product image cropping and white/cream product card backgrounds for Wix implementation.

### Icons, Patterns, Decorative Elements

Current build does not use a formal icon library. Decorative language is mostly:

- Colored labels/tags.
- Gradient buttons.
- Dark glass cards.
- Rounded panels.
- Product photos.
- Logo palette accents.

Review action:

- If icons are introduced later, keep them restrained and functional.
- Use rainbow accents sparingly and with story connection.

## 3. Current Copy

The current HTML files remain the canonical copy source. Below is a page-by-page copy inventory of the main headlines, subheads, CTAs, product/category copy, footer intent, and claims/benefit language to review.

### Global Header Copy

- Brand: `Natural XScentrics`
- Tagline: `Reset. Renew. Radiate.`
- Nav: `Home`, `About`, `Services`, `Shop`, `Wellness`, `Media`, `Gift Cards`, `Digital`, `Merch`, `Book & Contact`

### Home Copy - `index.html`

Hero:

- Eyebrow: `A founder-led skincare and wellness brand born from healing, purpose, and faith`
- H1: `Natural XScentrics was built from a personal journey toward gentle care, deeper purpose, and real healing.`
- CTA: `Meet the Woman Behind the Brand`
- CTA: `Shop by Scent`
- Quote: `"Sometimes your purpose is hidden inside the very thing you had to survive."`
- Attribution: `Tiffany Palmer, founder of Natural XScentrics`

Experience strip:

- `Feel the Reset` / `Join our community as we feel the reset through events, workshops, and self-care retreats.`
- `Behind the Rainbow` / `Every part of this brand has a story. See the story behind the rainbow.`
- `Trust the Care` / `Ingredient philosophy, founder perspective, and skincare education come forward first.`

The Experience:

- Eyebrow: `The Experience`
- H2: `This is care that speaks to the skin, the mood, and the woman becoming.`
- Card: `Daily care becomes a softer, more intentional moment`
- Card body: `Products, services, and wellness experiences are framed around reset, renewal, and confidence.`
- Link: `Explore the care`
- Card: `Founder presence makes the brand feel warm and personal`
- Card body: `The website keeps Tiffany's voice and lived experience close to the brand's product education.`
- Link: `Meet the founder`
- Card: `Natural ingredients become part of the emotional story`
- Card body: `Ingredient choices, color, scent, and ritual language all work together to create trust.`
- Link: `Experience the education`

Inside the Care:

- Eyebrow: `Inside the Care`
- H2: `Guide visitors through what it feels like to care for themselves with Natural XScentrics.`
- Bullets:
  - `Scent-led shopping that helps customers choose based on mood and moment.`
  - `Service booking for facials, foot care, hand care, workshops, and private events.`
  - `Wellness Bar ordering for ginger shots, juices, detox waters, and teas.`
  - `Media and education pathways for product knowledge and founder-led learning.`
- Side panel eyebrow: `Brand promise`
- Side panel copy: `Every page should feel like a calm invitation into care, not just a place to transact.`

Start Where You Are:

- H3: `Shop by Scent` / `Choose body butter, sugar scrub, or a matching set by fragrance family.` / `Choose a scent`
- H3: `Shop the Care Corner` / `Browse product categories, oils, soaps, face care, and restock options.` / `Enter the shop`
- H3: `Book an Experience` / `Schedule facials, hand care, foot care, events, or workshops.` / `Book services`
- H3: `Visit the Wellness Bar` / `Order fresh wellness blends for everyday reset or special gatherings.` / `Explore wellness`
- H3: `Learn the Method` / `Watch tutorials, ingredient education, and founder-led content.` / `Watch and learn`
- H3: `Gift the Feeling` / `Give products, services, or wellness moments without guessing what they need.` / `Start gifting`

Footer:

- `A founder-led skincare and wellness brand built from healing, purpose, and faith.`
- Links: `Shop`, `Services`, `Wellness`, `Media`, `Contact`, phone, email, live site.

### About Copy - `about.html`

Hero:

- Eyebrow: `About the brand`
- H1: `Natural XScentrics was born from pain, purpose, science, and faith.`
- Founder quote panel includes: `Natural XScentrics is more than a skincare brand to me. It is a reminder that purpose can come from pain, that faith requires movement, and that confidence is built one step at a time.`
- Attribution: `Tiffany Palmer`

Founder Story:

- Eyebrow: `Founder story`
- H2: `Built from lived pain, a mother's turning point, and a chemist's understanding of ingredients.`
- Body: `As a child, Tiffany lived with a severe skin condition that caused painful outbreaks and open sores on the palms of her hands and the bottoms of her feet. There were many doctor's visits, many questions, and a lot of trial and error, but not many clear answers.`
- Bullet: `In 2017, after her daughter was born, Tiffany saw signs that her daughter might face some of the same skin struggles.`
- Bullet: `That moment pushed her to use what she had learned as a chemist and create care that felt gentler, more personal, and more intentional.`
- Bullet: `Natural XScentrics grew from that turning point: a brand rooted in survival, motherhood, faith, and practical ingredient knowledge.`

Behind the Rainbow:

- Eyebrow: `Behind the Rainbow`
- H2: `The rainbow is a personal reminder of God's promise, presence, and protection.`
- Body: `For Tiffany, the rainbow carries the story of God's promise after Noah and the flood: a promise that the earth would not be destroyed by flood again. Inside Natural XScentrics, that meaning became personal: no matter how low life gets, God still has her back.`
- Body: `The rainbow in the brand is not just color. It is a reminder that she is covered, carried, and called forward. It represents hope after hardship, beauty after survival, and the promise that there is still purpose on the other side of pain.`
- Cards:
  - `God's promise` / `A reminder that faith can become part of the way a brand speaks, comforts, and invites people forward.`
  - `Personal covering` / `The rainbow reflects Tiffany's belief that even in low places, she is not abandoned or alone.`
  - `Hope after storms` / `Color becomes a visual symbol of renewal, resilience, and the beauty that can follow hard seasons.`
  - `Brand witness` / `The rainbow connects the logo to a deeper story of purpose, faith, and care.`

Footer:

- `A story-led brand shaped by lived experience, ingredient knowledge, and a deeper promise.`

### Services Copy - `services.html`

Hero:

- Eyebrow: `Schedule services`
- H1: `Book treatments that extend the Natural XScentrics care experience beyond the jar.`
- CTA: `Book with Wix`
- CTA: `Ask about private events`

Signature services:

- Eyebrow: `Signature services`
- H2: `Choose the service that gives your skin, hands, or feet the care they need.`
- `NXS Facial Treatment` / `A relaxing facial experience that supports skin care education, product pairing, and a more intentional routine.`
- `Foot Massage & Exfoliation` / `A calming foot care service focused on softness, relaxation, and reset.`
- `Hand Massage & Exfoliation` / `A gentle hand care experience that supports smoother-feeling skin and a quiet moment of care.`

Booking section:

- Eyebrow: `Wix Bookings`
- H2: `Choose your experience, then continue to Wix Bookings.`
- Form labels include `Full name`, `Email`, `Preferred service`, `Preferred date`, `Preferred time`, `Booking type`, `Notes`.
- Booking type options include `In-studio`, `Private event`, `Workshop`, `Retail activation`.
- CTA: `Continue to Wix Bookings`

Footer:

- `Service booking should feel calm, clear, and ready for Wix Bookings integration.`

### Shop Copy - `shop.html`

Hero:

- Eyebrow: `Shop collections`
- H1: `You don't need more products you just need consistency.`
- CTAs: `Shop by scent`, `Explore wellness`, `Gift the brand`, `Ask about wholesale`

Core collections:

- `Body Butters` / `Nourishing moisture blends featuring shea butter and skin-loving oils for daily softness.` / `Shop this collection`
- `Scrubs` / `Sugar and salt exfoliation designed to smooth texture and reveal brighter, softer skin.` / `Shop this collection`
- `Soaps` / `Gentle cleansing bars that support a simple daily routine without overcomplicating care.` / `Shop this collection`
- `Face Kit` / `The signature 4-step daily facial routine for consistent, approachable skincare habits.` / `Shop this collection`
- `Oils` / `Nourishing oil blends that support scalp care, beard care, and softer everyday maintenance.` / `Shop this collection`
- `Wellness Bar` / `Ginger shots, juices, detox waters, and teas that extend the brand into everyday nourishment.` / `Order from wellness`

Shop By Scent cards:

- `Love Calls` / `Soft, romantic moisture with a warm pink presentation that feels inviting and giftable.`
- `Daydreaming` / `A calming blue-toned scent story that brings a light, airy mood to the collection.`
- `Gentle Woods` / `A grounded, wood-inspired option that gives the body butter lineup a soothing natural balance.`
- `Sunkissed Glow` / `A bright citrus-forward spotlight that adds warmth, freshness, and golden energy to the assortment.`
- `Cool Running` / `A crisp, refreshing addition to the collection with a cool-toned look that feels clean and uplifting.`
- `Sweet Melanin` / `A warm, radiant scent story created to celebrate glow, softness, and confident everyday care.`

Repeated scent options:

- `Body Butter Only` / `Shop the butter`
- `Sugar Scrub Only` / `Shop the scrub`
- `Butter + Scrub Set` / `Shop the full set`

Soap:

- Heading: `Cleansing Bars`
- `Soap Collection` / `Gentle cleansing bars with a natural feel, ideal for daily use, gifting, and simple skin-supporting routines.`
- Options: `Single Bars`, `Soap Bundle`, `Soap + Body Care Pairing`

Oils:

- Heading: `Oil Collection`
- `Oil Bar` / `Lightweight nourishing oils made to support moisture, softness, scalp comfort, and polished grooming care.`
- Options: `Hair Oil`, `Face Oil`, `Beard Oil`, `Oil Bundle`

Facial:

- Heading: `Facial Care`
- `Face Care System` / `A daily care lineup that supports cleansing, toning, soothing, and moisture in one guided routine.`
- Option: `Full Face Kit` / `Order the complete system`

Footer:

- `Collection-led shopping built for products, gifting, and future wholesale growth.`

### Shop By Scent Copy - `shop-by-scent.html`

Hero:

- Eyebrow: `Shop by scent`
- H1: `Choose the feeling first, then pick your perfect body care format.`
- Intro: `This page turns each fragrance into a mini collection with three easy paths: body butter only, sugar scrub only, or the matching body care set.`
- CTA: `Back to collections`
- CTA: `Need help choosing?`
- Scent menu: `Love Calls`, `Daydreaming`, `Gentle Woods`, `Sunkissed Glow`, `Cool Running`, `Sweet Melanin`

Scent sections:

- `Love Calls` / `Soft, romantic, and inviting. A warm scent story for customers who want moisture with a little sweetness and glow.`
- `Daydreaming` / `Light, airy, and soothing. A fresh-feeling scent for customers who want something calm and uplifting.`
- `Gentle Woods` / `Grounded, smooth, and balanced. A more natural, wood-inspired profile for customers who love soft earthy notes.`
- `Sunkissed Glow` / `Bright, warm, and sunny. A cheerful citrus-forward option for customers who want a fresh pop of energy.`
- `Cool Running` / `Crisp, refreshing, and clean. A cool-toned scent for customers who like their body care to feel energizing and light.`
- `Sweet Melanin` / `Warm, radiant, and celebratory. A glow-forward scent for customers who want body care that feels soft, confident, and special.`

Offer copy pattern:

- Body Butter: daily moisture / rich moisture / scent finish.
- Sugar Scrub: smoothing texture / brighter, smoother skin feel / layering scent.
- Butter + Scrub Set: complete scent experience with exfoliation and moisture together.
- CTAs: `Shop body butter`, `Shop sugar scrub`, `Shop set on Wix`, `Call to order`, `Ask a question`

Footer:

- `Scent-led shopping that makes it easier to choose the butter, the scrub, or the full body care pairing.`

### Wellness Copy - `wellness.html`

Hero:

- Eyebrow: `Wellness Bar`
- H1: `Bring the care inward with fresh wellness blends made to refresh and restore.`
- CTAs: `Place a wellness order`, `Call to order`

What You Can Order:

- H2: `Choose the kind of wellness support your body is craving today.`
- `Ginger Shots` / `Small but powerful wellness shots for customers who want a quick reset.`
- `Juices` / `Fresh juice blends that can support everyday refreshment, events, and wellness add-ons.`
- `Detox Waters` / `Infused waters designed for hydration, presentation, and simple refreshment.`
- `Wellness Teas` / `Warm tea blends for customers who want a slower, softer wellness moment.`

Other sections:

- `Best For` / `Wellness orders can support both everyday customers and special events.`
- `How To Order` / `Keep the first version simple, personal, and easy to fulfill.`
- `Custom Request` / `Take wellness orders in a way that still feels boutique and personal.`
- CTA: `Send wellness request`

Footer:

- `Wellness Bar ordering for fresh, custom, and event-friendly care extensions.`

### Events Copy - `events.html`

Hero:

- Eyebrow: `Calendar of Events`
- H1: `Find the next Natural XScentrics reset, pop-up, workshop, or wellness experience.`
- CTAs: `Invite NXS to an event`, `Ask about private events`

Upcoming Experiences:

- H2: `Plan your next moment of skincare, wellness, and community care.`
- `Sweet Melanin Celebration` / `A seasonal product spotlight and community-centered care moment.`
- `Self-Care Market Day` / `A pop-up shopping experience with body care, wellness orders, and founder presence.`
- `Routine Reset Workshop` / `A small-group education moment for product use, care habits, and routine confidence.`

Other sections:

- `Event Types` / `Natural XScentrics can show up in more than one way.`
- `Book the Brand` / `Planning a gathering that needs a softer care experience?`
- CTA: `Start an event request`

Footer:

- `Event pathways for workshops, pop-ups, private care moments, and community-centered reset.`

### Media Copy - `media.html`

Hero:

- Eyebrow: `Media hub`
- H1: `Give your videos, education, and founder presence a real home.`

Sections:

- Eyebrow: `Content pillars`
- Eyebrow: `Featured video area`
- H2: `A ready-made space for your channel or hero tutorial.`
- Cards:
  - `How to use the 4-step facial routine`
  - `Ingredient spotlight series`
  - `Brand story and behind the scenes`

Footer:

- `Media, education, and founder-led content that can grow with the brand.`

### Gift Cards Copy - `gift-cards.html`

Hero:

- Eyebrow: `Gift cards`
- H1: `Make gifting easy for products, services, and self-care moments.`

Gift cards:

- `Starter Glow`
- `Reset Gift`
- `Renew Gift`
- `Radiate Gift`

Form:

- Eyebrow: `Gift card request`
- H2: `Request a gift card`
- CTA: `Continue to checkout`

Best live setup:

- H2: `How to make this page sell smoothly`

Footer:

- `Gift card flow for products, services, and future Wix/Shopify checkout.`

### Digital Products Copy - `digital-products.html`

Hero:

- Eyebrow: `Digital products`
- H1: `Turn your expertise into downloadable value.`

Products/ideas:

- `4-Step Glow Guide`
- `30-Day Skin Care Tracker`
- `Ingredient Education Mini Class`
- `Revenue strategy` / `Use digital products to deepen every other page.`
- `Launch ideas` / `Best first digital products`

Footer:

- `Digital education products can expand the brand beyond physical inventory.`

### Merchandise Copy - `merchandise.html`

Hero:

- Eyebrow: `Merchandise`
- H1: `Expand the brand with wearable and giftable merch.`

Products/ideas:

- `Signature Logo Tee`
- `Care Carry Pouch`
- `Glow Tumbler`
- `Visual strategy` / `Merch should feel like an extension of the logo.`
- `Sales strategy` / `Best use cases for this page`

Footer:

- `Merch strategy for future apparel, accessories, and brand extensions.`

### Contact Copy - `contact.html`

Hero:

- Eyebrow: `Contact`
- H1: `Reach Natural XScentrics for orders, services, wholesale, events, and media.`

Contact:

- Eyebrow: `Direct contact`
- Phone: `803-940-6837`
- Email: `NaturalXscentrics@gmail.com`
- Website: `www.naturalxscentrics.com`

Inquiry:

- Eyebrow: `Inquiry form`
- H2: `General, wholesale, media, or event inquiry`
- CTA: `Send inquiry`

Best uses:

- Eyebrow: `Best uses`
- H2: `Professional inquiry pathways`

Footer:

- `Direct contact and inquiry routing for every part of the brand ecosystem.`

### Sweet Melanin Promotion Copy - `juneteenth-sweet-melanin-sale.html`

- Eyebrow: `Juneteenth Glow Sale`
- H1: `Sweet Melanin`
- Product CTAs: `Body Butter`, `Sugar Scrub`, `Shop matching sets`

## 4. Technical Details

### Framework/Platform

Current build is a static HTML/CSS/JavaScript site.

- No React/Vue framework.
- No build system required.
- Intended to be rebuilt/transferred into Wix as native Wix pages, using the local build as structure and visual reference.

### Folder/File Structure

Key files:

- `index.html` - Home
- `about.html` - About and rainbow story
- `services.html` - Services/booking
- `shop.html` - Main shop
- `shop-by-scent.html` - Product/scent landing page
- `wellness.html` - Wellness ordering
- `events.html` - Calendar/events
- `media.html` - Media hub
- `gift-cards.html` - Gift cards
- `digital-products.html` - Digital products
- `merchandise.html` - Merch
- `contact.html` - Contact
- `juneteenth-sweet-melanin-sale.html` - Promo flyer page
- `styles.css` - Main shared styles
- `script.js` - Header scroll state, active nav, mobile menu
- `assets/` - logo, founder images, product images, event image
- `WIX_TRANSFER_CHECKLIST.md` - verified Wix routes, product links, Wix implementation tasks

Non-site support folders currently present:

- `scripts/` - utility scripts from other work
- `finance_statements/` - unrelated finance materials, should not be considered part of website handoff
- `outputs/` - unrelated generated outputs
- `NXS Summer Camp Flyers/` - related brand/flyer work but not part of active website structure

### How to Preview Locally

Option 1: open files directly:

- Open `C:\dev\nxs-website\index.html` or another HTML file in a browser.

Option 2: run a local static server from the repo root:

```powershell
python -m http.server 5173 --bind 127.0.0.1
```

Then preview:

- `http://127.0.0.1:5173/index.html`
- `http://127.0.0.1:5173/shop.html`

If Python points to a different install in Codex, the prior working runtime was:

```powershell
C:\Users\hacke\.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe -m http.server 5173 --bind 0.0.0.0
```

### Dependencies / Build Commands

No install or build command is required.

External dependencies loaded by the pages:

- Google Fonts: Cinzel and Manrope currently
- Brand Headquarters should swap Manrope to Montserrat

## 5. What Should Stay Intact

Preserve unless there is a strong brand, customer trust, product education, or compliance reason to change:

- Overall page map and navigation structure.
- Home flow: hero -> three story/action links -> experience/value cards -> education/care pathway -> entry cards.
- About flow: hero -> founder story -> Behind the Rainbow.
- Behind the Rainbow anchor and meaning.
- Services flow into Wix Bookings.
- Shop page category-led organization.
- Shop By Scent page as a separate focused ecommerce landing page.
- Scent product structure: body butter, sugar scrub, and set/bundle pathways.
- Verified Wix product links.
- Wellness page as an ordering/event extension, even if copy needs compliance refinement.
- Events page as the destination for Feel the Reset.
- Media page as the destination for Trust the Care.
- Contact page as the catch-all professional inquiry hub.
- Current logo direction and brand name spelling.
- Founder-led, faith-aware, personal story tone.

## 6. What Needs Brand, Copy, and Compliance Review

### Brand Alignment Review

Review these areas against Brand Headquarters decisions:

- Current body font is Manrope, but approved support/body font is Montserrat.
- Current color system is heavily black/dark with bright logo-palette accents; product/card retail areas may need more cream, grounded brown, and botanical green.
- Current rainbow/color story appears in copy and logo palette, but visual accents may need to become more restrained and intentional.
- Nav CTA currently uses lime/cyan gradient; confirm against approved CTA palette.
- Product cards currently sit on dark surfaces; approved direction calls for cream product/card layouts in retail areas.
- Some page headings are highly editorial and emotional; confirm balance between emotional storytelling and retail clarity.

### Copy Review

Copy that may need refinement:

- `Natural XScentrics was built from a personal journey toward gentle care, deeper purpose, and real healing.`
- `This is care that speaks to the skin, the mood, and the woman becoming.`
- `You don't need more products you just need consistency.`
- `Bring the care inward with fresh wellness blends made to refresh and restore.`
- `Choose the kind of wellness support your body is craving today.`
- `Turn your expertise into downloadable value.`
- `Expand the brand with wearable and giftable merch.`

Potential action:

- Replace or tune copy toward the approved customer promise: `Purposeful natural care designed to help you feel uplifted, empowered, and confident in the way you care for your body.`
- Make product and offer copy more retail-ready.
- Ensure the About/Rainbow language is faithful, warm, and clear without becoming too long for the page.

### Compliance Review

Avoid unsupported treatment claims. Review and soften any copy that could imply treatment, cure, or medical benefit.

Current copy to review carefully:

- `real healing`
- `severe skin condition`
- `painful outbreaks and open sores`
- `NXS Facial Treatment`
- `gives your skin, hands, or feet the care they need`
- `supports skin care education`
- `smoother-feeling skin`
- `smooth texture`
- `reveal brighter, softer skin`
- `daily facial routine`
- `supports cleansing, toning, soothing, and moisture`
- `scalp comfort`
- `support scalp care`
- `refresh and restore`
- `wellness support your body is craving`
- `detox waters`
- Any direct product descriptions that could be interpreted as treating acne, blackheads, whiteheads, ingrown hairs, dandruff, hair growth, or medical conditions.

Recommended compliance direction:

- Use cosmetic/retail phrasing: softens, moisturizes, refreshes, polishes, supports a care routine, helps skin feel smoother, helps you feel confident.
- Avoid disease/condition language in product benefit copy.
- If personal story references health hardship, frame it as founder story, not product efficacy.
- Add product cautions where approved by Brand Headquarters.

### Product/Catalog Review

Needs review:

- Product descriptions should be aligned with approved product descriptions and cautions.
- Bundle/set buttons currently route to `/shop`; create exact Wix bundle product pages if sets are real SKUs.
- Confirm Sweet Melanin placement as a standard scent vs seasonal spotlight.
- Confirm all product images are approved for use and cropped consistently.
- Confirm `Manly Essence Bar Soap` catalog visibility/out-of-stock decision from `WIX_TRANSFER_CHECKLIST.md`.

### Wix Transfer Review

Needs review:

- Rebuild as native Wix pages or decide whether to embed/custom-code certain sections.
- Recreate anchors, especially `about.html#behind-the-rainbow`.
- Connect Wix Bookings services.
- Confirm all ecommerce links after Wix page creation.
- Review mobile layouts in Wix Editor.
- Confirm forms should be native Wix Forms, Wix Bookings, or email-based.

## Recommended Receiving-Project Instructions

Use this handoff as the website's current-state source package. Start by reviewing `index.html`, `about.html`, `shop.html`, `shop-by-scent.html`, `services.html`, and `styles.css`. Preserve the structure and user flows unless a change is necessary for brand clarity, customer trust, product education, or compliance. Then revise visual styling and copy to match the approved Natural XScentrics Brand Headquarters system.

