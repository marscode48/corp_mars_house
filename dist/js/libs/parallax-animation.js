"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var TopParallaxAnimation = /*#__PURE__*/function () {
  function TopParallaxAnimation(el, el2) {
    _classCallCheck(this, TopParallaxAnimation);

    this.DOM = {};
    this.DOM.el = el instanceof HTMLElement ? el : document.querySelector(el);
    this.chars = this.DOM.el.innerHTML.trim().split('');
    this.DOM.el.innerHTML = this._splitText();
    this.DOM.chars = this.DOM.el.querySelectorAll('.char');
    this.DOM.el2 = document.querySelector(el2);
    this.animate();
  }

  _createClass(TopParallaxAnimation, [{
    key: "_splitText",
    value: function _splitText() {
      return this.chars.reduce(function (acc, curr) {
        curr = curr.replace(/\s+/, '&nbsp;');
        return "".concat(acc, "<span class=\"char\">").concat(curr, "</span>");
      }, '');
    }
  }, {
    key: "animate",
    value: function animate() {
      var topTl = gsap.timeline({
        scrollTrigger: {
          trigger: '.top-parallax',
          start: 'top top',
          end: '+=500',
          scrub: 1,
          markers: false,
          pin: true
        }
      });
      topTl.addLabel('topLabel');
      this.DOM.chars.forEach(function (c, i) {
        topTl.fromTo(c, {
          autoAlpha: 0
        }, {
          autoAlpha: 1,
          y: -50,
          duration: 0.1
        }, "topLabel+=".concat(i / 20));
      });
      topTl.to(this.DOM.el2, {
        backgroundPositionY: 100,
        duration: 1
      }, 'topLabel');
    }
  }]);

  return TopParallaxAnimation;
}();

var SideParallaxAnimation = /*#__PURE__*/function () {
  function SideParallaxAnimation(els) {
    _classCallCheck(this, SideParallaxAnimation);

    this.DOM = {};
    console.log(els);
    this.DOM.els = document.querySelectorAll(els);
    console.log(this.DOM.els);
    this.animate();
  }

  _createClass(SideParallaxAnimation, [{
    key: "animate",
    value: function animate() {
      this.DOM.els.forEach(function (el) {
        gsap.to(el, {
          scale: 1.5,
          ease: 'none',
          duration: 2,
          scrollTrigger: {
            trigger: el,
            start: 'top 75%',
            end: 'bottom top',
            scrub: 1,
            markers: false
          }
        });
      });
    }
  }]);

  return SideParallaxAnimation;
}();
//# sourceMappingURL=parallax-animation.js.map
