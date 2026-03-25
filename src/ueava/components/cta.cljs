(ns ueava.components.cta)

(defn cta []
  [:section {:class "py-20 bg-ueava-brown text-white"}

   [:div {:class "max-w-4xl mx-auto text-center px-6"}

    [:h2 {:class "text-3xl font-bold mb-6"}
     "Join the Professional Community Advancing Exotic Animal Medicine"]

    [:p {:class "mb-8 text-lg"}
     ;; " Become part of UEAVA — a veterinary association uniting professionals in exotic animal."]
     " Become part of Ukrainian Exotic Animal Veterinary Association — a veterinary association uniting professionals in exotic animal."]

    [:button {:class "bg-white text-ueava-brown px-8 py-3 rounded font-semibold hover:bg-gray-100"}
     "Join UEAVA"]]])
