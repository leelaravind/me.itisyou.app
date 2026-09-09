(function () {
  "use strict";

  var root = document.documentElement;
  var STORAGE_KEY = "me-itisyou-theme";

  /* ---------------- Theme toggle ---------------- */
  function getStoredTheme() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      return null;
    }
  }
  function setStoredTheme(value) {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch (e) {
      /* ignore — storage unavailable */
    }
  }

  function currentTheme() {
    var attr = root.getAttribute("data-theme");
    if (attr === "dark" || attr === "light") return attr;
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    updateToggleLabel(theme);
  }

  var toggleBtn = document.getElementById("theme-toggle");
  var toggleLabel = document.getElementById("theme-toggle-label");

  function updateToggleLabel(theme) {
    if (!toggleLabel) return;
    toggleLabel.textContent = theme === "dark" ? "Light" : "Dark";
    if (toggleBtn) {
      toggleBtn.setAttribute(
        "aria-label",
        theme === "dark" ? "Switch to light theme" : "Switch to dark theme"
      );
    }
  }

  var stored = getStoredTheme();
  if (stored === "dark" || stored === "light") {
    applyTheme(stored);
  } else {
    updateToggleLabel(currentTheme());
  }

  if (toggleBtn) {
    toggleBtn.addEventListener("click", function () {
      var next = currentTheme() === "dark" ? "light" : "dark";
      applyTheme(next);
      setStoredTheme(next);
    });
  }

  /* ---------------- Reduced motion / coarse pointer checks ---------------- */
  var prefersReducedMotion =
    window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var isCoarsePointer = window.matchMedia && window.matchMedia("(pointer: coarse)").matches;

  /* ---------------- Hero parallax (pointer-driven, damped) ---------------- */
  var stage = document.querySelector(".scene-stage");
  if (stage && !prefersReducedMotion && !isCoarsePointer) {
    var maxTilt = 7; // degrees
    var targetX = 0;
    var targetY = 0;
    var currentX = 0;
    var currentY = 0;
    var raf = null;

    function onPointerMove(e) {
      var rect = stage.getBoundingClientRect();
      var cx = rect.left + rect.width / 2;
      var cy = rect.top + rect.height / 2;
      var dx = (e.clientX - cx) / (rect.width / 2);
      var dy = (e.clientY - cy) / (rect.height / 2);
      dx = Math.max(-1, Math.min(1, dx));
      dy = Math.max(-1, Math.min(1, dy));
      targetY = dx * maxTilt;
      targetX = -dy * maxTilt;
      if (!raf) raf = requestAnimationFrame(tick);
    }

    function tick() {
      currentX += (targetX - currentX) * 0.12;
      currentY += (targetY - currentY) * 0.12;
      stage.style.transform =
        "rotateX(" + currentX.toFixed(2) + "deg) rotateY(" + currentY.toFixed(2) + "deg)";
      if (Math.abs(targetX - currentX) > 0.02 || Math.abs(targetY - currentY) > 0.02) {
        raf = requestAnimationFrame(tick);
      } else {
        raf = null;
      }
    }

    function onPointerLeave() {
      targetX = 0;
      targetY = 0;
      if (!raf) raf = requestAnimationFrame(tick);
    }

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    document.addEventListener("pointerleave", onPointerLeave, { passive: true });
  }

  /* ---------------- Card tilt-toward-pointer ---------------- */
  if (!prefersReducedMotion && !isCoarsePointer) {
    var cards = document.querySelectorAll(".card, .case-study");
    cards.forEach(function (card) {
      card.addEventListener(
        "pointermove",
        function (e) {
          var rect = card.getBoundingClientRect();
          var px = (e.clientX - rect.left) / rect.width - 0.5;
          var py = (e.clientY - rect.top) / rect.height - 0.5;
          var rotY = px * 5;
          var rotX = -py * 5;
          card.style.transform =
            "perspective(800px) rotateX(" +
            rotX.toFixed(2) +
            "deg) rotateY(" +
            rotY.toFixed(2) +
            "deg) translateZ(4px)";
        },
        { passive: true }
      );
      card.addEventListener("pointerleave", function () {
        card.style.transform = "perspective(800px) rotateX(0) rotateY(0) translateZ(0)";
      });
    });
  }

  /* ---------------- Scroll reveal ---------------- */
  var revealEls = document.querySelectorAll(".reveal");
  if (revealEls.length && "IntersectionObserver" in window && !prefersReducedMotion) {
    revealEls.forEach(function (el) {
      el.classList.add("reveal-ready");
    });
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach(function (el) {
      observer.observe(el);
    });
  }

})();
