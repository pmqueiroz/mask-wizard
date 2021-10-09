import { useEffect } from 'react'
import { maskWizardRepl } from '../lib/repl'

export const useREPL = (options = {}) => {
   useEffect(() => {
      maskWizardRepl.init()

      window.maskWizardRepl(options)
   }, [])
}
