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
    :secretary-name "сестричка Луй" ;; Dashchenko Sofiia
    :board-member "Board Member"
    :board-member-name "Владислав Мирный"

    :founding-members "Founding Members"
    :support-title "Support UEAVA"
    :support-text "Your contribution helps us organize conferences, educational events and develop exotic animal medicine in Ukraine."
    :donation-annual "Annual membership fee"
    :donation-voluntary "Voluntary donation"
    :recipient "Recipient"
    :iban "IBAN"
    :edrpou "EDRPOU"
    :bank "Bank"
    :mfo "MFO"


    :contacts-title "Contacts"
    :contacts-text "We are always happy to hear from you"
    :email "Email"
    :instagram "Instagram"
    :regular-payments "Regular / Membership fees"
    :charity-payments "Charitable donations"
    :monobank-jar "Monobank Jar"
    }

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
    :board-member-name "Владислав Мирний"

    :founding-members "Співзасновники" ;; Члены-учредители  Співзасновники


    :support-title "Підтримати UEAVA"
    :support-text "Ваш внесок допомагає організовувати конференції, освітні заходи та розвивати медицину екзотичних тварин в Україні."
    :donation-annual "Щорічний членський внесок"
    :donation-voluntary "Добровільний внесок"
    :recipient "Отримувач"
    :iban "IBAN"
    :edrpou "ЄДРПОУ"
    :bank "Банк"
    :mfo "МФО"

    :contacts-title "Контакти"
    :contacts-text "Ми завжди раді чути від вас"
    :email "Пошта"
    :instagram "Instagram"
    :regular-payments "Регулярні / Членські внески"
    :charity-payments "Благодійні внески"
    :monobank-jar "Банка monobank"
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
      [presidium-r-card "img/ueava-about-peaceful.webp" (tr :board-member) (tr :board-member-name)]
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
  [{:name "Константин Подольний"
    :photo "img/ueava-about-podoliy.webp"}
   {:name "Олександра Ванiна"
    :photo "img/ueava-about-vanina.webp"}
   {:name "Тетяна Домнiч"
    :photo "img/ueava-about-domnich.webp"}
   {:name "Анастасiя Антоненко"
    :photo "img/ueava-about-antonenko.webp"}
   {:name "Анастасiя Доманська"
    :photo "img/ueava-about-domanska.webp"}
   {:name "Ася Черненко"
    :photo "img/ueava-about-chernenko.webp"}
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
        (tr :founding-members)]
      [:div
        {:class "grid md:grid-cols-4 gap-8"}
        ;; repeated cards
        (for [{:keys [name photo]} founders]
          ^{:key name}
          [founder-card photo name])
      ]]])


(defn contacts-section []
  [:section {:class "py-20 bg-gray-50" :id "contacts"}
   [:div {:class "max-w-4xl mx-auto px-8 text-center"}
    [:h2 {:class "text-4xl font-bold mb-6 text-ueava-brown"} (tr :contacts-title)]
    [:p {:class "text-lg text-gray-700 mb-10"} (tr :contacts-text)]
    [:div
      {:class "bg-white rounded-3xl shadow-xl p-10 max-w-2xl mx-auto"}
      [:a {:href "mailto:ueavaorg@gmail.com"
            :class "flex items-center gap-3 text-xl hover:text-ueava-brown transition"}
        "email: ✉️ ueavaorg@gmail.com"]
      [:a {:href "https://www.instagram.com/_ueava_"
          :target "_blank"
          :class "flex items-center gap-3 text-xl hover:text-ueava-brown transition"}
        "instagram: 📷 @_ueava_"]]]])

(defn payments-section []
  [:section {:class "py-20 bg-gray-50" :id "support"}
   [:div {:class "max-w-5xl mx-auto px-8"}
    [:h2 {:class "text-4xl font-bold text-center mb-16 text-ueava-brown"} "Підтримати асоціацію"]
    ;; Regular payments
    [:div {:class "mb-16"}
     [:h3 {:class "text-2xl font-bold mb-8 text-center"} (tr :regular-payments)]
     [:div
      {:class "bg-white rounded-3xl shadow-xl p-10 max-w-2xl mx-auto"}
      [:div {:class "font-mono text-sm space-y-4"}
       [:p (str (tr :recipient) ": ГО \"АВЛЕТУ\"")]
       [:p (str (tr :iban) ": UA483220010000026006700003113")]
       [:p (str (tr :edrpou) ": 45699124")]
       [:p (str (tr :bank) ": АКЦІОНЕРНЕ ТОВАРИСТВО УНІВЕРСАЛ БАНК")]
       [:p (str (tr :mfo) ": 322001")]]]]
    
    ;; Charity payments
    [:div
     [:h3 {:class "text-2xl font-bold mb-8 text-center"} (tr :charity-payments)]
     [:div {:class "grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"}
      ;; Universal Bank charity IBAN
      [:div {:class "bg-white rounded-3xl shadow-xl p-8"}
        [:div {:class "font-semibold text-ueava-brown mb-4"} "Благодійний IBAN"]
        [:p {:class "font-mono break-all mb-6"} "UA 9032 2001 00000 29020 99800 2415"]
        [:div {:class "font-mono text-sm space-y-4"}
          [:p (str (tr :recipient) ": ГО \"АВЛЕТУ\"")]
          [:p (str (tr :edrpou) ": 45699124")]
          [:p (str (tr :bank) ": АКЦІОНЕРНЕ ТОВАРИСТВО УНІВЕРСАЛ БАНК")]
          [:p (str (tr :mfo) ": 322001")]]]
      
      ;; Monobank jar
      [:div {:class " bg-white rounded-3xl shadow-xl p-8 
                      flex flex-col items-center justify-center 
                      text-center"}
        [:h4 {:class "font-bold mb-4"} (tr :monobank-jar)]
        [:a {:href "https://send.monobank.ua/jar/44vwoFdbbA"
              :target "_blank"
              :class "block bg-orange-500 hover:bg-orange-600 px-10 py-5
                      text-white font-medium text-lg
                      rounded-2xl transition w-full"}
        "💰 Відкрити банку"]
        [:img { :src "img/char_mono_bank.jpg"
                :alt "monobank QR code"
         :class "mt-5 rounded-3xl"}]]]]]])

(defn about-page []
  [:main
   (hero-section)
   (about-text-section)
   (mission-section)
   (presidium-section)
   (founders-section)
   (contacts-section)
   (payments-section)
   ])

