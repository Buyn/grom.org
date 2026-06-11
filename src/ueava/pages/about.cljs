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
    "UEAVA organizes educational events, lectures, conferences, clinical discussions, and professional projects aimed at advancing exotic animal medicine in Ukraine."
    :p4
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
    :president-name "Daryna Barannyk"
    :vice-president "Vice President"
    :vice-president-name "Vice President"
    :secretary "Cекретар"
    :secretary-name "сестричка Луй"
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
    "UEAVA організовує освітні заходи, лекції, конференції, клінічні обговорення та професійні проєкти, спрямовані на розвиток ветеринарної медицини екзотичних тварин в Україні."
    :p4
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
    :president-name "Баранник Дарина Олександрівна"
    :vice-president "Віцепрезидент"
    :secretary "secretary"
    :secretary-name "Софія Дащенко"
    :board-member "Член президії"
    :board-member-name "сестричка Луй"
    }})

(defn tr [k]
  (get-in about-content [@lang k]))

(defn hero-section []
   [:section
    {:class "relative h-[50vh] flex items-center justify-center overflow-hidden"}

    [:div
     {:class "absolute inset-0 bg-cover bg-center"
      :style {:background-image
              ;; "url('img/Hero_Slide_1_chameleon.jpg')"}}]
              "url('img/ueava-about-team.webp')"}}]

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
      [:p (tr :p3)]
      [:p (tr :p4)]]])

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


(defn presidium-card [photo role name]
  [:div {:class "text-center"}
   [:img
    {:src photo
     :alt name
     :class "w-56 h-56 mx-auto mb-6
            border-4 border-white
            rounded-full object-cover shadow-lg"}]
   [:h3 {:class "font-bold text-xl"} role]
   [:p {:class "text-gray-500"} name]])

(defn presidium-r-card [photo role name]
  [:div {:class "text-center"}
   [:img
    {:src photo
     :alt name
     :class "w-56 h-56 mx-auto mb-6 object-cover shadow-lg"}]
   [:h3 {:class "font-bold text-xl"} role]
   [:p {:class "text-gray-500"} name]])

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
      [presidium-r-card "img/ueava-about-darina.webp" (tr :president) (tr :president-name)]
      [presidium-r-card "img/ueava-about-shabuldo.webp" "віце-президент" "Катерина Шабульдо"]
      [presidium-r-card "img/ueava-about-luy.webp" (tr :secretary) (tr :secretary-name)]
     ]]])

(defn founder-card [photo name]
  [:div {:class "bg-white rounded-xl p-6 shadow text-center
                  hover:shadow-xl transition"}
   [:img
      { :src photo
        :alt name
        :class "w-40 h-40 mx-auto mb-4
                object-cover"}]
   [:h3 {:class "font-semibold text-lg"} name]])

(def founders
  [{:name "Владислав Мирный"
    :photo "img/ueava-about-peaceful.webp"}
   {:name "Руденко Олександра Михайлівна"
    :photo "img/ueava-about-rudenko.webp"}
   {:name "Хвалюн Владислава Олександрівна - медіа-кріетор"
    :photo "img/ueava-about-khvalyun.webp"}
   {:name "Коновалова-Надєл Аліна Олександрівна"
    :photo "img/ueava-about-konoval.webp"}])

(defn founders-section []
  [:section
    {:class "bg-gray-50 py-24"}
    [:div
      {:class "max-w-7xl mx-auto px-8"}
      [:h2
        {:class "text-4xl font-bold text-center mb-16"}
        "Founding Members"]
      [:div
        {:class "grid md:grid-cols-4 gap-8"}
        ;; repeated cards
        (for [{:keys [name photo]} founders]
          ^{:key name}
          [founder-card photo name])
      ]]])

(defn gallery-section []
  [:section
    {:class "py-24"}
    [:div
      {:class "max-w-7xl mx-auto px-8"}
      [:h2
        {:class "text-4xl font-bold text-center mb-16"}
        "Gallery"]

      [:div
        {:class "grid md:grid-cols-3 gap-8"}
        [:div {:class "aspect-video bg-gray-300 flex items-center justify-center"}
        "EVENT PHOTO"]
        [:div {:class "aspect-video bg-gray-300 flex items-center justify-center"}
        "LECTURE PHOTO"]
        [:div {:class "aspect-video bg-gray-300 flex items-center justify-center"}
        "CONFERENCE PHOTO"]]]])


(defn about-page []
  [:main
   (hero-section)
   (about-text-section)
   (mission-section)
   (presidium-section)
   (founders-section)
   (gallery-section)])

