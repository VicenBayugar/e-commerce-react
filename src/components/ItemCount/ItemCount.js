// import React, { useState } from "react";
// import AddButton from "../Buttons/AddButton";
// import RemoveButton from "../Buttons/RemoveButton";

// const ItemCount = ({ onAdd }) => {
//   const [counter, setCounter] = useState("");

//   return (
//     <>
//       <div className="d-flex justify-content-center pb-2">
//         <button
//           className="btn pe-3"
//           onClick={() => {
//             if (counter > 1) {
//               setCounter(counter - 1);
//             }
//           }}
//         >
//           <RemoveButton />
//         </button>
//         <p>{counter}</p>
//         <button
//           className="btn px-3"
//           onClick={() => {
//             setCounter(counter + 1);
//           }}
//         >
//           <AddButton />
//         </button>
//       </div>
//       <div
//         className="d-grid gap-2 col-9 mx-auto pb-3"
//         onClick={() => onAdd(counter)}
//       >
//         <button className="btn btn-outline-primary">Agregar al carrito</button>
//       </div>
//     </>
//   );
// };

// export default ItemCount;
