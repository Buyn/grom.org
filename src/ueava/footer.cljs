(ns ueava.footer
  (:require
    [ueava.components.lang :refer [t]]))

(defn footer []
  [:footer {:class "bg-ueava-brown-950 text-ueava-brown-100"}
   [:div {:class "max-w-7xl mx-auto px-6 py-16
                  grid gap-12
                  md:grid-cols-[260px_1fr_1fr_1fr]"}
    ;; BRAND
    [:div {:class "flex flex-col gap-6"}
      [:img
        {:src "img/ueava-logo-hor-nobg-wt.png"
         }]
     [:p {:class "text-sm leading-relaxed text-ueava-brown-200"}
      (t :footer/logo)]]
    ;; NAV
    [:div
     [:h3 {:class "text-white font-semibold mb-4"} (t :footer/nav-title)]
     [:ul {:class "space-y-2"}
      [:li [:a {:href "#/home" :class "hover:text-white"} (t :hlist/Home)]]
      [:li [:a {:href "#/about" :class "hover:text-white"} (t :hlist/About)]]
      [:li [:a {:href "#/home" :class "hover:text-white"} (t :hlist/Resources)]]
      [:li [:a {:href "#/membership" :class "hover:text-white"} (t :hlist/Membership)]]
      [:li [:a {:href "#/conferences" :class "hover:text-white"} (t :hlist/Conferences)]]]]
    ;; RESOURCES / CONTACT BLOCKS WITH BIGGER SEPARATED IG ICON
    [:div
     [:h3 {:class "text-white font-semibold mb-4"} (t :footer/res-title)]
     [:div {:class "flex flex-col space-y-4"}
      ;; Email Block
      [:div
       [:a {:href "mailto:ueavaorg@gmail.com"
            :class "inline-flex items-center gap-3 text-base hover:text-white transition-colors"}
        [:svg {:class "w-6 h-6 shrink-0" :fill "none" :view-box "0 0 24 24" :stroke "currentColor"}
         [:path {:stroke-linecap "round" :stroke-linejoin "round" :stroke-width "2"
                 :d "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"}]]
        "ueavaorg@gmail.com"]]
      ;; Instagram Block with explicit SVG icon
      [:div
       [:a {:href "https://www.instagram.com/_ueava_"
            :target "_blank"
            :class "inline-flex items-center gap-3 text-base hover:text-white transition-colors"}
        [:svg {:class "w-6 h-6 shrink-0" :fill "currentColor" :view-box "0 0 24 24"}
         [:path {:d "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"}]]
        "@_ueava_"]]]
     ]

    ;; NEWSLETTER
    [:div
     [:h3 {:class "text-white font-semibold mb-4"} (t :footer/news-title)]
     [:p {:class "text-sm mb-4"}
      (t :footer/news-text)]
      [:div
        {:class "ml-embedded"
          :data-form "JHURKh"}]
     ]]
   ;; bottom
   [:div {:class "border-t border-gray-800"}
    [:div {:class "max-w-7xl mx-auto px-6 py-6
                   flex flex-col md:flex-row
                   justify-between text-sm"}
     [:span "© 2026 UEAVA"]
     [:div {:class "flex gap-6 mt-3 md:mt-0"}
      [:a {:href "#" :class "hover:text-white"} "Privacy"]
      [:a {:href "#" :class "hover:text-white"} "Terms"]
      [:a {:href "#" :class "hover:text-white"} "Contact"]]]]])

