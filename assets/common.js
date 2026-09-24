(function(){
var R = window.PROMOCA_ROOT || "";
var LOGO = R + "assets/img/logo.png";

var headerHTML = ''
+'<div class="wrap header-row">'
+'  <div class="menu-block">'
+'    <button class="menu-toggle" id="menuToggle" aria-expanded="false"><span class="bars"><span></span><span></span><span></span></span> <span data-fr="Menu" data-en="Menu">Menu</span></button>'
+'    <a href="'+R+'index.html" class="logo-link"><img class="logo-img" src="'+LOGO+'" alt="Promoca"></a>'
+'  </div>'
+'  <div class="header-actions">'
+'    <button class="lang" id="langToggle">FR / EN</button>'
+'    <button class="btn btn-ghost" id="accountToggle" data-fr="Mon compte" data-en="My account">Mon compte</button>'
+'    <a href="'+R+'index.html#contact" class="btn btn-primary" data-fr="Prendre rendez-vous" data-en="Book an appointment">Prendre rendez-vous</a>'
+'  </div>'
+'</div>';

var menuHTML = ''
+'<div class="menu-scrim" id="menuScrim"></div>'
+'<div class="menu-panel" id="menuPanel"><div class="menu-panel-inner">'
+'  <button class="menu-close" id="menuClose">✕</button>'
+'  <a href="'+R+'nos-biens.html" data-fr="Nos biens" data-en="Our properties">Nos biens</a>'
+'  <a href="'+R+'nos-programmes.html" data-fr="Nos programmes" data-en="Our developments">Nos programmes</a>'
+'  <a href="'+R+'notre-groupe.html" data-fr="Notre groupe" data-en="Our group">Notre groupe</a>'
+'  <a href="'+R+'investir.html" data-fr="Investir" data-en="Invest">Investir</a>'
+'  <a href="'+R+'atouts-du-neuf.html" data-fr="Atouts du neuf" data-en="New-build advantages">Atouts du neuf</a>'
+'  <a href="'+R+'index.html#contact" data-fr="Contact" data-en="Contact">Contact</a>'
+'</div></div>';

var footerHTML = ''
+'<footer><div class="wrap">'
+'<div class="footer-grid">'
+'<div><p><img src="'+LOGO+'" alt="Promoca" style="height:32px;filter:brightness(0) invert(1);"></p>'
+'<p style="font-size:.88rem;max-width:260px;margin-top:14px;" data-fr="Promoteur immobilier ancré sur la Côte d\'Azur, engagé pour des lieux de vie durables." data-en="A property developer rooted on the French Riviera, committed to lasting places to live.">Promoteur immobilier ancré sur la Côte d\'Azur, engagé pour des lieux de vie durables.</p></div>'
+'<div><h4 data-fr="Navigation" data-en="Navigation">Navigation</h4><ul>'
+'<li><a href="'+R+'nos-biens.html" data-fr="Nos biens" data-en="Our properties">Nos biens</a></li>'
+'<li><a href="'+R+'nos-programmes.html" data-fr="Nos programmes" data-en="Our developments">Nos programmes</a></li>'
+'<li><a href="'+R+'notre-groupe.html" data-fr="Notre groupe" data-en="Our group">Notre groupe</a></li>'
+'<li><a href="'+R+'investir.html" data-fr="Investir" data-en="Invest">Investir</a></li>'
+'<li><a href="'+R+'atouts-du-neuf.html" data-fr="Atouts du neuf" data-en="New-build advantages">Atouts du neuf</a></li>'
+'</ul></div>'
+'<div><h4 data-fr="Secteurs" data-en="Areas">Secteurs</h4><ul>'
+'<li><a href="'+R+'villes/antibes.html">Antibes</a></li>'
+'<li><a href="'+R+'villes/biot.html">Biot</a></li>'
+'<li><a href="'+R+'villes/cagnes-sur-mer.html">Cagnes-sur-Mer</a></li>'
+'<li><a href="'+R+'villes/nice.html">Nice</a></li>'
+'<li><a href="'+R+'villes/saint-laurent-du-var.html">Saint-Laurent-du-Var</a></li>'
+'</ul></div>'
+'<div><h4 data-fr="Informations" data-en="Information">Informations</h4><ul>'
+'<li><a href="'+R+'legal/mentions-legales.html" data-fr="Mentions légales" data-en="Legal notice">Mentions légales</a></li>'
+'<li><a href="'+R+'legal/confidentialite.html" data-fr="Confidentialité" data-en="Privacy">Confidentialité</a></li>'
+'<li><a href="'+R+'legal/cookies.html">Cookies</a></li>'
+'<li><a href="'+R+'legal/accessibilite.html" data-fr="Accessibilité" data-en="Accessibility">Accessibilité</a></li>'
+'</ul></div>'
+'</div>'
+'<div class="footer-bottom"><span>© 2026 Promoca.</span><span>1952 Route des Pugets, 06700 Saint-Laurent-du-Var</span></div>'
+'</div></footer>';

var accountModalHTML = ''
+'<div class="modal-overlay" id="accountOverlay"><div class="modal-box">'
+'<button class="modal-close" id="accountClose">✕</button>'
+'<div class="modal-tabs">'
+'<button class="modal-tab active" data-tab="login" data-fr="Se connecter" data-en="Sign in">Se connecter</button>'
+'<button class="modal-tab" data-tab="register" data-fr="Créer un compte" data-en="Create account">Créer un compte</button>'
+'</div>'
+'<form id="loginForm" class="modal-form">'
+'<div class="field"><label data-fr="E-mail" data-en="Email">E-mail</label><input type="email" required></div>'
+'<div class="field"><label data-fr="Mot de passe" data-en="Password">Mot de passe</label><input type="password" required></div>'
+'<button type="submit" class="btn btn-primary" style="width:100%;background:var(--navy-deep);color:#fff;" data-fr="Se connecter" data-en="Sign in">Se connecter</button>'
+'<div class="confirm-msg" id="loginConfirm" data-fr="Connexion simulée — bienvenue sur votre espace Promoca." data-en="Simulated sign-in — welcome to your Promoca space.">Connexion simulée — bienvenue sur votre espace Promoca.</div>'
+'</form>'
+'<form id="registerForm" class="modal-form" style="display:none;">'
+'<p style="font-size:.82rem;color:#8a94a0;margin-bottom:16px;" data-fr="Quelques informations pour que nos conseillers puissent affiner votre recherche." data-en="A few details so our advisors can refine your search.">Quelques informations pour que nos conseillers puissent affiner votre recherche.</p>'
+'<div class="field-row"><div class="field"><label data-fr="Prénom" data-en="First name">Prénom</label><input required></div><div class="field"><label data-fr="Nom" data-en="Last name">Nom</label><input required></div></div>'
+'<div class="field-row"><div class="field"><label data-fr="Date de naissance" data-en="Date of birth">Date de naissance</label><input type="date" required></div><div class="field"><label data-fr="Salaire annuel net" data-en="Net annual income">Salaire annuel net</label><input type="number" placeholder="€"></div></div>'
+'<div class="field"><label data-fr="Adresse actuelle" data-en="Current address">Adresse actuelle</label><input></div>'
+'<div class="field-row"><div class="field"><label data-fr="Type de logement recherché" data-en="Property type sought">Type de logement recherché</label><select><option data-fr="Appartement" data-en="Apartment">Appartement</option><option data-fr="Villa" data-en="Villa">Villa</option><option data-fr="Terrain" data-en="Land">Terrain</option><option data-fr="Local professionnel" data-en="Commercial premises">Local professionnel</option></select></div>'
+'<div class="field"><label data-fr="Premier achat immobilier ?" data-en="First property purchase?">Premier achat immobilier ?</label><select><option data-fr="Oui" data-en="Yes">Oui</option><option data-fr="Non" data-en="No">Non</option></select></div></div>'
+'<div class="field"><label data-fr="E-mail" data-en="Email">E-mail</label><input type="email" required></div>'
+'<div class="field"><label data-fr="Mot de passe" data-en="Password">Mot de passe</label><input type="password" required></div>'
+'<button type="submit" class="btn btn-primary" style="width:100%;background:var(--navy-deep);color:#fff;" data-fr="Créer mon compte" data-en="Create my account">Créer mon compte</button>'
+'<div class="confirm-msg" id="registerConfirm" data-fr="Compte créé (simulation) — un conseiller affinera votre recherche sous 24h." data-en="Account created (simulated) — an advisor will refine your search within 24h.">Compte créé (simulation) — un conseiller affinera votre recherche sous 24h.</div>'
+'</form></div></div>';

var chatHTML = ''
+'<button class="chat-btn" id="chatBtn" aria-label="Chat">💬</button>'
+'<div class="chat-panel" id="chatPanel">'
+'<div class="chat-head" data-fr="Conseiller Promoca" data-en="Promoca advisor">Conseiller Promoca</div>'
+'<div class="chat-body">'
+'<p data-fr="Bonjour, comment pouvons-nous vous accompagner dans votre projet immobilier ?" data-en="Hello, how can we help with your property project?">Bonjour, comment pouvons-nous vous accompagner dans votre projet immobilier ?</p>'
+'<button class="chat-opt" data-fr="Découvrir un programme" data-en="Discover a development">Découvrir un programme</button>'
+'<button class="chat-opt" data-fr="Prendre rendez-vous" data-en="Book an appointment">Prendre rendez-vous</button>'
+'<button class="chat-opt" data-fr="Investir dans le neuf" data-en="Invest in new-build">Investir dans le neuf</button>'
+'<button class="chat-opt" data-fr="Contacter un conseiller" data-en="Contact an advisor">Contacter un conseiller</button>'
+'</div></div>';

document.addEventListener('DOMContentLoaded', function(){
  var h = document.getElementById('site-header'); if(h) h.innerHTML = headerHTML;
  document.body.insertAdjacentHTML('beforeend', menuHTML);
  var f = document.getElementById('site-footer'); if(f){ f.innerHTML = footerHTML; f.insertAdjacentHTML('afterend', accountModalHTML + chatHTML); }

  var header=document.getElementById('siteHeader');
  window.addEventListener('scroll',function(){ if(header) header.classList.toggle('scrolled', window.scrollY>60); });

  // vertical left drawer menu
  var mt=document.getElementById('menuToggle'), mp=document.getElementById('menuPanel'), ms=document.getElementById('menuScrim'), mc=document.getElementById('menuClose');
  function openMenu(){ mp.classList.add('open'); ms.classList.add('open'); mt.classList.add('open'); mt.setAttribute('aria-expanded','true'); document.body.style.overflow='hidden'; }
  function closeMenu(){ mp.classList.remove('open'); ms.classList.remove('open'); mt.classList.remove('open'); mt.setAttribute('aria-expanded','false'); document.body.style.overflow=''; }
  if(mt){
    mt.addEventListener('click',function(){ mp.classList.contains('open') ? closeMenu() : openMenu(); });
    mc.addEventListener('click', closeMenu);
    ms.addEventListener('click', closeMenu);
    document.querySelectorAll('.menu-panel a').forEach(function(a){a.addEventListener('click', closeMenu);});
    document.addEventListener('keydown', function(e){ if(e.key==='Escape') closeMenu(); });
  }

  // account modal
  var ao=document.getElementById('accountOverlay');
  var at=document.getElementById('accountToggle');
  if(at){
    at.addEventListener('click',function(){ao.classList.add('open');});
    document.getElementById('accountClose').addEventListener('click',function(){ao.classList.remove('open');});
    ao.addEventListener('click',function(e){ if(e.target===ao) ao.classList.remove('open'); });
    document.querySelectorAll('.modal-tab').forEach(function(tab){
      tab.addEventListener('click',function(){
        document.querySelectorAll('.modal-tab').forEach(function(t){t.classList.remove('active');});
        tab.classList.add('active');
        document.getElementById('loginForm').style.display = tab.dataset.tab==='login'?'block':'none';
        document.getElementById('registerForm').style.display = tab.dataset.tab==='register'?'block':'none';
      });
    });
    document.getElementById('loginForm').addEventListener('submit',function(e){e.preventDefault();document.getElementById('loginConfirm').classList.add('show');});
    document.getElementById('registerForm').addEventListener('submit',function(e){e.preventDefault();document.getElementById('registerConfirm').classList.add('show');});
  }

  // chatbot
  var cb=document.getElementById('chatBtn'), cp=document.getElementById('chatPanel');
  if(cb) cb.addEventListener('click',function(){cp.classList.toggle('open');});

  // language toggle, persisted site-wide
  var lt=document.getElementById('langToggle');
  function applyLang(lang){
    document.documentElement.lang=lang;
    document.querySelectorAll('[data-fr][data-en]').forEach(function(el){ el.innerHTML = lang==='en'?el.dataset.en:el.dataset.fr; });
    document.querySelectorAll('[data-fr-ph]').forEach(function(el){ el.placeholder = lang==='en'?el.dataset.enPh:el.dataset.frPh; });
    if(lt) lt.textContent = lang==='en' ? 'EN / FR' : 'FR / EN';
    if(window.promocaOnLangChange) window.promocaOnLangChange(lang);
  }
  var current = localStorage.getItem('promoca_lang') || 'fr';
  applyLang(current);
  if(lt){
    lt.addEventListener('click',function(){
      current = current==='fr' ? 'en' : 'fr';
      localStorage.setItem('promoca_lang', current);
      applyLang(current);
    });
  }
  window.promocaApplyLang = applyLang;
  window.promocaCurrentLang = function(){ return current; };

  // reveal on scroll, staggered
  var io=new IntersectionObserver(function(entries){
    entries.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target);} });
  },{threshold:.12});
  document.querySelectorAll('.reveal').forEach(function(el,i){ el.style.transitionDelay=(i%5*0.07)+'s'; io.observe(el); });

  // animated counters
  var counted=new Set();
  var cio=new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(e.isIntersecting && !counted.has(e.target)){
        counted.add(e.target);
        var target=+e.target.dataset.count, cur=0, step=Math.max(1,Math.round(target/40));
        var t=setInterval(function(){ cur+=step; if(cur>=target){cur=target;clearInterval(t);} e.target.textContent=cur; },30);
      }
    });
  },{threshold:.4});
  document.querySelectorAll('[data-count]').forEach(function(el){cio.observe(el);});

  // light parallax on hero background
  var heroBg = document.querySelector('.hero-bg');
  if(heroBg){
    window.addEventListener('scroll', function(){
      var y = window.scrollY;
      if(y < window.innerHeight) heroBg.style.transform = 'translateY(' + (y*0.25) + 'px)';
    }, {passive:true});
  }
});
})();
