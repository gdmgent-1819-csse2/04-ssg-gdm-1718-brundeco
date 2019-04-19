---
title: 'WebGL 02 • Application klasse'
date: '2019-04-17'
---

De Web Graphics Library is een Javascript API die instaat voor het renderen van interactive 2D en 3D graphics binnen de webbrowser zonder dat plugins vereist worden. Dit wordt mogelijk gemaakt doordat de API sterk lijkt op de OpenGL API die op zijn beurt gebruikt kan worden binnen de html 5 canvas elementen. Lees verder als je meer te weten wilt komen over hoe we WebGL gaan implementeren.

###Instructies opdracht

- Implementeren van de verschillende bewerkingen met betrekking tot Lineaire Algebra voor Computergrafiek:

  > **vectoren**: norm, normalisatie, som, verschil, vermenigvuldiging (scalaire vermenigvuldiging, inwendig product, uitwendig product)

  > **matrices**: som, verschil, vermenigvuldiging, identiteitsmatrix, inverse matrix, getransponeerde matrix

  > **vector als matrix**: kolommatrix (m x 1), rijmatrix (1 x n), homogene coördinaten

  > **3D transformatiematrices**: schaalmatrix, Eulerrotatiematrices, translatiematrix, volgorde van de transformaties

- Per klasse een testklasse aanmaken waarmee we de functionaliteit van de klasse gaan testen. Wanneer na de test de output overeenkomt met het verwachte resultaat is de test geslaagd.

- Doel van deze testen: nagaan na elke wijziging of het programma nog naar behoren werkt.

###Aanpak

- Van zodra de DOM klaar is maken we een nieuwe applicatie aan. Bovenaan importeren we onze `Application` klasse die dan een instantie aanmaakt.

```js
import Application from './Application.js';
window.addEventListener('DOMContentLoaded', _ => new Application(), true);
```
<br>

**In onderstaand voorbeeld een overzicht van de structuur van onze `Application` klasse.**

```js
export default class Application {
  constructor() {
    const tests = false;
    if (tests) {
      new Tests();
    }
    console.info('WebGL2 Demo');
    this.shaderSources = {
      fragment: null,
      vertex: null,
    };
    this.preloader();
  }
}
```

- Binnen de constructor kijken we of er tests zijn, indien ja dan worden deze uitgevoerd.

- De `Test` files worden bovenaan ingeladen met `import Tests from './Tests/Tests.js'`

- De shadersources worden initieel op `null` gezet. Hierna zal `preloader()` de shadersources ophalen. Zie onderstaand codefragment.

```js
   async preloader() {
    console.log('Check');
    await fetch('../assets/glsl/vertex-shader.glsl')
      .then(source => (this.shaderSources.vertex = source))
      .catch(error => console.error(error.message));

    await fetch('../assets/glsl/vertex-shader.glsl')
      .then(source => (this.shaderSources.fragment = source))
      .catch(error => console.error(error.message));
    this.run();
  }
```

- De waarden voor de shadersources worden vervolgens opgehaald via `preloader()`.

- Dit gebeurt via `async` en `await`. Op deze manier wordt de informatie asynchroon ingeladen en worden errors vermeden. Wanneer de shaders beschikbaar zijn worden ze toegekend, dit gebeurt in ons `.then()`statement. Eventuele errors worden opgevangen in de `.catch()`

- Aan het einde van de `preloader()`methode komen we aan `this.run()`. Meer hierover in onderstaand codevoorbeeld.


```js
  run() {
    new Canvas(
      document.body.clientWidth,
      document.body.clientHeight,
      this.shaderSources
    );
  }
```

- We maken een nieuwe instantie van onze `Canvas` klasse aan, deze wordt bovenaan ingeladen met `import Canvas from './Library/Canvas.js'`

- Width en height worden gelijk gezet aan client width en client height.

- De verkregen shadersources worden meegegeven.

<br>

**Bekijk ook volgend artikel over de Canvas klasse**



