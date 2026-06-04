(ns ueava.pages.home
  (:require 
            [ueava.components.hero :refer [hero]]
            [ueava.components.benefits :refer [benefits]]
            [ueava.components.cta :refer [cta]]
            [ueava.components.membership :refer [membership]]))

(defn home-page []
  [:main
    [hero]
    [benefits]
    [cta]
    [membership]])
