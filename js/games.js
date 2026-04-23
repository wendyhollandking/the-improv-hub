/* ============================================================
   games.js
   Powers the games library page (games/library.html).

   Responsibilities:
   - Render game cards from GAMES_DATA
   - Filter by category tag
   - Filter by search query
   - Expand/collapse game details (rules, variations, prompts)
   - Random game button
============================================================ */

(function () {

  /* ---- State ---- */
  var activeFilter = 'all';  /* Currently selected category */
  var searchQuery  = '';     /* Current search input */

  /* ---- DOM references (set on init) ---- */
  var gridEl, countEl, emptyEl, searchEl;


  /* ================================================================
     RENDERING
  ================================================================ */

  /* Human-readable label for each category slug */
  var CATEGORY_LABELS = {
    'warm-ups':     'Warm-up',
    'yes-and':      'Yes, And',
    'characters':   'Characters',
    'scenes':       'Scenes',
    'comedy':       'Comedy',
    'musical':      'Musical',
    'solo-friendly':'Solo-friendly'
  };

  /* Build a single game card element.
     Cards show title, description, category tags, and inline rules. */
  function buildCard(game) {
    var article = document.createElement('article');
    article.className = 'card game-card game-card-library';
    article.dataset.id = game.id;

    /* ---- Category tags ---- */
    var tagsHtml = game.categories.map(function (cat) {
      var label = CATEGORY_LABELS[cat] || cat;
      return '<span class="tag tag-' + cat + '">' + label + '</span>';
    }).join('');

    /* ---- Inline rules for the quick-expand toggle ---- */
    var rulesHtml = game.rules.map(function (rule) {
      return '<li>' + rule + '</li>';
    }).join('');

    article.innerHTML =
      '<div class="game-card-body">' +
        '<h3 class="game-card-title">' + game.title + '</h3>' +
        '<p class="game-card-desc">' + game.description + '</p>' +
        (tagsHtml ? '<div class="game-card-tags">' + tagsHtml + '</div>' : '') +
      '</div>' +

      /* Expandable quick-rules section */
      '<div class="game-details" id="details-' + game.id + '" hidden>' +
        '<div class="game-detail-section">' +
          '<h4>How to play</h4>' +
          '<ol class="game-rules">' + rulesHtml + '</ol>' +
        '</div>' +
      '</div>' +

      '<button class="game-toggle-btn" aria-expanded="false" aria-controls="details-' + game.id + '">' +
        '<span class="toggle-label">Show rules</span>' +
        '<span class="toggle-icon" aria-hidden="true">▼</span>' +
      '</button>';

    /* Toggle expand/collapse — shared function used by both card click and button click */
    var toggleBtn = article.querySelector('.game-toggle-btn');
    var detailsEl = article.querySelector('.game-details');

    function toggleDetails() {
      var isOpen = !detailsEl.hidden;
      detailsEl.hidden = isOpen;
      toggleBtn.setAttribute('aria-expanded', String(!isOpen));
      toggleBtn.querySelector('.toggle-label').textContent = isOpen ? 'Show rules' : 'Hide rules';
      toggleBtn.querySelector('.toggle-icon').textContent  = isOpen ? '▼' : '▲';
      article.classList.toggle('is-open', !isOpen);
    }

    /* Clicking the card body navigates to the full game detail page */
    article.addEventListener('click', function (e) {
      if (e.target.closest('a')) return;               /* let link clicks through */
      if (e.target.closest('.game-toggle-btn')) return; /* handled below */
      window.location.href = 'game.html?id=' + game.id;
    });

    toggleBtn.addEventListener('click', toggleDetails);

    return article;
  }

  /* Render the filtered + searched game list into the grid */
  function renderGames() {
    /* Start with category filter */
    var games = getGamesByCategory(activeFilter);

    /* Then apply search on top */
    if (searchQuery) {
      var q = searchQuery.toLowerCase();
      games = games.filter(function (g) {
        return (
          g.title.toLowerCase().includes(q) ||
          g.description.toLowerCase().includes(q) ||
          g.categories.some(function (c) { return c.includes(q); })
        );
      });
    }

    /* Update the count label */
    var noun = games.length === 1 ? 'game' : 'games';
    countEl.textContent = games.length + ' ' + noun;

    /* Show/hide empty state */
    if (games.length === 0) {
      gridEl.innerHTML = '';
      emptyEl.hidden = false;
      return;
    }
    emptyEl.hidden = true;

    /* Clear and re-render */
    gridEl.innerHTML = '';
    games.forEach(function (game) {
      gridEl.appendChild(buildCard(game));
    });
  }


  /* ================================================================
     FILTER TAGS
  ================================================================ */

  function initFilterTags() {
    document.querySelectorAll('.filter-tag').forEach(function (btn) {
      btn.addEventListener('click', function () {
        /* Update active class */
        document.querySelectorAll('.filter-tag').forEach(function (b) {
          b.classList.remove('active');
          b.setAttribute('aria-pressed', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');

        activeFilter = btn.dataset.filter;
        renderGames();
      });
    });
  }


  /* ================================================================
     SEARCH
  ================================================================ */

  function initSearch() {
    searchEl = document.getElementById('game-search');
    if (!searchEl) return;

    searchEl.addEventListener('input', function () {
      searchQuery = searchEl.value;
      renderGames();
    });

    /* Clear button */
    var clearBtn = document.getElementById('search-clear');
    if (clearBtn) {
      clearBtn.addEventListener('click', function () {
        searchEl.value = '';
        searchQuery = '';
        renderGames();
        searchEl.focus();
      });
    }
  }


  /* ================================================================
     RANDOM GAME
  ================================================================ */

  function initRandomGame() {
    var btn = document.getElementById('random-game-btn');
    if (!btn) return;

    btn.addEventListener('click', function () {
      /* Navigate to the random picker, which handles the animation and
         shows the full game explanation for any game in the library */
      window.location.href = '../play/ai-play.html?random=1';
    });
  }


  /* ================================================================
     INIT
  ================================================================ */

  document.addEventListener('DOMContentLoaded', function () {
    gridEl  = document.getElementById('games-grid');
    countEl = document.getElementById('games-count');
    emptyEl = document.getElementById('games-empty');

    if (!gridEl) return; /* Not on the library page */

    initFilterTags();
    initSearch();
    initRandomGame();
    renderGames();
  });

})();
