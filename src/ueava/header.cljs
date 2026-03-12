(ns ueava.header
  (:require
   [reagent.core :as r]))


(defonce scrolled? (r/atom false))

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
           "bg-white shadow text-gray-900"
           "bg-transparent text-white"))}

       [:div {:class "flex items-center justify-between px-8 py-4"}

        ;; logo
        [:a {:href "/" :class "shrink-0"}
         [:img {:src "/img/ueava-logo.svg"
                :class "h-12"}]]

        ;; navigation
        [:nav {:class "hidden md:flex space-x-8 font-medium"}
         [:a {:href "#" :class "hover:text-green-500"} "Home"]
         [:a {:href "#" :class "hover:text-green-500"} "About"]
         [:a {:href "#" :class "hover:text-green-500"} "Resources"]
         [:a {:href "#" :class "hover:text-green-500"} "Membership"]
         [:a {:href "#" :class "hover:text-green-500"} "Conferences"]]

        ;; CTA
        [:button
         {:class "bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition"}
         "Find A Vet"]]])}))
