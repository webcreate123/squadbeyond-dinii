
// common script 共通スクリプト
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
        new Splide(c[e], {
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
  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("a").forEach(function (e) {
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



    // トップページスクリプト
  document.addEventListener("DOMContentLoaded", () => {
    var e;
    if (document.querySelector(".TopHero_slide") && ((e = new Splide(".TopHero_slide", {
      type: "slide",
      perPage: 1,
      arrows: !1,
      pagination: !0,
      autoplay: !0,
      interval: 6e3,
      speed: 880,
      pauseOnHover: !1,
      pauseOnFocus: !1
    })).on("pagination:mounted", e => {
      e.items.forEach(e => {
        var t = document.createElementNS("http://www.w3.org/2000/svg", "svg")
          , i = (t.setAttribute("viewBox", "0 0 32 32"),
            document.createElementNS("http://www.w3.org/2000/svg", "circle"));
        i.setAttribute("cx", "16"),
          i.setAttribute("cy", "16"),
          i.setAttribute("r", "12"),
          t.appendChild(i),
          e.button.textContent = "",
          e.button.appendChild(t)
      }
      )
    }
    ),
      e.mount()),
      document.querySelector(".Clients_sliderw")) {
      var t = document.querySelectorAll(".Clients_sliderw");
      for (let e = 0; e < t.length; e++)
        0 === e ? new Splide(t[e], {
          type: "loop",
          fixedWidth: 143,
          fixedHeight: 143,
          drag: !1,
          arrows: !1,
          pagination: !1,
          pauseOnHover: !1,
          gap: 24,
          autoScroll: {
            speed: .3
          },
          breakpoints: {
            1024: {
              fixedWidth: 78.25,
              fixedHeight: 78.25,
              gap: 16
            }
          },
          breakpoints: {
            768: {
              fixedWidth: 70,
              fixedHeight: 70,
              gap: 8
            }
          }
        }).mount(window.splide.Extensions) : 1 === e && new Splide(t[e], {
          type: "loop",
          fixedWidth: 143,
          fixedHeight: 143,
          drag: !1,
          arrows: !1,
          pagination: !1,
          pauseOnHover: !1,
          gap: 24,
          autoScroll: {
            speed: -.3
          },
          breakpoints: {
            1024: {
              fixedWidth: 78.25,
              fixedHeight: 78.25,
              gap: 16
            }
          },
          breakpoints: {
            768: {
              fixedWidth: 70,
              fixedHeight: 70,
              gap: 8
            }
          }
        }).mount(window.splide.Extensions)
    }
  });