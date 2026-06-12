(ns ueava.pages.membership
  (:require
    [ueava.components.lang :refer [lang]]))

(def content
{:en
{:title "Membership"

:subtitle
"Become part of the professional community advancing exotic animal medicine in Ukraine."

:intro
"Membership in UEAVA is more than simply joining a professional association — it is becoming part of a community of veterinary professionals dedicated to advancing modern exotic animal medicine in Ukraine."

:benefits-title
"What UEAVA Members Receive"

:b1-title
"Professional Literature"

:b1-text
"Access educational materials, clinical guidelines, scientific publications, and valuable resources related to exotic animal medicine."

:b2-title
"Webinars & Education"

:b2-text
"Regular webinars, lectures, and educational events featuring Ukrainian and international specialists."

:b3-title
"Conference Discounts"

:b3-text
"Special participation terms and discounts for conferences, workshops, and educational events."

:b4-title
"Veterinarian Directory"

:b4-text
"Opportunity to be listed in the public directory of exotic animal veterinarians in Ukraine."

:b5-title
"Professional Community"

:b5-text
"Exchange experience, discuss clinical cases, and receive support from colleagues."

:b6-title
"Develop the Profession"

:b6-text
"Contribute to the advancement of evidence-based exotic animal medicine in Ukraine."

:cta-title
"Join UEAVA Today"

:cta-text
"Become part of a growing professional community shaping the future of exotic animal medicine."

:cta-button
"Apply for Membership"}

:uk
{:title "Членство"

:subtitle
"Станьте частиною професійної спільноти, що розвиває медицину екзотичних тварин в Україні."

:intro
"Членство в UEAVA — це не лише участь у професійній асоціації, а й доступ до спільноти ветеринарних лікарів, які розвивають сучасну медицину екзотичних тварин в Україні."

:benefits-title
"Що отримують члени асоціації"

:b1-title
"Професійна література"

:b1-text
"Доступ до навчальних матеріалів, клінічних рекомендацій, наукових публікацій та професійних ресурсів."

:b2-title
"Вебінари та навчання"

:b2-text
"Регулярні вебінари, лекції та освітні заходи за участю українських і міжнародних спеціалістів."

:b3-title
"Знижки на заходи"

:b3-text
"Спеціальні умови участі у конференціях, майстер-класах та інших освітніх подіях."

:b4-title
"Каталог спеціалістів"

:b4-text
"Можливість бути включеним до каталогу ветеринарних лікарів України."

:b5-title
"Професійна спільнота"

:b5-text
"Обмін досвідом, обговорення клінічних випадків та підтримка колег."

:b6-title
"Розвиток професії"

:b6-text
"Участь у розвитку доказової ветеринарної медицини екзотичних тварин в Україні."

:cta-title
"Приєднуйтесь до UEAVA"

:cta-text
"Станьте частиною професійної спільноти, яка формує майбутнє ветеринарної медицини екзотичних тварин."

:cta-button
"Подати заявку"}})

(defn tr [k]
(get-in content [@lang k]))

(defn hero-section []
[:section
{:class "relative h-[60vh] flex items-center justify-center overflow-hidden"}

[:div
{:class "absolute inset-0 bg-cover bg-center"
:style {:background-image
"url('img/ueava-about-team.webp')"}}]

[:div {:class "absolute inset-0 bg-black/60"}]

[:div
{:class "relative z-10 max-w-4xl text-center text-white px-8"}
[:h1 {:class "text-5xl md:text-7xl font-bold mb-6"}
(tr :title)]
[:p {:class "text-xl md:text-2xl"}
(tr :subtitle)]]])

(defn intro-section []
[:section
{:class "py-20"}
[:div
{:class "max-w-4xl mx-auto px-8 text-lg leading-relaxed text-center"}
[:p (tr :intro)]]])

(defn benefit-card [title text]
[:div
{:class "bg-white rounded-2xl p-8 shadow hover:shadow-xl transition"}
[:h3
{:class "text-xl font-bold mb-4 text-ueava-brown"}
title]
[:p
{:class "text-gray-700"}
text]])

(defn benefits-section []
[:section
{:class "bg-gray-50 py-24"}
[:div
{:class "max-w-7xl mx-auto px-8"}

[:h2
 {:class "text-4xl font-bold text-center mb-16"}
 (tr :benefits-title)]

[:div
 {:class "grid md:grid-cols-2 lg:grid-cols-3 gap-8"}

 [benefit-card (tr :b1-title) (tr :b1-text)]
 [benefit-card (tr :b2-title) (tr :b2-text)]
 [benefit-card (tr :b3-title) (tr :b3-text)]
 [benefit-card (tr :b4-title) (tr :b4-text)]
 [benefit-card (tr :b5-title) (tr :b5-text)]
 [benefit-card (tr :b6-title) (tr :b6-text)]]]])

(defn cta-section []
[:section
{:class "py-24"}

[:div
{:class "max-w-5xl mx-auto px-8"}

[:div
 {:class "bg-ueava-brown text-white rounded-3xl p-12 text-center"}

 [:h2
  {:class "text-4xl font-bold mb-6"}
  (tr :cta-title)]

 [:p
  {:class "text-lg mb-8 max-w-2xl mx-auto"}
  (tr :cta-text)]

 [:a
  {:href "#/registration"
   :class "inline-block bg-white text-ueava-brown font-bold px-8 py-4 rounded-xl hover:scale-105 transition"}
  (tr :cta-button)]]]])

(defn membership-page []
[:main
(hero-section)
(intro-section)
(benefits-section)
(cta-section)])
