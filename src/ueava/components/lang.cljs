(ns ueava.components.lang
  (:require
      [reagent.core :as r]))

(defonce lang (r/atom :en))

(def dict
  {:en {:hero/title "Why Do You Need A Veterinarian?"
        :topb/lang "Мова Ua "
        :header/cta "!Find A Vet"
        }
   :uk {:hero/title "Чому вам потрібен ветеринар?"
        :topb/lang "language En "
        :header/cta "!Find A Vet!"}})

(defn t [k]
  (get-in dict [@lang k]))

(defn toggle-lang []
  (swap! lang {:en :uk :uk :en}))

(defn button-toggle-lang []
 [:button
    {:on-click toggle-lang}
    "🌍 "
    (t :topb/lang)])
