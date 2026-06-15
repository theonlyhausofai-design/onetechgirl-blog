# OneTechGirl — Blog & Resources

The OneTechGirl blog, resources library, and newsletter.

## Structure
- `index.html` — redirects to the blog
- `ui_kits/blog/` — blog index, articles, resources library, dashboard
  - `posts-data.js` — all post content (edit this to publish)
  - `posts.js` — rendering + categories
- `ui_kits/newsletter/` — newsletter article page
- `styles.css` + `tokens/` — design system
- `assets/` — logo marks, photos, fonts

## Add a post
Edit `ui_kits/blog/posts-data.js` — copy an existing entry in `OTO_DEFAULT_POSTS` and change the fields.

## Run locally
```bash
python3 -m http.server 8000
# then visit http://localhost:8000/
```

## GitHub Pages
Settings → Pages → Deploy from branch → `main` / root. The root `index.html` forwards to the blog.
