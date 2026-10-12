# Y. Utku Alcalar — academic website

A small static site. No build step, package manager, Python, Ruby, Bootstrap,
or Jekyll required. Open `index.html` with VS Code Live Server.

## What to edit

| File | Purpose |
| --- | --- |
| `data/site.js` | Biography, contact links, news, experience, education, awards, teaching, service |
| `publications/publications.js` | All publications, including which ones are selected |
| `assets/css/site.css` | Appearance and responsive layout |
| `index.html` | Section order and page structure |
| `assets/js/site.js` | Rendering and the Selected / All switch |

**Edit content in the two data files, save, and refresh the page.** Both are
JavaScript files containing a single object or array. Keep the commas between
entries. All text fields are plain text except `bioHtml` and news `html`, which
accept your own HTML for links and emphasis.

## Add, remove, or select a publication

In `publications/publications.js`, copy an existing object inside the array:

```js
{
  "title": "Your new paper title",
  "year": 2027,
  "venue": "NeurIPS",
  "authors": ["Yasar Utku Alcalar", "Another Author"],
  "selected": true,
  "highlight": "",
  "summary": "A short description for the Selected view.",
  "links": {
    "Paper": "https://example.com/paper",
    "Code": "https://example.com/code"
  }
}
```

- Add the object to add a paper. Delete the whole object to remove it.
- `selected: true` shows the paper in both views. `false` shows it only in All.
- Set `highlight` to an award or leave it empty.
- Omit unavailable links or use `"links": {}`.
- Append `*` to equal-contribution author names. The note appears automatically.
- Your name is bolded using `authorName` in `data/site.js`.
- Years sort newest first. Within a year, papers follow their order in the file.
- The count updates automatically. If no papers are selected, All opens by default.
- The All view also links paper titles to their Paper URL when present.

This is the actual publication source. The previous `_publications` Markdown
files were migrated into this one list; the homepage no longer contains paper
metadata. There is no separate manifest to update.

## Edit the rest of the site

Each section in `data/site.js` is an array. Copy an entry to add one; delete it
to remove one. Setting an array to `[]` hides that section. Keep `site` and
`publications` defined even when the lists are empty.

- **News:** use `date: "YYYY-MM-DD"` and `html` for the announcement. News sorts
  newest first. `newsLimit` controls the number shown.
- **Experience / education:** edit `title`, `organization`, `date`, `location`,
  `detail`, and `logo`. Empty `location` / `detail` values are fine. Omit `logo`
  for a text-only entry; `wideLogo` controls the logo container width.
- **Awards:** edit `name`, `detail`, and `year`.
- **Teaching / service:** edit `title` and `detail`.
- **Portrait:** replace `assets/images/portrait.jpg`, or change `portrait`.
- **Section order:** move the corresponding `<section>` in `index.html`.

## Publish on GitHub Pages

Upload this folder's **contents** to your Pages repository and use its normal
branch-based deployment. Keep `.nojekyll`; the files are served as plain static
assets. Relative paths also work under a project subpath. No generated output
or build command is needed. `publications.html` and `preview.html` redirect to
the homepage for compatibility with older links.

The external stylesheets supply the Lato font and the original Font Awesome
icons (social links, section headings, CV, and publication-link arrows). If the
font is unavailable, the site uses Arial. Content rendering requires JavaScript.

## Cleanup

Removed the disconnected Jekyll templates, configuration, Gemfile, old content
copies, preview generator, unused citation/lazy-loading scripts, showcase
examples, unused images, Bootstrap, and the unused Academicons stylesheet. The current visible
homepage content was migrated instead of rebuilding it from older profile data.
The original LICENSE is retained.
