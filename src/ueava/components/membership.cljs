(ns ueava.components.membership)

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
