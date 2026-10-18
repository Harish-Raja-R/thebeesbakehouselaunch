# The Bees Bake House — launch website

Phase 1: a coming-soon home page, plus separate Menu, Our Story, Gallery, Contact and 404 pages. The original logo is preserved. Menu and gallery pages are intentionally a first edition; no checkout, backend or database is included.

## Simple stack
React + Vite + JavaScript, Tailwind CSS v4 with custom CSS, Lucide icons and gentle Framer Motion entrance animation. This is a real Vite multi-page build: each route has its own HTML entry and normal anchor navigation. It does not use an SPA fallback or React Router.

## Run locally
Install Node.js 22 LTS or newer, open this folder in VS Code, then run:

```sh
npm ci
npm run dev
```

Open the localhost URL printed by Vite.

```sh
npm run build
npm run preview
```

The production output is `dist/`.

## Publish on Netlify
Option A — easiest first launch:
1. Extract the supplied package.
2. Open https://app.netlify.com/drop and sign in.
3. Drag the included `dist` folder into the upload area. Upload the production folder, not `src` or the entire project.
4. Open the returned Netlify address and test all navigation, mobile menu and Instagram links.
5. For later updates run `npm ci`, `npm run build`, and upload the updated `dist` folder to the same Netlify project's deployment area.

Option B — automatic updates:
1. Push this project to your own GitHub repository (exclude node_modules, dist, .env and .openai).
2. Import the repository into Netlify.
3. Build command: `npm run build`. Publish directory: `dist`.
4. The supplied netlify.toml configures the custom 404. Normal paths such as `/menu/` resolve to their own index.html. There is no catch-all rewrite to the homepage.

## Connect your purchased domain
The exact domain and registrar have not been supplied, so no DNS records have been changed or guessed.
1. Open your Netlify project and its domain management screen.
2. Add your existing domain and follow the verification/DNS instructions shown for that project.
3. At your registrar, apply the specific records Netlify displays. Preserve existing mail records and unrelated services.
4. Return to Netlify, check DNS status and verify HTTPS provisioning.
5. Test both your root domain and www; select your preferred primary domain.
6. Send your domain and registrar for tailored instructions.

Official references (checked 18 October 2026):
- https://docs.netlify.com/deploy/create-deploys/
- https://docs.netlify.com/manage/projects/add-new-project/
- https://docs.netlify.com/manage/domains/get-started-with-domains/

## Content configuration
`src/config.js` centrally holds the Instagram URL, location, domain and future WhatsApp number. Instagram is the chosen launch contact. WhatsApp is deliberately unconfigured until confirmed. No email, opening times, full address, launch date or countdown has been invented.

The original uploaded logo is `public/assets/original-logo.png`. Its smaller WebP copy preserves its full composition. Other supplied artwork is used in the Gallery. Cake illustrations are SVG, explicitly labelled as illustrations. There are no invented product photographs or reviews.

## SEO when the domain is confirmed
Each entry HTML has its own title, description and Open Graph text. The original logo serves as the favicon. robots.txt is included. A canonical URL, absolute Open Graph image URL and sitemap must use the final domain; these are pending rather than using a fake domain.
Run `node scripts/set-domain.mjs https://YOUR-CONFIRMED-DOMAIN` then `npm run build` to configure them. The 404 page is marked noindex by this script. This does not modify DNS.

## Accessibility and motion
Semantic landmarks, skip link, focus rings, descriptive images, mobile navigation and comfortable touch controls. Reduced-motion disables decorative floating and transition effects. No cursor replacement or sparkle trail obscures content. A saved Midnight Bakery theme is available from the moon button. Below-fold artwork and secondary page code are lazy-loaded.

## Next phase
1. Replace the launch hero with the full bakery homepage when ready.
2. Add verified product photos, prices, portions and lead times to Menu.
3. Expand Our Story with the owner's approved story.
4. Replace Gallery's brand artwork with supplied real bake photographs.
5. Add confirmed WhatsApp ordering, pickup/delivery information, business details and allergen information to Contact.
6. Add ordering or payments only if required later.

The capsule mascot, graduation achievements and campus wall belong to the supplied Sealed with Love reference, not the bakery. This implementation adapts its scrapbook visual style into bee illustrations, taped cards and gentle interaction.

## Validation
Production build and static route/asset/link checks are performed. Browser-based responsive and interaction testing was not available in the provided session; manually verify mobile layout and keyboard navigation before the public domain launch.
