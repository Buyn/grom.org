(ns ueava.components.hero
  (:require
   [reagent.core :as r]))

;; ----------------------------
;; state
;; ----------------------------

(def current-slide (r/atom 0))
(def timer-id (atom nil))
(def next-slide (r/atom nil))
(def direction (r/atom :right)) ;; :right или :left
(def animating? (r/atom false))
(def anim-id (atom 0))

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

;; (defn random-slide []
;;   (rand-int (count slides)))

(defn random-slide []
  (let [idx (rand-int (count slides))]
    (if (= idx @current-slide)
      (mod (inc idx) (count slides))
      idx)))

(defn random-delay []
  (+ 5000 (rand-int 5000))) ;; 5–10 sec

;; ----------------------------
;; 🎲 switch function
;; ----------------------------

;; (defn go-to-slide! [idx dir]
;;   (when-not @animating?
;;     (reset! direction dir)
;;     (reset! next-slide idx)
;;     (reset! animating? true)
;;     ;; after a while we finish the animation
;;     (js/setTimeout
;;      (fn []
;;        (reset! current-slide idx)
;;        (reset! next-slide nil)
;;        (reset! animating? false))
;;      700)))
;; (defn go-to-slide! [idx dir]
;;   (when (and (not @animating?)
;;              (not= idx @current-slide)) ;; 💡
;; (defn go-to-slide! [idx dir]
;;   (when-not @animating?
;; (defn go-to-slide! [idx dir]
;;   (when (and (not @animating?)
;;              (not= idx @current-slide))
;;     (reset! direction dir)
;;     (reset! next-slide idx)
;;     ;; first put it in the starting position
;;     (reset! animating? :prepare)
;;     (js/requestAnimationFrame
;;      (fn []
;;        ;; now let's start the animation
;;        (reset! animating? :run)))
;;     ;; completion
;;     ;; (js/setTimeout
;;     ;;  (fn []
;;     ;;    (reset! current-slide idx)
;;     ;;    (reset! next-slide nil)
;;     ;;    (reset! animating? false))
;;     ;;  700)))
;;     ;; (js/setTimeout
;;     ;;   (fn []
;;     ;;     (reset! current-slide idx)
;;     ;;     (reset! next-slide nil)
;;     ;;     (reset! animating? false))
;;     ;;   700)))
;;     (js/setTimeout
;;       (fn []
;;         (reset! current-slide idx)
;;         (js/requestAnimationFrame
;;           (fn []
;;             (reset! next-slide nil)
;;             (reset! animating? false))))
;;       700)))

(defn go-to-slide! [idx dir]
  (when (not= idx @current-slide)
    (let [id (swap! anim-id inc)] ;; 💡 уникальный id

      (reset! direction dir)
      (reset! next-slide idx)
      (reset! animating? :prepare)

      (js/requestAnimationFrame
       (fn []
         (when (= id @anim-id) ;; 💡 проверка
           (reset! animating? :run))))

      (js/setTimeout
       (fn []
         (when (= id @anim-id) ;; 💡 главный фикс
           (reset! current-slide idx)
           (reset! next-slide nil)
           (reset! animating? false)))
       700))))

;; ----------------------------
;; auto switch
;; ----------------------------

;; (defn schedule-next! []
;;   (when @timer-id
;;     (js/clearTimeout @timer-id))

;;   (reset! timer-id
;;           (js/setTimeout
;;            (fn []
;;              (reset! current-slide (random-slide))
;;              (schedule-next!))
;;            (random-delay))))

;; (defn schedule-next! []
;;   (when @timer-id
;;     (js/clearTimeout @timer-id))

;;   (reset! timer-id
;;           (js/setTimeout
;;            (fn []
;;              (go-to-slide! (random-slide) :right)
;;              (schedule-next!))
;;            (random-delay))))


(defn schedule-next! []
  (when @timer-id
    (js/clearTimeout @timer-id))

  (reset! timer-id
          (js/setTimeout
           (fn []
             (when (not @animating?) 
               (go-to-slide! (random-slide) :right))
             (schedule-next!))
           (random-delay))))
;; ----------------------------
;; 🎬 SLIDER (main magic)
;; ----------------------------

(defn slide-style [pos]
  {:transform
   (case pos
     :current "translateX(0%)"
     :left    "translateX(-100%)"
     :right   "translateX(100%)")
   :transition "transform 700ms ease-in-out"})

;; ----------------------------
;; hero background
;; ----------------------------

