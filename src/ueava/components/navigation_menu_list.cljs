(ns ueava.components.navigation-menu-list
  (:require
    [ueava.components.lang :refer [t]]
    [ueava.router :refer [navigate!]]))

(defn navigation-items []
  [{:title (t :hlist/Home)        :href "/home"}
   {:title (t :hlist/About)       :href "/about"}
   {:title (t :hlist/Resources)   :href "/home"}
   {:title (t :hlist/Membership)  :href "/membership"}
   {:title (t :hlist/Conferences) :href "/home"}])

;; not used
(defn navigation-menu-list []
  (for [{:keys [title href]} (navigation-items)]
    [:a {
          ;; :href href
          :key title
          :on-click (fn [e]
                  (.preventDefault e)
                      (navigate! href)
                      )
          :class "hover:text-ueava-sand"}
        title]))
