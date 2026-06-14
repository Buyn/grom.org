(ns ueava.pages.membership
  (:require
    [ueava.components.lang :refer [lang]]
    [ueava.components.membership :refer [link]]))

(def content
  {:en
    {:title "Become a Member"
     :subtitle "Join the professional community advancing exotic animal medicine in Ukraine."
     :apply "Apply for Membership"

     :intro "Become part of the professional community advancing exotic animal medicine in Ukraine. Membership in UEAVA is more than simply joining a professional association — it is becoming part of a community of veterinary professionals dedicated to advancing modern exotic animal medicine in Ukraine."

     :benefits-title "What UEAVA Members Receive"
     :b1-title "Professional Literature"
     :b1-subtitle "Access to Professional Literature and Educational Resources"
     :b1-text "Members gain access to educational materials, clinical guidelines, scientific publications, and valuable resources related to exotic animal medicine."
     :b2-title "Webinars & Education"
     :b2-subtitle "Educational Webinars and Professional Development"
     :b2-text "UEAVA regularly organizes webinars, lectures, and educational events featuring both Ukrainian and international specialists in exotic animal medicine."
     :b3-title "Conference Discounts"
     :b3-subtitle "Discounts on Conferences and Educational Events"
     :b3-text "Members of the association receive special participation terms and discounts for conferences, workshops, and other educational events organized by UEAVA."
     :b4-title "Veterinarian Directory"
     :b4-subtitle "Inclusion in the Directory of Exotic Animal Veterinarians in Ukraine"
     :b4-text "UEAVA members may be included in the public directory of veterinary professionals working with exotic animals, helping pet owners find qualified specialists across Ukraine."
     :b5-title "Professional Community"
     :b5-subtitle "Professional Community and Peer Support"
     :b5-text "UEAVA is a community of like-minded professionals where members can exchange experience, discuss clinical cases, receive support from colleagues, and grow together within a strong professional network."
     :b6-title "Develop the Profession"
     :b6-subtitle "Contribution to the Development of Exotic Animal Medicine in Ukraine"
     :b6-text "By becoming a member of the association, you contribute to the development of the professional veterinary community, the promotion of evidence-based medicine, and the establishment of modern standards of care for exotic animals in Ukraine."

     :cta-title "Join UEAVA Today"
     :cta-text "Become part of a growing professional community shaping the future of exotic animal medicine."
     :cta-button "Apply for Membership"}

   :uk
    {:title "Членство в UEAVA"
     :subtitle "Долучайтеся до професійної спільноти ветеринарних лікарів екзотичних тварин."
     :apply "Подати заявку"

     :intro "Станьте частиною професійної спільноти, що розвиває медицину екзотичних тварин в Україні. Членство в UEAVA — це не лише участь у професійній асоціації, а й доступ до спільноти ветеринарних лікарів, які розвивають сучасну медицину екзотичних тварин в Україні."

     :benefits-title "Що отримують члени асоціації"
     :b1-title "Професійна література"
     :b1-subtitle "Доступ до професійної літератури та матеріалів"
     :b1-text "Члени асоціації отримують доступ до навчальних матеріалів, клінічних рекомендацій, наукових публікацій та корисних ресурсів з медицини екзотичних тварин."
     :b2-title "Вебінари та навчання"
     :b2-subtitle "Освітні вебінари та професійний розвиток"
     :b2-text "UEAVA регулярно організовує вебінари, лекції та навчальні заходи за участю українських та міжнародних спеціалістів."
     :b3-title "Знижки на заходи"
     :b3-subtitle "Знижки на конференції та заходи"
     :b3-text "Члени громадської організації отримують спеціальні умови участі та знижки на конференції, майстер-класи та інші освітні події асоціації."
     :b4-title "Каталог спеціалістів"
     :b4-subtitle "Включення до каталогу практикуючих екзотологів України"
     :b4-text "Члени UEAVA можуть бути включені до загального каталогу ветеринарних лікарів, які працюють з екзотичними тваринами, що допомагає власникам тварин знаходити профільних спеціалістів."
     :b5-title "Професійна спільнота"
     :b5-subtitle "Професійна спільнота та підтримка колег"
     :b5-text "UEAVA — це середовище однодумців, де можна обмінюватися досвідом, отримувати підтримку колег, обговорювати клінічні випадки та розвиватися разом із професійною спільнотою."
     :b6-title "Розвиток професії"
     :b6-subtitle "Розвиток ветеринарної медицини екзотичних тварин в Україні"
     :b6-text "Стаючи членом асоціації, ви долучаєтесь до розвитку професійної ветеринарної спільноти, популяризації доказової медицини та формування сучасних стандартів лікування екзотичних тварин."

     :cta-title "Приєднуйтесь до UEAVA"
     :cta-text "Станьте частиною професійної спільноти, яка формує майбутнє ветеринарної медицини екзотичних тварин."
     :cta-button "Подати заявку"}})

