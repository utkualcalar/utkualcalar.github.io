// Rendering lives here. Content lives in data/site.js and publications/publications.js.
const escapeHtml = value => String(value ?? '').replace(/[&<>"']/g, char => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
})[char]);
const $ = id => document.getElementById(id);
const icon = classes => classes ? `<i class="${escapeHtml(classes)}" aria-hidden="true"></i>` : '';
const link = (label, url, iconClasses = '', arrow = false) => `<a href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer">${iconClasses ? `${icon(iconClasses)} ` : ''}${escapeHtml(label)}${arrow ? ` ${icon('fas fa-arrow-up-right-from-square')}` : ''}</a>`;

function renderList(id, entries, render) {
  entries = entries || [];
  $(id).innerHTML = entries.map(render).join('');
  $(`${id}-section`).hidden = entries.length === 0;
}

function backgroundItem(item) {
  return `<article class="background-item">
    ${item.logo ? `<div class="logo-wrap ${item.wideLogo ? 'wide' : ''}"><img src="${escapeHtml(item.logo)}" alt="${escapeHtml(item.logoAlt || item.organization || item.title)}"></div>` : ''}
    <div class="background-content">
      <div class="entry-heading"><strong>${escapeHtml(item.title)}</strong><span class="date">${escapeHtml(item.date)}</span></div>
      <div class="role">${escapeHtml(item.organization)}${item.location ? `<span class="muted"> · ${escapeHtml(item.location)}</span>` : ''}</div>
      ${item.detail ? `<div class="detail">${escapeHtml(item.detail)}</div>` : ''}
    </div>
  </article>`;
}

function authorsHtml(authors = []) {
  const names = authors.map(author => author.replace(/[*#]/g, ''));
  const text = authors.map((author, i) => names[i] === site.authorName
    ? `<strong>${escapeHtml(author)}</strong>` : escapeHtml(author)).join(', ');
  return text + (authors.some(author => author.includes('*')) ? ' <span class="equal-note">(* equal contribution)</span>' : '');
}

function publicationItem(paper, compact = false) {
  const title = escapeHtml(paper.title);
  return `<article class="publication-item ${compact ? 'compact' : 'selected'}">
    <div class="venue-column"><div class="venue">${escapeHtml(paper.venue)}</div>${compact ? '' : `<div class="year">${paper.year}</div>`}
      ${paper.type === 'Journal' ? '<span class="publication-type">Journal</span>' : ''}
      ${!compact && paper.highlight ? `<div class="highlight">${escapeHtml(paper.highlight)}</div>` : ''}
    </div>
    <div class="publication-main">
      <h3>${compact && paper.links?.Paper ? link(paper.title, paper.links.Paper) : title}</h3>
      <div class="authors">${authorsHtml(paper.authors)}</div>
      ${compact ? '' : `${paper.summary ? `<p class="summary">${escapeHtml(paper.summary)}</p>` : ''}<div class="publication-links">${Object.entries(paper.links || {}).map(([label, url]) => link(label, url, '', true)).join('')}</div>`}
    </div>
    ${compact && paper.highlight ? `<div class="compact-highlight">${escapeHtml(paper.highlight)}</div>` : ''}
  </article>`;
}

$('brand').textContent = $('name').textContent = $('footer').textContent = site.name;
document.title = site.name;
$('portrait').src = site.portrait;
$('portrait').alt = `Portrait of ${site.name}`;
$('bio').innerHTML = site.bioHtml || '';
$('cv').href = site.cv || '';
$('cv').hidden = !site.cv;
$('profile-links').innerHTML = (site.links || []).map(item => link(item.label, item.url, item.icon)).join('');

renderList('experience', site.experience, backgroundItem);
renderList('education', site.education, backgroundItem);
renderList('awards', site.awards, item => `<article class="award"><div><strong>${escapeHtml(item.name)}</strong><div class="detail">${escapeHtml(item.detail)}</div></div><span class="date">${escapeHtml(item.year)}</span></article>`);
for (const id of ['teaching', 'service']) {
  renderList(id, site[id], item => `<div class="compact-entry"><strong>${escapeHtml(item.title)}</strong><span>${escapeHtml(item.detail)}</span></div>`);
}
document.querySelectorAll('.columns').forEach(row => {
  row.hidden = [...row.children].every(section => section.hidden);
});
$('background').hidden = ['experience', 'education', 'awards', 'teaching', 'service'].every(id => $(`${id}-section`).hidden);

const news = [...(site.news || [])].sort((a, b) => b.date.localeCompare(a.date)).slice(0, site.newsLimit ?? 10);
const newsYears = [...new Set(news.map(item => item.date.slice(0, 4)))];
$('news-section').hidden = news.length === 0;
$('news').innerHTML = newsYears.map(year => `<div class="news-group"><div class="date">${year}</div><div>${news.filter(item => item.date.startsWith(year)).map(item => {
  const label = new Date(`${item.date}T12:00:00Z`).toLocaleDateString('en-US', { month: 'short', day: '2-digit', timeZone: 'UTC' });
  return `<div class="news-entry"><div>${item.html}</div><time class="date" datetime="${escapeHtml(item.date)}">${label}</time></div>`;
}).join('')}</div></div>`).join('');

const papers = [...publications].sort((a, b) => b.year - a.year);
const years = [...new Set(papers.map(paper => paper.year))];
const selected = papers.filter(paper => paper.selected);
$('publications-section').hidden = papers.length === 0;
$('publication-count').textContent = papers.length;
$('selected-publications').innerHTML = selected.map(paper => publicationItem(paper)).join('');
$('all-publications').innerHTML = years.map(year => `<div class="year-group"><div class="group-year">${year}</div><div>${papers.filter(paper => paper.year === year).map(paper => publicationItem(paper, true)).join('')}</div></div>`).join('');

function setPublicationView(view) {
  $('selected-publications').hidden = view !== 'selected';
  $('all-publications').hidden = view !== 'all';
  document.querySelectorAll('[data-view]').forEach(button => {
    const active = button.dataset.view === view;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  });
}
document.querySelectorAll('[data-view]').forEach(button => {
  button.addEventListener('click', () => setPublicationView(button.dataset.view));
});
if (!selected.length) setPublicationView('all');

// Biography and news intentionally accept your own HTML (e.g. links and emphasis).
document.querySelectorAll('a[target="_blank"]').forEach(anchor => { anchor.rel = 'noopener noreferrer'; });
