export const LiveExampleWithOutput = () => {
   const [value, setValue] = useState(0)

   console.log(value)

   return (
      <div class="formContainer">
         <input class="succeed" placeholder="Eg: 10:15" onChange={setValue} />

         <button class="precede">
            
         </button>
      </div>
   )
}