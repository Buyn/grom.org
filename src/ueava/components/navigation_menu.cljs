(ns ueava.components.navigation-menu
  (:require
    ;; [ueava.components.navigation-cta :refer [navigation-cta]]
    [ueava.components.navigation-menu-list :refer [navigation-menu-list navigation-items]]))

(defn navigation-menu[]
        ;; navigation
   ;; [:nav {:class "hidden md:flex space-x-8 font-medium"}
   ;;        [navigation-menu-list]])
  ;; (into
  ;;  [:nav {:class "hidden md:flex space-x-8 font-medium"}]
  ;;         [navigation-menu-list]))

  (into [:nav {:class "hidden md:flex space-x-8 font-medium"}]
    (navigation-menu-list)))

        ;; [:nav {:class "hidden md:flex space-x-8 font-medium"}
        ;; [:a {:href "#" :class "hover:text-ueava-sand"} "Home"]
        ;; [:a {:href "#" :class "hover:text-ueava-sand"} "About"]
        ;; [:a {:href "#" :class "hover:text-ueava-sand"} "Resources"]
        ;; [:a {:href "#" :class "hover:text-ueava-sand"} "Membership"]
        ;; [:a {:href "#" :class "hover:text-ueava-sand"} "Conferences"]
        ;;  ]

        ;; CTA
        ;; [navigation-cta "md:flex"]
  ;; )
