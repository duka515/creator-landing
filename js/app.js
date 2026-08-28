(function () {
  var c = window.SITE || {};
  var popup = c.popup || {};

  function setText(id, value) {
    var el = document.getElementById(id);
    if (el && value != null) el.textContent = value;
  }

  setText("creatorName", c.name);
  setText("popupName", c.name);
  setText("footerName", c.name);
  setText("tagline", c.tagline);
  setText("flag", c.flag);
  setText("videoCount", c.videos);
  setText("photoCount", c.photos);
  setText("photoCountLabel", c.photos);
  setText("year", new Date().getFullYear());

  if (c.name) {
    document.title = c.name;
    var ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", c.name);
  }

  var avatar = document.getElementById("avatar");
  if (avatar && c.avatar) avatar.src = c.avatar;

  var headline = document.getElementById("popupHeadline");
  if (headline && popup.headline) {
    headline.innerHTML = popup.headline + ' "<span>' + (popup.brand || "") + '</span>"';
  }
  var steps = document.getElementById("popupSteps");
  if (steps && popup.steps) {
    steps.innerHTML = popup.steps.map(function (s) {
      return "<div>" + s + "</div>";
    }).join("");
  }
  if (popup.button) setText("popupButton", popup.button);
  var popupImg = document.getElementById("popupImage");
  if (popupImg && popup.image) popupImg.src = popup.image;

  var overlay = document.getElementById("funnelOverlay");
  var join = document.getElementById("popupJoin");
  var popupUrl = popup.url || "#join";

  if (join) {
    join.href = popupUrl;
    join.target = "_blank";
    join.rel = "noopener noreferrer";
  }

  function openFunnel(e) {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    if (!overlay) return;
    if (popup.enabled === false) {
      if (popupUrl && popupUrl.indexOf("http") === 0) window.location.href = popupUrl;
      return;
    }
    overlay.hidden = false;
    document.documentElement.classList.add("funnel-open");
    document.body.classList.add("funnel-open");
  }

  function closeFunnel(e) {
    if (e) e.preventDefault();
    if (!overlay) return;
    overlay.hidden = true;
    document.documentElement.classList.remove("funnel-open");
    document.body.classList.remove("funnel-open");
  }

  document.querySelectorAll(".js-open-funnel").forEach(function (el) {
    el.addEventListener("click", openFunnel);
  });

  var closeBtn = document.getElementById("popupClose");
  if (closeBtn) closeBtn.addEventListener("click", closeFunnel);
  if (overlay) {
    overlay.addEventListener("click", function (e) {
      if (e.target === overlay) closeFunnel(e);
    });
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeFunnel();
  });
})();
