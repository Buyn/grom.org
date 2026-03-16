(ns ueava.components.hero
  (:require
   [reagent.core :as r]))

;; ----------------------------
;; state
;; ----------------------------

(def current-slide (r/atom 0))
(def timer-id (atom nil))

;; ----------------------------
;; slide data
;; ----------------------------

(def slides
  [{:key :chameleon
    :img "img/Hero_Slide_1_chameleon.jpg"
    :title "Why Do You Need A Reptile Vet?"
    :text "Specialized care for exotic animals."
    :btn "Become Member"}

   {:key :owl
    :img "img/Hero_Slide_2_owl.jpg"
    :title "Avian Veterinary Excellence"
    :text "Support for bird specialists worldwide."
    :btn "Learn More"}

   {:key :rabbit
    :img "img/Hero_Slide_3_rabbit.jpg"
    :title "Small Mammal Medicine"
    :text "Advanced treatment for rabbits and rodents."
    :btn "Join UEAVA"}

   {:key :bear
    :img "img/Hero_Slide_4_bear.jpg"
    :title "Wildlife Veterinary Science"
    :text "Supporting vets working with wildlife."
    :btn "Discover"}])

;; ----------------------------
;; random helpers
;; ----------------------------

(defn random-slide []
  (rand-int (count slides)))

(defn random-delay []
  (+ 5000 (rand-int 5000))) ;; 5–10 sec

;; ----------------------------
;; auto switch
;; ----------------------------

(defn schedule-next! []
  (when @timer-id
    (js/clearTimeout @timer-id))

  (reset! timer-id
          (js/setTimeout
           (fn []
             (reset! current-slide (random-slide))
             (schedule-next!))
           (random-delay))))

;; ----------------------------
;; hero background
;; ----------------------------

(defn background-slider []
  (let [{:keys [img]} (nth slides @current-slide)]
    [:div
     {:class "absolute inset-0 bg-cover bg-center transition-all duration-1700"
      :style {:background-image (str "url('" img "')")}}]))

;; ----------------------------
;; hero content
;; ----------------------------

(defn hero-content []
  (let [{:keys [title text btn]} (nth slides @current-slide)]
    [:div
     {:class "relative z-10 text-white text-center max-w-2xl"}

     [:h1 {:class "text-5xl font-bold mb-4"} title]

     [:p {:class "text-xl mb-6"} text]

     [:button
      {:class "bg-white text-black px-6 py-3 rounded-lg"}
      btn]

     ]))

;; ----------------------------
;; mini navigation
;; ----------------------------

(defn nav-item [idx {:keys [img]}]
  [:div
   {:class (str
            "w-16 h-16 bg-cover bg-center cursor-pointer border "
            (when (= idx @current-slide)
              "border-white"))

    :style {:background-image (str "url('" img "')")}

    :on-mouse-enter
    (fn []
      (reset! current-slide idx)
      (schedule-next!))}])

(defn mini-logo-navigation []
  [:div
   {:class "absolute bottom-6 right-6 grid grid-cols-2 gap-2"}

   (doall
    (map-indexed nav-item slides))])

;; ----------------------------
;; main hero
;; ----------------------------

(defn hero []
  (r/create-class
   {:component-did-mount
    (fn []
      (schedule-next!))

    :component-will-unmount
    (fn []
      (when @timer-id
        (js/clearTimeout @timer-id)))

    :reagent-render
    (fn []
      [:section
       {:class "relative h-screen flex items-center justify-center overflow-hidden"}

       [background-slider]

       ;; overlay gradient
       [:div {:class "absolute inset-0 bg-black/40"}]

       [hero-content]

        ;; scroll indicator
        [:div {:class "absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"}
        ;; [:div {:class "absolute left-1/2 -translate-x-1/2 animate-bounce"}
            [:span {:class "text-white text-2xl"} "↓"]]

       [mini-logo-navigation]])}))

;; (ns ueava.components.hero)

;; (defn hero []
;;   [:section {:class "relative h-screen flex items-center justify-center pt-24 text-white"}

;;    ;; background image
;;    [:div {:class "absolute inset-0 bg-cover bg-center"
;;           :style {:background-image "url('img/Hero_Slide_2-1.webp')"}}]

;;    ;; gradient overlay
;;    [:div {:class "absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/10"}]

;;    ;; content
;;    [:div {:class "relative z-10 text-center max-w-4xl px-6"}

;;     [:h1 {:class "text-4xl md:text-6xl font-bold mb-6 leading-tight"}
;;      "Why Do You Need A Reptile And Amphibian Veterinarian?"]

;;     [:p {:class "text-lg md:text-xl mb-10 text-gray-200"}
;;      "A global community dedicated to improving the quality of medicine,
;;       conservation, and care of reptiles and amphibians."]

;;     [:div {:class "flex justify-center gap-4"}
;;      [:button
;;       {:class "bg-ueava-brown-600 hover:bg-ueava-brown-700 text-white px-8 py-3 rounded"}
;;       "Become a Member"]

;;      [:button {:class "border border-white px-8 py-3 rounded hover:bg-white hover:text-black transition"}
;;       "Find a Vet"]]]

;;    ;; scroll indicator
;;    [:div {:class "absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"}
;;     [:span {:class "text-white text-2xl"} "↓"]]])
