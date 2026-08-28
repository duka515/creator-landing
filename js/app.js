(function () {
  var c = window.SITE || {};
  var setText = function (id, value) {
    var el = document.getElementById(id);
    if (el && value != null) el.textContent = value;
  };

  setText("creatorName", c.name);
  setText("popupName", c.name);
  setText("footerName", c.name);
  setText("tagline", c.tagline);
  setText("flag", c.flag);
  setText("videoCount", c.videos);
  setText("photoCount", c.photos);
  setText("photoCountLabel", c.photos);
  setText("year", new Date().getFullYear());

  var avatar = document.getElementById("avatar");
  if (avatar && c.avatar) avatar.src = c.avatar;

  var popup = c.popup || {};
  var popupUrl = popup.url || c.premiumUrl || "#";

  var headline = document.getElementById("popupHeadline");
  if (headline && popup.headline) {
    headline.innerHTML = popup.headline + ' "<span>' + (popup.brand || "") + '</span>"';
  }
  var steps = document.getElementById("popupSteps");
  if (steps && popup.steps) {
    steps.innerHTML = popup.steps.map(function (s) { return "<div>" + s + "</div>"; }).join("");
  }
  if (popup.button) setText("popupButton", popup.button);
  var popupImg = document.getElementById("popupImage");
  if (popupImg && popup.image) popupImg.src = popup.image;

  var join = document.getElementById("popupJoin");
  if (join) {
    join.href = popupUrl;
    join.target = "_blank";
    join.rel = "noopener";
  }

  var modal = document.getElementById("affiliateModal");

  function openModal(e) {
    if (popup.enabled === false) return;
    if (e) e.preventDefault();
    modal.classList.add("show");
    document.body.classList.add("modal-open");
  }

  function closeModal() {
    modal.classList.remove("show");
    document.body.classList.remove("modal-open");
  }

  ["liveLink", "premiumLink", "viewAll"].forEach(function (id) {
    var a = document.getElementById(id);
    if (a) a.addEventListener("click", openModal);
  });
  document.querySelectorAll("a.premium-link").forEach(function (a) {
    a.addEventListener("click", openModal);
  });

  document.getElementById("popupClose").addEventListener("click", closeModal);
  modal.addEventListener("click", function (e) {
    if (e.target === modal) closeModal();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeModal();
  });
})();
