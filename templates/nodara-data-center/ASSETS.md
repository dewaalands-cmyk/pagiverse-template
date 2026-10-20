# NODARA image assets

Created on 20 October 2026 for the local NODARA demo data-center website.

## Provenance and use

All facility, hardware, network and engineer photographs are AI-generated concept images created using the built-in image_gen tool. No Sanity photographs, logo, proprietary fonts or footage were copied. These images do not document an actual NODARA facility or substantiate any facility, uptime, certification or operational claim. The company and its content are replaceable demo material.

There is no third-party stock-photo license to track for these generated images. Original generated PNGs remain in the Codex generated_images directory. Selected outputs have been copied into the project and converted to WebP with the already installed Sharp dependency. Conversion and the alternate hardware crop did not introduce new visual content.

## Selected deliverables

| File in assets | Dimensions | Bytes | Subject |
| --- | --- | ---: | --- |
| server-aisle.webp | 1600 × 900 | 174,492 | Dark server aisle with orange practical light; hero poster |
| rack-detail.webp | 1200 × 675 | 74,164 | Close server chassis and perforated rack fronts |
| fiber-network.webp | 1200 × 675 | 83,862 | Physical orange fiber cables and patch panel |
| operations.webp | 1200 × 675 | 93,654 | Engineer checking a rack; selected corrected version |
| cloud-hardware.webp | 1200 × 675 | 74,928 | Alternate close crop of the generated rack-detail photograph |

The original operations generation contained a small unwanted gray mark at the top-right. A targeted built-in image edit removed it, and the corrected photograph was visually inspected before selection. The site uses the selected image at operations.webp; operations-clean.webp is an identical archival copy.

## Generation prompts

### server-aisle.webp

Use case: photorealistic-natural. Asset type: cinematic 16:9 wide hero photo for an Indonesian data-center company demo, NODARA. Scene: a credible modern colocation server aisle, dark black server rack fronts as dense architectural monoliths, precise mesh and hardware, one-point perspective. Composition: wide architectural photography, foreground left third is quiet dark rack surface and negative space suitable for white headline; visible aisle and a distant restrained orange light near center-right, otherwise neutral black, graphite and white. Camera is level and calm, tactile real metal, realistic cable management, sophisticated editorial photograph with deep but readable shadows. Lighting: one orange corridor practical light, subtle white equipment indicators. No text, no logos, no numbers, no watermark, no holograms, no floating UI, no science-fiction, no colored neon rainbow. The image is a concept visualization, not an identified real facility.

### rack-detail.webp

Use case: photorealistic-natural. Asset type: horizontal 16:9 editorial close-up photograph for data-center website. Scene: credible black server rack fronts and precise metallic mesh, vents, port geometry and hardware, shot close with a shallow but usable depth of field. Composition: strong horizontal architecture of stacked server chassis, quiet black negative space at left edge, tactile gunmetal perforation in sharp focus at center-right, restrained tiny white LEDs and a single orange port light. Neutral black and warm gray, sober industrial character. Real contemporary server hardware, no invented machine components. No text, labels, logos, numbers, watermark, glass holograms, sci-fi, blue neon or rainbow LEDs.

### fiber-network.webp

Use case: photorealistic-natural. Asset type: horizontal 16:9 macro editorial photograph of network infrastructure. Scene: physical fiber-optic patch panel in a data-center rack, a controlled bundle of orange fiber cables with realistic small optical connectors fitted into a dark metal panel. Composition: close photograph, angled view, clear real cables sweeping across frame with orderly bend radius, panel on right, black negative space on left, tactile precise physical equipment. Light: soft white overhead task light and muted warm orange cable color, off-black background, restrained palette, no dramatic glow. No readable labels, no logos, no text, no numbers, no watermark, no floating network illustrations, no AI circuit fantasy.

### operations.webp

Use case: photorealistic-natural. Asset type: horizontal 16:9 editorial photograph for data-center operations website. Scene: an engineer in neutral charcoal workwear viewed from side and back, carefully checking a server rack in a credible modern data-center aisle. Practical natural working posture, no identifiable face emphasis and no posing or stock-photo smile. Include enough environment to show black server cabinets, sensible cable management and overhead cooling infrastructure. Composition: person at right third, generous dark aisle context at left, calm level photography, realistic human proportions and hands. Lighting: neutral white ceiling task light with one subtle orange practical indicator, warm black/white palette. No text, no logo, no brand, no watermark, no hologram, no science fiction, no safety certification signs.

Targeted correction prompt:

Use case: precise-object-edit. Edit only the small faint gray logo-like or watermark-like graphic in the extreme top-right corner of this photograph: remove that mark and reconstruct the underlying plain black server-rack mesh naturally. Keep every other pixel's appearance as close as possible, including the engineer, face/body, hands, rack equipment, composition, lighting, color, crop and resolution. No text, logo or watermark anywhere.

## Visual QA

Each final WebP was loaded with view_image. The hero has usable dark negative space at the left, an actual perspective aisle and restrained orange light. Equipment remains physical and photographic. The corrected operations image has a practical side/back working posture; the selected version contains no added logo or top-right mark. The cloud image is deliberately another crop of the same physical hardware, not a fictional cloud diagram.

## Motion asset

The silent local hero montage is rendered separately from the generated stills. It is a reconstruction using slow camera movement across still photos and hard cuts; it is not Sanity's source footage and not actual NODARA facility video.

- Output: assets/hero-montage.mp4, 1,299,633 bytes.
- SHA-256: CE3CFED046391316981213D4E97E926D207976BE7370C38A240451BAE1E36122.
- Duration: 16.00 seconds, 384 frames, 1280 × 720, 24 fps, square pixels.
- Encoding: H.264 High, yuv420p, CRF 24, fast preset, MP4 faststart; no audio stream.
- Four 4-second shots: server aisle → rack detail → fiber network → operations.
- Each shot uses a slow centered zoom from 1.00 to 1.05; transitions are hard cuts. The loop cuts from the final operations shot back to the opening aisle shot.
- Build dependency: ffmpeg-static 5.3.0 installed locally under .local-tools only, binary release b6.1.1. Dependency and binary are not website deliverables.
- QA: FFmpeg decoded all 384 frames successfully; duration, frame rate, pixel format and absence of audio were checked. Frames at 1, 5, 9 and 13 seconds were extracted and visually inspected. Browser playback and reduced-motion behavior are verified at page level separately.

## Selected image integrity (SHA-256)

```text
server-aisle.webp    02E48EF1F27685E28F200F4324430F7A88D91EA7262A40F72561002CBE4B6049
rack-detail.webp     D56319E0F82753F84B1E25E6754D5B433DBA8475DFB764875F1AABD7C4CE4E67
fiber-network.webp   873BE4CE5D6D14BA6674750783BC2F3A57B1FBEAD349137559CFF8AE8A692E3D
operations.webp      246A76098AC9D44275997133A203B03099DB9F8E2940B7C9D755A13D89B59D02
cloud-hardware.webp  2CB66E2FB0088520CC890AF1F97643BCAEC82021FC9F25EA7C6609D476A5836E
```
