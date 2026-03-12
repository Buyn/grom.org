
(ns ueava.main)

;; (defn hero []
;;   [:section.hero
;;    [:div.hero-content
;;     [:h1 "Why Do You Need A Reptile And Amphibian Veterinarian?"]
;;     [:p "A global community dedicated to improving reptile and amphibian care."]
;;     [:button "Learn More"]]])

(defn hero []
  [:section {:class "h-screen bg-cover bg-center flex items-center justify-center text-white"}
   [:div {:class "text-center max-w-3xl"}
    [:h1 {:class "text-5xl font-bold mb-6"}
     "Why Do You Need A Reptile Veterinarian?"]

    [:p {:class "text-xl mb-8"}
     "Global community improving reptile and amphibian medicine"]

    [:button {:class "bg-green-600 px-6 py-3 rounded text-white hover:bg-green-700"}
     "Learn More"]]])

(defn membership []
  [:section.membership
   [:h2 "Become A Member"]
   [:p "Join a unique community dedicated to reptile and amphibian medicine."]
   [:div.cards
    [:div.card
     [:h3 "Journal"]
     [:p "Scientific research in herpetological medicine"]]

    [:div.card
     [:h3 "Find-A-Vet"]
     [:p "Be listed in the veterinarian directory"]]

    [:div.card
     [:h3 "Herp Blerp"]
     [:p "Monthly newsletter and announcements"]]]])

(defn main []
  [:main
   [hero]
   [membership]])
