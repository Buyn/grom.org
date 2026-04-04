(ns ueava.components.lang
  (:require
      [reagent.core :as r]))

(defonce lang (r/atom :en))

(def dict
  {:en {
        :topb/lang " Ua" ;; эту строку не нужно переводить она должна быть на укринском 
        :header/cta "Find A Vet"
        :hlist/Home "Home"
        :hlist/About "About"
        :hlist/Resources "Resources"
        :hlist/Membership "Membership"
        :hlist/Conferences "Conferences"
        :hero/title "Why Do You Need A Veterinarian?"
        :hero/chameleon "Explore the world of reptile and amphibian medicine."
        :hero/owl "Making avian medicine accessible, clear, and practical."
        :hero/rabbit "Advance your expertise in small mammal medicine."
        :hero/bear "Make an impact in wildlife and exotic animal medicine."
        :cta/title "Join the Professional Community Advancing Exotic Animal Medicine"
        :cta/dis "Become part of Ukrainian Exotic Animal Veterinary Association — a veterinary association uniting professionals in exotic animal."
        :cta/button "Join UEAVA"
        :footer/logo "UEAVA is a professional community advancing exotic animal veterinary medicine through education, collaboration, and expertise."
        }

   :uk {
        :topb/lang " En " ;; эту строку не нужно переводить она должна быть на английском 
        :header/cta "Знайти спеціаліста"
        :hlist/Home "На головну"
        :hlist/About "Про нас"
        :hlist/Resources "Ресурси"
        :hlist/Membership "Членство"
        :hlist/Conferences "Конференції"
        :hero/title "Чому вам потрібен ветеринар?"
        :hero/chameleon "Досліджуйте світ медицини рептилій та амфібій разом із нами"
        :hero/owl "Робимо медицину птахів зрозумілою, доступною та дійсно практичною."
        :hero/rabbit "Підвищуйте свій рівень експертності в медицині дрібних ссавців."
        :hero/bear "Зробіть свій внесок у розвиток медицини диких та екзотичних тварин."
        :cta/title "Долучайтеся до професійної спільноти, що формує майбутнє медицини екзотичних тварин."
        :cta/dis "Українська асоціація ветеринарної медицини екзотичних тварин — це простір для розвитку, співпраці та професійного зростання лікарів, які працюють з екзотичними тваринами."
        :cta/button "Станьте частиною UEAVA"
        :main/benefit-title "Станьте частиною UEAVA"
        :footer/logo "UEAVA — професійна спільнота, яка розвиває ветеринарну медицину екзотичних тварин, об’єднуючи освіту, співпрацю та експертні знання."
        }})

(defn t [k]
  (get-in dict [@lang k]))

(defn toggle-lang []
  (swap! lang {:en :uk :uk :en}))

(defn button-toggle-lang []
 [:button
    {:on-click toggle-lang}
    "🌍 "
    (t :topb/lang)])
