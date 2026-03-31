(ns ueava.components.navigation-cta
  (:require
    [ueava.components.lang :refer [t]]))

(defn navigation-cta
  ([] (navigation-cta ""))
  ([md] [:button
    {:class (str "bg-orange-500 text-white px-4 py-2 rounded
            hover:bg-orange-600 transition 
            hidden space-x-8 font-medium "
                 md)} ;;md:flex or ""
    ;; "Find A Vet"]))
    (t :header/cta)]))
