(ns ueava.footer)


(defn footer []
  [:footer {:class "bg-gray-900 text-gray-300"}

   ;; grid
   [:div {:class "max-w-7xl mx-auto px-6 py-16 grid gap-10 md:grid-cols-4"}

    ;; logo + about
    [:div
     [:img {:src "img/ueava-logo.svg"
            :class "h-12 mb-4"}]

     [:p {:class "text-sm leading-relaxed"}
      "UEAVA is a global community dedicated to improving reptile
       and amphibian veterinary medicine, conservation and welfare."]]

    ;; navigation
    [:div
     [:h3 {:class "text-white font-semibold mb-4"} "Navigation"]

     [:ul {:class "space-y-2"}
      [:li [:a {:href "#" :class "hover:text-white"} "Home"]]
      [:li [:a {:href "#" :class "hover:text-white"} "About"]]
      [:li [:a {:href "#" :class "hover:text-white"} "Membership"]]
      [:li [:a {:href "#" :class "hover:text-white"} "Resources"]]]]

    ;; resources
    [:div
     [:h3 {:class "text-white font-semibold mb-4"} "Resources"]

     [:ul {:class "space-y-2"}
      [:li [:a {:href "#" :class "hover:text-white"} "Journal"]]
      [:li [:a {:href "#" :class "hover:text-white"} "Find-A-Vet"]]
      [:li [:a {:href "#" :class "hover:text-white"} "Publications"]]
      [:li [:a {:href "#" :class "hover:text-white"} "Events"]]]]

    ;; newsletter
    [:div
     [:h3 {:class "text-white font-semibold mb-4"} "Newsletter"]

     [:p {:class "text-sm mb-4"}
      "Subscribe to receive updates and news."]

     [:div {:class "flex"}
      [:input {:type "email"
               :placeholder "Email"
               :class "w-full px-3 py-2 rounded-l bg-gray-800 border border-gray-700 focus:outline-none"}]

      [:button
       {:class "bg-green-600 px-4 rounded-r hover:bg-green-700"}
       "Join"]]]]

   ;; bottom line
   [:div {:class "border-t border-gray-800"}

    [:div {:class "max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between text-sm"}

     [:span "© 2026 UEAVA"]

     [:div {:class "flex gap-6 mt-3 md:mt-0"}
      [:a {:href "#" :class "hover:text-white"} "Privacy"]
      [:a {:href "#" :class "hover:text-white"} "Terms"]
      [:a {:href "#" :class "hover:text-white"} "Contact"]]]]])
