/* games.itsdrdan.com short links -> real game addresses on itsdrdan.github.io.
   Add a line to add a short link. Left side = what you type after games.itsdrdan.com/  */
var BASE = "https://itsdrdan.github.io/";
var LINKS = {
  "": "games/",               // games.itsdrdan.com  -> study hub
  "hub": "games/",
  "daily": "games/#/daily",
  "3b": "games/3b.html",

  "sigfig": "sigfig/", "sigfigs": "sigfig/",
  "metric": "metric/", "si": "metric/",
  "algebra": "algebratrainer/", "algebratrainer": "algebratrainer/",
  "elements": "elements/",
  "polyatomic": "polyatomic/", "ions": "polyatomic/",
  "naming": "ionicformula/", "ionicformula": "ionicformula/",
  "quantum": "quantumchemistry/", "quantumchemistry": "quantumchemistry/",
  "lewis": "lewisstructures/", "lewisstructures": "lewisstructures/", "vsepr": "lewisstructures/",
  "reactions": "reactions/", "rumble": "reactions/",
  "redox": "redox/",
  "moles": "moles/", "mole": "moles/",
  "stoich": "stoichiometry/", "stoichiometry": "stoichiometry/",
  "gas": "gaslaws/", "gaslaws": "gaslaws/",
  "thermo": "thermochemistry/", "thermochemistry": "thermochemistry/",
  "1b": "chem1bready/", "chem1bready": "chem1bready/", "bridge": "chem1bready/",
  "flashcards": "organic/", "organic": "organic/",
  "origins": "functionalgroups/", "functionalgroups": "functionalgroups/",
  "bondvoyage": "organicreactions/", "organicreactions": "organicreactions/",
  "carbs": "carbohydrates/", "carbohydrates": "carbohydrates/", "sugars": "carbohydrates/",
  "aminoacids": "aminoacids/", "peptides": "aminoacids/", "proteins": "aminoacids/",
  "stereo": "stereochemistry/", "stereochemistry": "stereochemistry/", "mirror": "stereochemistry/", "mirrormatch": "stereochemistry/",
  "ph": "pHcharge/", "phcharge": "pHcharge/", "charge": "pHcharge/",
  "enzymes": "enzymes/", "enzyme": "enzymes/",
  "lipids": "lipids/", "lipid": "lipids/", "fats": "lipids/",
  "dna": "nucleicacids/", "rna": "nucleicacids/", "nucleicacids": "nucleicacids/", "helix": "nucleicacids/",
  "metabolism": "metabolism/", "marathon": "metabolism/",
  "labpractical": "labpractical/", "practical": "labpractical/", "lab": "labpractical/", "stations": "labpractical/",
  "final": "finalexam/", "finalexam": "finalexam/", "finalboss": "finalexam/"
};
(function () {
  var key = location.pathname.replace(/^\/+|\/+$/g, "").toLowerCase();
  var target = LINKS.hasOwnProperty(key) ? LINKS[key] : "games/";
  var url = BASE + target;
  // keep ?course=3A style options and #sections
  if (location.search) url += (url.indexOf("?") < 0 ? "?" : "&") + location.search.slice(1);
  if (location.hash && url.indexOf("#") < 0) url += location.hash;
  location.replace(url);
})();
