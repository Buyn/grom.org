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
    ;; RESOURCES
    [:div
     [:h3 {:class "text-white font-semibold mb-4"} (t :footer/res-title)]
     [:ul {:class "space-y-2"}
      [:a {:href "mailto:ueavaorg@gmail.com"
            :class "hover:text-white"}
        "✉️ ueavaorg@gmail.com"]
      [:a {:href "https://www.instagram.com/_ueava_"
          :target "_blank"
          :class "hover:text-white"}
        "📷 @_ueava_"]
      ;; [:li [:a {:href "#/resources" :class "hover:text-white"} "Publications"]]
      ;; [:li [:a {:href "#/resources" :class "hover:text-white"} "Events"]]
      ]]
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

