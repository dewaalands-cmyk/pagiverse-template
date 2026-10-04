# Pagiverse Templates

Pagiverse Template Standard v1 templates for restaurant and hospitality websites.

## Available templates

- Root: Casa Braci Heritage, a bilingual dark editorial template for an Italian fine dining and steakhouse website in Bandung.
- `templates/rona-nusa/`: Rona Nusa, a bilingual bright cinematic template for a premium modern Indonesian restaurant in Yogyakarta.
- `templates/dapur-pesisir/`: Dapur Pesisir, a bilingual tropical-modern template for a warm, casual family seafood restaurant in Kuta, Bali.

The Casa Braci files remain at the repository root for backward compatibility with existing integrations. New templates use a dedicated folder under `templates/`.

## Casa Braci contents

- `template.json` defines the Pagiverse Standard v1 contract, editable fields, theme tokens, navigation, arrays, and section visibility.
- `index.html`, `menu.html`, `story.html`, `gallery.html`, and `visit.html` provide the multi-page experience.
- `style.css` contains the responsive editorial visual system.
- `script.js` handles safe template data hydration, bilingual switching, responsive navigation, focal points, and WhatsApp reservation links.
- `thumbnail.webp` is the Pagiverse template thumbnail.

## Use

Serve the repository root for Casa Braci, or serve an individual folder under `templates/` for another template. Templates have no framework runtime or external dependency.
