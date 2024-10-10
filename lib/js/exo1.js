/*   exercice 1 / a)   */
let annee = 2020;
document.getElementById("annee1").innerHTML = annee;
annee = annee + 5;
document.getElementById("annee2").innerHTML = annee;

/*   exercice 1 / b)   */
let longueur = parseInt(document.getElementById('longueur').textContent);
let largeur =  parseInt(document.getElementById('largeur').textContent);
let perimetre = document.getElementById('perimetre');
let aire = document.getElementById('aire');

aire.innerHTML = ""+ longueur*largeur;

perimetre.innerHTML = ""+(longueur + largeur)*2;