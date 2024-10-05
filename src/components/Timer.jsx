import React from 'react'

export default function Timer({ user, abc }) {

    console.log(user, abc);
    return <h2>UserName : {user}</h2>
}





// import React, { useEffect, useState } from 'react';

// export default function Timer() {
//     const [state, setState] = useState(0)
//     const [interval, changeInterval] = useState(false)

//     useEffect(() => {
//         let value;
//         if (interval) value = setInterval(() => setState(p => p += 1), 100)

//         return () => clearInterval(value);
//     }, [interval]);


//     const start = () => {
//         changeInterval(true)
//     };

//     const stopFunc = () => {
//         changeInterval(false)
//     };


//     return (
//         <div>
//             {state}
//             <br />
//             <button onClick={start}>Start</button>
//             <button onClick={stopFunc}>Stop</button>
//             <button onClick={() => setState(p => p += 1)}>Increment</button>
//         </div>
//     );
// };