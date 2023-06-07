#!/usr/bin/node
module.exports = class Rectangle {
  constructor(w, h) {
    if (w <= 0 || h <= 0 || !Number.isInteger(w) || !Number.isInteger(h)) {
      // Create an empty object if w or h is 0 or not a positive integer
      this.width = 0;
      this.height = 0;
    } else {
      this.width = w;
      this.height = h;
    }
  }

  print() {
    if (this.width === 0 || this.height === 0) {
      console.log("Empty rectangle");
    } else {
      for (let i = 0; i < this.height; i++) {
        console.log("X".repeat(this.width));
      }
    }
  }
};
