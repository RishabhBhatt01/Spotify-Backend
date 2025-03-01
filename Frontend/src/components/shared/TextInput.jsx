// const TextInput = ({label,
//   placeholder,
//   className ,
//    value,
//    setValue
//   }) =>{
//   return(
//     <div className={`textInputDiv flex flex-col space-y-2
//      w-full ${className}`}>
//       <label htmlFor="label" className="font-semibold opacity-80">
//         {label}
//       </label>

    
//     <input type="text"
//      placeholder= {placeholder}
//       className="p-2.5 border border-gray-500 border-solid rounded placeholder-gray-350" 
//       id="label"
//       value = {value}
//       onChange={(e)=>{
//         setValue(e.target.value);
//       } }
      
      
//       />

//     </div>
//   );
// }

// export default TextInput;

const TextInput = ({
  label,
  placeholder,
  className,
  value,
  setValue,
  labelClassName,
}) => {
  return (
      <div
          className={`textInputDiv flex flex-col space-y-2 w-full ${className}`}
      >
          <label for={label} className={`font-semibold ${labelClassName}`}>
              {label}
          </label>
          <input
              type="text"
              placeholder={placeholder}
              className="p-3 border border-gray-400 border-solid rounded placeholder-gray-500"
              id={label}
              value={value}
              onChange={(e) => {
                  setValue(e.target.value);
              }}
          />
      </div>
  );
};

export default TextInput;