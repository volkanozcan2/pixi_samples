/* eslint-disable */

import { Sprite } from "pixi.js";
Sprite.prototype.init = function(x, y, f) {
    this.x = x || innerWidth * Math.random();
    this.y = y || innerHeight * Math.random();
    this.Θ = Math.random() * 2 * Math.PI;
    this.l = 2 * Math.random();
    this.anchor.set(0.5);
    this.rotation += Math.random() * 2 * Math.PI;
    this.rS = Math.random() / 100;
    this.tint = 0xffffff * Math.random();
    this.phase = 0;
    this.scale.set(0.5);
    this.f = f || 4;
};
Sprite.prototype.edge = function() {
    this.x > innerWidth ? (this.x = 0) : this.x;
    this.y > innerHeight ? (this.y = 0) : this.y;
    this.x < 0 ? (this.x = innerWidth) : this.x;
    this.y < 0 ? (this.y = innerHeight) : this.y;
};
Sprite.prototype.move = function() {
    this.y =
        Math.sin(
            2 * Math.PI * this.x.map(0, innerWidth, 0, 1) * this.f + this.phase
        ) *
        200 +
        innerHeight * 0.5;
    this.phase += 0.01;
};
Number.prototype.map = function(in_min, in_max, out_min, out_max) {
    return ((this - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};