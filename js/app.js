(function () {
  var c = window.SITE || {};
  var setText = function (id, value) {
    var el = document.getElementById(id);
    if (el && value != null) el.textContent = value;
  };

  setText("creatorName", c.name);
  setText("footerName", c.name);
  setText("tagline", c.tagline);
  setText("flag", c.flag);
  setText("videoCount", c.videos);
  setText("photoCount", c.photos);
  setText("photoCountLabel", c.photos);
  setText("year", new Date().getFullYear());

  var avatar = document.getElementById("avatar");
  if (avatar && c.avatar) avatar.src = c.avatar;

  ["liveLink"].forEach(function (id) {
    var a = document.getElementById(id);
    if (a && c.liveUrl) a.href = c.liveUrl;
  });

  ["premiumLink", "viewAll"].forEach(function (id) {
    var a = document.getElementById(id);
    if (a && c.premiumUrl) a.href = c.premiumUrl;
  });

  document.querySelectorAll("a.premium-link").forEach(function (a) {
    if (c.premiumUrl) a.href = c.premiumUrl;
    a.target = "_blank";
    a.rel = "noopener";
  });
})();
