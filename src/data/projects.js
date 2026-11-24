// Central client / project data. To add a client:
// 1. Add an object here.
// 2. Add a matching entry under `projects.items` in src/data/translations.js
//    (for each language) if you want a custom description.
//
// Fields:
//   id        unique slug (also the key used in translations)
//   name      business name shown on the card
//   type      "restaurant" | "bistro" | "cafe" | "baguetteria"  (labels live in translations)
//   url       website link, or null until provided
//   image     path to a project image (e.g. "/projects/agusto.jpg"), or null for the generated visual
//   services  service keys provided: "website" | "pos" | "qr" | "marketing" | "branding"  ([] = placeholder)

export const projects = [
  { id: "pizzeria-plus", name: "Pizzeria Plus", type: "restaurant", url: null, image: null, services: [] },
  { id: "restaurant-agusto", name: "Restaurant Agusto", type: "restaurant", url: null, image: null, services: [] },
  { id: "bistro-turkish", name: "Bistro Turkish Restaurant", type: "bistro", url: null, image: null, services: [] },
  { id: "caffe-pascucci", name: "Caffe Pascucci", type: "cafe", url: null, image: null, services: [] },
  { id: "baguetteria-shkupi", name: "Baguetteria Shkupi", type: "baguetteria", url: null, image: null, services: [] },
];