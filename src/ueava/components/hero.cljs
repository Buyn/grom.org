(ns ueava.components.hero)

(defn hero []
  [:section {:class "relative h-screen flex items-center justify-center pt-24 text-white"}

   ;; background image
   [:div {:class "absolute inset-0 bg-cover bg-center"
          :style {:background-image "url('img/Hero_Slide_2-1.webp')"}}]

   ;; pattern overlay
   ;; [:div {:class
   ;;        "absolute inset-0
   ;;         bg-[url('/img/ueava-logo.svg')]
   ;;         bg-repeat
   ;;         bg-[length:300px]
   ;;         opacity-[0.1]"}]

   ;; gradient overlay
   [:div {:class "absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/10"}]

   ;; content
   [:div {:class "relative z-10 text-center max-w-4xl px-6"}

    [:h1 {:class "text-4xl md:text-6xl font-bold mb-6 leading-tight"}
     "Why Do You Need A Reptile And Amphibian Veterinarian?"]

    [:p {:class "text-lg md:text-xl mb-10 text-gray-200"}
     "A global community dedicated to improving the quality of medicine,
      conservation, and care of reptiles and amphibians."]

    [:div {:class "flex justify-center gap-4"}
     [:button
      ;; {:class "bg-green-600 hover:bg-green-700 px-8 py-3 rounded font-semibold"}
      ;; {:class "bg-ueava-brown hover:bg-ueava-sand text-white px-8 py-3 rounded"}
      {:class "bg-ueava-brown-600 hover:bg-ueava-brown-700 text-white px-8 py-3 rounded"}
      ;; {:class "bg-ueava-sand text-ueava-brown
      ;;         hover:bg-ueava-brown hover:text-ueava-sand
      ;;         text-white px-8 py-3 rounded"}
      "Become a Member"]

     [:button {:class "border border-white px-8 py-3 rounded hover:bg-white hover:text-black transition"}
      "Find a Vet"]]]

   ;; scroll indicator
   [:div {:class "absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"}
    [:span {:class "text-white text-2xl"} "↓"]]])
