# oc_da-jr_p11_kasa
Openclassrooms - Développeur d'application - JavaScript React - Projet 11 - Kasa

## P11 - Développez une application Web avec React et React Router
### Scénario
Kasa vous recrute en tant que développeur front-end en freelance pour développer sa nouvelle plateforme web. Kasa est dans le métier de la location d’appartements entre particuliers depuis près de 10 ans maintenant. Avec plus de 500 annonces postées chaque jour, Kasa fait partie des leaders de la location d’appartements entre particuliers en France.
L'occasion parfaite pour vous d'ajouter une belle référence à votre portfolio de freelance !
![Logo Les Petits Plats](https://user.oc-static.com/upload/2023/04/03/1680512368252_Kasa%20logo.png)   
Le site de Kasa a été codé il y a maintenant plus de 10 ans en ASP.NET avec un code legacy important. Laura, la CTO, a donc lancé une refonte totale pour passer à une stack complète en JavaScript avec NodeJS côté back-end, et React côté front-end. Kasa en a également profité pour commander de nouvelles maquettes auprès de son designer habituel, qui est en freelance. Un gros chantier pour cette année !  
Un point est prévu avec la CTO plus tard dans la semaine, mais pour que vous puissiez vous familiariser avec les enjeux de votre mission, vous trouvez le récapitulatif suivant dans votre boîte mail :


> **Objet** : Brief refonte site Kasa  
> **De** : Laura  
> **À** : Moi 
> Hello,  
> Bienvenue ! Tu vas pouvoir nous aider à donner vie à un chantier sur lequel on travaille depuis plusieurs mois.
> 
> **Ton objectif** : Démarrer le projet React et développer l’ensemble de l’application, les composants React, les routes React Router, en suivant les maquettes Figma (responsives !) et toutes les infos que je te donne ci-dessous. Et ce avec un code de qualité !   
> 
> **Back-end / data** : Le recrutement de la personne en charge du back-end n'est pas terminé et va prendre plus de temps que prévu. Du coup, il va falloir que tu fasses sans pour le moment. Je t'ai extrait les 20 dernières annonces de logements dans [ce fichier JSON](https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json) pour que tu puisses construire le Front qui correspond.    
>  
> **Contraintes techniques** : Tu trouveras les [coding guidelines de Kasa ici](https://course.oc-static.com/projects/D%C3%A9veloppeur+Web/IW_P8+React+Kasa/Kasa+coding+guidelines+-+IW+-+DW.pdf). Comme tu le verras, nous utilisons habituellement Create React App pour créer les applications React, mais tu peux utiliser un autre bundler comme Vite par exemple si tu préfères.  
>  
> Voilà, j'espère que ce petit récapitulatif t'aura donné suffisamment de pistes pour aborder sereinement tes premiers jours chez nous.  
> 
> Très bonne journée à toi !
> **Laura**

Plus tard dans la journée, vous recevez un e-mail de Paul, le designer, qui vous donne plus d’informations sur le design et les fonctionnalités du site. 


> **Objet** : Fonctionnalité et design  
> **De** : Paul  
> **À** : Moi 
> Salut,  
> Bienvenue parmi nous ! Laura m’a dit de te briefer sur le design de la nouvelle version du site, alors voici les infos clés.
> 
> **Design**
>Voici [les maquettes sur Figma](https://www.figma.com/file/2BZEoBhyxt5IwZgRn0wGsL/Kasa_FR?type=design&node-id=0-1&mode=design&t=1KgUwWWFtuAVbsJ5-0) pour le design d’interface. J’ai l’habitude de travailler avec la logique de composants sur Figma ; Sandra m’a dit que ça te faciliterait le travail sur React. Tu trouveras toutes les ressources dont tu as besoin directement dans la maquette (logo, icônes pour les composants, etc.). Pour cela, il suffit de cliquer sur la ressource souhaitée et de faire "Exporter" au format voulu. Sur les vignettes des logements, pour les images de couverture, j'ai mis une rectangle orange que tu peux remplacer par l'image correspondante.
> 
> Pour avoir un rendu le plus réaliste possible de l'application, utilise [les prototypes du site disponibles ici](https://www.figma.com/proto/2BZEoBhyxt5IwZgRn0wGsL/Kasa_FR?type=design&node-id=3-0&t=x8RBKuR4UiE3hhBW-0&scaling=scale-down&page-id=0%3A1&starting-point-node-id=3%3A0&show-proto-sidebar=1). Ils te permettront notamment de voir les animations attendues sur les menus déroulants (Collapse).
>
> **Contraintes fonctionnelles** 
>  Quelques précisions sur les fonctionnalités du site :
>
> - Pour le défilement des photos dans la galerie (composant Gallery) :
>   - Si l'utilisateur se trouve à la première image et qu'il clique sur "Image précédente", la galerie affiche la dernière image.
>   - Inversement, quand l'image affichée est la dernière de la galerie, si l'utilisateur clique sur "Image suivante", la galerie affiche la première image.
>   - S'il n'y a qu'une seule image, les boutons "Suivant" et "Précédent" ainsi que la numérotation n'apparaissent pas.
>   - La galerie doit toujours rester de la même hauteur, celle indiquée sur la maquette Figma. Les images seront donc coupées et centrées dans le cadre de l’image.
>  
> - Collapse :
>    - Par défaut, les Collapses sont fermés à l'initialisation de la page.
>    - Si le Collapse est ouvert, le clic de l'utilisateur permet de le fermer.
>    - Inversement, si le Collapse est fermé, un clic permet de l'ouvrir..  
> 
> Bon courage pour le développement, j’ai hâte de voir ce que ça va donner !
> **Paul**

Ça y est, vous avez toutes les informations nécessaires, vous pouvez démarrer votre développement !


> **Utilisation de Sass et animations** : les contraintes diffèrent selon votre parcours :  
> - Si vous êtes étudiant sur le parcours **Développeur Web**, vous devez obligatoirement utiliser Sass pour générer le style CSS du site web, ainsi que mettre en place l'animation CSS du menu déroulant.
> - Si vous êtes étudiant sur le parcours **Intégrateur Web**, ceci n'est pas obligatoire puisque vous avez déjà été évalués sur un projet passé. Il est quand même recommandé de le faire afin de pratiquer sur ces compétences clés.