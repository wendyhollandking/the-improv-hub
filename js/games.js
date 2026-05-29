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
     Cards show title, description, category tags, inline rules, and an example. */
  function buildCard(game) {
    var article = document.createElement('article');
    article.className = 'card game-card game-card-library';
    article.dataset.id = game.id;

    /* ---- Category tags ---- */
    var tagsHtml = game.categories.map(function (cat) {
      var label = CATEGORY_LABELS[cat] || cat;
      return '<span class="tag tag-' + cat + '">' + label + '</span>';
    }).join('');

    /* ---- Rules ---- */
    var rulesHtml = game.rules.map(function (rule) {
      return '<li>' + rule + '</li>';
    }).join('');

    /* ---- Example section (only rendered when example text exists) ---- */
    var hasExample = !!(game.example && game.example.trim());
    var exampleSectionHtml = hasExample
      ? '<div class="game-example-details" id="example-' + game.id + '" hidden>' +
          '<div class="game-detail-section">' +
            '<h4>Example</h4>' +
            '<p class="game-example-text">' + game.example + '</p>' +
          '</div>' +
        '</div>'
      : '';

    var exampleBtnHtml = hasExample
      ? '<button class="game-toggle-btn game-example-toggle" aria-expanded="false" aria-controls="example-' + game.id + '">' +
          '<span class="toggle-label">Example</span>' +
          '<span class="toggle-icon" aria-hidden="true">▼</span>' +
        '</button>'
      : '';

    article.innerHTML =
      '<div class="game-card-body">' +
        '<h3 class="game-card-title">' + game.title + '</h3>' +
        '<p class="game-card-desc">' + game.description + '</p>' +
        (tagsHtml ? '<div class="game-card-tags">' + tagsHtml + '</div>' : '') +
      '</div>' +

      /* Expandable rules section */
      '<div class="game-details" id="details-' + game.id + '" hidden>' +
        '<div class="game-detail-section">' +
          '<h4>How to play</h4>' +
          '<ol class="game-rules">' + rulesHtml + '</ol>' +
        '</div>' +
      '</div>' +

      /* Expandable example section */
      exampleSectionHtml +

      /* Button row — rules toggle + (optional) example toggle */
      '<div class="game-toggle-row">' +
        '<button class="game-toggle-btn" aria-expanded="false" aria-controls="details-' + game.id + '">' +
          '<span class="toggle-label">Show rules</span>' +
          '<span class="toggle-icon" aria-hidden="true">▼</span>' +
        '</button>' +
        exampleBtnHtml +
      '</div>';

    /* ---- Rules toggle ---- */
    var rulesBtn = article.querySelector('.game-toggle-btn:not(.game-example-toggle)');
    var rulesEl  = article.querySelector('.game-details');

    function toggleRules() {
      var isOpen = !rulesEl.hidden;
      rulesEl.hidden = isOpen;
      rulesBtn.setAttribute('aria-expanded', String(!isOpen));
      rulesBtn.querySelector('.toggle-label').textContent = isOpen ? 'Show rules' : 'Hide rules';
      rulesBtn.querySelector('.toggle-icon').textContent  = isOpen ? '▼' : '▲';
      updateOpenState();
    }

    rulesBtn.addEventListener('click', toggleRules);

    /* ---- Example toggle ---- */
    if (hasExample) {
      var exBtn = article.querySelector('.game-example-toggle');
      var exEl  = article.querySelector('.game-example-details');

      function toggleExample() {
        var isOpen = !exEl.hidden;
        exEl.hidden = isOpen;
        exBtn.setAttribute('aria-expanded', String(!isOpen));
        exBtn.querySelector('.toggle-label').textContent = isOpen ? 'Example' : 'Hide example';
        exBtn.querySelector('.toggle-icon').textContent  = isOpen ? '▼' : '▲';
        updateOpenState();
      }

      exBtn.addEventListener('click', toggleExample);
    }

    /* Card has the is-open shadow when either section is expanded */
    function updateOpenState() {
      var anyOpen = !rulesEl.hidden || (hasExample && !article.querySelector('.game-example-details').hidden);
      article.classList.toggle('is-open', anyOpen);
    }

    /* Clicking the card body navigates to the full game detail page */
    article.addEventListener('click', function (e) {
      if (e.target.closest('a')) return;
      if (e.target.closest('.game-toggle-btn')) return;
      window.location.href = 'game.html?id=' + game.id;
    });

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
