import CodeMirror, { defaultConfig } from '../codemirror'

const codeMirrorConfig = {
   ...defaultConfig,
   readOnly: true
 }
 
export const bindOutputPanel = (el) => {
  return CodeMirror.fromTextArea(el, codeMirrorConfig);
}
