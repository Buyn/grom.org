(ns ueava.header)

(defn header []
  [:header.header
   [:div.container
    [:div.logo "UEAVA"]
    [:nav.menu
     [:a {:href "#"} "Home"]
     [:a {:href "#"} "About"]
     [:a {:href "#"} "Resources"]
     [:a {:href "#"} "Membership"]
     [:a {:href "#"} "Conferences"]]
    [:button.cta "Find A Vet"]]])
