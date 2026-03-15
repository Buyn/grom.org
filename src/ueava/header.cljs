(ns ueava.header
  (:require
    [reagent.core :as r]
    [ueava.components.navigation-menu :refer [navigation-menu]]
    [ueava.components.navigation-menu-list :refer [navigation-items]]
    ;; [ueava.components.hamburger-menu :refer [hamburger-menu]]
    [ueava.components.navigation-cta :refer [navigation-cta]]))


(defonce scrolled? (r/atom false))
(defonce menu-open? (r/atom false))

(defn icon-menu []
[:svg {:xmlns "http://www.w3.org/2000/svg"
       :class "w-8 h-8"
       :fill "none"
       :viewBox "0 0 24 24"
       :stroke "currentColor"}
 [:path {:stroke-linecap "round"
         :stroke-linejoin "round"
         :stroke-width "2"
         :d "M4 6h16M4 12h16M4 18h16"}]])

(defn icon-close []
[:svg {:xmlns "http://www.w3.org/2000/svg"
       :class "w-8 h-8"
       :fill "none"
       :viewBox "0 0 24 24"
       :stroke "currentColor"}
 [:path {:stroke-linecap "round"
         :stroke-linejoin "round"
         :stroke-width "2"
         :d "M6 18L18 6M6 6l12 12"}]])


(defn on-scroll []
  (reset! scrolled? (> (.-scrollY js/window) 50)))

(defn header []
  (r/create-class
   {:component-did-mount
    (fn []
      (.addEventListener js/window "scroll" on-scroll))

    :component-will-unmount
    (fn []
      (.removeEventListener js/window "scroll" on-scroll))

    :reagent-render
    (fn []
      [:header
       {:class
        (str
         "fixed top-0 left-0 w-full z-50 transition-all duration-300 "
         (if @scrolled?
           "bg-ueava-cream shadow text-gray-900"
           "bg-transparent text-white"))}

       [:div {:class "flex items-center justify-between px-8 py-4"}

        ;; logo
        [:a {:href "/" :class "shrink-0"}
         [:img {:src "img/ueava-logo.svg"
                :class "h-12"}]]

        [navigation-menu]

        ;; navigation
        ;; [:nav {:class "hidden md:flex space-x-8 font-medium"}
        ;;  [:a {:href "#" :class "hover:text-ueava-sand"} "Home"]
        ;;  [:a {:href "#" :class "hover:text-ueava-sand"} "About"]
        ;;  [:a {:href "#" :class "hover:text-ueava-sand"} "Resources"]
        ;;  [:a {:href "#" :class "hover:text-ueava-sand"} "Membership"]
        ;;  [:a {:href "#" :class "hover:text-ueava-sand"} "Conferences"]
        ;;  ]

        [navigation-cta "md:flex"]
        ;; ;; CTA
        ;; [:button
        ;;  {:class "bg-orange-500 text-white px-4 py-2 rounded
        ;;           hover:bg-orange-600 transition 
        ;;           hidden md:flex space-x-8 font-medium"}
        ;;  "Find A Vet"]

       [:button
        {:class "md:hidden text-3xl text-ueava-sand"
          :on-click #(swap! menu-open? not)}
        ;; (if @menu-open?
        ;;   "✕" "☰")]
        (if @menu-open?
          [icon-close]
          [icon-menu])]

        [:div {:class (str
                  "absolute top-full left-0 w-full bg-ueava-cream shadow-md md:hidden
                   text-ueava-brown
                   transform transition-all duration-500 ease-out "
                  (if @menu-open?
                    "opacity-100 translate-y-0"
                    "opacity-0 -translate-y-4 pointer-events-none"))}

            ;;   [:div {:class "flex flex-col p-6 space-y-4"}
            ;; [:a {:href "#" :class "hover:text-ueava-sand"} "Home"]
            ;; [:a {:href "#" :class "hover:text-ueava-sand"} "About"]
            ;; [:a {:href "#" :class "hover:text-ueava-sand"} "Resources"]
            ;; [:a {:href "#" :class "hover:text-ueava-sand"} "Membership"]
            ;; [:a {:href "#" :class "hover:text-ueava-sand"} "Conferences"]]

         (into [:div
                ;; {:class "flex flex-col p-6 space-y-4"}
                {:class "flex flex-col items-center text-center p-6 space-y-4"}
                ]

                (for [{:keys [title href]} navigation-items]
                  [:a {:href href
                      :key title
                      ;; :class "hover:text-ueava-sand"}
                      :class "text-lg font-medium hover:text-ueava-sand transition"}
                        title]))

              [:button
                {:class "bg-orange-500 text-white px-4 py-2 rounded
                          hover:bg-orange-600 
                          space-x-8 font-medium"}
                "Find A Vet"]]

        ;; [hamburger-menu]
        ]])}))
