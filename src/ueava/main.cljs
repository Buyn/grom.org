(ns ueava.main
  (:require 
            [ueava.components.hero :refer [hero]]
            [ueava.components.benefits :refer [benefits]]
            [ueava.components.cta :refer [cta]]
            [ueava.components.membership :refer [membership]]))

(defn main []
  [:main
    [hero]
    [benefits]
    [cta]
    [membership]])

