document.addEventListener("DOMContentLoaded", () => {
    var e;
    if (document.querySelector(".TopHero_slide") && ((e = new Splide(".TopHero_slide",{
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
            0 === e ? new Splide(t[e],{
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
            }).mount(window.splide.Extensions) : 1 === e && new Splide(t[e],{
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
}
);
