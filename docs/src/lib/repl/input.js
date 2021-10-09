import CodeMirror, { defaultConfig } from '../codemirror'

const codeMirrorConfig = {
   ...defaultConfig,
   lineNumbers : true,
   extraKeys: {
      Tab: 'autocomplete'
   },
   autofocus: true,
   autoCloseBrackets: true,
   historyEventDelay: 2000,
   readOnly: false
 }
 
export const bindInputPanel = (el) => {
  return CodeMirror.fromTextArea(el, codeMirrorConfig);
}
