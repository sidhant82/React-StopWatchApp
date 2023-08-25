import React, { useState, useRef } from 'react';
import './App.css';

const ReactWatch = () => {
   let [H, setH] = useState(0);
   let [M, setM] = useState(0);
   let [S, setS] = useState(0);
   let intervalRef = useRef();

   const startWatch = () => {
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
         setS(S => {
            if (S >= 59) {
                setM(M => {
                   if (M >= 59) {
                      setH(H => H + 1);
                      return 0;
                   }
                   return M + 1;
                });
                return 0;
             }
             return S + 1;
          });
       }, 1000);
   };

   const stopWatch = () => {
      clearInterval(intervalRef.current);
   };

   const resetWatch = () => {
      clearInterval(intervalRef.current);
      setH(0);
      setM(0);
      setS(0);
   };

   return (
      <div className='d1'> 
         <h1 className='d2'>StopWatch</h1>

         <h1>{H}:{M < 10 ? '0' + M : M}:{S < 10 ? '0' + S :S}</h1>
         
         <button onClick={startWatch}>Start</button>
         <button onClick={stopWatch}>Stop</button>
         <button onClick={resetWatch}>Reset</button>
      </div>
   );
};

export default ReactWatch;
