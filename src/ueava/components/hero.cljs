(ns ueava.components.hero
  (:require
   [reagent.core :as r]))

;; ----------------------------
;; state
;; ----------------------------

(defonce state
  (r/atom {:current 0
           :prev nil
           :dir :right
           :anim :idle
           :duration 700 ;; dynamic animation duration
           :last-ts 0})) ;; last interaction timestamp

(defonce timer-id (atom nil))

;; ----------------------------
;; data
;; ----------------------------

(def slides
  [{:key :chameleon
    :img "img/Hero_Slide_1_chameleon.jpg"
    :title "Explore the world of reptile and amphibian medicine."
    :text "Specialized care for exotic animals."
    ;; :text " "
    :btn "Become Member"}

   {:key :owl
    :img "img/Hero_Slide_2_owl.jpg"
    :title "Making avian medicine accessible, clear, and practical."
    :text "Support for bird specialists worldwide."
    ;; :text " "
    :btn "Learn More"}

   {:key :rabbit
    :img "img/Hero_Slide_3_rabbit.jpg"
    :title "Advance your expertise in small mammal medicine."
    :text "Advanced treatment for rabbits and rodents."
    ;; :text " "
    :btn "Join UEAVA"}

   {:key :bear
    :img "img/Hero_Slide_4_bear.jpg"
    :title "Make an impact in wildlife and exotic animal medicine."
    :text "Supporting vets working with wildlife."
    ;; :text " "
    :btn "Discover"}])

(def slide-count (count slides))

;; ----------------------------
;; helpers
;; ----------------------------

(defn now [] (.now js/Date))

(defn next-random [current]
  (let [idx (rand-int slide-count)]
    (if (= idx current)
      (mod (inc idx) slide-count)
      idx)))

(defn random-delay []
  (+ 7000 (rand-int 13000)))

;; (defn clamp [x min max]
;;   (-> x (max min) (min max)))

;; (defn lerp [a b t]
;;   (+ a (* (- b a) t)))

;; (defn ease-out [t]
;;   (- 1 (* (- 1 t) (- 1 t))))

;; (defn compute-duration [last-ts]
;;   (let [dt (- (now) last-ts)
;;         min-dt 1000
;;         max-dt 3000
;;         min-duration 100
;;         max-duration 700
;;         ;; normalize dt to 0..1
;;         t (-> (/ (- dt min-dt)
;;                  (- max-dt min-dt))
;;               (clamp 0 1))]
;;     (js/Math.round
;;      ;; (lerp min-duration max-duration t))))
;;       (lerp min-duration max-duration (ease-out t)))))

;; velocity-based duration

(defn compute-duration [last-ts]
  (let [dt (- (now) last-ts)]
    ;; faster interaction → shorter animation
    (cond
      (< dt 1000) 100
      (< dt 2000) 400
      :else 700)))

;; ----------------------------
;; transition
;; ----------------------------

(defn go! [idx dir]
  (let [{:keys [current anim last-ts]} @state]
    (when (and (not= idx current)
               (= anim :idle))
      (let [duration (compute-duration last-ts)]
        ;; step 1: instant logical switch
        (swap! state assoc
               :prev current
               :current idx
               :dir dir
               :anim :prepare
               :duration duration
               :last-ts (now))
        ;; step 2: start animation
        (js/requestAnimationFrame
         (fn []
           (swap! state assoc :anim :run)))
        ;; step 3: cleanup
        (js/setTimeout
         (fn []
           (swap! state assoc
                  :prev nil
                  :anim :idle))
         duration)))))

;; ----------------------------
;; auto loop
;; ----------------------------

(defn schedule! []
  (when @timer-id
    (js/clearTimeout @timer-id))

  (reset! timer-id
          (js/setTimeout
           (fn []
             (let [{:keys [current anim]} @state]
               (when (= anim :idle)
                 (go! (next-random current) :right)))
             (schedule!))
           (random-delay))))

;; ----------------------------
;; styles
;; ----------------------------

(defn bg-style [img transform duration]
  {:background-image (str "url('" img "')")
   :transform transform
   :transition (str "transform " duration "ms cubic-bezier(0.22, 1, 0.36, 1)")})

(defn enter-transform [dir]
  (if (= dir :right)
    "translateX(100%)"
    "translateX(-100%)"))

(defn leave-transform [dir]
  (if (= dir :right)
    "translateX(-100%)"
    "translateX(100%)"))

;; ----------------------------
;; background
;; ----------------------------

(defn background []
  (let [{:keys [current prev dir anim duration]} @state
        curr (nth slides current)
        prev-slide (when prev (nth slides prev))]
    [:div {:class "absolute inset-0 overflow-hidden"}
     ;; previous
     (when prev-slide
       [:div
        {:key (str "prev-" prev)
         :class "absolute inset-0 bg-cover bg-center z-10"
         :style (bg-style
                 (:img prev-slide)
                 (if (= anim :run)
                   (leave-transform dir)
                   "translateX(0%)")
                 duration)}])
     ;; current
     [:div
      {:key (str "curr-" current)
       :class "absolute inset-0 bg-cover bg-center z-20"
       :style (bg-style
               (:img curr)
               (cond
                 (= anim :prepare) (enter-transform dir)
                 (= anim :run) "translateX(0%)"
                 :else "translateX(0%)")
               duration)}]]))

;; ----------------------------
;; content
;; ----------------------------

(defn content []
  (let [{:keys [current]} @state
        {:keys [title text btn]} (nth slides current)]
    [:div {:class "relative z-40 text-white text-center max-w-2xl"}
     [:h1 {:class "text-5xl font-bold mb-4"} title]
     [:p {:class "text-xl mb-6"} text]
     [:button {:class "bg-white text-ueava-brown px-6 py-3 rounded-lg hover:bg-ueava-brown-100"} btn]]))
     ;; [:button {:class "bg-ueava-brown-600 hover:bg-ueava-brown-700 text-white px-8 py-3 rounded"} btn]]))

;; ----------------------------
;; navigation
;; ----------------------------

(defn nav-item [idx {:keys [img]}]
  (let [{:keys [current]} @state
        trigger! (fn[]
                   (go! idx :right)
                   (schedule!))]
    [:div
     {:key idx
      :class (str
              "w-16 h-16 bg-cover bg-center cursor-pointer border transition "
              (if (= idx current)
                "border-white scale-110"
                "border-transparent opacity-70"))
      :style {:background-image (str "url('" img "')")}
      ;; hover
      :on-mouse-enter trigger!
      ;; click
      :on-click trigger!}]))

(defn navigation []
  [:div {:class "absolute bottom-6 right-6 grid grid-cols-2 gap-2 z-50"}
   (doall (map-indexed nav-item slides))])

;; ----------------------------
;; main
;; ----------------------------

(defn hero []
  (r/create-class
   {:component-did-mount
    (fn [] (schedule!))

    :component-will-unmount
    (fn []
      (when @timer-id
        (js/clearTimeout @timer-id)))

    :reagent-render
    (fn []
      [:section {:class "relative h-screen flex items-center justify-center overflow-hidden"}
       [background]
       [:div {:class "absolute inset-0 bg-black/40 z-30"}]
       [content]
       [:div {:class "absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce z-40"}
        [:span {:class "text-white text-2xl"} "↓"]]
       [navigation]])}))
