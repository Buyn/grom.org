(ns ueava.components.benefits
  (:require
    [ueava.components.lang :refer [t]]))

(defn benefits []
  [:section {:class "py-20 bg-gray-50"}

   [:div {:class "max-w-6xl mx-auto px-6"}

    [:h2 {:class "text-3xl font-bold text-center mb-12"}
     "Why Join UEAVA"]

    [:div {:class "grid md:grid-cols-3 gap-8"}

     [:div {:class "bg-white p-6 rounded-lg shadow hover:shadow-lg transition"}
      [:h3 {:class "text-xl font-semibold mb-3"} "Scientific Journal"]
      [:p "Access research and publications in reptile and amphibian medicine."]]

     [:div {:class "bg-white p-6 rounded-lg shadow hover:shadow-lg transition"}
      [:h3 {:class "text-xl font-semibold mb-3"} "Find-A-Vet Directory"]
      [:p "Be listed in an international directory of specialists."]]

     [:div {:class "bg-white p-6 rounded-lg shadow hover:shadow-lg transition"}
      [:h3 {:class "text-xl font-semibold mb-3"} "Professional Community"]
      [:p "Connect with veterinarians and researchers worldwide."]]]]])
