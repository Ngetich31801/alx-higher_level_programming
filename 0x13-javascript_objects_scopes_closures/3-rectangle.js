#!/usr/bin/node
module.exports = class rectangle
    def __init__(self, w, h):
        if w <= 0 or h <= 0 or not isinstance(w, int) or not isinstance(h, int):
            # Create an empty object if w or h is 0 or not a positive integer
            self.width = 0
            self.height = 0
        else:
            self.width = w
            self.height = h
    
    def print(self):
        if self.width == 0 or self.height == 0:
            print("Empty rectangle")
        else:
            for _ in range(self.height):
                print("X" * self.width)

