import React, { useState } from 'react'

const Dropdown = ({placeHolderValue, options, setValue}) => {

    const [dropdownToggle, setDropdownToggle] = useState(false)
    const [selectedValue, setSelectedValue] = useState(null)

    function selectedOption (value){
      setDropdownToggle(false)
      setSelectedValue(value)
      setValue(value)
    }
    
   


  return (
    <div
    className="h-12 group input-field cursor-pointer relative hover:border-lightPurple"
    id=""
    onMouseEnter={()=>setDropdownToggle(true)}
    onMouseLeave={()=>setDropdownToggle(false)}
  >
    <div className="flex h-full w-full px-4 items-center justify-between">
       {selectedValue ? selectedValue : placeHolderValue} 
       <svg className='group-hover:-rotate-180 ease-in-out duration-200' width="13" height="9" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 1L6.5 7L11.5 1" stroke="white" stroke-width="2"/>
</svg>

    </div>

 {dropdownToggle && <ul className='bg-darkPurple top-[5%] z-10 text-white p-3 py-5 h-40
     overflow-y-scroll rounded-md gap-4 flex flex-col relative capitalize'>
        {
          options?.map((el, index)=> <li key={index} onClick={()=>selectedOption(el)}>{el}</li>)
        }
    </ul> }
    
    </div>
  )
}

export default Dropdown









// import React, { useState } from 'react'

// const Dropdown = () => {

//     const [dropdownToggle, setDropdownToggle] = useState(false)


//   return (
//     <div
//     className="h-12 group input-field cursor-pointer relative hover:border-lightPurple"
//     id=""
//     onMouseEnter={()=>setDropdownToggle(true)}
//     onMouseLeave={()=>setDropdownToggle(false)}
//   >
//     <div className="flex h-full w-full px-4 items-center justify-between">
//        Info 
//        <svg className='group-hover:-rotate-180 ease-in-out duration-200' width="13" height="9" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M1 1L6.5 7L11.5 1" stroke="white" stroke-width="2"/>
// </svg>

//     </div>

//     <ul className='group-hover:flex hidden bg-darkPurple top-[2%] z-10 text-white p-3 py-5 h-40
//      overflow-scroll rounded-md gap-3 flex-col relative'>
//         <li>Options</li>
//         <li>Options</li>
//         <li>Options</li>
//     </ul> 
    
//     </div>
//   )
// }

// export default Dropdown