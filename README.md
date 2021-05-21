<h1 align="center">Mask Wizard</h1>

<p align="center">Mask strings catapimbas sou péssimo pra isso ainda vou por uma desc legal</p>

### Basic Usage

```js
const { time } = require("mask-wizard");

//[...]

function applyTimeMask(e) {
  // the time() output in some value cases
  // 1     OUTPUT 00h01
  // 13    OUTPUT 00h13
  // 130   OUTPUT 01h30
  // 13000 OUTPUT 13h00
  e.currentTarget.value = time(e.currentTarget.value);
}

<input placeholder="Example" onChange={applyTimeMask} />;
```
