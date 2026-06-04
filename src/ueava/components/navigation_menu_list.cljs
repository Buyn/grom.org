(ns ueava.components.navigation-menu-list
  (:require
    [ueava.components.lang :refer [t]]))

;; (defn navigation-menu-list[]
;;   ;; [:<>
;;   `(
;;    [:a {:href "#" :class "hover:text-ueava-sand"} "Home"]
;;    [:a {:href "#" :class "hover:text-ueava-sand"} "About"]
;;    [:a {:href "#" :class "hover:text-ueava-sand"} "Resources"]
;;    [:a {:href "#" :class "hover:text-ueava-sand"} "Membership"]
;;    [:a {:href "#" :class "hover:text-ueava-sand"} "Conferences"]
;;    )
;;   ;; ]
;;   )

(defn navigation-items []
  [{:title (t :hlist/Home)        :href "/home"}
   {:title (t :hlist/About)       :href "/about"}
   {:title (t :hlist/Resources)   :href "/home"}
   {:title (t :hlist/Membership)  :href "/membership"}
   {:title (t :hlist/Conferences) :href "/home"}])

(defn navigation-menu-list []
  (for [{:keys [title href]} (navigation-items)]
    [:a {:href href
         :key title
         :class "hover:text-ueava-sand"}
          title]))


;; (defn navigation-menu-list []
;;   (mapv
;;    (fn [{:keys [title href]}]
;;      [:a {:href href :class "hover:text-ueava-sand"}
;;       title])
;;    navigation-items))
