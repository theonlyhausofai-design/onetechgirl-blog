/* OneTechGirl blog — store + render helpers.
   Reads seed content from posts-data.js (window.OTO_DEFAULT_POSTS) and
   layers any dashboard edits saved in this browser on top. */
(function(){
  var KEY = 'oto-posts-v1';

  var CATEGORIES = {
    'how-tos':    { label: 'How-Tos',    color: 'lime'  },
    'ai-news':    { label: 'AI News',    color: 'coral' },
    'tools':      { label: 'Tools',      color: 'lime'  },
    'explainers': { label: 'Explainers', color: 'ink'   }
  };

  function seed(){
    var s = window.OTO_DEFAULT_POSTS || [];
    return s.map(function(p){ return JSON.parse(JSON.stringify(p)); });
  }
  function load(){
    try {
      var raw = localStorage.getItem(KEY);
      if (raw){ var a = JSON.parse(raw); if (Array.isArray(a)) return a; }
    } catch(e){}
    return seed();
  }
  function save(posts){ localStorage.setItem(KEY, JSON.stringify(posts)); }
  function reset(){ localStorage.removeItem(KEY); }

  function published(posts){
    return (posts || load()).filter(function(p){ return p.status === 'published'; });
  }
  function byId(id){
    var all = load();
    for (var i=0;i<all.length;i++){ if (all[i].id === id) return all[i]; }
    return null;
  }
  function cat(k){ return CATEGORIES[k] || { label: k || 'Post', color: 'ink' }; }

  // ---- Pages (standalone: About, Contact, …) ----
  var PKEY = 'oto-pages-v1';
  function seedPages(){
    var s = window.OTO_DEFAULT_PAGES || [];
    return s.map(function(p){ return JSON.parse(JSON.stringify(p)); });
  }
  function loadPages(){
    try { var raw = localStorage.getItem(PKEY); if (raw){ var a = JSON.parse(raw); if (Array.isArray(a)) return a; } } catch(e){}
    return seedPages();
  }
  function savePages(pages){ localStorage.setItem(PKEY, JSON.stringify(pages)); }
  function resetPages(){ localStorage.removeItem(PKEY); }
  function publishedPages(){ return loadPages().filter(function(p){ return p.status === 'published'; }); }
  function pageBySlug(slug){ var a = loadPages(); for (var i=0;i<a.length;i++){ if (a[i].id === slug) return a[i]; } return null; }
  function pageURL(p){ return 'page.html?slug=' + encodeURIComponent(p.id); }

  function fmtDate(iso, opts){
    if (!iso) return '';
    var d = new Date(iso + 'T00:00:00');
    if (isNaN(d)) return iso;
    var m = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    if (opts === 'long') return m[d.getMonth()] + ' ' + d.getDate() + ', ' + d.getFullYear();
    return m[d.getMonth()] + ' ' + d.getDate();
  }
  function metaLine(p){
    var bits = [];
    if (p.issue) bits.push('Issue #' + p.issue);
    if (p.readTime) bits.push(p.readTime + ' min read');
    bits.push(fmtDate(p.date));
    return bits.join(' · ');
  }
  var ARCHIVE_MONTHS = 6;
  function isArchived(p){
    if (!p || !p.date) return false;
    var d = new Date(p.date + 'T00:00:00');
    if (isNaN(d)) return false;
    var cut = new Date(); cut.setMonth(cut.getMonth() - ARCHIVE_MONTHS);
    return d < cut;
  }

  function esc(s){ return String(s == null ? '' : s).replace(/[&<>"]/g, function(c){
    return ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'})[c]; }); }

  // Cover media markup. data-driven: hatch (lime/ink/coral) or an image url.
  function coverHTML(p, opts){
    opts = opts || {};
    var labelHTML = opts.label ? '<span class="lbl">' + esc(opts.label) + '</span>' : '';
    var c = p.cover || {};
    if (c.type === 'image' && c.url){
      return '<div class="media img" style="background-image:url(\'' + esc(c.url) + '\')">' + labelHTML + '</div>';
    }
    var color = (c.color || cat(p.category).color);
    return '<div class="media ' + color + '">' + labelHTML + '</div>';
  }

  function postURL(p){ return 'article.html?id=' + encodeURIComponent(p.id); }

  function exportSource(){
    return '/* OneTechGirl content — generated ' + new Date().toISOString().slice(0,10) + ' */\n' +
           'window.OTO_DEFAULT_POSTS = ' + JSON.stringify(load(), null, 2) + ';\n\n' +
           'window.OTO_DEFAULT_PAGES = ' + JSON.stringify(loadPages(), null, 2) + ';\n';
  }
  function slugify(s){
    return String(s || '').toLowerCase().trim()
      .replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 60) || ('post-' + Date.now());
  }

  window.OTO = {
    KEY: KEY,
    CATEGORIES: CATEGORIES,
    seed: seed, load: load, save: save, reset: reset,
    published: published, byId: byId, cat: cat, isArchived: isArchived, ARCHIVE_MONTHS: ARCHIVE_MONTHS,
    loadPages: loadPages, savePages: savePages, resetPages: resetPages,
    publishedPages: publishedPages, pageBySlug: pageBySlug, pageURL: pageURL,
    fmtDate: fmtDate, metaLine: metaLine, coverHTML: coverHTML,
    postURL: postURL, exportSource: exportSource, slugify: slugify, esc: esc
  };
})();
