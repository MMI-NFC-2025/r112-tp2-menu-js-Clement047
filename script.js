// on cible les éléments à modifier
const toggle = document.querySelector(".menu-btn");
const nav = document.querySelector(".menu");

//  Ajoute un écouteur d'évènements à l'élément 'toggle' qui écoute les évènements 'click'
toggle.addEventListener( "click", () => {
    // Mise à jour des attributs ARIA pour acessibilité
    nav.ariaHidden = nav.ariaHidden === "false";
    toggle.ariaExpanded = toggle.ariaExpanded === "true";
    document.body.classList.toggle("noscroll");
})
