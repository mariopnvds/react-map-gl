import {createContext} from 'react';

export default createContext({
  /* Map context */

  // Viewport
  viewport: null,
  // mapboxgl.Map instance
  map: null,

  /* Interactive-only context */

  // EventManager instance
  eventManager: null,
  // whether the map is being dragged
  isDragging: false
});
