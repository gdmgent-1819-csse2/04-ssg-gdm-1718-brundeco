---
title: "WebGL 03 • Canvas klasse"
date: "2019-04-17"
---

In het vorige deel waren we aangekomen bij het instantiëren van onze `Canvas klasse`. In dit deel meer uitleg over de werking en structuur van deze klasse. Laat ons een kijkje nemen naar het eerste deel.

```js
export default class Canvas {
  constructor(width, height, shaderSources) {
    this.width = width;
    this.height = height;
    this.shaderSources = shaderSources;

    this.colors = {
      black: [0, 0, 0, 0],
      blue: [0, 0, 255, 0],
      cyan: [0, 255, 255, 0],
      green: [0, 255, 0, 0],
      magenta: [255, 0, 255, 0],
      red: [255, 0, 0, 0],
      white: [255, 255, 255, 0],
      yellow: [255, 255, 0, 0]
    };
    this.data = {
      colors: [],
      positions: []
    };
  }
}
```

- De `width` en `height`, zoals gezien in vorig artikel, worden gelijk gezet aan de `client`. De shader sources werden geladen via de `assets` folder.

- Vervolgens declareren we 8 verschillende kleuren binnen een `colors` object.

- We maken daarna binnen `data` 2 verschillende arrays aan:
  - Eén voor kleuren
  - Eén voor de wijzerposities

```js
window.addEventListener(
  "updateCanvas",
  event => {
    this.updateCanvasHandler(event);

    //update every second
    setInterval(() => {
      this.updateCanvasHandler(event);
    }, 1000);
    console.log("Seconds check");
  },
  false
);
```

- Vervolgens voegen we een eventlistener toe.

- Na elke seconde wordt updateCanvasHandler uitgevoerd.

- Hierin worden uren, minuten en seconden opgehaald en de posities toegekend aan de verschillende wijzers

- In onderstaand voorbeeld de code die dit verduidelijkt.

```js
 updateCanvasHandler(event) {
    console.log("Canvas updated");
    this.clearData();

    // White point in the middle
    this.data.positions.push(0, 0);
    this.data.colors.push(...this.colors.white);

    const colors = ["green", "blue", "cyan", "magenta", "yellow"];
    {
      let d, h, m, s;
      d = new Date();

      h = 30 * ((d.getHours() % 12) + d.getMinutes() / 60);
      m = 6 * d.getMinutes();
      s = 6 * d.getSeconds();

      console.log(
        "Hour: ",
        h + "°",
        "Minutes: ",
        m + "°",
        "Seconds: ",
        s + "°"
      );
    }
  }
```

- Uur wordt opgehaald en de hoek wordt berekend

```js
let clockCenter = new Vector2(0, 0);
this.data.positions.push(clockCenter.x, clockCenter.y);
this.data.colors.push(
  Math.round(Math.random() * 255),
  Math.round(Math.random() * 255),
  Math.round(Math.random() * 255),
  0
);

//hours
const hours = new Vector2(0, 0.3);
hours.rot(-h);
this.data.positions.push(hours.x, hours.y);
this.data.colors.push(
  Math.round(Math.random() * 255),
  Math.round(Math.random() * 255),
  Math.round(Math.random() * 255),
  0
);

//minutes
const minutes = new Vector2(0, 0.4);
minutes.rot(-m);
this.data.positions.push(minutes.x, minutes.y);
this.data.colors.push(
  Math.round(Math.random() * 255),
  Math.round(Math.random() * 255),
  Math.round(Math.random() * 255),
  0
);

//seconds
let seconds = new Vector2(0, 0.5);
seconds.rot(-s);
this.data.positions.push(seconds.x, seconds.y);
this.data.colors.push(
  Math.round(Math.random() * 255),
  Math.round(Math.random() * 255),
  Math.round(Math.random() * 255),
  0
);

// White point center
this.data.positions.push(0, 0);
this.data.colors.push(...this.colors.white);
```

- Nieuwe vector wordt gemaakt voor **uren**, **minuten**, **seconden** en **klok center**

```js
 run() {
    try {
      this.createCanvas();
      this.createShaders();
      this.createProgram();
      this.createVertexArray();
      // Initial drawing on the canvas
      {
        const v = new Vector2(0.5, 0);
        for (let i = 0, max = 12; i < max; i++) {
          v.rot(30);

          this.data.positions.push(v.x, v.y);
          this.data.colors.push(
            Math.round(Math.random() * 255),
            Math.round(Math.random() * 255),
            Math.round(Math.random() * 255),
            0
          );
        }
        // White point center
        this.data.positions.push(0, 0);
        this.data.colors.push(...this.colors.white);
      }
      this.drawScene();
    } catch (error) {
      console.error(error);
    }
  }
```
