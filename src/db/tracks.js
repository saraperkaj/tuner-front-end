//Music by lemonmusicstudio, itsWatR, Coma-Media, and Lesfm from Pixabay

import sunrise from "../Assets/sunrise.jpg"
import aurora from "../Assets/aurora.jpg"
import trees from "../Assets/trees.jpg"
import glow from "../Assets/glow.png"

// import mp3 files
import cradle from "../Assets/the-cradle-of-your-soul-15700.mp3"
import ever from "../Assets/ever-flowing-12277.mp3"
import jazzy from "../Assets/jazzy-abstract-beat-11254.mp3"
import inTheForest from "../Assets/in-the-forest-ambient-acoustic-guitar-instrumental-background-music-for-videos-5718.mp3"
import relax from "../Assets/just-relax-11157.mp3"

export default [
    {
        title: "The cradle of your soul",
        artist: "lemmonstudio",
        audioSrc: cradle,
        image: sunrise,
        color: "#00aeb0"
      },
      {
        title: "Ever flowing",
        artist: "itsWatR",
        audioSrc: ever,
        image: aurora,
        color: "#ffb77a"
      },
      {
        title: "Jazzy abstract",
        artist: "Coma-Media",
        audioSrc: jazzy,
        image: glow,
        color: "#5f9fff"
      },
      {
        title: "In the forest",
        artist: "Lesfm",
        audioSrc: inTheForest,
        image: trees,
        color: "#5f9fff"
      },
      {
        title: "Just Relax",
        artist: "Lesfm",
        audioSrc: relax,
        image: trees,
        color: "#5f9fff"
      }

]

