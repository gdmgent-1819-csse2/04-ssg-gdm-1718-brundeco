---
title: "WebGL 04 • Vertex & fragment shaders"
date: "2019-04-16"
---

###Het verschil tussen beide.

**Vertex shader**

> De taak van een **vertexshader** is het berekenen van vertexposities. Op basis van de posities van de functie-uitgangen kan WebGL vervolgens verschillende soorten primitieven rasteren, inclusief punten, lijnen of driehoeken. Bij het rasteren van deze primitieven wordt een tweede functie geleverd door de user, namelijk de **fragmentshader**.

**De structuur van de vertexshader zal er als volgt uitzien**

```js
void main() {
 gl_Position = doMathToMakeClipspaceCoordinates
}

```

**Vertex shaders moeten voorzien worden van data. Deze data kan verkregen worden op 3 manieren:**

1. Attributes: data afkomstig van buffers

2. Textures: data van pixels/texels

3. Uniforms: waarden die hetzelfde blijven voor elke pixel van een single drawcall

<br>

**Fragment shader**

> De taak van een **fragmentshader** is om een ​​kleur te berekenen voor elke pixel van de primitieve die op dat moment wordt getekend.

**De structuur van de fragmentshader zal er als volgt uitzien**

```js
precision mediump float;

void main() {
 gl_FragColor = doMathToMakeAColor;
}
```

<br>

**Ook fragment shaders moeten voorzien worden van data. Deze data kan verkregen worden op 3 manieren:**

1. Uniforms: waarden die hetzelfde blijven voor elke pixel van een single drawcall

2. Textures: data van pixels/texels

3. Varyings: gegeven afkomstig van de vertexshader en geïnterpoleerd
