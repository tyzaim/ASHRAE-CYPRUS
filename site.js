/* Renders the content from site-data.js. You should not need to edit this file. */
(function () {
  var D = window.SITE_DATA || {};
  var MON = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null && text !== "") e.textContent = text;
    return e;
  }
  function safeUrl(u) { return /^https?:\/\//i.test(String(u || "")) ? u : ""; }
  function parseDate(d) {
    var m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(d || "").trim());
    return m ? new Date(+m[1], +m[2] - 1, +m[3]) : null;
  }
  function initials(name) {
    return String(name || "").split(/\s+/).filter(Boolean).slice(0, 2).map(function (w) { return w[0]; }).join("").toUpperCase();
  }
  function empty(host, msg) { host.appendChild(el("div", "empty", msg)); }
  function each(list, fn) {
    (list || []).forEach(function (item) { try { fn(item); } catch (e) { /* skip a bad entry */ } });
  }
  function avatar(p) {
    var wrap = el("div", "avatar");
    if (p.photo) {
      var img = document.createElement("img");
      img.src = p.photo; img.alt = p.name || ""; img.className = "avatar-img";
      img.onerror = function () { wrap.removeChild(img); wrap.textContent = initials(p.name); };
      wrap.className = "avatar has-photo"; wrap.appendChild(img);
    } else { wrap.textContent = initials(p.name); }
    return wrap;
  }

  function eventRow(ev) {
    var d = parseDate(ev.date); if (!d || !ev.title) return null;
    var row = el("div", "ev");
    var box = el("div", "date");
    box.appendChild(el("b", "", String(d.getDate())));
    box.appendChild(el("span", "", MON[d.getMonth()] + " " + d.getFullYear()));
    var info = el("div", "ev-info");
    info.appendChild(el("h3", "", ev.title));
    var meta = [ev.time, ev.venue].filter(Boolean).join(" · ");
    if (meta) info.appendChild(el("p", "ev-meta", meta));
    if (ev.description) info.appendChild(el("p", "ev-desc", ev.description));
    var link = safeUrl(ev.link);
    if (link) {
      var a = el("a", "more", "Details and registration →");
      a.href = link; a.target = "_blank"; a.rel = "noopener"; info.appendChild(a);
    }
    row.appendChild(box); row.appendChild(info);
    return row;
  }

  var today = new Date(); today.setHours(0, 0, 0, 0);
  var all = (D.events || []).map(function (e) { return { e: e, d: parseDate(e.date) }; }).filter(function (x) { return x.d && x.e.title; });
  var upcoming = all.filter(function (x) { return x.d >= today; }).sort(function (a, b) { return a.d - b.d; });
  var past = all.filter(function (x) { return x.d < today; }).sort(function (a, b) { return b.d - a.d; });

  var R = {
    "events-upcoming": function (host) {
      var lim = parseInt(host.getAttribute("data-limit"), 10) || 99;
      var items = upcoming.slice(0, lim);
      if (!items.length) return empty(host, "There are no upcoming events at this time. Please check back soon.");
      items.forEach(function (x) { var r = eventRow(x.e); if (r) host.appendChild(r); });
    },
    "events-past": function (host) {
      if (!past.length) return empty(host, "Past events will be listed here.");
      past.forEach(function (x) { var r = eventRow(x.e); if (r) host.appendChild(r); });
    },
    "board": function (host) {
      var list = D.board || [];
      if (!list.length) return empty(host, "The Board of Governors will be announced here soon.");
      var grid = el("div", "people");
      each(list, function (p) {
        var c = el("div", "person");
        c.appendChild(avatar(p));
        c.appendChild(el("h3", "", p.name));
        c.appendChild(el("h4", "", p.role));
        if (p.email) { var a = el("a", "", p.email); a.href = "mailto:" + p.email; c.appendChild(a); }
        grid.appendChild(c);
      });
      host.appendChild(grid);
    },
    "board-year": function (host) { host.textContent = D.boardYear || ""; },
    "presidents": function (host) {
      var list = D.presidents || [];
      if (!list.length) return empty(host, "The list of past presidents will be added here.");
      var grid = el("div", "people");
      each(list, function (p) {
        var c = el("div", "person");
        c.appendChild(avatar(p));
        c.appendChild(el("h3", "", p.name));
        c.appendChild(el("h4", "", p.years ? "President " + p.years : "Past President"));
        grid.appendChild(c);
      });
      host.appendChild(grid);
    },
    "media": function (host) {
      var list = D.media || [];
      if (!list.length) return empty(host, "Recordings of our webinars and events will appear here.");
      each(list, function (m) {
        var url = safeUrl(m.url);
        var row = el(url ? "a" : "div", "media-item");
        if (url) { row.href = url; row.target = "_blank"; row.rel = "noopener"; }
        row.appendChild(el("div", "play", "▶"));
        var info = el("div");
        if (m.type) info.appendChild(el("span", "tag", m.type));
        var d = parseDate(m.date);
        var title = (m.title || "") + (d ? " – " + d.getDate() + " " + MON[d.getMonth()] + " " + d.getFullYear() : "");
        info.appendChild(el("h3", "", title));
        row.appendChild(info); host.appendChild(row);
      });
    },
    "sponsors": function (host) {
      var tiers = D.sponsors || [], any = false;
      Object.keys(tiers).forEach(function (name) {
        var list = (tiers[name] || []).filter(function (s) { return s && s.name; });
        if (!list.length) return; any = true;
        var tier = el("div", "tier"); tier.appendChild(el("h3", "", name));
        var slots = el("div", "slots");
        list.forEach(function (s) {
          var url = safeUrl(s.url), box = el(url ? "a" : "div", "slot logo-slot");
          if (url) { box.href = url; box.target = "_blank"; box.rel = "noopener"; }
          if (s.logo) { var img = document.createElement("img"); img.src = s.logo; img.alt = s.name; box.appendChild(img); }
          else { box.textContent = s.name; }
          slots.appendChild(box);
        });
        tier.appendChild(slots); host.appendChild(tier);
      });
      if (any) { var sec = document.getElementById("sponsors-section"); if (sec) sec.hidden = false; }
    },
    "chair": function (host) {
      var c = (D.chairs || {})[host.getAttribute("data-slug")];
      if (!c || !c.name) { host.hidden = true; return; }
      host.appendChild(avatar(c));
      host.appendChild(el("h3", "", c.name));
      host.appendChild(el("p", "", host.getAttribute("data-title")));
      if (c.email) { var a = el("a", "", c.email); a.href = "mailto:" + c.email; host.appendChild(a); }
    }
  };

  var nodes = document.querySelectorAll("[data-render]");
  for (var i = 0; i < nodes.length; i++) {
    var fn = R[nodes[i].getAttribute("data-render")];
    if (fn) { try { fn(nodes[i]); } catch (e) { /* ignore */ } }
  }

  var mails = document.querySelectorAll("[data-email]");
  for (var j = 0; j < mails.length; j++) {
    if (D.email) {
      mails[j].textContent = D.email;
      mails[j].hidden = false;
      if (mails[j].tagName === "A") mails[j].href = "mailto:" + D.email;
    } else { mails[j].hidden = true; }
  }
  var soc = D.social || {};
  var socials = document.querySelectorAll("[data-social]");
  for (var s = 0; s < socials.length; s++) {
    var u = safeUrl(soc[socials[s].getAttribute("data-social")]);
    if (u) { socials[s].href = u; socials[s].hidden = false; }
  }

  var layout = document.querySelectorAll("[data-chair-layout]");
  for (var k = 0; k < layout.length; k++) {
    var side = layout[k].querySelector("[data-render=chair]");
    if (side && side.hidden) layout[k].classList.add("single");
  }
})();
