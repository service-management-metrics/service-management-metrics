/* Pickerbar dropdowns: open directly under their own button, never at the far
   left, never shifting the page, and always inside the viewport. */
(function () {
  var css =
    '.theme-picker,.locale-picker,.text-size-picker,.motion-picker,.link-picker,.share-picker{position:relative}' +
    'ul[class*="-picker-list"],[class*="-picker"] .listbox{position:absolute!important;position-area:none!important;' +
    'inset:100% 0 auto auto!important;margin:4px 0 0!important;min-width:0!important;width:max-content!important;' +
    'max-width:min(20rem,calc(100vw - 1.5rem))!important;translate:none;transition:none!important}' +
    '@media (max-width:40rem){ul[class*="-picker-list"],[class*="-picker"] .listbox{inset:100% auto auto 0!important}}';
  var st = document.createElement('style');
  st.textContent = css;
  document.head.appendChild(st);

  function clamp() {
    var list = document.querySelectorAll('ul[class*="-picker-list"], [class*="-picker"] .listbox, .search-picker-panel');
    for (var i = 0; i < list.length; i++) {
      var p = list[i];
      if (p.hidden || !p.getClientRects().length) { p.style.translate = ''; continue; }
      var cur = parseFloat(p.style.translate) || 0;
      var r = p.getBoundingClientRect();
      var vw = document.documentElement.clientWidth;
      var sx = window.scrollX || 0;
      var L = r.left + sx - cur, R = r.right + sx - cur, dx = 0;
      if (R > vw - 8) dx = vw - 8 - R;
      if (L + dx < 8) dx = 8 - L;
      p.style.translate = dx ? dx + 'px 0' : '';
      if (sx && document.documentElement.scrollWidth <= vw) window.scrollTo(0, window.scrollY);
    }
  }
  function later() {
    requestAnimationFrame(function () { requestAnimationFrame(clamp); });
    setTimeout(clamp, 120);
    setTimeout(clamp, 400);
  }
  document.addEventListener('click', later, true);
  document.addEventListener('keydown', later, true);
  window.addEventListener('resize', clamp);
})();
