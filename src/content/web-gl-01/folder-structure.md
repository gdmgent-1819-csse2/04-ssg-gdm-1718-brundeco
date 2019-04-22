---
title: "WebGL 01 • Folder en file structuur"
date: "2019-04-18"
---

###Structuur van ons WebGL project

```
    ├── index.html
    ├── assets
          ├── glsl
                ├── fragment-shader.glsl
                ├── vertex-shader.glsl
          ├── js
                ├── Library             --> contains all the calculations
                      ├── Canvas.js
                ├── Tests
                      ├── library       --> contains all the test calculations
                      ├── Tests.js
                ├── Application.js
                ├── main.js
```

- In de root van ons project bevind zich de `index.html` file en de `assets` folder.

- Binnen de `assets` folder vinden we de folders `glsl` en `js` terug.

- De `glsl` staat voor **Graphics Library Shading Language**. Deze folder bevat 2 files, 1 voor de fragment- en 1 voor de vertexshader.

- Binnen onze `js` map vinden we:

  - `main.js` waarin we een nieuwe `Application` instantiëren na het laden van de DOM.
  - `Application.js` waarin we de shaders asynchroon gaan inladen.
  - de folder `Tests` die alle matrix en vector berekeningen bevat, en tests zal uitvoeren op onze code.
  - de folder `Library` waarin we `Canvas.js` terug vinden. Hierin worden data mbt `canvas, shaders, buffers` verwerkt.

- In de `index.html` wordt de `main.js` ingeladen en van daaruit spreken we dan de `Application` klasse aan.

- Binnen `Application` worden dan `Canvas` en `Tests` geïmporteerd.

<br>

**Bekijk een volgend artikel voor meer duidelijkheid omtrent de werking van WebGL**
