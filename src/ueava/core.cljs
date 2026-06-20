(ns ueava.core
  (:require [reagent.core :as reagent :refer [atom]]
            [ueava.header :refer [header]]
            [ueava.footer :refer [footer]]
            [ueava.router :refer [route init-router!]]
            [ueava.pages.home :refer [home-page]]
            [ueava.pages.about :refer [about-page]]
            [ueava.pages.conferences :refer [conferences-page]]
            [ueava.pages.resources :refer [resources-page]]
            [ueava.pages.membership :refer [membership-page]]
            ))

(defn current-page []
  (case @route
    :home [home-page]
    :about [about-page]
    :resources [resources-page]
    :conferences [conferences-page]
    :membership [membership-page]
    [home-page]))

(defn page []
  [:div
    [header]
    [current-page]
    [footer]])


(defn start []
  (reagent/render-component
    [page]
    (. js/document (getElementById "app"))))

(defn ^:export init []
  ;; init is called ONCE when the page loads
  ;; this is called in the index.html and must be exported
  ;; so it is available even in :advanced release builds
  (init-router!)
  (start))

(defn stop []
  ;; stop is called before any code is reloaded
  ;; this is controlled by :before-load in the config
  (js/console.log "stop"))
