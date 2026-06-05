(ns ueava.router
  (:require [reagent.core :as r]))

(defonce route (r/atom :home))

;; (def routes
;;   {"/" :home
;;    "/about" :about
;;    "/membership" :membership})

(def routes
  {""             :home
   "#"            :home
   "#/"           :home
   "#/home"       :home
   "#/about"      :about
   "#/membership" :membership})

;; (defn current-route []
;;   (get routes
;;        (.-pathname js/location)
;;        :home))

(defn current-route []
  (get routes
       (.-hash js/location)
       :home))

(defn sync-route! []
  (reset! route (current-route)))

;; (defn init-router! []
;;   (sync-route!)
;;   (.addEventListener
;;    js/window
;;    "popstate"
;;    sync-route!))

(defn init-router! []
  (sync-route!)
  (.addEventListener
   js/window
   "hashchange"
   sync-route!))

;; (defn navigate! [url]
;;   (.pushState js/history nil "" url)
;;   (sync-route!))

(defn navigate! [url]
  (set! (.-hash js/location) url))
