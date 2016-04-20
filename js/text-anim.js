$(function() {
  $('body').css({
    visibility: 'visible'
  });
  var timeline = new TimelineLite({
    delay: 4.0
  });

  timeline.fromTo(".seq-0", 0.5, {
    autoAlpha: 0,
    y: 50
  }, {
    autoAlpha: 1,
    y: 0,
    ease: Circ.easeOut
}, "-=0.1");

  timeline.fromTo($(".seq-1"), 0.5, {
    autoAlpha: 0,
    y: 50
  }, {
    autoAlpha: 1,
    y: 0,
    ease: Circ.easeOut
  }, "-=0.3");

  timeline.fromTo(".seq-2", 0.5, {
    autoAlpha: 0,
    y: 50
  }, {
    autoAlpha: 1,
    y: 0,
    ease: Circ.easeOut
  }, "-=0.3");

  timeline.fromTo(".seq-3", 0.5, {
    autoAlpha: 0,
    y: 50
  }, {
    autoAlpha: 1,
    y: 0,
    ease: Circ.easeOut
  }, "-=0.3");

  timeline.fromTo(".seq-4", 0.5, {
    autoAlpha: 0,
    y: 50
  }, {
    autoAlpha: 1,
    y: 0,
    ease: Circ.easeOut
  }, "-=0.3");

  timeline.fromTo(".seq-5", 0.5, {
    autoAlpha: 0,
    y: 50
  }, {
    autoAlpha: 1,
    y: 0,
    ease: Circ.easeOut
  }, "-=0.3");

  timeline.fromTo(".seq-6", 0.5, {
    autoAlpha: 0,
    y: 50
  }, {
    autoAlpha: 1,
    y: 0,
    ease: Circ.easeOut
  }, "-=0.3");

  timeline.fromTo(".seq-7", 0.5, {
    autoAlpha: 0,
    y: 50
  }, {
    autoAlpha: 1,
    y: 0,
    ease: Circ.easeOut
  }, "-=0.3");

  timeline.fromTo(".seq-8", 0.5, {
    autoAlpha: 0,
    y: 50
  }, {
    autoAlpha: 1,
    y: 0,
    ease: Circ.easeOut
  }, "-=0.3");

  timeline.fromTo(".seq-9", 0.5, {
    autoAlpha: 0,
    y: 50
  }, {
    autoAlpha: 1,
    y: 0,
    ease: Circ.easeOut
  }, "-=0.3");

  timeline.fromTo(".seq-10", 0.5, {
    autoAlpha: 0,
    y: 50
  }, {
    autoAlpha: 1,
    y: 0,
    ease: Circ.easeOut
  }, "-=0.3");

    timeline.fromTo(".seq-11", 0.5, {
    autoAlpha: 0,
    y: 50
  }, {
    autoAlpha: 1,
    y: 0,
    ease: Circ.easeOut
  }, "-=0.3");

});