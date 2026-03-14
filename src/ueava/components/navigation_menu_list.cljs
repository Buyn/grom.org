(ns ueava.components.navigation-menu-list)

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

(def navigation-items
  [{:title "Home"        :href "#"}
   {:title "About"       :href "#"}
   {:title "Resources"   :href "#"}
   {:title "Membership"  :href "#"}
   {:title "Conferences" :href "#"}])

(defn navigation-menu-list []
  (for [{:keys [title href]} navigation-items]
    [:a {:href href
         :class "hover:text-ueava-sand"}
          title]))


;; (defn navigation-menu-list []
;;   (mapv
;;    (fn [{:keys [title href]}]
;;      [:a {:href href :class "hover:text-ueava-sand"}
;;       title])
;;    navigation-items))
