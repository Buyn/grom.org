(ns tests.components-navigation-menu-test
  (:require [cljs.test :refer [deftest is]]
            [ueava.components.navigation-menu :refer [navigation-menu]]))

(deftest navigation-menu-test
  ;; (is (= (t "md:flex")
  ;;        [:button {:class "bg-orange-500 text-white px-4 py-2 rounded\n            hover:bg-orange-600 transition \n            hidden space-x-8 font-medium md:flex"} "Find A Vet"]))
  ;; (is (= (t "")
  ;;         [:button {:class "bg-orange-500 text-white px-4 py-2 rounded\n            hover:bg-orange-600 transition \n            hidden space-x-8 font-medium "} "Find A Vet"]))

  (is (= (navigation-menu)
           [:nav {:class "hidden md:flex space-x-8 font-medium"} [:a {:href "#", :class "hover:text-ueava-sand"} "Home"] [:a {:href "#", :class "hover:text-ueava-sand"} "About"] [:a {:href "#", :class "hover:text-ueava-sand"} "Resources"] [:a {:href "#", :class "hover:text-ueava-sand"} "Membership"] [:a {:href "#", :class "hover:text-ueava-sand"} "Conferences"]]))
  )
