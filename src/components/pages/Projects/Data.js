import wordleClone from '../../images/wordle_clone.png';
import coinWatch from '../../images/coin_watch.png';

export const projectsObjOne = {
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: 'JavaScript, HTML, CSS',
  headline: 'Wordle Clone',
  description:
    'Wordle Clone is a rebuild of the popular word guessing game, Wordle.',
  description2:
    'This project was built without a frontend framework. All logic is managed with JavaScript, DOM element manipulation, and CSS.',
  buttonLabel: 'Open',
  imgStart: '',
  img: wordleClone,
  alt: 'Inspiration',
  link: '//nnorx.github.io/WordleClone/'
};

export const projectsObjTwo = {
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: 'ReactJS, ChartJS',
  headline: 'Coin Watch',
  description:
    'Coin Watch is a single page application that displays price information and charts for popular cryptocurrencies.',
  description2:
    'The app consumes CoinGecko\'s API to get the data. Additionally, the app uses local browser storage to maintain a persistent list of the coins that interest the user.',
  buttonLabel: 'Open',
  imgStart: 'start',
  img: coinWatch,
  alt: 'Inspiration',
  link: '//nnorx.github.io/coin-watch/'
};