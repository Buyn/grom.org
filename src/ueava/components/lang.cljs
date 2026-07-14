(ns ueava.components.lang
  (:require
      [reagent.core :as r]))

(defn load-lang []
  (keyword
   (or (.getItem js/localStorage "lang")
       "en")))

;; (defonce lang (r/atom :en))

(defonce lang (r/atom (load-lang)))

(def dict
  {:en {
        :topb/lang " Ua"
        :header/cta "Find A Vet"
        :hlist/Home "Home"
        :hlist/About "About"
        :hlist/Resources "Resources"
        :hlist/Membership "Membership"
        :hlist/Conferences "Conferences"
        :hero/title "Why Do You Need A Veterinarian?"
        :hero/chameleon "Explore the world of reptile and amphibian medicine."
        :hero/chameleon-text "Specialized care for exotic animals."
        :hero/chameleon-btn "Become Member"
        :hero/owl "Making avian medicine accessible, clear, and practical."
        :hero/owl-text "Support for bird specialists worldwide."
        :hero/owl-btn "Learn More"
        :hero/rabbit "Advance your expertise in small mammal medicine."
        :hero/rabbit-text "Advanced treatment for rabbits and rodents."
        :hero/rabbit-btn "Join UEAVA"
        :hero/bear "Make an impact in wildlife and exotic animal medicine."
        :hero/bear-text "Supporting vets working with wildlife."
        :hero/bear-btn "Discover"
        :benefits/title "Why Join UEAVA"
        :benefits/c1-title "Scientific Journal"
        :benefits/c1-dis "Access research and publications in exotic animal medicine."
        :benefits/c2-title "Find-A-Vet Directory"
        :benefits/c2-dis "Be listed in a nationwide directory of veterinary professionals."
        :benefits/c3-title "Professional Community"
        :benefits/c3-dis "Join a professional network of veterinary experts across Ukraine."
        :cta/title "Join the Professional Community Advancing Exotic Animal Medicine"
        :cta/dis "Become part of Ukrainian Exotic Animal Veterinary Association — a veterinary association uniting professionals in exotic animal."
        :cta/button "Join UEAVA"
        :footer/logo "UEAVA is a professional community advancing exotic animal veterinary medicine through education, collaboration, and expertise."
        :footer/nav-title "Navigation"
        :footer/res-title "Contact Us"
        :footer/news-title "Newsletter"
        :footer/news-text "Subscribe to receive updates and news."
        :footer/news-button "Subscribe"
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
        :hero/chameleon-text "Спеціалізований догляд за екзотичними тваринами."
        :hero/chameleon-btn "Стати учасником"
        :hero/owl-text "Підтримка спеціалістів з птахівництва в усьому світі."
        :hero/owl-btn "Дізнатися більше"
        :hero/owl "Робимо медицину птахів зрозумілою, доступною та дійсно практичною."
        :hero/rabbit "Підвищуйте свій рівень експертності в медицині дрібних ссавців."
        :hero/rabbit-text "Удосконалюйте свої навички в медицині кролів та гризунів."
        :hero/rabbit-btn "Приєднатися до UEAVA"
        :hero/bear "Зробіть свій внесок у розвиток медицини диких та екзотичних тварин."
        :hero/bear-text "Підтримка ветеринарів, які працюють з дикими тваринами."
        :hero/bear-btn "Докладніше"
        :benefits/title "Що ви отримуєте з UEAVA"
        :benefits/c1-title "Науковий журнал"
        :benefits/c1-dis "Отримуйте доступ до актуальних досліджень і публікацій у сфері медицини екзотичних тварин."
        :benefits/c2-title "Всеукраїнський каталог ветеринарних лікарів"
        :benefits/c2-dis "Будьте представлені у всеукраїнському каталозі ветеринарних лікарів і підвищуйте свою професійну видимість."
        :benefits/c3-title "Професійна спільнота"
        :benefits/c3-dis "Долучайтеся до професійної спільноти ветеринарних фахівців з усієї України."
        :cta/title "Долучайтеся до професійної спільноти, що формує майбутнє медицини екзотичних тварин."
        :cta/dis "Українська асоціація ветеринарної медицини екзотичних тварин — це простір для розвитку, співпраці та професійного зростання лікарів, які працюють з екзотичними тваринами."
        :cta/button "Станьте частиною UEAVA"
        :footer/logo "UEAVA — професійна спільнота, яка розвиває ветеринарну медицину екзотичних тварин, об’єднуючи освіту, співпрацю та експертні знання."
        :footer/nav-title "Навігація"
        :footer/res-title "Контакти"
        :footer/news-title "Інформаційний бюлетень"
        :footer/news-text "Підпишіться, щоб отримувати оновлення та новини."
        :footer/news-button "Підписатися"
        }})

(defn t [k]
  (get-in dict [@lang k]))

;; (defn toggle-lang []
;;   (swap! lang {:en :uk :uk :en}))
(defn toggle-lang []
  (let [new-lang ({:en :uk :uk :en} @lang)]
    (reset! lang new-lang)
    (.setItem js/localStorage
              "lang"
              (name new-lang))))

(defn button-toggle-lang []
 [:button
    {:on-click toggle-lang}
    "🌍 "
    (t :topb/lang)])
