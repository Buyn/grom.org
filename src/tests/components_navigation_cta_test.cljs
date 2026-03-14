(ns tests.components-navigation-cta-test
  (:require [cljs.test :refer [deftest is]]
            [ueava.components.navigation-cta :refer [navigation-cta]]))

(deftest navigation-cta-test
  (is (= (navigation-cta "md:flex")
         [:button {:class "bg-orange-500 text-white px-4 py-2 rounded\n            hover:bg-orange-600 transition \n            hidden space-x-8 font-medium md:flex"} "Find A Vet"]))
  (is (= (navigation-cta "")
          [:button {:class "bg-orange-500 text-white px-4 py-2 rounded\n            hover:bg-orange-600 transition \n            hidden space-x-8 font-medium "} "Find A Vet"]))

  (is (= (navigation-cta)
          [:button {:class "bg-orange-500 text-white px-4 py-2 rounded\n            hover:bg-orange-600 transition \n            hidden space-x-8 font-medium "} "Find A Vet"]))
  )
