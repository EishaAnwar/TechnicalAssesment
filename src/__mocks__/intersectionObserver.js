// src/__mocks__/intersectionobserver.js
class IntersectionObserver {
    constructor(callback) {
      this.callback = callback;
    }
  
    observe() {
      // Simulate the header being out of view (not intersecting)
      this.callback([{ isIntersecting: false }]);
    }
  
    unobserve() {}
  }
  
  window.IntersectionObserver = IntersectionObserver;
  