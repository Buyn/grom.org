(ns ueava.router
  (:require [reagent.core :as r]))

(defonce route (r/atom :home))

(def routes
  {""             :home
   "#"            :home
   "#/"           :home
   "#/home"       :home
   "#/about"      :about
   "#/conferences":conferences
   "#/resources"  :resources
   "#/membership" :membership})

(defn navigate-to-section! [route section]
  (set! (.-hash js/location) route)
  (js/setTimeout
    #(when-let [el (.getElementById js/document section)]
      (.scrollIntoView el #js {:behavior "smooth"}))
    100))

(defn current-route []
  (get routes
       (.-hash js/location)
       :home))

(defn sync-route! []
  (reset! route (current-route)))

(defn init-router! []
  (sync-route!)
  (.addEventListener
   js/window
   "hashchange"
   sync-route!))

(defn navigate! [url]
  (set! (.-hash js/location) url))
