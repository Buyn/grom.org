(ns ueava.components.cta
  (:require
    [ueava.components.lang :refer [t]]))

(defn cta []
  [:section {:class "py-20 bg-ueava-brown text-white"}

   [:div {:class "max-w-4xl mx-auto text-center px-6"}

    [:h2 {:class "text-3xl font-bold mb-6"}
     (t :cta/title)]

    [:p {:class "mb-8 text-lg"}
     (t :cta/dis)]

    [:button {:class "bg-white text-ueava-brown px-8 py-3 rounded font-semibold hover:bg-gray-100"}
     (t :cta/button)]]])
