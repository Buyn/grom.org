(ns ueava.components.hamburger-menu
  (:require
    [reagent.core :as r]
    [ueava.components.navigation-menu-list :refer [navigation-menu-list]]
    ["react" :as react]
    [ueava.components.navigation-cta :refer [navigation-cta]]))

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

;; (defn hamburger-menu[]
;;   [:<>
;;     [:button
;;       {:class "md:hidden text-3xl text-ueava-sand"
;;         :on-click #(swap! menu-open? not)}
;;       ;; (if @menu-open?
;;       ;;   "✕" "☰")]
;;       (if @menu-open?
;;         [icon-close]
;;         [icon-menu])]

;;     [:div {:class (str
;;               "absolute top-full left-0 w-full bg-ueava-cream shadow-md md:hidden
;;                 text-ueava-brown
;;                 transform transition-all duration-500 ease-out "
;;               (if @menu-open?
;;                 "opacity-100 translate-y-0"
;;                 "opacity-0 -translate-y-4 pointer-events-none"))}
;;           [:div {:class "flex flex-col p-6 space-y-4"}
;;             ;; navigation
;;             [navigation-menu-list]
;;             ;; (navigation-menu-list)
;;             ;; (into
;;             ;;   [:nav {:class "hidden md:flex space-x-8 font-medium"}]
;;             ;;   (navigation-menu-list))

;;             ;; CTA
;;            [navigation-cta]
;;            ]]])

(defn hamburger-menu []
  [:<>
   [:button
    {:class "md:hidden text-3xl text-ueava-sand"
     :on-click #(swap! menu-open? not)}

    (if @menu-open?
      [icon-close]
      [icon-menu])]

   [:div
    {:class (str
             "absolute top-full left-0 w-full bg-ueava-cream shadow-md md:hidden
              text-ueava-brown
              transform transition-all duration-500 ease-out "
             (if @menu-open?
               "opacity-100 translate-y-0"
               "opacity-0 -translate-y-4 pointer-events-none"))}

    [:div {:class "flex flex-col p-6 space-y-4"}

     ;; (navigation-menu-list)

     [navigation-cta]
     ]]
  ]
)
