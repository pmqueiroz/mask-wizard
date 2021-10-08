<img src=".github/logo.png" alt="Mask Wizard Logo" title="Mask Wizard" align="right" height="96"/>

<h1 align="center">Mask Wizard</h1>

<p align="center">Simple usage string masking functions, checkout our <a href="https://mask-wizard.vercel.app/docs/Intro">documentation</a></p>


### Basic Usage

```js
const maskWizard = require("mask-wizard")

//[...]

function applyTimeMask(e) {
  // the time() output in some value cases
  // 1     OUTPUT 00h01
  // 13    OUTPUT 00h13
  // 130   OUTPUT 01h30
  // 13000 OUTPUT 13h00
  e.currentTarget.value = maskWizard.time.interval(e.currentTarget.value)
}

<input placeholder="Example" onChange={applyTimeMask} />
```

### Contributing

You can simply contribute giving us a start on [github](https://github.com/pmqueiroz/mask-wizard) :D

If you want to contribute with the code feel free to open issues and fork the repository to create pull request following our [Contributing Guideline](https://github.com/pmqueiroz/mask-wizard/blob/master/CONTRIBUTING.Md) :D

#### How to run locally

* Run `yarn` to install all dependencies
* Compile the code with `yarn build` or if you wanna build in watch mode `yarn start`
* Then you can make any changes on `src`
* Tests your changes in `__tests__`





