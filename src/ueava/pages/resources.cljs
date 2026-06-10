(ns ueava.pages.resources
  (:require
   [ueava.components.lang :refer [lang]]))

(def about-content
  {:en
   {:title "Resources"
    :subtitle
    "Lorem ipsum dolor sit amet."
    :p1
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }

   :uk
   {:title "Ресурсы"
    :subtitle
    "Але я повинен пояснити вам."
    :p1
    "Але я повинен пояснити вам, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }})

(defn tr [k]
  (get-in about-content [@lang k]))

(defn hero-section []
   [:section
    {:class "relative h-[50vh] flex items-center justify-center overflow-hidden"}

    [:div
     {:class "absolute inset-0 bg-cover bg-center"
      :style {:background-image
              "url('img/Hero_Slide_1_chameleon.jpg')"}}]

    [:div
     {:class "absolute inset-0 bg-black/60"}]

    [:div
     {:class "relative z-10 max-w-4xl text-center text-white px-8"}

     [:h1
      {:class "text-5xl md:text-7xl font-bold mb-6"}
      (tr :title)]

     [:p
      {:class "text-xl md:text-2xl"}
      (tr :subtitle)]]])

(defn about-text-section []
   [:section
    {:class "py-20"}
    [:div
      {:class "max-w-4xl mx-auto px-8 space-y-8 text-lg leading-relaxed"}
      [:p (tr :p1)]]])



(defn resources-page []
  [:main
   (hero-section)
   (about-text-section)
   ])
