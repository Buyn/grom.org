(ns ueava.components.lang
  (:require
      [reagent.core :as r]))

(defonce lang (r/atom :en))

(def dict
  {:en {:hero/title "Why Do You Need A Veterinarian?"
        :hero/chameleon "Explore the world of reptile and amphibian medicine."
        :hero/owl "Making avian medicine accessible, clear, and practical."
        :hero/rabbit "Advance your expertise in small mammal medicine."
        :hero/bear "Make an impact in wildlife and exotic animal medicine."
        :topb/lang "Мова Ua " ;; эту строку не нужно переводить она должна быть на укринском 
        :header/cta "Find A Vet"
        :footer/logo "UEAVA is a professional community advancing exotic animal veterinary medicine through education, collaboration, and expertise."
        }

   :uk {:hero/title "Чому вам потрібен ветеринар?"
        :hero/chameleon "Досліджуйте світ медицини рептилій та амфібій разом із нами"
        :hero/owl "Робимо медицину птахів зрозумілою, доступною та дійсно практичною."
        :hero/rabbit "Підвищуйте свій рівень експертності в медицині дрібних ссавців."
        :hero/bear "Зробіть свій внесок у розвиток медицини диких та екзотичних тварин."
        :topb/lang "language En " ;; эту строку не нужно переводить она должна быть на английском 
        :header/cta "Найти ветеринара"
        :footer/logo " UEAVA — професійна спільнота, яка розвиває ветеринарну медицину екзотичних тварин, об’єднуючи освіту, співпрацю та експертні знання."
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
