import ashmovies from "../assets/ashmovies.png"
import pokedex from "../assets/pokedex.png"
import searchgithubuser from "../assets/searchgithubuser.png"
import todosmachine from "../assets/todosmachine.png"
import batatabit from "../assets/batatabit.png"
import rickandmortyapi from "../assets/rickandmortyapi.png"
import sandcibatta from "../assets/sandcibatta.png"
import windbnb from "../assets/windbnb.png"
import css from "../assets/css.svg"
import html from "../assets/html.svg"
import react from "../assets/react.svg"
import redux from "../assets/redux.svg"
import tailwind from "../assets/tailwind.svg"
import js from "../assets/js.svg"


const projectsInfo = [
  {
    name:  "AshMovies",
    SourceCode: "https://github.com/MasmelaDev/AshMovies",
    LiveDemo: "https://masmeladev.github.io/AshMovies/",
    img: ashmovies,
    technologies:[html,css,js]
  },
  {
    name: "Sandcibatta Menu",
    SourceCode: "",
    LiveDemo: "https://sandcibatta.netlify.app",
    img: sandcibatta,
    technologies:[react,tailwind]
  },
  {
    name: "React Pokedex",
    SourceCode: "https://github.com/MasmelaDev/react-pokedex",
    LiveDemo: "https://reactpokedexmiguel.netlify.app/",
    img: pokedex,
    technologies:[react,tailwind,redux]
  },
  {
    name: "Windbnb",
    SourceCode: "https://github.com/MasmelaDev/Windbnb",
    LiveDemo: "https://tangerine-cajeta-4d1f55.netlify.app/",
    img: windbnb,
    technologies:[react,tailwind]
  },
  {
    name: "GitHub User Searcher",
    SourceCode: "https://github.com/MasmelaDev/GitHubUserSearcher",
    LiveDemo: "https://masmeladev-searchgithubuser.netlify.app/",
    img: searchgithubuser,
    technologies:[react,tailwind]
  },

  {
    name: "TODOs Machine",
    SourceCode: "https://github.com/MasmelaDev/TODOs-Machine",
    LiveDemo: "https://masmeladev.github.io/TODOs-Machine/",
    img: todosmachine,
    technologies:[react,css]
  },
  {
    name: "BatataBit LandingPage",
    SourceCode: "https://github.com/MasmelaDev/BatataBit",
    LiveDemo: "https://masmeladev.github.io/BatataBit/",
    img: batatabit,
    technologies:[html,css]
  },
  {
    name: "RickAndMortyAPI",
    SourceCode: "https://github.com/MasmelaDev/page-with-RickAndMortyAPI",
    LiveDemo: "https://masmeladev.github.io/page-with-RickAndMortyAPI/",
    img: rickandmortyapi,
    technologies:[html,css,js]
  },
];
export { projectsInfo };
