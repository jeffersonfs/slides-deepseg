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

import pageMarkDown from './slides/slides.html';
import pageRef from './slides/ref.html';
// -------------------------------------------------------------------------
// Slides
// -------------------------------------------------------------------------

const slides = [
  pageMarkDown,
  pageRef
  //pageIcons,
]
  .forEach(s => $('#slides').append(s));

// -------------------------------------------------------------------------
// Reveal.js Configuration
Reveal.configure({ logo: true });


function jumpSlide() {

  // The id of the slide you wish to jump to/from
  target = "slide-ref";

  slide = Reveal.getCurrentSlide();
  // If we're on the target slide, jump to original slide, if there was one
  if (slide.id == target) {
    Reveal.slide(orig['h'], orig['v']);
  }
  else {
    // 'Save' the current slide's index to jump back to later
    orig = Reveal.getIndices();
    // Jump to the target slide
    jump = Reveal.getIndices(document.getElementById(target));
    Reveal.slide(jump['h'], jump['v']);
  }
}

Reveal.initialize({
  center: false,
  margin: 0,
  margin: 0,
  minScale: 1,
  maxScale: 1,
  width: "100%",
  height: "100%",
  theme: "solarized",
  slideNumber: 'c',
  keyboard: {
      // '0' key will jump between current slide and slide-X
      48: function() {jumpSlide()},
      }
});

RevealMarkdown.initialize();

hljs.initHighlightingOnLoad();

