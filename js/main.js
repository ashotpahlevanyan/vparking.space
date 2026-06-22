// header background on scroll
  const hdr = document.getElementById('hdr');
  const onScroll = () => hdr.classList.toggle('scrolled', window.scrollY > 40);
  onScroll(); window.addEventListener('scroll', onScroll, {passive:true});

  // trigger the hero stack animation
  requestAnimationFrame(() => {
    setTimeout(() => document.getElementById('stack').classList.add('lift'), 200);
  });

  // scroll reveals
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }});
  }, {threshold:0.14, rootMargin:'0px 0px -8% 0px'});
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
