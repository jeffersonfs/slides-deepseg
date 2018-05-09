import './sass/main.scss';

import 'babel-polyfill';
import $ from 'jquery';
import Reveal from 'reveal.js';
import hljs from 'highlight.js';
import { RevealMarkdown } from 'reveal.js/plugin/markdown/markdown';

// Fontawesome setup
//import fontawesome from '@fortawesome/fontawesome';
//import fontawesomeSolid from '@fortawesome/fontawesome-free-solid';
//fontawesome.library.add(fontawesomeSolid);
import pageMarkDown from './slides/000-page-md.slide.md';
import pageHTML from './slides/teste.html';
// -------------------------------------------------------------------------
// Slides
// -------------------------------------------------------------------------

const slides = [
  pageHTML,
  pageMarkDown,
  //pageIcons,
]
  .forEach(s => $('#slides').append(s));

// -------------------------------------------------------------------------
// Reveal.js Configuration
Reveal.configure({ logo: true });

Reveal.initialize({
  center: false,
  margin: 0,
  width: "100%",
  height: "100%",
  theme: "solarized"
});

RevealMarkdown.initialize();

hljs.initHighlightingOnLoad();
