// création tab avec les jours semaines en fonction du jour J de connexion

let today = new Date();
let jourSemaine = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche']

let option = {weekday: 'long'}
let jourJ = today.toLocaleDateString('fr-FR', option)

jourJ = jourJ.charAt(0).toLocaleUpperCase() + jourJ.slice(1)

let jourSemaineDynamique = jourSemaine.slice(jourSemaine.indexOf(jourJ)).concat(jourSemaine.slice(0,jourSemaine.indexOf(jourJ)))

export default jourSemaineDynamique;

