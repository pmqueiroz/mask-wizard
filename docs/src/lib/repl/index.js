import { replaceTarget } from "./replaceTarget"

export const maskWizardRepl = {
   init: () => {
      window.maskWizardRepl = (options) => {

         const optionsFactory = (_options) => {
            return {
               ..._options,
               targetId: _options.targetId || "repl-target",
            }
         }

         replaceTarget(optionsFactory(options))
      }
   }
}
