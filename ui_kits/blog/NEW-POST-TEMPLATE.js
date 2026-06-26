/*
  OneTechGirl — New Post Template
  ================================
  Copy a block below, fill it in, and paste it at the TOP of the
  OTO_DEFAULT_POSTS array in posts-data.js (right after the opening bracket).

  RULES:
  - id:       lowercase slug, hyphens, max 60 chars
  - category: "how-tos" | "ai-news" | "tools" | "explainers"
  - cover:    color = "lime" | "coral" | "ink"
  - issue:    next sequential number (check last post)
  - readTime: estimate based on ~200 words/min
  - featured: only ONE post should be true at a time
  - body:     clean HTML using site CSS classes (see patterns below)
  - date:     YYYY-MM-DD format

  HTML PATTERNS (use these, not inline styles):
  ─────────────────────────────────────────────
  Paragraph:        <p>Text here</p>
  Section header:   <h2>Title</h2>
  Emphasis:         <em>italic</em>  <strong>bold</strong>
  Pull quote:       <p class="pull">Text with <span class="hl">highlight</span></p>

  Numbered steps (wrap all in one formula block):
    <div class="formula">
      <div class="step"><span class="n">1</span><div>
        <h3>Step title</h3>
        <p>Step content</p>
      </div></div>
      <div class="step"><span class="n">2</span><div>
        <h3>Step title</h3>
        <p>Step content</p>
      </div></div>
      <div class="step coral"><span class="n">3</span><div>
        <h3>Last step (coral accent)</h3>
        <p>Step content</p>
      </div></div>
    </div>

  Image:
    <figure style="margin:30px 0">
      <img src="../../assets/FILENAME.png" alt="Description"
           style="width:100%;height:auto;border-radius:14px;border:2px solid var(--ink-950);display:block" />
      <figcaption style="font:var(--text-sm) var(--font-mono);color:var(--text-muted);margin-top:10px;text-align:center">
        Caption text
      </figcaption>
    </figure>
*/

// ── COPY FROM HERE ──────────────────────────────────────────
/*
  {
    "id": "your-post-slug-here",
    "title": "Your Post Title Here",
    "category": "ai-news",
    "dek": "One or two sentences that hook the reader. Shows below the title.",
    "cover": { "type": "hatch", "color": "coral" },
    "date": "2026-07-01",
    "readTime": 5,
    "issue": 55,
    "tags": ["Tag1", "Tag2"],
    "featured": false,
    "status": "published",
    "body": "<p>Opening paragraph.</p><div class=\"formula\"><div class=\"step\"><span class=\"n\">1</span><div><h3>First point</h3><p>Details.</p></div></div><div class=\"step\"><span class=\"n\">2</span><div><h3>Second point</h3><p>Details.</p></div></div><div class=\"step coral\"><span class=\"n\">3</span><div><h3>Final point</h3><p>Details.</p></div></div></div><p class=\"pull\">Pull quote with <span class=\"hl\">highlight.</span></p><h2>Section header</h2><p>More content. <strong>Bold closer.</strong></p>"
  },
*/
// ── COPY TO HERE ────────────────────────────────────────────
