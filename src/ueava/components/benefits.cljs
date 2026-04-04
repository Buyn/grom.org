(ns ueava.components.benefits
  (:require
    [ueava.components.lang :refer [t]]))

(defn benefits []
  [:section {:class "py-20 bg-gray-50"}

   [:div {:class "max-w-6xl mx-auto px-6"}

    [:h2 {:class "text-3xl font-bold text-center mb-12"}
     (t :benefits/title)]

    [:div {:class "grid md:grid-cols-3 gap-8"}

     [:div {:class "bg-white p-6 rounded-lg shadow hover:shadow-lg transition"}
      [:h3 {:class "text-xl font-semibold mb-3"} (t :benefits/c1-title)]
      [:p (t :benefits/c1-dis)]]

     [:div {:class "bg-white p-6 rounded-lg shadow hover:shadow-lg transition"}
      [:h3 {:class "text-xl font-semibold mb-3"} (t :benefits/c2-title)]
      [:p (t :benefits/c2-dis)]]

     [:div {:class "bg-white p-6 rounded-lg shadow hover:shadow-lg transition"}
      [:h3 {:class "text-xl font-semibold mb-3"} (t :benefits/c3-title)]
      [:p (t :benefits/c3-dis)]]]]])
