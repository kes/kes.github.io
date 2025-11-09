// Mark the document so MathJax will process it
document.documentElement.classList.add('has-math');

window.MathJax = {
  tex: {
    inlineMath: [['\\(', '\\)'], ['$', '$']],
    displayMath: [['\\[', '\\]'], ['$$', '$$']],
    processEscapes: true,
    tags: 'ams'
  },
  options: {
    skipHtmlTags: ['script','noscript','style','textarea','pre','code'],
    // Only process when the page declares it (we just added 'has-math')
    processHtmlClass: 'math|has-math'
    // NOTE: remove ignoreHtmlClass so the gate actually works as intended
    // (if you keep ignoreHtmlClass: '.*', it overrides the allow-list)
  },
  startup: {
    typeset: false,
    ready: () => {
      MathJax.startup.defaultReady();
      MathJax.typesetPromise().catch(err => console.error('[MathJax]', err));
    }
  }
};
