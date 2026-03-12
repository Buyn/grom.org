
(ns ueava.main)


(defn hero []
  [:section {:class "relative h-screen flex items-center justify-center pt-24 text-white"}

   [:div {:class "absolute inset-0 bg-cover bg-center"
          :style {:background-image "url('/img/Hero_Slide_2-1.webp')"}}]

   [:div {:class "absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/10"}]

   [:div {:class "relative z-10 text-center max-w-4xl px-6"}

    [:h1 {:class "text-4xl md:text-6xl font-bold mb-6 leading-tight"}
     "Why Do You Need A Reptile And Amphibian Veterinarian?"]

    [:p {:class "text-lg md:text-xl mb-10 text-gray-200"}
     "A global community dedicated to improving the quality of medicine,
      conservation, and care of reptiles and amphibians."]

    [:div {:class "flex justify-center gap-4"}
     [:button {:class "bg-green-600 hover:bg-green-700 px-8 py-3 rounded font-semibold"}
      "Become a Member"]

     [:button {:class "border border-white px-8 py-3 rounded hover:bg-white hover:text-black transition"}
      "Find a Vet"]]]

   ;; scroll indicator
   [:div {:class "absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"}
    [:span {:class "text-white text-2xl"} "↓"]]])

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

(defn cta []
  [:section {:class "py-20 bg-green-700 text-white"}

   [:div {:class "max-w-4xl mx-auto text-center px-6"}

    [:h2 {:class "text-3xl font-bold mb-6"}
     "Become Part of the Global Herpetological Veterinary Community"]

    [:p {:class "mb-8 text-lg"}
     "Join UEAVA and help improve reptile and amphibian medicine worldwide."]

    [:button {:class "bg-white text-green-700 px-8 py-3 rounded font-semibold hover:bg-gray-100"}
     "Join Now"]]])

(defn membership []
  [:section {:class "py-20"}

   [:div {:class "max-w-6xl mx-auto px-6"}

    [:h2 {:class "text-3xl font-bold text-center mb-12"}
     "Membership Benefits"]

    [:div {:class "grid md:grid-cols-3 gap-8"}

     [:div {:class "p-6 border rounded-lg"}
      [:h3 {:class "font-semibold mb-2"} "Journal Access"]
      [:p "Read the latest research publications."]]

     [:div {:class "p-6 border rounded-lg"}
      [:h3 {:class "font-semibold mb-2"} "Professional Listing"]
      [:p "Get listed in the Find-A-Vet database."]]

     [:div {:class "p-6 border rounded-lg"}
      [:h3 {:class "font-semibold mb-2"} "Networking"]
      [:p "Join a global community of specialists."]]]]])

(defn main []
  [:main
   [hero]
   [benefits]
   [cta]
   [membership]])