(defn tr [k]
  (get-in content [@lang k]))

(defn hero-section []
  [:section
    {:class "relative h-[60vh] flex items-center justify-center overflow-hidden"}
    [:div
      {:class "absolute inset-0 bg-cover bg-center"
      :style {:background-image "url('img/ueava-about-team.webp')"}}]
    [:div {:class "absolute inset-0 bg-black/60"}]
    [:div
     {:class "relative z-10 max-w-4xl text-center text-white px-8"}
      [:h1 {:class "text-5xl md:text-7xl font-bold mb-6"}
        (tr :title)]
      [:p {:class "text-xl md:text-2xl mb-12"}
       (tr :subtitle)]
      [:a
        { :href link
          :target "_blank"
          :rel "noopener noreferrer"
          :class "inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg"}
        (tr :apply)]]])

(defn intro-section []
  [:section
    {:class "py-20"}
    [:div
      {:class "max-w-4xl mx-auto px-8 text-lg leading-relaxed text-center"}
      [:p (tr :intro)]]])

(defn benefit-card [title subtitle text]
  [:div
    {:class "bg-white rounded-2xl p-8 shadow hover:shadow-xl transition"}
    [:h3 {:class "text-xl font-bold mb-2 text-ueava-brown"} title]
    [:p {:class "italic text-gray-600 mb-4 text-lg"} subtitle]
    [:p {:class "text-gray-700"} text]])

(defn benefits-section []
  [:section
    {:class "bg-gray-50 py-24"}
    [:div
      {:class "max-w-7xl mx-auto px-8"}
      [:h2 {:class "text-4xl font-bold text-center mb-16"} (tr :benefits-title)]
      [:div {:class "grid md:grid-cols-2 lg:grid-cols-3 gap-8"}
       [benefit-card (tr :b1-title) (tr :b1-subtitle) (tr :b1-text)]
       [benefit-card (tr :b2-title) (tr :b2-subtitle) (tr :b2-text)]
       [benefit-card (tr :b3-title) (tr :b3-subtitle) (tr :b3-text)]
       [benefit-card (tr :b4-title) (tr :b4-subtitle) (tr :b4-text)]
       [benefit-card (tr :b5-title) (tr :b5-subtitle) (tr :b5-text)]
       [benefit-card (tr :b6-title) (tr :b6-subtitle) (tr :b6-text)]]]])

(defn cta-section []
  [:section
    {:class "py-24"}
    [:div
      {:class "max-w-5xl mx-auto px-8"}
      [:div
        {:class "bg-ueava-brown text-white rounded-3xl p-12 text-center"}
        [:h2 {:class "text-4xl font-bold mb-6"} (tr :cta-title)]
        [:p {:class "text-lg mb-8 max-w-2xl mx-auto"} (tr :cta-text)]
        [:a { :href link
              :target "_blank"
              :rel "noopener noreferrer"
              :class "inline-block bg-white text-ueava-brown font-bold px-8 py-4 rounded-xl hover:scale-105 transition"}
          (tr :cta-button)]]]])

(defn membership-page []
  [:main
    (hero-section)
    (intro-section)
    (benefits-section)
    (cta-section)])
