import debounce from 'debounce'
import { bindInputPanel } from './input';
import { bindOutputPanel } from './output';

const handleHash = (source) => {
   window.location.hash = encodeURIComponent(source);
}

const compile = async (input, output) => {
   if (!input) return

   const source = input.getValue()

   handleHash(source)

   const response = await fetch(`https://repl-server.herokuapp.com/?code=${encodeURIComponent(source)}`)
   
   const { data } = await response.json()

   console.log(data)

   output.setValue('output: ' + data)
}

export const replaceTarget = (
   options,
   ) => {
   const target = document.getElementById(options.targetId)
   const wrapper = document.createElement('div')
   
   target.style.display = 'none'
   target.parentNode.insertBefore(wrapper, target)

   const panels = document.createElement('div')
   wrapper.className = 'repl'

   wrapper.appendChild(panels)

   const inputPanel = document.createElement('textarea')
   const outputPanel = document.createElement('textarea')
   panels.className = 'repl-panels'

   panels.appendChild(inputPanel)
   panels.appendChild(outputPanel)
   
   inputPanel.innerHTML = options.initialValue || target.innerHTML
   
   const bindedInput = bindInputPanel(inputPanel)
   const bindedOutput = bindOutputPanel(outputPanel)

   const debounceCompile = delay => debounce(compile, delay)

   const onChange = debounceCompile(700);

   bindedInput.on('change', () => onChange(bindedInput, bindedOutput, options))
};