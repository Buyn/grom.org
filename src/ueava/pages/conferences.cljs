(ns ueava.pages.conferences
  (:require
   [ueava.components.lang :refer [lang]]))

(def about-content
  {:en
   {:title "Conferences"
    :subtitle "Professional events, reports and conference materials"
    :p1 "UEAVA conferences bring together veterinary professionals, researchers, educators and students to exchange experience, discuss current challenges in veterinary medicine and present new scientific and practical developments. This section contains reports, conference materials and photo archives from past events."
    :pdf-report "PDF Report"
    :photo-album "Photo Album"
    }
   :uk
   {:title "Конференції"
    :subtitle "Професійні заходи, звіти та матеріали конференцій"
    :p1 "Конференції UEAVA об'єднують ветеринарних лікарів, науковців, викладачів та студентів для обміну досвідом, обговорення актуальних питань ветеринарної медицини та представлення нових наукових і практичних напрацювань. У цьому розділі зібрані матеріали попередніх заходів, підсумкові звіти та фотоархіви конференцій."
    :pdf-report "Звіт PDF"
    :photo-album "Фотоальбом"
    }})

(defn tr [k]
  (get-in about-content [@lang k]))

(def conferences
  [{:year "2026"
    :city {:en "Kyiv" :uk "Київ"}
    :title-foto "url('img/ueava-about-team.webp')"
    :title {:en "IX UEAVA Conference"
            :uk "IX Конференція UEAVA"}
    :text {:en "Conference dedicated to modern approaches in veterinary medicine, continuing education and professional collaboration."
           :uk "Конференція, присвячена сучасним підходам у ветеринарній медицині, безперервному професійному розвитку та співпраці фахівців."}
    :pdf "#"  ;; replace with real PDF when ready
    :photos "https://drive.google.com/drive/folders/1yuWpPmTBOIGG7n49py9_FpmGBdG1inqy"}

   {:year "2025"
    :city {:en "Lviv" :uk "Львів"}
    :title-foto "url('img/ueava-about-team.webp')"
    :title {:en "VIII UEAVA Conference"
            :uk "VIII Конференція UEAVA"}
    :text {:en "Annual gathering of veterinary professionals focused on practical experience and current industry challenges."
           :uk "Щорічна зустріч ветеринарних фахівців, присвячена обміну практичним досвідом та сучасним викликам галузі."}
    :pdf "#"
    :photos "https://drive.google.com/drive/folders/1yuWpPmTBOIGG7n49py9_FpmGBdG1inqy"}  ;; same folder or separate

   {:year "2024"
    :city {:en "Dnipro" :uk "Дніпро"}
    :title-foto "url('img/ueava-about-team.webp')"
    :title {:en "VII UEAVA Conference"
            :uk "VII Конференція UEAVA"}
    :text {:en "Presentations, discussions and educational sessions for veterinary practitioners."
           :uk "Доповіді, дискусії та освітні заходи для практикуючих ветеринарних лікарів."}
    :pdf "#"
    :photos "https://drive.google.com/drive/folders/1yuWpPmTBOIGG7n49py9_FpmGBdG1inqy"}])

(defn conference-card [conf]
  (let [t #(@lang (% conf))]
    [:div
     {:class "group relative bg-white rounded-3xl shadow-xl overflow-hidden h-full flex flex-col hover:-translate-y-1 transition-all duration-300"}
     ;; Photo background with dark overlay
     [:div {:class "relative h-56 bg-cover bg-center"
            :style {:background-image (str (:title-foto conf))}}
      [:div {:class "absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"}]]
     [:div {:class "p-8 flex-1 flex flex-col"}
      [:div {:class "text-sm uppercase tracking-widest text-ueava-brown-700 mb-3"}
       (str (t :city) " • " (:year conf))]
      [:h3 {:class "text-2xl font-bold mb-4 text-ueava-brown"}
       (t :title)]
      [:p {:class "text-gray-700 leading-relaxed mb-6 flex-1"}
       (t :text)]
      [:div {:class "flex flex-wrap gap-3 mt-auto pt-4"}
       [:a {:href (:photos conf)
            :target "_blank"
            :class "flex-1 text-center px-6 py-3 rounded-2xl
                    bg-ueava-brown-900 text-white hover:bg-ueava-brown-800
                    transition font-medium"}
        (tr :photo-album)]
       [:a {:href (:pdf conf)
            :target "_blank"
            :class "flex-1 text-center px-6 py-3 rounded-2xl border
                    border-ueava-brown-900 text-ueava-brown-900 hover:bg-ueava-brown-50
                    transition font-medium"}
        (tr :pdf-report)]]]]))

(defn hero-section []
  [:section
   {:class "relative h-[50vh] flex items-center justify-center overflow-hidden"}
   [:div
    {:class "absolute inset-0 bg-cover bg-center"
     :style {:background-image "url('img/Hero_Slide_1_chameleon.jpg')"}}]
   [:div {:class "absolute inset-0 bg-black/60"}]
   [:div
    {:class "relative z-10 max-w-4xl text-center text-white px-8"}
    [:h1 {:class "text-5xl md:text-7xl font-bold mb-6"} (tr :title)]
    [:p {:class "text-xl md:text-2xl"} (tr :subtitle)]]])

(defn about-text-section []
  [:section {:class "py-20"}
   [:div {:class "max-w-4xl mx-auto px-8 space-y-8 text-lg leading-relaxed"}
    [:p (tr :p1)]]])

(defn archive-section []
  [:section {:class "py-20 bg-gray-50"}
   [:div {:class "max-w-6xl mx-auto px-8"}
    [:h2 {:class "text-4xl font-bold text-center mb-12 text-ueava-brown"}
     (if (= @lang :uk) "Архів конференцій" "Conference Archive")]
    
    [:div {:class "grid md:grid-cols-2 lg:grid-cols-3 gap-8"}
     (for [conf conferences]
       ^{:key (:year conf)}
       [conference-card conf])]]])

(defn conferences-page []
  [:main
   (hero-section)
   (about-text-section)
   (archive-section)])
