(ns ueava.pages.resources
  (:require
   [ueava.components.lang :refer [lang]]))

(def content
  {:en
   {:title "Resources"
    :subtitle
    "Official documents, educational materials, and professional knowledge for exotic animal veterinarians."

    :documents "Official Documents"
    :library "Education Library"
    :members "Member Area"

    :statute-title "Association Statute"
    :statute-desc "Official charter and governing rules of UEAVA."

    :protocols-title "Meeting Protocols"
    :protocols-desc "Official records of association meetings."

    :circulars-title "Circulars"
    :circulars-desc "Internal announcements and decisions."

    :books-title "Books"
    :books-desc "Professional literature and recommended reading."

    :webinars-title "Webinars"
    :webinars-desc "Recorded educational sessions."

    :articles-title "Articles"
    :articles-desc "Scientific publications and clinical materials."

    :conference-title "Conference Materials"
    :conference-desc "Lectures, presentations and event materials."

    :members-title "Exclusive Member Content"
    :members-desc
    "Access webinars, clinical cases, presentations and educational materials available only to members."

    :open "Open PDF"
    :soon "Coming Soon"
    :join "Become a Member"}

   :uk
   {:title "Ресурси"
    :subtitle
    "Офіційні документи, навчальні матеріали та професійні знання для ветеринарних лікарів екзотичних тварин."

    :documents "Офіційні документи"
    :library "Бібліотека знань"
    :members "Зона для членів асоціації"

    :statute-title "Статут UEAVA"
    :statute-desc "Офіційний статут та правила діяльності асоціації."

    :protocols-title "Протоколи зборів"
    :protocols-desc "Офіційні записи засідань асоціації."

    :circulars-title "Циркуляри"
    :circulars-desc "Внутрішні повідомлення та рішення."

    :books-title "Книги"
    :books-desc "Професійна література та рекомендовані видання."

    :webinars-title "Вебінари"
    :webinars-desc "Записи освітніх заходів."

    :articles-title "Статті"
    :articles-desc "Наукові публікації та клінічні матеріали."

    :conference-title "Матеріали конференцій"
    :conference-desc "Презентації, лекції та матеріали заходів."

    :members-title "Ексклюзивні матеріали"
    :members-desc
    "Вебінари, клінічні кейси, презентації та навчальні матеріали лише для членів асоціації."

    :open "Відкрити PDF"
    :soon "Скоро"
    :join "Стати членом"}})

(defn tr [k]
  (get-in content [@lang k]))

(defn hero-section []
  [:section
   {:class "relative h-[50vh] flex items-center justify-center overflow-hidden"}
   [:div
    {:class "absolute inset-0 bg-cover bg-center"
     :style {:background-image
             "url('img/ueava-about-team.webp')"}}]
   [:div {:class "absolute inset-0 bg-black/60"}]
   [:div
    {:class "relative z-10 text-center text-white max-w-4xl px-8"}
    [:h1
     {:class "text-5xl md:text-7xl font-bold mb-6"}
     (tr :title)]
    [:p
     {:class "text-xl md:text-2xl"}
     (tr :subtitle)]]])

(defn document-card [title desc href]
  [:div
   {:class "bg-white rounded-xl p-8 shadow
            hover:shadow-xl transition"}
   [:div {:class "text-4xl mb-4"} "📄"]
   [:h3
    {:class "text-xl font-bold mb-3"}
    title]
   [:p
    {:class "text-gray-600 mb-6"}
    desc]
   [:a
    {:href href
     :target "_blank"
     :class "inline-block bg-orange-500 text-white px-5 py-2 rounded hover:bg-orange-600"}
    (tr :open)]])

(defn coming-card [title desc]
  [:div
   {:class "bg-white rounded-xl p-8 shadow"}
   [:div {:class "text-4xl mb-4"} "📁"]
   [:h3
    {:class "text-xl font-bold mb-3"}
    title]
   [:p
    {:class "text-gray-600 mb-6"}
    desc]
   [:span
    {:class "inline-block px-4 py-2 rounded bg-gray-200 text-gray-700"}
    (tr :soon)]])

(defn documents-section []
  [:section
   {:class "py-24"}
   [:div
    {:class "max-w-7xl mx-auto px-8"}
    [:h2
     {:class "text-4xl font-bold text-center mb-12"}
     (tr :documents)]
    [:div
     {:class "grid md:grid-cols-3 gap-8"}
     [document-card
      (tr :statute-title)
      (tr :statute-desc)
      "res/statut.pdf"]
     [coming-card
      (tr :protocols-title)
      (tr :protocols-desc)]
     [coming-card
      (tr :circulars-title)
      (tr :circulars-desc)]]]])

(defn library-card [title desc]
  [:div
   {:class "bg-white rounded-xl p-8 shadow
            hover:shadow-xl transition"}
   [:h3
    {:class "text-xl font-bold mb-3"}
    title]
   [:p
    {:class "text-gray-600 mb-6"}
    desc]
   [:span
    {:class "inline-block px-4 py-2 rounded bg-gray-200 text-gray-700"}
    (tr :soon)]])

(defn library-section []
  [:section
   {:class "bg-gray-50 py-24"}
   [:div
    {:class "max-w-7xl mx-auto px-8"}
    [:h2
     {:class "text-4xl font-bold text-center mb-12"}
     (tr :library)]
    [:div
     {:class "grid md:grid-cols-2 lg:grid-cols-4 gap-8"}
     [library-card (tr :books-title) (tr :books-desc)]
     [library-card (tr :webinars-title) (tr :webinars-desc)]
     [library-card (tr :articles-title) (tr :articles-desc)]
     [library-card (tr :conference-title) (tr :conference-desc)]]]])

(defn member-section []
  [:section
   {:class "py-24"}
   [:div
    {:class
     "max-w-5xl mx-auto px-8"}
    [:div
     {:class
      "rounded-3xl bg-gradient-to-r
       from-orange-500 to-orange-700
       text-white p-12 text-center"}
     [:h2
      {:class "text-4xl font-bold mb-6"}
      (tr :members-title)]
     [:p
      {:class "text-xl mb-8"}
      (tr :members-desc)]
     [:button
      {:class
       "bg-white text-orange-600
        px-8 py-3 rounded-lg
        font-semibold"}
      (tr :join)]]]])

(defn resources-page []
  [:main
   [hero-section]
   [documents-section]
   [library-section]
   [member-section]])
