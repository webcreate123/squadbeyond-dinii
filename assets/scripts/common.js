function getParameterByName(e, t) {
    t = t || window.location.href,
    e = e.replace(/[\[\]]/g, "\\$&");
    e = new RegExp("[?&]" + e + "(=([^&#]*)|&|#|$)").exec(t);
    return e ? e[2] ? decodeURIComponent(e[2].replace(/\+/g, " ")) : "" : null
}
document.addEventListener("DOMContentLoaded", () => {
    let e = document.body
      , t = document.querySelector(".header")
      , m = document.querySelector(".header_menu")
      , a = document.querySelector(".menu")
      , u = (m.addEventListener("click", () => {
        e.classList.toggle("-active"),
        t.classList.toggle("-active"),
        a.classList.toggle("-active")
    }
    ),
    document.querySelector(".js-menu_nav_open"))
      , n = document.querySelector(".menu_content")
      , r = document.querySelector(".menu_back");
    if (u.addEventListener("click", () => {
        n.classList.add("-service-open"),
        r.classList.add("-active")
    }
    ),
    r.addEventListener("click", () => {
        n.classList.remove("-service-open"),
        r.classList.remove("-active")
    }
    ),
    window.addEventListener("resize", () => {
        1024 < window.innerWidth && (e.classList.remove("-active"),
        t.classList.remove("-active"),
        n.classList.remove("-active"))
    }
    ),
    document.querySelector(".post_slider")) {
        var c = document.querySelectorAll(".post_slider");
        for (let e = 0; e < c.length; e++)
            new Splide(c[e],{
                type: "loop",
                focus: "center",
                fixedWidth: 368,
                arrows: !0,
                pagination: !0,
                gap: 32,
                breakpoints: {
                    768: {
                        fixedWidth: 297,
                        gap: 12
                    }
                }
            }).mount()
    }
}
);
let utm_source = getParameterByName("utm_source")
  , utm_medium = getParameterByName("utm_medium")
  , utm_campaign = getParameterByName("utm_campaign")
  , utm_content = getParameterByName("utm_content")
  , utm_term = getParameterByName("utm_term");
document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll("a").forEach(function(e) {
        var t = new URL(e.href);
        utm_source && t.searchParams.set("utm_source", utm_source),
        utm_medium && t.searchParams.set("utm_medium", utm_medium),
        utm_campaign && t.searchParams.set("utm_campaign", utm_campaign),
        utm_content && t.searchParams.set("utm_content", utm_content),
        utm_term && t.searchParams.set("utm_term", utm_term),
        e.href = t.toString()
    }),
    document.querySelector('input[name="utm_source"]').value = utm_source || "",
    document.querySelector('input[name="utm_medium"]').value = utm_medium || "",
    document.querySelector('input[name="utm_campaign"]').value = utm_campaign || "",
    document.querySelector('input[name="utm_content"]').value = utm_content || "",
    document.querySelector('input[name="utm_term"]').value = utm_term || ""
});
