import debounce from 'debounce'

const handleHash = (e) => {
   window.location.hash = '?' + encodeURIComponent(e.target.value);
}

export const replaceTarget = (
   options,
   ) => {
   const replDom = document.createElement('textarea')
   const target = document.getElementById(options.targetId)

   target.style.display = 'none'
   target.parentNode.insertBefore(replDom, target)

   replDom.innerHTML = target.innerHTML

   replDom.addEventListener('input', debounce(handleHash, 500))
};