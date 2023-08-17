import React,{useState} from 'react';

function Counter()
{
   

   const [value,setvalue]= useState(0);

   function incrementHandler()
   {
          // ---right way
          // let valuex=value;
          // valuex++;
          // setvalue(valuex);
          // ---rigt-way
          setvalue(value+1);
          // ---wrong way because value for that instance it const
          // value=value-1;
          // setvalue(value);
         
         
   }

   function decrementHandler()
   {
        
          
          
          if(value>0)
          {
                    
                    setvalue(value-1);
          }
       
       
   }

   const resetHandler=()=>
   {
         
        
          setvalue(0);
   }
   
   



          return(
                    <>
                    <h2 className='text-white font-bold text-lg '>Increment & Decrement</h2>
                    <div className='w-[150px] h-[50px] bg-white flex flex-col gap-1 rounded-md'>
                       
                         <div className='flex justify-center items-center h-full gap-2'>
                              <button className='p-2 border-r-2 cursor-pointer outline-none pr-[1rem]'><i className="fa-solid fa-plus" onClick={incrementHandler}></i></button>
                              <div className='mx-2'>{value}</div>
                              <button className='p-2  border-l-2  pl-[1rem] cursor-pointer '><i className="fa-solid fa-minus" onClick={decrementHandler}></i></button>
                         </div>
                         
                    </div>
                    <button className='bg-blue-600 text-white font-semibold appearance-none px-3 py-2 rounded-md cursor-pointer' onClick={resetHandler}>Reset</button>
                    </>
          )
}
export default Counter;