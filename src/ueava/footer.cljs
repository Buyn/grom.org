(ns ueava.footer)

(defn footer []
  [:footer.footer
   [:div.footer-grid

    [:div
     [:h3 "UEAVA"]
     [:p "Association of reptile specialists"]]

    [:div
     [:h4 "Contact"]
     [:p "PO Box 1868"]
     [:p "info@ueava.org"]]

    [:div
     [:h4 "Links"]
     [:a {:href "#"} "Membership"]
     [:a {:href "#"} "Resources"]
     [:a {:href "#"} "Donate"]]

    [:div
     [:h4 "Subscribe"]
     [:input {:placeholder "Email"}]
     [:button "Subscribe"]]]

   [:div.copyright
    "© 2026 ueava.org"]])
