# Creator landing template

Saved working template. Dark neon profile page + centered affiliate popup.

- Repo: https://github.com/duka515/creator-landing
- Live example: https://emmadixon.site

## Reuse for a new creator

1. Copy this repo (GitHub → Use this template / Fork).
2. Edit `js/config.js`:
   - `name`
   - `flag`
   - `videos` / `photos`
   - `popup.url` (Jerkmate / affiliate link)
   - `popup.image`
   - `avatar`
3. Replace files in `assets/`:
   - `avatar.jpg` profile photo
   - `g1.jpg` – `g4.jpg` gallery
   - `popup.jpg` popup banner
4. Deploy on Hostinger → Deploy Web App → this repo
   - Framework: Other
   - Build: `npm run build`
   - Output: `dist`
   - Leave Entry file empty

## Popup

WATCH ME NOW, EXCLUSIVE CONTENT, gallery, and VIEW ALL open a centered card.
Background blurs. Only **Join for Free** opens `popup.url`.

## Files

- `index.html` page + popup
- `css/style.css` layout
- `js/config.js` all text and links
- `js/app.js` popup behavior
- `dmca.html` legal page
