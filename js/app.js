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
  setText("tgSubs", c.subscribers);
  setText("tgWelcome", c.welcome);
  setText("year", new Date().getFullYear());
  if (c.name) document.title = c.name;

  var avatar = document.getElementById("avatar");
  if (avatar && c.avatar) avatar.src = c.avatar;
  var tgAvatar = document.getElementById("tgAvatar");
  if (tgAvatar && c.avatar) tgAvatar.src = c.avatar;
  if (popup.button) setText("popupButton", popup.button);

  var user = (c.telegramUser || "").replace("@", "").replace("https://t.me/", "");
  var webUrl = user ? "https://t.me/" + user : "#";
  var appUrl = user ? "tg://resolve?domain=" + user : "#";

  var overlay = document.getElementById("funnelOverlay");
  var join = document.getElementById("popupJoin");
  if (join) join.href = webUrl;

  function openTelegram() {
    if (!user) return;
    window.location.href = appUrl;
    setTimeout(function () {
      window.location.href = webUrl;
    }, 700);
  }

  function openFunnel(e) {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    if (!overlay) return;
    overlay.hidden = false;
    overlay.style.display = "flex";
    overlay.style.position = "fixed";
    overlay.style.inset = "0";
    overlay.style.zIndex = "2147483647";
    overlay.style.alignItems = "center";
    overlay.style.justifyContent = "center";
    overlay.style.background = "rgba(0,0,0,0.78)";
    document.documentElement.classList.add("funnel-open");
    document.body.classList.add("funnel-open");
  }

  function closeFunnel(e) {
    if (e) e.preventDefault();
    if (!overlay) return;
    overlay.hidden = true;
    overlay.style.display = "none";
    document.documentElement.classList.remove("funnel-open");
    document.body.classList.remove("funnel-open");
  }

  document.querySelectorAll(".js-open-funnel").forEach(function (el) {
    el.addEventListener("click", openFunnel);
  });

  if (join) {
    join.addEventListener("click", function (e) {
      e.preventDefault();
      openTelegram();
    });
  }

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
