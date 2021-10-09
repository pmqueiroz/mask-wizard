import CodeMirror from 'codemirror'
import 'codemirror/addon/edit/closebrackets'
import 'codemirror/addon/hint/show-hint'
import 'codemirror/addon/hint/javascript-hint'
import 'codemirror/mode/javascript/javascript'

const defaultConfig = {
   theme: "dracula",
   mode: {
     name: "javascript",
     json: true,
     globalVars: true
   }
 }

export {
   defaultConfig
}

export default CodeMirror
