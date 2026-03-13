(ns ueava.components.cta)

(defn cta []
  ;; [:section {:class "py-20 bg-green-700 text-white"}
  [:section {:class "py-20 bg-ueava-brown text-white"}

   [:div {:class "max-w-4xl mx-auto text-center px-6"}

    [:h2 {:class "text-3xl font-bold mb-6"}
     "Become Part of the Global Herpetological Veterinary Community"]

    [:p {:class "mb-8 text-lg"}
     "Join UEAVA and help improve reptile and amphibian medicine worldwide."]

    ;; [:button {:class "bg-white text-green-700 px-8 py-3 rounded font-semibold hover:bg-gray-100"}
    [:button {:class "bg-white text-ueava-brown px-8 py-3 rounded font-semibold hover:bg-gray-100"}
     "Join Now"]]])
