
(ns ueava.pages.about
  (:require
   [ueava.components.lang :refer [lang]]))

(def about-content
  {:en
   {:title "About UEAVA"

    :subtitle
    "Professional community advancing exotic animal medicine in Ukraine."

    :p1
    "UEAVA is a professional community of veterinary doctors dedicated to the field of exotic animal medicine. We bring together specialists from different regions of Ukraine to advance modern, evidence-based, and accessible veterinary care for birds, reptiles, rodents, rabbits, ferrets, and other exotic species."

    :p2
    "Our association was created to support veterinary professionals, encourage knowledge exchange, promote continuous education, and foster high standards of exotic animal medicine in Ukraine."

    :p3
    "We believe that a strong professional community, a scientific approach, and collaboration between veterinarians are the foundation of modern veterinary medicine development."

    :mission-title "Our Mission"

    :mission-1
    "Develop a strong professional veterinary community."

    :mission-2
    "Support lifelong learning and professional growth for veterinarians."

    :mission-3
    "Promote modern scientific knowledge and clinical protocols."

    :mission-4
    "Create a platform for communication, collaboration, and exchange of experience."

    :mission-5
    "Popularize evidence-based veterinary medicine."

    :mission-6
    "Improve the quality of veterinary care for exotic animals."

    :presidium "Presidium"

    :president "President"
    :vice-president "Vice President"
    :board-member "Board Member"}

   :uk
   {:title "Про UEAVA"

    :subtitle
    "Професійна спільнота ветеринарних лікарів, які працюють у сфері медицини екзотичних тварин."

    :p1
    "UEAVA — це професійна спільнота ветеринарних лікарів, які працюють у сфері медицини екзотичних тварин. Ми об’єднуємо фахівців з різних регіонів України для розвитку сучасної, доказової та доступної ветеринарної медицини для птахів, рептилій, гризунів, кролів, тхорів та інших екзотичних видів."

    :p2
    "Наша асоціація створена для підтримки ветеринарних лікарів, обміну досвідом, професійного навчання та популяризації високих стандартів лікування екзотичних тварин в Україні."

    :p3
    "Ми віримо, що сильна професійна спільнота, науковий підхід і співпраця між лікарями є основою розвитку сучасної ветеринарної медицини."

    :mission-title "Наша місія"

    :mission-1
    "Розвивати професійну ветеринарну спільноту."

    :mission-2
    "Підтримувати безперервне навчання лікарів."

    :mission-3
    "Поширювати сучасні наукові знання та клінічні протоколи."

    :mission-4
    "Створювати платформу для комунікації та співпраці."

    :mission-5
    "Популяризувати доказову ветеринарну медицину."

    :mission-6
    "Підвищувати якість ветеринарної допомоги екзотичним тваринам."

    :presidium "Президія"

    :president "Президент"
    :vice-president "Віцепрезидент"
    :board-member "Член президії"}})

(defn tr [k]
  (get-in about-content [@lang k]))

(defn hero-section []
   [:section
    {:class "relative h-[50vh] flex items-center justify-center overflow-hidden"}

    [:div
     {:class "absolute inset-0 bg-cover bg-center"
      :style {:background-image
              "url('img/Hero_Slide_1_chameleon.jpg')"}}]

    [:div
     {:class "absolute inset-0 bg-black/60"}]

    [:div
     {:class "relative z-10 max-w-4xl text-center text-white px-8"}

     [:h1
      {:class "text-5xl md:text-7xl font-bold mb-6"}
      (tr :title)]

     [:p
      {:class "text-xl md:text-2xl"}
      (tr :subtitle)]]])

(defn about-text-section []
   [:section
    {:class "py-20"}

    [:div
     {:class "max-w-4xl mx-auto px-8 space-y-8 text-lg leading-relaxed"}

     [:p (tr :p1)]
     [:p (tr :p2)]
     [:p (tr :p3)]]]
  )

(defn mission-section []
   [:section
    {:class "bg-gray-50 py-20"}

    [:div
     {:class "max-w-6xl mx-auto px-8"}

     [:h2
      {:class "text-4xl font-bold text-center mb-12"}
      (tr :mission-title)]

     [:div
      {:class "grid md:grid-cols-3 gap-6"}

      [:div {:class "bg-white p-6 rounded-xl shadow"} (tr :mission-1)]
      [:div {:class "bg-white p-6 rounded-xl shadow"} (tr :mission-2)]
      [:div {:class "bg-white p-6 rounded-xl shadow"} (tr :mission-3)]
      [:div {:class "bg-white p-6 rounded-xl shadow"} (tr :mission-4)]
      [:div {:class "bg-white p-6 rounded-xl shadow"} (tr :mission-5)]
      [:div {:class "bg-white p-6 rounded-xl shadow"} (tr :mission-6)]]]])


(defn presidium-section []
  [:section
    {:class "py-20"}

    [:div
    {:class "max-w-7xl mx-auto px-8"}

    [:h2
      {:class "text-4xl font-bold text-center mb-16"}
      (tr :presidium)]

    [:div
      {:class "grid md:grid-cols-3 gap-12"}
      [:div {:class "text-center"}
        [:svg {:width "220" :height "220"
                :class "mx-auto mb-6"}
          [:circle {:cx "110" :cy "110"
                    :r "100"
                    :fill "#ddd"}]
          [:text {:x "110"
                  :y "115"
                  :text-anchor "middle"}
          "PHOTO"]]
        [:h3 {:class "font-bold text-xl"}
          (tr :president)]
        [:p {:class "text-gray-500"}
          "Name Placeholder"]]

      [:div {:class "text-center"}
        [:svg {:width "220" :height "220"
                :class "mx-auto mb-6"}
          [:circle {:cx "110" :cy "110"
                    :r "100"
                    :fill "#ddd"}]
          [:text {:x "110"
                  :y "115"
                  :text-anchor "middle"}
          "PHOTO"]]
        [:h3 {:class "font-bold text-xl"}
          (tr :vice-president)]
        [:p {:class "text-gray-500"}
          "Name Placeholder"]]

      [:div {:class "text-center"}
        [:svg {:width "220" :height "220"
                :class "mx-auto mb-6"}
          [:circle {:cx "110" :cy "110"
                    :r "100"
                    :fill "#ddd"}]
          [:text {:x "110"
                  :y "115"
                  :text-anchor "middle"}
          "PHOTO"]]

        [:h3 {:class "font-bold text-xl"}
          (tr :board-member)]

        [:p {:class "text-gray-500"}
          "Name Placeholder"]]]]])

(defn about-page []
  [:main
   (hero-section)
   (about-text-section)
   (mission-section)
   (presidium-section)
   ])
