(ns ueava.components.topbar
  (:require
    [reagent.core :as r]
    [ueava.components.lang :refer [button-toggle-lang t]]))

(defonce top-visible? (r/atom true))

(defn topbar[]
  [:div
   {:class (str
            "transition-all duration-700 overflow-hidden "
            (if @top-visible?
              "h-10 opacity-100 translate-y-0"
              "h-0 opacity-0 -translate-y-4 pointer-events-none"))}
   [:div {:class "bg-ueava-cream shadow text-gray-900 text-right py-1 px-4"}
      [button-toggle-lang]]])
