(ns ueava.header)

;; (defn header []
;;   [:header.header
;;    [:div.container
;;     [:div.logo "UEAVA"]
;;     [:nav.menu
;;      [:a {:href "#"} "Home"]
;;      [:a {:href "#"} "About"]
;;      [:a {:href "#"} "Resources"]
;;      [:a {:href "#"} "Membership"]
;;      [:a {:href "#"} "Conferences"]]
;;     [:button.cta "Find A Vet"]]])

(defn header []
  [:header {:class "flex items-center justify-between px-10 py-4 bg-white shadow"}
   [:div {:class "text-2xl font-bold text-green-700"} "UEAVA"]

   [:nav {:class "space-x-6 font-medium"}
    [:a {:class "hover:text-green-600"} "Home"]
    [:a {:class "hover:text-green-600"} "About"]
    [:a {:class "hover:text-green-600"} "Resources"]
    [:a {:class "hover:text-green-600"} "Membership"]]

   [:button {:class "bg-orange-500 text-white px-4 py-2 rounded"}
    "Find A Vet"]])
