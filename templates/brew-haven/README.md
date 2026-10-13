# Brew Haven Coffee

Indonesian one-page coffee template following the supplied dark coffee reference. All six photographs were generated with the built-in ImageGen tool and optimized to local WebP files. Cormorant Garamond and Allura are locally hosted under their OFL licenses. Icons are local Tabler outline SVGs under MIT.

## Editing

`template.json` declares 63 fields, editable image alt/focal metadata, four to twelve menu entries (zero also supported), section visibility, footer/help copy, contacts, SEO and navigation labels. Theme colors and font families are protected to preserve contrast and the reference composition. Empty social links are hidden. `business.logo` appears in the footer. Studio receives `pagiverse:ready` and can send same-origin `pagiverse:config`; the template acknowledges `pagiverse:applied`.

Demo prices are Rp35.000 / Rp32.000 / Rp38.000 / Rp24.000. Contact details, address, policy copy and benefit offers are examples. Newsletter submission is delegated to `window.PagiverseForms.submit`; without that integration, the UI says it has not submitted.

## Explicit Standard 1 exception

The user explicitly requested a demo shopping cart with quantity changes and totals, and no checkout. Standard 1 normally permits catalogs only. `extensions.demoCart` records this user-requested exception; this template must not be represented as strict Standard 1 PASS. The Studio production sync validator accepts its schema/runtime protocol, but that acceptance does not override the catalog-only specification.

Cart quantities are stored locally, capped at 99 per item, recalculated from current menu prices, and cleared when products are removed from configuration. No orders, payments, backend commerce, customer scripts or payment credentials exist.

## Visual decisions

Black/tan with espresso surfaces and amber photography follows the supplied reference. Cormorant Garamond echoes its editorial display typography; Allura provides the handwritten eyebrows. Desktop preserves the left copy/right coffee hero, split story, four product cards, benefit strip and four-column footer. Mobile stacks the story and provides a horizontal menu carousel. Image/card radii are 14px and buttons 9px, with circles reserved for compact icon controls. Motion communicates warm fresh coffee, section hierarchy and interaction feedback; reduced-motion disables it.

## Verification

Browser QA: 360, 390, 768 and 1280px; no document overflow or broken images. Cart additions, decreases, removal, totals and reload persistence; menu/story dialogs; reduced motion; repeated iframe configuration; empty/max menu arrays; optional sections; plain text rendering and unsafe image URL rejection. Studio production sync and Next.js production build passed in an isolated QA checkout.

Asset generation prompts are in `ASSET-PROMPTS.md`.
