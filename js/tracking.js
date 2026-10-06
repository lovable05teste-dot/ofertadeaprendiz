/* Only the owner's Meta pixel and two supplied UTMify loaders. */
(function () {
  'use strict';
  var storageKey = 'ofertadeaprendiz-attribution';
  var accepted = /^(utm_|src$|sck$|xcod$|fbclid$|ttclid$|gclid$|gbraid$|wbraid$|msclkid$)/i;
  var params = new URLSearchParams(location.search);
  var stored = {};
  try { stored = JSON.parse(sessionStorage.getItem(storageKey) || '{}'); } catch (_) {}
  params.forEach(function (value, key) { if (accepted.test(key)) stored[key] = value; });
  try { sessionStorage.setItem(storageKey, JSON.stringify(stored)); } catch (_) {}

  function decorate(link) {
    var url;
    try { url = new URL(link.href, location.href); } catch (_) { return null; }
    if (url.hostname !== 'go.fortpayplataforma.com.br') return null;
    Object.keys(stored).forEach(function (key) {
      if (!url.searchParams.has(key)) url.searchParams.set(key, stored[key]);
    });
    if (link.href !== url.href) link.href = url.href;
    return url;
  }
  function decorateAll() { document.querySelectorAll('a[href]').forEach(decorate); }
  function start() {
    decorateAll();
    new MutationObserver(decorateAll).observe(document.getElementById('root'), {childList:true, subtree:true});
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();

  // UTMify detects checkout links itself. Do not send a second UTMify IC.
  document.addEventListener('click', function (event) {
    var element = event.target instanceof Element ? event.target : null;
    var link = element && element.closest('a[href]');
    if (!link) return;
    var url = decorate(link);
    if (!url || typeof window.fbq !== 'function') return;
    var prices = {dtaoh:9.90, riqixu10kr:19.90, '31ulh':27.90};
    var offer = url.pathname.replace(/^\//, '');
    window.fbq('track', 'InitiateCheckout', {
      currency:'BRL', value:prices[offer], content_name:'Sistema de Avaliação e Aprendizagem',
      content_ids:[offer], content_type:'product', num_items:1
    });
  }, true);
})();
