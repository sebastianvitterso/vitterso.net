import type { Project } from './types'

import mlink from './assets/projects/mlink.png'
import nlmGjenbruk from './assets/projects/nlm-gjenbruk.png'
import ulno from './assets/projects/ulno.png'
import blackbird from './assets/projects/blackbird.jpg'

const projects: Project[] = [
  {
    title: 'mLINK',
    imageUrl: mlink,
    icons: [
      {
        class: 'fab fa-vuejs',
        title: 'Vue.js front-end'
      },
      {
        class: 'fab fa-python',
        title: 'Django REST-framework back-end'
      }
    ],
    description: `mLINK er en driftsstyringsplatform for havbruk- og fiskerinæringa. Sommeren 2019 hadde jeg sommerjobb hos Moen Marin, hvor jeg fikk jobbe
      med å utvikle denne platformen i et team på 3-5 utviklere. Jobbet deltid fra sensommeren frem til forsommeren 2020. <br>
      Jeg jobbet med ulike funksjoner på platformen; både vedlikehold av eksisterende funksjonalitet, samt selvstendig utvikling av nye systemer
      for forskjellige sluttbrukere. Arbeidet var veldig lærerikt og utfordrende, og supplerte godt til to teoretiske semestre på skolen.`
  },
  {
    title: 'NLM Gjenbruk',
    imageUrl: nlmGjenbruk,
    icons: [
      {
        class: 'fab fa-vuejs',
        title: 'Vue.js front-end'
      },
      {
        class: 'fab fa-js-square',
        title: 'Express.js web-server'
      },
      {
        class: 'fas fa-database',
        title: 'PostgreSQL'
      }
    ],
    description: `NLM Gjenbruk Sandefjord trengte i 2019 et datasystem for å erstatte et excel-ark som ble distribuert via mail hver gang en endring ble gjort. <br>
      Løsningen, så langt, er en liten web-app laget i Vue.js med personregister, kalender for å sette opp vaktlister og permisjonshåndtering. <br>
      Samarbeider med en kamerat og medstudent på dette prosjektet.`
  },
  {
    title: 'Ung Landsmøte',
    imageUrl: ulno,
    link: 'https://www.ul.no/',
    icons: [
      {
        class: 'fab fa-vuejs',
        title: 'Vue.js front-end'
      },
      {
        class: 'fas fa-database',
        title: 'Firebase Realtime Database'
      }
    ],
    description: `Nettside for NLMs ungdomsfestival UL, bygget i Vue, sammen med et team av medstudenter og kamerater. <br>
      Det første året med dette prosjektet vedlikeholdt vi en gammel Wordpress-side, deretter bygget vi en versjon med frontent i React. 
      React-versjonen viste seg å være tung å vedlikeholde, pga. lite koordinering blant utviklerne, så denne bygget vi på nytt i Vue i løpet
      av 2020. I dette prosjektet fulgte det en uavhengig administrator-side og en medarbeider-side for henholdsvis ledere og medarbeidere på UL.`
  },
  {
    title: 'Blackbird',
    imageUrl: blackbird,
    icons: [
      {
        class: 'fab fa-java',
        title: 'Java'
      },
      {
        class: 'fas fa-database',
        title: 'MySQL'
      }
    ],
    description: `I faget <a href="https://www.ntnu.no/studier/emner/TDT4140" target="_blank">Programvareutvikling</a> utviklet vi skrivebordsapplikasjonen BlackBird,
      en kalenderløsning for studentassistenter på lesesal med mulighet for levering av øvinger og kunngjøringer i fag. <br> 
      Programmet er et gruppeprosjekt hvor vi samarbeidet i en gruppe på seks. Mitt hovedansvar lå i back-end (MySQL via JDBC).`,
    githubLink: {
      link: 'https://github.com/sebastianvitterso/blackbird',
      title: 'Se prosjektet på GitHub',
      iconClass: 'fab fa-github'
    }
  }
]

export default projects