;; (defn background-slider []
;;   (let [{:keys [img]} (nth slides @current-slide)]
;;     [:div
;;      {:class "absolute inset-0 bg-cover bg-center transition-all duration-1700"
;;       :style {:background-image (str "url('" img "')")}}]))

  ;; (defn background-slider []
  ;;   (let [curr (nth slides @current-slide)
  ;;         next (when @next-slide (nth slides @next-slide))
  ;;         dir  @direction]
  ;;     [:div {:class "absolute inset-0 overflow-hidden"}
  ;;     ;; current
  ;;     [:div
  ;;       {:class "absolute inset-0 bg-cover bg-center"
  ;;       :style (merge
  ;;               {:background-image (str "url('" (:img curr) "')")}
  ;;               (if @animating?
  ;;                 (slide-style (if (= dir :right) :left :right))
  ;;                 (slide-style :current)))}]
  ;;       ;; next
  ;;       (when next
  ;;       [:div
  ;;         {:class "absolute inset-0 bg-cover bg-center"
  ;;         :style (merge
  ;;                 {:background-image (str "url('" (:img next) "')")}
  ;;                 {:transform (if (= dir :right)
  ;;                               "translateX(100%)"
  ;;                               "translateX(-100%)")
  ;;                   :transition "transform 700ms ease-in-out"}
  ;;         ;; let's start the movement
  ;;                 (when @animating?
  ;;                   {:transform "translateX(0%)"}))}])]))

;; (defn background-slider []
;;   (let [curr (nth slides @current-slide)
;;         next (when @next-slide (nth slides @next-slide))
;;         dir  @direction
;;         anim @animating?]
;;     [:div {:class "absolute inset-0 overflow-hidden"}
;;     ;; next
;;      (when next
;;        [:div
;;         {:class "absolute inset-0 bg-cover bg-center"
;;          :style (merge
;;                  {:background-image (str "url('" (:img next) "')")}
;;                  {:transition "transform 700ms ease-in-out"}
;;                  (cond
;;                    ;; starting position
;;                    (= anim :prepare)
;;                    {:transform (if (= dir :right)
;;                                  "translateX(100%)"
;;                                  "translateX(-100%)")}
;;                    ;; movement
;;                    (= anim :run)
;;                    {:transform "translateX(0%)"}))}])
;;     ;; current
;;      [:div
;;       {:class "absolute inset-0 bg-cover bg-center"
;;        :style (merge
;;                {:background-image (str "url('" (:img curr) "')")}
;;                {:transition "transform 700ms ease-in-out"}
;;                (cond
;;                  (= anim :run)
;;                  {:transform (if (= dir :right)
;;                                "translateX(-100%)"
;;                                "translateX(100%)")}
;;                  :else
;;                  {:transform "translateX(0%)"}))}]
;;      ]))


(defn background-slider []
  (let [curr (nth slides @current-slide)
        next-idx (or @next-slide @current-slide)
        next (nth slides next-idx)
        dir  @direction
        anim @animating?]
    [:div {:class "absolute inset-0 overflow-hidden"}
     ;; NEXT (всегда есть)
     [:div
      {:key (str "next-" next-idx)
       :class "absolute inset-0 bg-cover bg-center"
       :style (merge
               {:background-image (str "url('" (:img next) "')")}
               {:transition "transform 700ms ease-in-out"}
               (cond
                 (= anim :prepare)
                 {:transform (if (= dir :right)
                               "translateX(100%)"
                               "translateX(-100%)")}
                 (= anim :run)
                 {:transform "translateX(0%)"}

                 :else
                 {:transform "translateX(0%)"}))}]
     ;; CURRENT
     [:div
      {:key (str "curr-" @current-slide)
       :class "absolute inset-0 bg-cover bg-center"
       :style (merge
               {:background-image (str "url('" (:img curr) "')")}
               {:transition "transform 700ms ease-in-out"}
               (cond
                 (= anim :run)
                 {:transform (if (= dir :right)
                               "translateX(-100%)"
                               "translateX(100%)")}
                 :else
                 {:transform "translateX(0%)"}))}]]))

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
            (if (= idx @current-slide)
              "border-white scale-110"
              "border-transparent opacity-70"))

    :style {:background-image (str "url('" img "')")}

    ;; :on-mouse-enter
    ;; (fn []
    ;;   (reset! current-slide idx)
    ;;   (schedule-next!))}])
    :on-mouse-enter
      (fn []
        (go-to-slide! idx :right)
        (schedule-next!))}])


(defn mini-logo-navigation []
  [:div
   {:class "absolute bottom-6 right-6 grid grid-cols-2 gap-2 "}


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
            [:span {:class "text-white text-2xl"} "↓"]]

       [mini-logo-navigation]])}))

