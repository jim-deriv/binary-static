(self.webpackChunkderiv_com = self.webpackChunkderiv_com || []).push([
  [678],
  {
    8994: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          default: function () {
            return se;
          },
        });
      var a = i(7294),
        n = i(5444),
        r = i(9),
        o = i(2466),
        d = i(7513),
        l = i(4845),
        m = i(6299),
        p = function () {
          var e = (0, a.useState)(!1),
            t = e[0],
            i = e[1],
            n = (0, a.useState)((0, l.jU)() ? window.innerWidth : 0),
            r = n[0],
            o = n[1];
          (0, a.useEffect)(function () {
            if (!(0, l.jU)()) return !1;
            var e = function () {
              return o(window.innerWidth);
            };
            return (
              d(),
              window.addEventListener("resize", e),
              function () {
                window.removeEventListener("resize", e), d();
              }
            );
          });
          var d = function () {
            i(!!(0, l.jU)() && !!(r <= m.d.tablet));
          };
          return [t];
        },
        c = i(3324),
        g = i.p + "static/hero_desktop-96d6a94d9ac0b2e1d09080c9cb78e553.png",
        u = i.p + "static/hero_mobile-ec0c72898489d916a3b735bc37ea61a0.png",
        x = (0, r.ZP)(d.kC).withConfig({
          displayName: "_dHero__MainWrapper",
          componentId: "sc-160pht5-0",
        })(["position:relative;"]),
        h = (0, r.ZP)(d.kC).withConfig({
          displayName: "_dHero__BackgroundWrapper",
          componentId: "sc-160pht5-1",
        })(
          [
            "background-image:url(",
            ");background-attachment:fixed;background-repeat:no-repeat;background-size:cover;position:absolute;left:0;top:0;",
          ],
          function (e) {
            return e.bg_image;
          }
        ),
        s = (0, r.ZP)(d.W2).withConfig({
          displayName: "_dHero__ParentWrapper",
          componentId: "sc-160pht5-2",
        })(
          [
            "position:relative;z-index:2;padding:192px 0 120px;justify-content:flex-start;@media (max-width:1366px){width:90%;}@media ",
            "{padding:86px 0 80px;}",
          ],
          m.Z.tabletL
        ),
        M = (0, r.ZP)(d.kC).withConfig({
          displayName: "_dHero__ItemsWrapper",
          componentId: "sc-160pht5-3",
        })(
          [
            "flex-direction:row;height:478px;@media ",
            "{height:500px;}@media ",
            "{flex-direction:column-reverse;height:auto;max-width:58.8rem;}",
          ],
          m.Z.desktopL,
          m.Z.tabletL
        ),
        L = (0, r.ZP)(d.kC).withConfig({
          displayName: "_dHero__LeftWrapper",
          componentId: "sc-160pht5-4",
        })(
          [
            "flex-direction:column;align-items:flex-start;width:588px;max-height:312px;margin-right:24px;@media (max-width:1222px){max-height:unset;padding-bottom:80px;}@media ",
            "{width:100%;margin-right:0;max-height:unset;justify-content:center;padding-bottom:0;}",
          ],
          m.Z.tabletL
        ),
        w = (0, r.ZP)(d.kC).withConfig({
          displayName: "_dHero__RightWrapper",
          componentId: "sc-160pht5-5",
        })(["width:540px;@media ", "{width:100%;margin:0 auto;}"], m.Z.tabletL),
        I = (0, r.ZP)(d.kC).withConfig({
          displayName: "_dHero__DesktopWrapper",
          componentId: "sc-160pht5-6",
        })(["@media ", "{display:none;}"], m.Z.tablet),
        y = r.ZP.div.withConfig({
          displayName: "_dHero__MobileWrapper",
          componentId: "sc-160pht5-7",
        })(
          [
            "display:none;@media ",
            "{display:flex;justify-content:center;width:100%;}",
          ],
          m.Z.tablet
        ),
        N = (0, r.ZP)(o.h4).withConfig({
          displayName: "_dHero__StyledHeader",
          componentId: "sc-160pht5-8",
        })(
          [
            "@media ",
            "{font-size:80px;}@media ",
            "{font-size:32px;line-height:40px;}",
          ],
          m.Z.desktopL,
          m.Z.tablet
        ),
        b = (0, r.ZP)(o.h4).withConfig({
          displayName: "_dHero__StyledSmallHeader",
          componentId: "sc-160pht5-9",
        })(["@media ", "{font-size:18px;line-height:26px;}"], m.Z.tablet),
        j = (0, r.ZP)(d.kC).withConfig({
          displayName: "_dHero__BtnWrapper",
          componentId: "sc-160pht5-10",
        })(["margin-top:24px;justify-content:flex-start;"]),
        f = (0, r.ZP)(c.Qj).withConfig({
          displayName: "_dHero__StyledLinkButton",
          componentId: "sc-160pht5-11",
        })([
          "padding:10px 16px;background:var(--color-green-3);border:2px solid var(--color-green-3);",
        ]),
        D = function () {
          var e = p()[0] ? u : g,
            t = (0, n.useStaticQuery)("3614738892");
          return a.createElement(
            x,
            null,
            a.createElement(
              s,
              null,
              a.createElement(
                d.kC,
                null,
                a.createElement(
                  M,
                  null,
                  a.createElement(
                    L,
                    null,
                    a.createElement(
                      N,
                      {
                        type: "hero",
                        color: "white",
                        mb: "32px",
                        mt: "24px",
                        tabletL: {
                          max_width: "58.8rem",
                          mb: "16px",
                          mt: "16px",
                        },
                      },
                      "It’s so easy to switch to Deriv"
                    ),
                    a.createElement(
                      b,
                      {
                        type: "heading-3",
                        color: "white",
                        weight: "normal",
                        tabletL: { max_width: "58.8rem" },
                      },
                      "No sign up required — just use your Binary.com credentials"
                    ),
                    a.createElement(
                      y,
                      null,
                      a.createElement(
                        j,
                        null,
                        a.createElement(
                          f,
                          {
                            to: "https://deriv.com/",
                            rel: "noopener noreferrer",
                            secondary: "true",
                          },
                          "Take me to Deriv"
                        )
                      )
                    )
                  ),
                  a.createElement(
                    w,
                    null,
                    a.createElement(
                      o.lr,
                      Object.assign(
                        { has_autoplay: !0, autoplay_interval: 4500 },
                        {
                          options: { loop: !0 },
                          container_style: {
                            maxWidth: "100%",
                            margin: "0 auto",
                          },
                          slide_style: {
                            minWidth: "100%",
                            position: "relative",
                          },
                        }
                      ),
                      [
                        {
                          img: "hero_dmt5_banner",
                          img_alt: "dmt5 banner",
                          img_mobile: "hero_dmt5_banner_mobile",
                          img_alt_mobile: "dmt5 banner mobile",
                        },
                        {
                          img: "hero_dtrader_banner",
                          img_alt: "dtrader banner",
                          img_mobile: "hero_dtrader_banner_mobile",
                          img_alt_mobile: "dtrader banner mobile",
                        },
                      ].map(function (e, i) {
                        return a.createElement(
                          d.kC,
                          { key: i },
                          a.createElement(
                            I,
                            null,
                            a.createElement(o.et, {
                              data: t[e.img],
                              alt: e.img_alt,
                              width: "100%",
                            })
                          )
                        );
                      })
                    )
                  )
                )
              )
            ),
            a.createElement(h, { bg_image: e })
          );
        },
        S = (0, r.ZP)(d.S$).withConfig({
          displayName: "_dBanner__SectionWrapper",
          componentId: "rs5f31-0",
        })(
          [
            "background:var(--color-white);padding:120px 0;@media ",
            "{padding:40px 0;}",
          ],
          m.Z.tabletL
        ),
        _ = function () {
          return a.createElement(
            S,
            null,
            a.createElement(
              d.kC,
              null,
              a.createElement(
                o.h4,
                {
                  type: "heading-3",
                  weight: "normal",
                  align: "center",
                  max_width: "90rem",
                  as: "h3",
                  tabletL: { max_width: "58.8rem" },
                },
                "We’ve moved our trading platforms to Deriv so we can focus on boosting your trading experience."
              )
            )
          );
        },
        E = i(8838);
      var C =
          "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiI+PHBhdGggZmlsbD0iI0ZGNDQ0RiIgZD0iTTcuMjkzLjI5M2ExIDEgMCAwMDAgMS40MTRMMTIuNTg2IDdIMWExIDEgMCAwMDAgMmwxMS41ODYtLjAwMS01LjI5MyA1LjI5NGExIDEgMCAwMDEuNDE0IDEuNDE0bDctNyAuMDczLS4wODIuMDA3LS4wMDgtLjA4LjA5YS45MjcuOTI3IDAgMDAuMDk3LS4xMTJjLjAxOC0uMDI0LjAzNC0uMDQ5LjA1LS4wNzRsLjAyMS0uMDM3Yy4wMTEtLjAyLjAyMi0uMDQuMDMxLS4wNmwuMDIzLS4wNTMuMDIxLS4wNi4wMTQtLjA0NS4wMTYtLjA2NS4wMDktLjA1My4wMDctLjA1OC4wMDQtLjA3di0uMDRjMC0uMDIzLS4wMDItLjA0Ni0uMDA0LS4wN0wxNiA4YzAtLjA1LS4wMDQtLjEtLjAxMS0uMTQ5bC0uMDEtLjA1MmEuNzYyLjc2MiAwIDAwLS4wMTUtLjA2NWwtLjAxNC0uMDQ2LS4wMjEtLjA2LS4wMjMtLjA1MS0uMDMtLjA2MS0uMDIyLS4wMzdhMS4yIDEuMiAwIDAwLS4wNS0uMDc0bC0uMDE3LS4wMjJhLjk3Ljk3IDAgMDAtLjA4LS4wOWwtNy03YTEgMSAwIDAwLTEuNDE0IDB6Ii8+PC9zdmc+",
        Z = (0, r.ZP)(d.W2).withConfig({
          displayName: "_favorite__StyledContainer",
          componentId: "ciwcd4-0",
        })(["@media ", "{display:none;}"], m.Z.tabletS),
        A = (0, r.ZP)(d.kC).withConfig({
          displayName: "_favorite__ImageWrapper",
          componentId: "ciwcd4-1",
        })(
          [
            "max-width:384px;position:relative;:first-child{margin-right:24px;}@media ",
            "{margin:0 auto;:first-child{margin:0 auto 44px;}}",
          ],
          m.Z.tabletL
        ),
        T = (0, r.ZP)(E.UE).withConfig({
          displayName: "_favorite__LearnMore",
          componentId: "ciwcd4-2",
        })(
          [
            "width:131px;height:40px;display:flex;flex-direction:row;justify-content:center;align-items:center;padding:10px 16px;background:#ffffff;border-radius:100px;position:absolute;bottom:-8%;left:50%;transform:translate(-50%,-50%);filter:drop-shadow(0 0 24px rgba(0,0,0,0.08)) drop-shadow(0 24px 24px rgba(0,0,0,0.08));text-decoration:none;",
            "{font-weight:bold;font-size:14px;line-height:20px;color:var(--color-red);}",
          ],
          o.xv
        ),
        v = r.ZP.img.withConfig({
          displayName: "_favorite__ArrowImg",
          componentId: "ciwcd4-3",
        })(["margin-left:8px;width:16px;height:16px;"]),
        k = function () {
          var e = (0, n.useStaticQuery)("2800676821");
          return a.createElement(
            Z,
            null,
            a.createElement(
              d.kC,
              { fd: "column", mb: "120px", tabletL: { mb: "60px" } },
              a.createElement(
                o.h4,
                {
                  type: "heading-2",
                  align: "center",
                  mb: "40px",
                  tabletL: { mb: "24px" },
                },
                "Access your favourite platforms in one place"
              ),
              a.createElement(
                d.kC,
                { tabletL: { fd: "column" } },
                a.createElement(
                  A,
                  null,
                  a.createElement(o.et, {
                    data: e.deriv_mt5_fav,
                    alt: "Deriv MT5 favorite",
                    width: "100%",
                  }),
                  a.createElement(
                    T,
                    { to: "https://deriv.com/dmt5/" },
                    a.createElement(o.xv, null, "Learn more"),
                    a.createElement(v, { src: C, alt: "arrow" })
                  )
                ),
                a.createElement(
                  A,
                  null,
                  a.createElement(o.et, {
                    data: e.dtrader_fav,
                    alt: "Dtrader favorite",
                    width: "100%",
                  }),
                  a.createElement(
                    T,
                    { to: "https://deriv.com/dtrader/" },
                    a.createElement(o.xv, null, "Learn more"),
                    a.createElement(v, { src: C, alt: "arrow" })
                  )
                )
              )
            )
          );
        };
      var z = (0, r.ZP)(d.W2).withConfig({
          displayName: "_benefits__ParentWrapper",
          componentId: "ujea8e-0",
        })(
          [
            "flex-direction:row;justify-content:center;flex-wrap:wrap;max-width:964px;width:100%;@media ",
            "{flex-direction:column;}",
          ],
          m.Z.laptop
        ),
        P = r.ZP.img.withConfig({
          displayName: "_benefits__Icon",
          componentId: "ujea8e-1",
        })(["width:48px;height:48px;"]),
        Y = (0, r.ZP)(d.kC).withConfig({
          displayName: "_benefits__ContentWrapper",
          componentId: "ujea8e-2",
        })(
          [
            "max-width:470px;margin-bottom:24px;:nth-child(odd){margin-left:24px;}@media ",
            "{max-width:58.8rem;width:100%;padding:0 16px;:nth-child(odd){margin-left:0;}}",
          ],
          m.Z.laptop
        ),
        Q = (0, r.ZP)(d.kC).withConfig({
          displayName: "_benefits__BtnWrapper",
          componentId: "ujea8e-3",
        })(
          [
            "margin-top:16px;padding-bottom:80px;@media ",
            "{margin-top:0;padding-bottom:0;}",
          ],
          m.Z.laptop
        ),
        O = (0, r.ZP)(c.Qj).withConfig({
          displayName: "_benefits__StyledLinkButton",
          componentId: "ujea8e-4",
        })(["padding:10px 16px;"]),
        U = (0, r.ZP)(o.h4).withConfig({
          displayName: "_benefits__StyledHeader",
          componentId: "ujea8e-5",
        })(["@media (min-width:1440px){font-size:32px;line-height:40px;}"]),
        W = [
          {
            icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjQ4IiBoZWlnaHQ9IjQ4IiByeD0iOCIgZmlsbD0iI0ZGNjQ0NCIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMzEgMTZoLTQuMThjLS40Mi0xLjE2LTEuNTItMi0yLjgyLTItMS4zIDAtMi40Ljg0LTIuODIgMkgxN2MtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMlYxOGMwLTEuMS0uOS0yLTItMnptLTcgMGMuNTUgMCAxIC40NSAxIDFzLS40NSAxLTEgMS0xLS40NS0xLTEgLjQ1LTEgMS0xem0tNS4zIDEwLjcgMi41OSAyLjU5Yy4zOS4zOSAxLjAzLjM5IDEuNDEgMGw2LjU5LTYuNTlhLjk5Ni45OTYgMCAxIDAtMS40MS0xLjQxTDIyIDI3LjE3bC0xLjg5LTEuODhhLjk5Ni45OTYgMCAxIDAtMS40MSAxLjQxeiIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg==",
            icon_alt: "No Signup required",
            header: "No sign-up required",
            desc: "Just log in with your Binary.com credentials and start trading right away.",
          },
          {
            icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjQ4IiBoZWlnaHQ9IjQ4IiByeD0iOCIgZmlsbD0iIzk4QkU3MSIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMzIgMTZIMTZjLS41NSAwLTEgLjQ1LTEgMXYyYzAgLjU1LjQ1IDEgMSAxaDE2Yy41NSAwIDEtLjQ1IDEtMXYtMmMwLS41NS0uNDUtMS0xLTF6bS0xNiA2aDE2Yy41NSAwIDEgLjQ1IDEgMXYxYzAgLjU1LS40NSAxLTEgMUgxNmMtLjU1IDAtMS0uNDUtMS0xdi0xYzAtLjU1LjQ1LTEgMS0xem0wIDVoMTZjLjU1IDAgMSAuNDUgMSAxcy0uNDUgMS0xIDFIMTZjLS41NSAwLTEtLjQ1LTEtMXMuNDUtMSAxLTF6bS0uNSA0aDE3Yy4yOCAwIC41LjIyLjUuNXMtLjIyLjUtLjUuNWgtMTdjLS4yOCAwLS41LS4yMi0uNS0uNXMuMjItLjUuNS0uNXoiIGZpbGw9IiNmZmYiLz48L3N2Zz4=",
            icon_alt: "Over 100+ instruments",
            header: "Over 100+ instruments",
            desc: "Trade what you like — forex, commodities, stocks, stock indices, and synthetic indices.",
          },
          {
            icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjQ4IiBoZWlnaHQ9IjQ4IiByeD0iOCIgZmlsbD0iIzUwODVCNiIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjMuMDgzIDMyLjgyYzAgLjY0LS41OSAxLjEyLTEuMjEuOTgtNC40Ny0xLTcuNzktNS4wMS03Ljc5LTkuOCAwLTQuNzkgMy4zMi04LjggNy43OS05LjhhLjk5OC45OTggMCAwIDEgMS4yMS45OHYxNy42NHptMi4wMy0xNy42NHY2LjgxYzAgLjU1LjQ1IDEgMSAxaDYuNzljLjY0IDAgMS4xMi0uNTkuOTgtMS4yMi0uODUtMy43Ni0zLjgtNi43Mi03LjU1LTcuNTctLjYzLS4xNC0xLjIyLjM0LTEuMjIuOTh6bTAgMTcuNjR2LTYuODFjMC0uNTUuNDUtMSAxLjAxLTEuMDFoNi43OWMuNjMgMCAxLjEyLjYuOTggMS4yMi0uODUgMy43Ni0zLjggNi43My03LjU2IDcuNTgtLjYzLjE0LTEuMjItLjM0LTEuMjItLjk4eiIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg==",
            icon_alt: "An enhanced experience",
            header: "An enhanced experience",
            desc: "Trade confidently on a service created by a trusted online trading brand with over 20 years of experience. ",
          },
          {
            icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjQ4IiBoZWlnaHQ9IjQ4IiByeD0iOCIgZmlsbD0iIzc4NjJBQSIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjIgMjVoLTZjLS41NSAwLTEtLjQ1LTEtMXYtOGMwLS41NS40NS0xIDEtMWg2Yy41NSAwIDEgLjQ1IDEgMXY4YzAgLjU1LS40NSAxLTEgMXptMCA4aC02Yy0uNTUgMC0xLS40NS0xLTF2LTRjMC0uNTUuNDUtMSAxLTFoNmMuNTUgMCAxIC40NSAxIDF2NGMwIC41NS0uNDUgMS0xIDF6bTQgMGg2Yy41NSAwIDEtLjQ1IDEtMXYtOGMwLS41NS0uNDUtMS0xLTFoLTZjLS41NSAwLTEgLjQ1LTEgMXY4YzAgLjU1LjQ1IDEgMSAxem0tMS0xM3YtNGMwLS41NS40NS0xIDEtMWg2Yy41NSAwIDEgLjQ1IDEgMXY0YzAgLjU1LS40NSAxLTEgMWgtNmMtLjU1IDAtMS0uNDUtMS0xeiIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg==",
            icon_alt: "Your favourites in one place",
            header: "Your favourites in one place",
            desc: "Trade the way you like on the Deriv MetaTrader 5 (DMT5) and DTrader. ",
          },
          {
            icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjQ4IiBoZWlnaHQ9IjQ4IiByeD0iOCIgZmlsbD0iIzNGOUFBNyIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMzIgMTRIMTRjLTEuMSAwLTIgLjktMiAydjEyYzAgMS4xLjkgMiAyIDJoN3YyaC0xYy0uNTUgMC0xIC40NS0xIDFzLjQ1IDEgMSAxaDZjLjU1IDAgMS0uNDUgMS0xcy0uNDUtMS0xLTFoLTF2LTJoMWMuNTUgMCAxLS40NSAxLTFzLS40NS0xLTEtMUgxNWMtLjU1IDAtMS0uNDUtMS0xVjE3YzAtLjU1LjQ1LTEgMS0xaDE2Yy41NSAwIDEgLjQ1IDEgMXYzYzAgLjU1LjQ1IDEgMSAxczEtLjQ1IDEtMXYtNGMwLTEuMS0uOS0yLTItMnptLTIgOSA1IC4wMWMuNTUgMCAxIC40NCAxIC45OXY5YzAgLjU1LS40NSAxLTEgMWgtNWMtLjU1IDAtMS0uNDUtMS0xdi05YzAtLjU1LjQ1LTEgMS0xem0wIDloNXYtN2gtNXY3em0tNy0xNCAuOTcgM0gyN2wtMi40NyAxLjc2Ljk0IDIuOTEtMi40Ny0xLjgtMi40NyAxLjguOTQtMi45MUwxOSAyMWgzLjAzbC45Ny0zeiIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg==",
            icon_alt: "User-friendly, modern design",
            header: "User-friendly, modern design",
            desc: "Enjoy an intuitive interface that even new traders find easy to use.",
          },
          {
            icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjQ4IiBoZWlnaHQ9IjQ4IiByeD0iOCIgZmlsbD0iI0ZGQjIyQSIvPjxwYXRoIGQ9Ik0yNCAxNGMtNS41MiAwLTEwIDQuNDgtMTAgMTBzNC40OCAxMCAxMCAxMCAxMC00LjQ4IDEwLTEwLTQuNDgtMTAtMTAtMTB6bTcuNDYgNy4xMi0yLjc4IDEuMTVhNC45ODIgNC45ODIgMCAwIDAtMi45NS0yLjk0bDEuMTUtMi43OGMyLjEuOCAzLjc3IDIuNDcgNC41OCA0LjU3ek0yNCAyN2MtMS42NiAwLTMtMS4zNC0zLTNzMS4zNC0zIDMtMyAzIDEuMzQgMyAzLTEuMzQgMy0zIDN6bS0yLjg3LTEwLjQ2IDEuMTcgMi43OGE1IDUgMCAwIDAtMi45OCAyLjk3bC0yLjc4LTEuMTZhNy45ODQgNy45ODQgMCAwIDEgNC41OS00LjU5em0tNC41OSAxMC4zMyAyLjc4LTEuMTVhNC45NjggNC45NjggMCAwIDAgMi45NyAyLjk2bC0xLjE3IDIuNzhhNy45OTYgNy45OTYgMCAwIDEtNC41OC00LjU5em0xMC4zNCA0LjU5LTEuMTUtMi43OGE0Ljk3OCA0Ljk3OCAwIDAgMCAyLjk1LTIuOTdsMi43OCAxLjE3YTguMDA3IDguMDA3IDAgMCAxLTQuNTggNC41OHoiIGZpbGw9IiNmZmYiLz48L3N2Zz4=",
            icon_alt: "Support when you need it",
            header: "Support when you need it",
            desc: "Get access to round-the-clock customer support, an enriched Help Centre, plus other helpful content. ",
          },
        ],
        G = function () {
          return a.createElement(
            z,
            null,
            a.createElement(
              d.kC,
              { laptop: { p: "0 16px" } },
              a.createElement(
                U,
                {
                  type: "heading-3",
                  align: "center",
                  mb: "40px",
                  laptop: { max_width: "58.8rem", mb: "24px" },
                },
                "Deriv is everything you love about Binary.com, plus more"
              )
            ),
            W.map(function (e, t) {
              return a.createElement(
                Y,
                { key: t, jc: "flex-start" },
                a.createElement(
                  d.kC,
                  { mr: "16px", max_width: "48px" },
                  a.createElement(P, { src: e.icon, alt: e.icon_alt })
                ),
                a.createElement(
                  d.kC,
                  { fd: "column" },
                  a.createElement(
                    o.h4,
                    { type: "subtitle-1", mb: "8px" },
                    e.header
                  ),
                  a.createElement(
                    o.h4,
                    { type: "paragraph-1", weight: "normal" },
                    e.desc
                  )
                )
              );
            }),
            a.createElement(
              d.kC,
              null,
              a.createElement(
                Q,
                null,
                a.createElement(
                  O,
                  { to: "https://deriv.com/", secondary: "true" },
                  "Explore Deriv now"
                )
              )
            )
          );
        },
        B = (0, r.ZP)(d.kC).withConfig({
          displayName: "_exclusive__ContentWrapper",
          componentId: "t96xdu-0",
        })(["position:relative;@media ", "{display:none;}"], m.Z.tabletS),
        H = (0, r.ZP)(d.kC).withConfig({
          displayName: "_exclusive__ParentWrapper",
          componentId: "t96xdu-1",
        })(
          [
            "max-width:100%;@media ",
            "{max-width:1200px;}@media ",
            "{flex-wrap:wrap;max-width:84rem;}@media ",
            "{max-width:58.8rem;flex-wrap:nowrap;flex-direction:column;}",
          ],
          m.Z.desktopS,
          m.Z.laptopM,
          m.Z.tablet
        ),
        R = (0, r.ZP)(d.kC).withConfig({
          displayName: "_exclusive__ItemsWrapper",
          componentId: "t96xdu-2",
        })(
          [
            "border-radius:8px;max-width:282px;box-shadow:0 4px 8px rgba(14,14,14,0.1);overflow:hidden;margin-right:24px;height:auto;max-height:420px;:last-child{margin-right:0;}@media ",
            "{:nth-child(odd){margin-right:24px;}:last-child{margin-right:unset;}margin-right:0;margin-bottom:24px;}@media ",
            "{margin:0 auto 24px;:nth-child(odd){margin-right:auto;}:last-child{margin:0 auto 0 !important;}}@media ",
            "{max-width:100%;}",
          ],
          m.Z.laptopM,
          m.Z.tablet,
          m.Z.mobileL
        ),
        J = (0, r.ZP)(o.h4).withConfig({
          displayName: "_exclusive__StyledHeader",
          componentId: "t96xdu-3",
        })(
          [
            "margin:0 0 8px;@media ",
            "{font-size:24px;line-height:36px;}@media ",
            "{font-size:24px;line-height:36px;max-width:264px;margin:0 auto 8px;}",
          ],
          m.Z.desktopS,
          m.Z.tabletL
        ),
        X = (0, r.ZP)(o.h4).withConfig({
          displayName: "_exclusive__StyledSmallHeader",
          componentId: "t96xdu-4",
        })(
          [
            "@media ",
            "{font-size:16px;line-height:24px;}@media ",
            "{font-size:16px;line-height:24px;}",
          ],
          m.Z.desktopS,
          m.Z.tabletL
        ),
        q = function () {
          var e = (0, n.useStaticQuery)("3699305886");
          return a.createElement(
            d.W2,
            { fd: "column", pt: "40px", pb: "120px", tablet: { pb: "40px" } },
            a.createElement(
              d.kC,
              { fd: "column", mb: "40px", tabletL: { mb: "24px" } },
              a.createElement(
                o.h4,
                { as: "h2", type: "heading-2", align: "center", mb: "8px" },
                "Exclusively on Deriv"
              ),
              a.createElement(
                o.h4,
                {
                  as: "h3",
                  type: "subtitle-1",
                  align: "center",
                  weight: "normal",
                },
                "There’s a bright future ahead."
              ),
              a.createElement(
                o.h4,
                {
                  as: "h3",
                  type: "subtitle-1",
                  align: "center",
                  weight: "normal",
                },
                "Find these bonus features and more on Deriv:"
              )
            ),
            a.createElement(
              H,
              null,
              [
                {
                  image: "multiplier",
                  image_alt: "Multiplier",
                  header: "Trade multipliers",
                  desc: "Combine the upside of leverage trading with the simplicity and limited risk of options.",
                },
                {
                  image: "jump_indices",
                  image_alt: "Jump Indices",
                  header: "Trade Jump indices",
                  desc: "Experience equal probability of an upward or downward price jump every 20 minutes on average. Available 24/7.",
                },
                {
                  image: "deriv_academy",
                  image_alt: "Deriv Academy",
                  header: "Upskill with Deriv Academy",
                  desc: "Boost your trading skills at our learning hub. Get the know-how on markets, trade types, platforms, plus more.",
                },
                {
                  image: "trade_in_the_moment",
                  image_alt: "Trade in the moment",
                  header: "Trade <br /> in-the-moment",
                  desc: "Experience powerful, in-line charts for seamless trading. No more scrolling or taking your eyes off the market. ",
                },
              ].map(function (t, i) {
                return a.createElement(
                  R,
                  { key: i, fd: "column" },
                  a.createElement(
                    B,
                    null,
                    a.createElement(o.et, {
                      data: e[t.image],
                      alt: t.image_alt,
                      width: "100%",
                    })
                  ),
                  a.createElement(
                    d.kC,
                    { fd: "column", p: "32px" },
                    a.createElement(J, {
                      type: "subtitle-1",
                      align: "center",
                      dangerouslySetInnerHTML: { __html: t.header },
                    }),
                    a.createElement(
                      X,
                      {
                        type: "paragraph-1",
                        weight: "normal",
                        align: "center",
                      },
                      t.desc
                    )
                  )
                );
              })
            )
          );
        },
        F = i.p + "static/pattern-5a57200c7a012ca7fceb48965c9c365d.png",
        V = i.p + "static/pattern_mobile-346611f25fc9dfbec101c44bce240217.png",
        $ = (0, r.ZP)(d.kC).withConfig({
          displayName: "_footerBanner__BannerWrapper",
          componentId: "sc-19uqb3f-0",
        })(
          [
            "border-top:1px solid var(--color-grey-17);border-bottom:1px solid var(--color-grey-17);@media (min-width:1440px){background-image:url(",
            ");background-repeat:no-repeat;background-size:cover;background-position:top right -65rem;}",
          ],
          function (e) {
            return e.background_pattern;
          }
        ),
        K = (0, r.ZP)(d.kC).withConfig({
          displayName: "_footerBanner__ParentWrapper",
          componentId: "sc-19uqb3f-1",
        })(
          [
            "max-width:1440px;height:304px;z-index:3;overflow:hidden;@media ",
            "{height:370px;}@media ",
            "{height:280px;}@media ",
            "{flex-direction:column;height:auto;}",
          ],
          m.Z.desktopL,
          m.Z.laptop,
          m.Z.tablet
        ),
        ee = (0, r.ZP)(d.kC).withConfig({
          displayName: "_footerBanner__LeftWrapper",
          componentId: "sc-19uqb3f-2",
        })(
          [
            "padding-left:100px;padding-top:52px;width:35%;max-width:494px;@media (max-width:1414px){padding-left:36px;}@media (max-width:1325px){width:50%;}@media ",
            "{padding-top:36px;width:58%;}@media ",
            "{padding-left:0;padding-top:40px;width:100%;max-width:unset;margin-bottom:80px;}",
          ],
          m.Z.laptopM,
          m.Z.tablet
        ),
        te = (0, r.ZP)(d.kC).withConfig({
          displayName: "_footerBanner__RightWrapper",
          componentId: "sc-19uqb3f-3",
        })(
          [
            "justify-content:flex-start;max-width:946px;width:fit-content;position:relative;@media ",
            "{justify-content:center;width:100%;max-width:unset;height:360px;}",
          ],
          m.Z.tablet
        ),
        ie = (0, r.ZP)(d.kC).withConfig({
          displayName: "_footerBanner__RightItem",
          componentId: "sc-19uqb3f-4",
        })(
          [
            "position:absolute;bottom:-2px;left:-54px;justify-content:flex-start;z-index:2;@media ",
            "{justify-content:center;flex-direction:column;bottom:unset;left:50%;top:24%;transform:translate(-50%,-50%);}",
          ],
          m.Z.tablet
        ),
        ae = (0, r.ZP)(d.kC).withConfig({
          displayName: "_footerBanner__RightHeaderWrapper",
          componentId: "sc-19uqb3f-5",
        })(
          [
            "@media (max-width:1325px){max-width:257px;}@media ",
            "{max-width:100%;margin-top:40px;padding:0 16px;}",
          ],
          m.Z.tablet
        ),
        ne = r.ZP.img.withConfig({
          displayName: "_footerBanner__PatternWrapper",
          componentId: "sc-19uqb3f-6",
        })(["width:100%;height:100%;@media (min-width:1440px){display:none;}"]),
        re = r.ZP.div.withConfig({
          displayName: "_footerBanner__PatternDivReplacer",
          componentId: "sc-19uqb3f-7",
        })([
          "display:none;@media (min-width:1440px){display:flex;width:946px;}",
        ]),
        oe = (0, r.ZP)(d.kC).withConfig({
          displayName: "_footerBanner__BtnWrapper",
          componentId: "sc-19uqb3f-8",
        })(["margin-top:24px;"]),
        de = (0, r.ZP)(c.Qj).withConfig({
          displayName: "_footerBanner__StyledLinkButton",
          componentId: "sc-19uqb3f-9",
        })(["padding:10px 16px;"]),
        le = (0, r.ZP)(c.Qj).withConfig({
          displayName: "_footerBanner__StyledLinkRightButton",
          componentId: "sc-19uqb3f-10",
        })(["padding:10px 16px;border:2px solid var(--color-white);"]),
        me = (0, r.ZP)(d.kC).withConfig({
          displayName: "_footerBanner__ImageWrapper",
          componentId: "sc-19uqb3f-11",
        })(
          [
            "max-width:561px;padding-top:36px;height:auto;align-items:flex-end;@media (max-width:1325px){max-width:550px;}@media ",
            "{max-width:430px;}@media ",
            "{padding-top:40px;max-width:280px;}",
          ],
          m.Z.laptopM,
          m.Z.tablet
        ),
        pe = (0, r.ZP)(d.kC).withConfig({
          displayName: "_footerBanner__DesktopWrapper",
          componentId: "sc-19uqb3f-12",
        })(["@media ", "{display:none;}"], m.Z.tablet),
        ce = r.ZP.div.withConfig({
          displayName: "_footerBanner__MobileWrapper",
          componentId: "sc-19uqb3f-13",
        })(
          [
            "display:none;@media ",
            "{display:flex;justify-content:center;width:100%;}",
          ],
          m.Z.tablet
        ),
        ge = (0, r.ZP)(o.h4).withConfig({
          displayName: "_footerBanner__StyledHeader",
          componentId: "sc-19uqb3f-14",
        })(["@media ", "{font-size:32px;line-height:40px;}"], m.Z.tablet),
        ue = (0, r.ZP)(o.h4).withConfig({
          displayName: "_footerBanner__StyledHeaderBottom",
          componentId: "sc-19uqb3f-15",
        })(["@media ", "{font-size:32px;line-height:40px;}"], m.Z.tablet),
        xe = function () {
          var e = (0, n.useStaticQuery)("1494702810"),
            t = p()[0];
          return a.createElement(
            $,
            { background_pattern: F },
            a.createElement(
              K,
              null,
              a.createElement(
                ee,
                null,
                a.createElement(
                  d.kC,
                  {
                    fd: "column",
                    mb: "8px",
                    laptopM: { max_width: "360px" },
                    tablet: { max_width: "328px" },
                  },
                  a.createElement(
                    ge,
                    {
                      as: "h3",
                      type: "heading-3",
                      mb: "8px",
                      tablet: { align: "center" },
                    },
                    "Binary.com has moved to Deriv since 30 November"
                  ),
                  a.createElement(
                    o.h4,
                    {
                      type: "paragraph-1",
                      weight: "normal",
                      laptopM: { max_width: "320px" },
                      tablet: { align: "center", p: "0 16px" },
                    },
                    "Start using Deriv with your Binary.com email and password."
                  ),
                  a.createElement(
                    oe,
                    { jc: "flex-start", tablet: { jc: "center" } },
                    a.createElement(
                      de,
                      {
                        to: "https://oauth.deriv.com/oauth2/authorize?app_id=16929&l=en&brand=deriv",
                        rel: "noopener noreferrer",
                        secondary: "true",
                      },
                      "Trade on Deriv"
                    )
                  )
                )
              ),
              a.createElement(
                te,
                null,
                t
                  ? a.createElement(ne, { src: V, alt: "" })
                  : a.createElement(ne, { src: F, alt: "" }),
                a.createElement(re, null),
                a.createElement(
                  ie,
                  null,
                  a.createElement(
                    pe,
                    null,
                    a.createElement(
                      me,
                      null,
                      a.createElement(o.et, {
                        data: e.d_trader,
                        alt: "DTrader",
                        width: "100%",
                      })
                    )
                  ),
                  a.createElement(
                    ce,
                    { tablet: { max_width: "280px" } },
                    a.createElement(
                      me,
                      null,
                      a.createElement(o.et, {
                        data: e.d_trader_mobile,
                        alt: "DTrader",
                        width: "100%",
                      })
                    )
                  ),
                  a.createElement(
                    ae,
                    { fd: "column", height: "auto", max_width: "388px" },
                    a.createElement(
                      ue,
                      {
                        type: "heading-3",
                        color: "white",
                        align: "center",
                        tabletS: { max_width: "380px", m: "0 auto" },
                      },
                      "Want to continue trading?"
                    ),
                    a.createElement(
                      oe,
                      { height: "auto" },
                      a.createElement(
                        le,
                        {
                          to: "https://oauth.deriv.com/oauth2/authorize?app_id=16929&l=en&brand=deriv",
                          rel: "noopener noreferrer",
                          secondary: "true",
                        },
                        "Try Deriv now"
                      )
                    )
                  )
                )
              )
            )
          );
        },
        he = i(8e3),
        se = (0, E.Wm)()(function () {
          return a.createElement(
            he.Z,
            {
              type: "binary-to-deriv",
              margin_top: "0",
              is_ppc: !0,
              no_live_chat: !0,
              is_ppc_redirect: !0,
            },
            a.createElement(d.HJ, {
              title: (0, E.NC)("Binary to Deriv"),
              description: (0, E.NC)(
                "Trade jump indices, the new synthetics with a twist"
              ),
              no_index: !0,
            }),
            a.createElement(D, null),
            a.createElement(_, null),
            a.createElement(k, null),
            a.createElement(G, null),
            a.createElement(q, null),
            a.createElement(xe, null)
          );
        });
    },
  },
]);
//# sourceMappingURL=component---src-pages-index-js-dc1566af27d535a06c49.js.map
