
(ns ueava.main)

(defn hero []
  [:section.hero
   [:div.hero-content
    [:h1 "Why Do You Need A Reptile And Amphibian Veterinarian?"]
    [:p "A global community dedicated to improving reptile and amphibian care."]
    [:button "Learn More"]]])

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
