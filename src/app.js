import { Application, Sprite, Container } from "pixi.js";
import { CRTFilter } from "@pixi/filter-crt";
import "./style.css";
import "./utils.js";
import dot from "./dot.png"
let freq = 4;
const amount = innerWidth;
document.addEventListener("mousemove", (e) => {
    freq = e.clientX.map(0, innerWidth, 1, 440);
});

const app = new Application({
    width: window.innerWidth,
    height: window.innerHeight,
    resizeTo: window,
    backgroundColor: 0xffffff
});
const container = new Container();
app.stage.addChild(container);
for (let i = 0; i < amount; i++) {
    const sprite = Sprite.from(dot);
    sprite.init(
        i,
        Math.sin(2 * Math.PI * i.map(0, innerWidth, 0, 1) * 4) * 200 +
        innerHeight * 0.5,
        freq
    );
    container.addChild(sprite);
}
container.filters = [new CRTFilter()];
document.body.appendChild(app.view);
app.ticker.add((delta) => {
    for (const dot of container.children) {
        dot.edge();
        dot.move();
        dot.f = 10;
    }
    CRTFilter.noise = Math.random();
});