function getCookie (name) {
    let value = '; ' + document.cookie
    let parts = value.split('; ' + name + '=')
    if (parts.length === 2) return parts.pop().split(';').shift()
}
function setCookie (cname, cvalue, exhours) {
    let d = new Date()
    d.setTime(Date.now() + (exhours * 60 * 60 * 1000))
    let expires = 'expires=' + d.toUTCString()
    document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/'
}
function setBodyClassUserLang(userLang) {
  document.getElementsByTagName('body')[0].classList.add(`__i18n-${userLang}`)
}

const langElements = document.querySelectorAll('[data-i18n]')
const userLang = getCookie("lang") || navigator.language || navigator.userLanguage
setBodyClassUserLang(userLang)

const languages = [
  {
        "name": "English",
        "code": "en"
    },
	{
        "name": "Français",
        "code": "fr"
    }
]
const i18n = {
    getString(name, arguments=null) {
        if (userLang in i18n[name]) {
             if (arguments) {
                 return i18n[name][userLang](...arguments)
             }
             return i18n[name][userLang]
        }
        if (arguments) {
            return i18n[name]["en"](...arguments)
        }
        return i18n[name]["en"]  
    },
    "lang": userLang,

"index-start": {
    "en": "Start!",
    "fr": "Commencer !",
},
	
"index": {
    "en": "Index",
    "fr": "Index",
},
	
"quiz": {
    "en": "Quiz",
    "fr": "Quiz",
},

// titles
"title-results": {
    "en": "HKValues Results",
    "fr": "HKValues - Résultats",
},
	
"title-instructions": {
    "en": "HKValues Instructions",
    "fr": "HKValues - Instructions",
},
	
"title-quiz": {
    "en": "HKValues Quiz",
    "fr": "HKValues - Quiz",
},

//index.html 

"index-about": {
     "en": "DISCLAIMER : THIS QUIZ IS MEANT FOR MEMES AND IS BY NO MEANS TO BE TAKEN SERIOUSLY. THE STATEMENTS THAT IT MIGHT MAKE ABOUT YOU ARE NOT MEANT TO BE ACCURATE OR SERIOUSLY OFFENSIVE. YOU WERE WARNED.<br /><br />HKValues is a meme quiz for the people who are interested in the game Hollow Knight, based on the (in)famous political tests derived from 8values (code is taken from <a href=\"https://github.com/rightvaluestest/rightvaluestest.github.io\">RightValues</a>). If you don't know about Hollow Knight, this quiz is obviously not suited for you, but you can try it anyway. You will be presented with a statement, and then you will answer with your opinion on the statement, from <b>Strongly Agree</b> to <b>Strongly Disagree</b>, with each answer slightly affecting your scores. At the end of the quiz, your answers will be compared to the maximum possible for each value, thus giving you a percentage. Answer honestly!<br /><br />There are <b><u>CHANGE THAT PLEASE</u></b> questions in the generic main test.<br /><br />Contrarily to 8values, this quiz will attempt to match you with a specific Hollow Knight personality type (instead of a political ideology), which is shown in the \"Closest Match\" section. Please remember that you are not intended to get a 100% score in any of the categories. The point of the quiz is to challenge your views. If you have any suggestions or constructive criticism please open an issue in the Github <a href=\"https://github.com/Piano-player25/HKValues/issues\">here</a>.", 
    
     "fr": "DISCLAIMER : CE QUIZ A ÉTÉ CRÉÉ POUR POUVOIR FAIRE DES MÈMES ET NE DOIT ABSOLUMENT PAS ÊTRE PRIS AU SÉRIEUX. LES CHOSES QU'IL POURRAIT DIRE DE VOUS NE SONT PAS SENSÉES ÊTRE EXACTES ET NE SE VEULENT PAS OFFENSANTES. VOUS AVEZ ÉTÉ PRÉVENU.<br /><br />HKValues est un quiz mème créé pour les personnes intéressées par le jeu vidéo Hollow Knight, basé sur les (tristement) célèbres tests politiques dérivés de 8values (code pris sur <a href=\"https://github.com/rightvaluestest/rightvaluestest.github.io\">RightValues</a>). Si vous ne connaissez pas Hollow Knight, ce quiz n'est évidemment pas fait pour vous, mais vous pouvez toujours l'essayer. On vous présentera une affirmation, et vous devrez répondre par votre opinion sur cette affirmation, de <b>Tout à fait d'accord</b> à <b>Pas du tout d'accord</b>, chaque réponse altérant légèrement vos scores. À la fin du quiz, vos réponses seront comparées avec le maximum possible pour chaque valeur, vous donnant ainsi un pourcentage. Répondez honnêtement !<br /><br /> Il y a <b><u>chaipacombien</u></b> questions dans le test principal.<br /><br />Contrairement à 8values, ce quiz essayera de vous associer une personnalité Hollow Knight spécifique (au lieu d'une idélogie politique), qui est affichée dans la section \"Plus Proche Association\". S'il vous plaît, rappelez-vous que vous n'êtes pas sensé atteindre un score de 100% dans aucune des catégories. Le but de ce quiz est de remettre en question vos opinions. Si vous avez des suggestions ou des critiques constructive, vous pouvez ouvrir une <i>issue</i> dans Github <a href=\"https://github.com/Piano-player25/HKValues/issues\">ici</a>."
},
	
"index-license": {
     "en": "8values is licensed under the MIT License, which permits 'without restriction' the rights to 'use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software'. LeftValues is licensed under the same MIT License. RightValues is thus able to legally modify the original 8values without infringing on any copyright. RightValues is based on LeftValues and 8Values.",

     "fr": "Voir la version anglaise du site pour la license (j'ai trop la flemme de la traduire mdr)."
},

"index-valueswhat": {
     "en": "What are the values?",
     "fr": "Quelles sont les valeurs ?"
},

"index-valuesdesc": {
     "en": "There are currently seven axes, each of which has two opposing values. They are:",
     "fr": "Il y a actuellement sept axe, chacun d'entre eux possédant deux valeurs opposées. Ils sont :"
},
	
"tab-about": {
    "en": "About",
    "fr": "À propos"
},
	
"tab-values": {
    "en": "Values",
    "fr": "Valeurs"
},
	
"license-link": {
    "en": "License",
    "fr": "License"
},
	
// quiz.html
"quiz-loading": {
    "en": "Loading…",
    "fr": "Chargement…"
},
  
"quiz-strongly-agree": {
    "en": "Strongly Agree",
    "fr": "Tout à fait d'accord"
},
  
"quiz-agree": {
    "en": "Agree",
    "fr": "D'accord"
},
  
"quiz-neutral": {
    "en": "Neutral/Unsure",
    "fr": "Neutre/Pas sûr"
},
  
"quiz-disagree": {
    "en": "Disagree",
    "fr": "Pas d'accord"
},
  
"quiz-strongly-disagree": {
    "en": "Strongly Disagree",
    "fr": "Pas du tout d'accord"
},
  
"quiz-back": {
    "en": "Back",
    "fr": "Retour"
},
  
"quiz-question-of": {
    en(qn, questions) {return `Question ${qn + 1} of ${questions.length}`},
    fr(qn, questions) {return `Question ${qn + 1} sur ${questions.length}`}
},
  
 // instructions.html
"inst-h2": {
    "en": "Instructions",
    "fr": "Instructions"
},
  
"inst-p": {
    "en": "You will be presented with a series of statements. For each one, click the button with your opinion on it. There is a langauge picker in the top right if you wish to use this site in another language.",
    "fr": "On va vous présenter une série d'affirmations. Pour chacune d'entre elles, veuillez cliquer sur le bouton en accord avec votre opinion. Un sélecteur de langue se trouve en haut à droite si vous souhaitez utiliser ce site dans une autre langue."
},
  
"inst-gotit": {
    "en": "Got it!",
    "fr": "Compris !"
},
  
"inst-nvm": {
    "en": "Wait, nevermind!",
    "fr": "Attendez, non !"
},
  
// results.html
"result-h1": {
    "en": "Results",
    "fr": "Résultats"
},
  
"result-url": {
    "en": "<br />You can send these results by copying and pasting the URL at the top of the page or using the image below.",
    "fr": "<br />Vous pouvez envoyer vos résultats en copiant en collant l'URL en haut de la page ou en utilisant l'image ci-dessous."
},
  
"result-h2-match": {
    "en": "Closest Match: <span class='weight-300' id='ideology-label'> </span>",
    "fr": "Plus proche association : <span class='weight-300' id='ideology-label'> </span>"
},
  
"result-h2-next-matches": {
    "en": "Next closest matches",
    "fr": "Plus proches associations suivantes"
},
  
"next-matches-percent": {
    "en": "With your closest match as 100% and farthest as 0%, here is how closely you matched the other ideologies.",
    "fr": "Sachant que votre plus proche association est de 100% et la moins proche de 0%, voici comment les autres idéologies vous représentent."
},
  
"result-h2-score": {
    "en": "I don't like my scores!",
    "fr": "Je n'aime pas mes scores !"
},

"result-issues": {
    "en": "Please remember that you are not intended to get a 100% score in any of the categories. The point of the quiz is to challenge your views. If you have any suggestions or constructive criticism please fill out this <a href='ALSO DO THIS PLEASE>short form</a> or open an issue on the <a href='REPLACE THIS PLEASE'>GitHub Page</a>.",
    "fr": "Soyez conscients que vous n'êtes pas supposé atteindre 100% dans aucune des catégories. Le but de ce quiz est de mettre à l'épreuve vos opinions. Si vous avez des suggestions ou des critiques constructives, veuillez remplir ce <a href='https://forms.gle/Puc4sjaSQqvwNu6q8'>court formulaire</a> ou me ouvrir une <i>issue</i> sur la <a href='https://github.com/rightvaluestest/rightvaluestest.github.io'>page GitHub</a>."
},
  
"result-a-label": {
    "en": ["Extreme Royalist","Royalist","Pale King Supporter","Neutral","Radiance Advocate","Hive Mind Enjoyer","Literally 1984"],
    "fr": ["Royaliste Extrêmiste","Royaliste","Soutien du Roi Pâle","Neutre","Avocat de la Radiance","Amateur d'Esprit de Ruche","Littéralement 1984"],
},
  
"result-b-label": { //Reversed
    "en": ["Quirrnet Supremacist","Quirrnet Enjoyer","Quirrel Fan","Ship-neutral","Silksong-Obsessed","Lacenet Enjoyer","Lacenet Supremacist"],
    "fr": ["Suprémaciste Quirrnet","Amateur de Quirrnet","Fan de Quirrel","Ship-neutre","Obsédé par Silksong","Amateur de Lacenet","Suprémaciste Lacenet"],
},
  
"result-c-label": { //Reversed
    "en": ["P5 Hitless at 4AM","Pro Gamer","Gamer","Curious","Fan-art Enjoyer","Content Creator","Anti-canon"],
    "fr": ["P5 Hitless à 4 heures","Pro Gamer","Gamer","Curieux","Amateur de Fan-art","Créateur de Contenu","Anti-canon"],
},
  
"result-d-label": { 
    "en": ["Perfect Angel","Pure","Cute","Tempted","Porn Enjoyer","Degenerate","Satan Himself"],
    "fr": ["Parfait Ange","Pur","Mignon","Tenté","Amateur de Porn","Pervers","Satan Lui-même"],
},
  
"result-e-label": {
    "en": ["Markothphile","Markoth Lover","Markoth Enjoyer","Neutral","Anti-Markoth","Markothphobe","Markoth Holocaust"],
    "fr": ["Markothphile","Amoureux de Markoth","Amateur de Markoth","Neutre","Anti-Markoth","Markothphobe","Holocauste Anti-Markoth"],
},
  
"result-f-label": {
    "en": ["#1 Fan","Fan-club Member","Youtube Subscriber","Neutral","Critique","Hater","Assassin Wannabe"],
    "fr": ["Fan n°1","Membre du Fan-club","Abonné Youtube","Neutre","Critique","Détracteur","Aspirant Assassin"],
},
  
"result-g-label": {
    "en": ["Not A Player","Amateur","Occasionnal Player","Player","Addicted","Religious","No-life"],
    "fr": ["Pas Un Joueur","Amateur","Joueur Occasionnel","Joueur","Addict","Religieux","No-life"],
},
  
"result-back": {
    "en": "Back",
    "fr": "Retour",
},
	
"copy-url": {
    "en": "Copy Results URL",
    "fr": "Copier l'URL des résultats"
},
	
"url-copied": {
    "en": "URL copied!",
    "fr": "URL copiée !"
},
	
}

langElements.forEach((element) =>  {
    let value = element.getAttribute("data-i18n")
    if (value in i18n && userLang in i18n[value]) {
        element.innerHTML = i18n[value][userLang]
    }
})

let langPicker = document.getElementById("langPicker")
languages.forEach(language => {
    let option = document.createElement("option");
    option.text = language.name
    option.value = language.code
    langPicker.add(option); 
})
if (langPicker) {
    for (let option of langPicker.options) {
        if(option.value == userLang) {
            langPicker.value = userLang
        }
    }
        
    langPicker.onchange = function() {
        let language = langPicker.options[langPicker.selectedIndex].value
        setCookie("lang", language, 5)
        location.reload()
    }   
}
