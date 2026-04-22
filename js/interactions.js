/* ============================================================
   interactions.js
   Reusable interactive UI components used across module pages:
   - Accordion (expandable/collapsible content sections)
   - Tabs (horizontal tab panels)

   Each component is initialized by looking for its root element
   in the DOM. Components are self-contained and don't depend on
   each other.
============================================================ */

(function () {

  /* ============================================================
     ACCORDION
     Usage: any .accordion-trigger button inside a .accordion-item.
     The button's aria-controls value must match the id of the body div.
  ============================================================ */

  function initAccordions() {
    document.querySelectorAll('.accordion-trigger').forEach(function (trigger) {
      trigger.addEventListener('click', function () {
        var isOpen   = trigger.getAttribute('aria-expanded') === 'true';
        var bodyId   = trigger.getAttribute('aria-controls');
        var body     = document.getElementById(bodyId);
        if (!body) return;

        /* Toggle this item */
        trigger.setAttribute('aria-expanded', String(!isOpen));
        body.hidden = isOpen;
      });
    });
  }


  /* ============================================================
     TABS
     Usage: .tab-list containing .tab-btn elements, each with
     data-panel="panelId". Tab panels have id matching that value.
  ============================================================ */

  function initTabs() {
    document.querySelectorAll('.tab-list').forEach(function (tabList) {
      var buttons = tabList.querySelectorAll('.tab-btn');

      buttons.forEach(function (btn) {
        btn.addEventListener('click', function () {
          var panelId = btn.dataset.panel;

          /* Deactivate all tabs and hide all panels in this group */
          buttons.forEach(function (b) {
            b.classList.remove('active');
            b.setAttribute('aria-selected', 'false');
            var panel = document.getElementById(b.dataset.panel);
            if (panel) panel.hidden = true;
          });

          /* Activate clicked tab and show its panel */
          btn.classList.add('active');
          btn.setAttribute('aria-selected', 'true');
          var activePanel = document.getElementById(panelId);
          if (activePanel) activePanel.hidden = false;
        });
      });

      /* Activate the first tab by default if none is active */
      var firstBtn = buttons[0];
      if (firstBtn && !tabList.querySelector('.tab-btn.active')) {
        firstBtn.click();
      }
    });
  }


  /* ============================================================
     QUIZ
     Usage: .quiz-question[data-correct="X"] containing .quiz-option[data-option="X"]
     buttons and .quiz-feedback.correct / .quiz-feedback.incorrect elements.
     After a choice is made, the correct option gets .correct, the chosen wrong
     option gets .incorrect, all others get .dimmed, and all are disabled.
  ============================================================ */

  function initQuizzes() {
    document.querySelectorAll('.quiz-question').forEach(function (question) {
      var correctLetter = question.dataset.correct;
      if (!correctLetter) return;

      var options          = question.querySelectorAll('.quiz-option');
      var feedbackCorrect  = question.querySelector('.quiz-feedback.correct');
      var feedbackWrong    = question.querySelector('.quiz-feedback.incorrect');

      options.forEach(function (option) {
        option.addEventListener('click', function () {
          var chosen    = option.dataset.option;
          var isCorrect = (chosen === correctLetter);

          /* Mark the chosen option */
          option.classList.add(isCorrect ? 'correct' : 'incorrect');

          /* Dim all other options, then disable everything */
          options.forEach(function (o) {
            if (o !== option) o.classList.add('dimmed');
            o.disabled = true;
          });

          /* Reveal the matching feedback message */
          if (isCorrect  && feedbackCorrect) feedbackCorrect.hidden = false;
          if (!isCorrect && feedbackWrong)   feedbackWrong.hidden   = false;
        });
      });
    });
  }


  /* ---- Initialize on DOM ready ---- */
  document.addEventListener('DOMContentLoaded', function () {
    initAccordions();
    initTabs();
    initQuizzes();
  });

})();


/* ============================================================
   CHAT TEXT FORMATTER
   Converts basic markdown in AI responses to safe HTML.
   Used by all module AI play sections.
   Available globally as window.formatChatText(text).
============================================================ */
window.formatChatText = function (text) {
  /* 1. Escape HTML to prevent injection */
  var safe = text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  /* 2. **bold** → <strong> */
  safe = safe.replace(/\*\*([^*\n]+)\*\*/g, '<strong>$1</strong>');

  /* 3. Process line by line — headers, ordered + unordered lists, paragraphs */
  var lines = safe.split('\n');
  var html  = [];
  var inUl  = false;
  var inOl  = false;

  function closeList() {
    if (inUl) { html.push('</ul>'); inUl = false; }
    if (inOl) { html.push('</ol>'); inOl = false; }
  }

  lines.forEach(function (line) {
    var trimmed = line.trim();
    var ulMatch = trimmed.match(/^[-•]\s+(.+)/);
    var olMatch = trimmed.match(/^\d+\.\s+(.+)/);
    var h3Match = trimmed.match(/^###\s+(.+)/);
    var h2Match = trimmed.match(/^##\s+(.+)/);
    var h1Match = trimmed.match(/^#\s+(.+)/);

    if (!ulMatch && !olMatch) closeList();

    if      (h3Match) { html.push('<h4>' + h3Match[1] + '</h4>'); }
    else if (h2Match) { html.push('<h3>' + h2Match[1] + '</h3>'); }
    else if (h1Match) { html.push('<h2>' + h1Match[1] + '</h2>'); }
    else if (ulMatch) {
      if (!inUl) { html.push('<ul>'); inUl = true; }
      html.push('<li>' + ulMatch[1] + '</li>');
    } else if (olMatch) {
      if (!inOl) { html.push('<ol>'); inOl = true; }
      html.push('<li>' + olMatch[1] + '</li>');
    } else if (trimmed === '---') {
      html.push('<hr>');
    } else if (trimmed === '') {
      /* blank lines — spacing via CSS */
    } else {
      html.push('<p>' + line + '</p>');
    }
  });

  closeList();
  return html.join('');
};
