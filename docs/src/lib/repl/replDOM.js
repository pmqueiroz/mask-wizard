import { div } from 'rdom'

const inputPanel = div({ className: 'input-panel' }, ['input'])
const outputPanel = div({ className: 'output-panel' }, ['output'])

export const replDOM = div(
   { className: 'repl repl-loading' },
   [
      { className: 'repl-panels' },
      [
        inputPanel,
        outputPanel
      ]
   ]
)