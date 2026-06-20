(ns ueava.components.membership
  (:require [ueava.components.lang :refer [lang]]))

(def link "https://docs.google.com/forms/d/e/1FAIpQLSfrWpfQhDZGyt__qvFb3HmuyEVLPbKvnkWwNbacc7BTk7dXcg/viewform?usp=header")

    ;; "Membership Benefits"
(def benefits-title
  {:en "What UEAVA Members Receive"
   :uk "Що отримують члени асоціації"})

(def content
  [{:title
    { :en "Professional Literature"
      :uk "Професійна література"}
    :subtitle
    { :en "Access to Professional Literature and Educational Resources"
      :uk "Доступ до професійної літератури та матеріалів"}}
   {:title
    { :en "Webinars & Education"
      :uk "Вебінари та навчання"}
    :subtitle
    { :en "Educational Webinars and Professional Development"
      :uk "Освітні вебінари та професійний розвиток"}}
   {:title
    { :en "Conference Discounts"
      :uk "Знижки на заходи"}
    :subtitle
    { :en "Discounts on Conferences and Educational Events"
      :uk "Знижки на конференції та заходи"}}
   {:title
    { :en "Veterinarian Directory"
      :uk "Каталог спеціалістів"}
    :subtitle
    { :en "Inclusion in the Directory of Exotic Animal Veterinarians in Ukraine"
      :uk "Включення до каталогу практикуючих екзотологів України"}}
   {:title
    { :en "Professional Community"
      :uk "Професійна спільнота"}
    :subtitle
    { :en "Professional Community and Peer Support"
      :uk "Професійна спільнота та підтримка колег"}}
   {:title
    { :en "Develop the Profession"
      :uk "Розвиток професії"}
    :subtitle
    { :en "Contribution to the Development of Exotic Animal Medicine in Ukraine"
      :uk "Розвиток ветеринарної медицини екзотичних тварин в Україні"}}])

(defn card [content]
  (let [t #(@lang (% content))]
    [:div {:class "p-6 border rounded-lg"}
      [:h3 {:class "font-semibold mb-2"} (t :title)]
      [:p (t :subtitle)]]))

(defn membership []
  [:section {:class "py-20"}
   [:div {:class "max-w-6xl mx-auto px-6"}
    [:h2 {:class "text-3xl font-bold text-center mb-12"}
      (@lang benefits-title)]
    [:div {:class "grid md:grid-cols-3 gap-8"}
      (for [c content]
        ^{:key (:title c)}
        [card c])]]])
