// Démonstration de la librairie fs (file system)
// - lecture dé'un fichier
// - renommer un fichier
// - verifications de la présence/lecture fichier/dossier
// Auteur: Michel Deschambault
// 7 septembre 2021
const fs = require('fs');
const path = require('path');
// pour lire le contenu d'un fichier
// fs.readFile(
//     path.join(__dirname, 'data', 'data.txt'),
//     'utf-8',
//     (err, data) => {
//         if (err) throw err;
//         console.log(data);
//     }
// );
// pour renommer un fichier:
// fs.rename(
//     path.join(__dirname, 'data', 'data.txt'),
//     path.join(__dirname, 'data', 'nouveauNom.txt'),
//     (err) => {
//         if (err) throw err;
//         console.log('Le fichier a été renommé');
//     }
// );
let nomFichier = path.join(__dirname, 'data', 'data.txt');
let nomDossier = path.join(__dirname, 'data');
// valide si dossier ou fichier existe: F_OK
// fs.access( nomDossier, fs.constants.F_OK, err => {
//     if (err)
//         console.log(`Le dossier "${nomDossier}" n'existe pas`);
//     else
//         console.log(`Le dossier "${nomDossier}" existe`);
// });
// fs.access( nomFichier, fs.constants.F_OK, err => {
//     if (err)
//         console.log(`Le fichier "${nomFichier}" n'existe pas`);
//     else
//         console.log(`Le fichier "${nomFichier}" existe`);
// });
// console.log('FIn du programme');

// valide si dossier ou fichier est lisible: R_OK
// fs.access( nomDossier, fs.constants.R_OK, err => {
//     if (err)
//         console.log(`Le dossier "${nomDossier}" n'est pas lisible ou n'existe pas`);
//     else
//         console.log(`Le dossier "${nomDossier}" existe et est lisible`);
// });
// fs.access( nomFichier, fs.constants.R_OK, err => {
//     if (err)
//         console.log(`Le fichier "${nomFichier}" n'est pas lisible ou n'existe pas`);
//     else
//         console.log(`Le fichier "${nomFichier}" existe et est lisible`);
// });
// console.log('FIn du programme');

// valide si dossier ou fichier est modifiable: W_OK
// fs.access( nomDossier, fs.constants.W_OK, err => {
//     if (err)
//         console.log(`Le dossier "${nomDossier}" ne peut pas être écrit`);
//     else
//         console.log(`Le dossier "${nomDossier}" existe et est modifiable`);
// });
// fs.access( nomFichier, fs.constants.W_OK, err => {
//     if (err)
//         console.log(`Le fichier "${nomFichier}" ne peut pas être écrit`);
//     else
//         console.log(`Le fichier "${nomFichier}" existe et est modifiable`);
// });
// console.log('FIn du programme');

// fs.access( nomDossier, fs.constants.F_OK, err => {
//     if (err)
//         console.log(`Le dossier "${nomDossier}" ne peut pas être écrit`);
//     else
//         console.log(`Le dossier "${nomDossier}" existe et est modifiable`);
// });
// fs.access( nomFichier, fs.constants.F_OK, err => {
//     if (err)
//         console.log(`Le fichier "${nomFichier}" ne peut pas être écrit`);
//     else
//         lectureFichier(nomFichier);
// });
// console.log('FIn du programme');

// function lectureFichier(nomFichier) {
//     console.log(`Le fichier existe et voici son contenu`);
//     // pour lire le contenu d'un fichier
// fs.readFile(
//     nomFichier,
//     'utf-8',
//     (err, data) => {
//         if (err) throw err;
//         console.log(data);
//     }
// );
// }

// autre façon de vérifier la présence d'un fichier
fs.stat(
    nomDossier,
    (err,stats) => {
        if (err) throw err;
        console.log('est-ce un dossier?', stats.isDirectory());
        console.log('est-ce un fichier?', stats.isFile());
        console.log('stats:', stats);        
    }
)

