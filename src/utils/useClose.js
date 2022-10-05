// import { useEffect } from "react";

// export default function useClose(isOpen, handleClose) {
//   useEffect(() => {
//     if (isOpen) return;

//     function handleEsc(event) {
//       if (event.key === 'Escape') {
//         handleClose();
//       }
//     }

//     document.addEventListener('keydown', handleEsc);

//     return () => {
//       document.removeEventListener('keydown', handleEsc);
//     }
//   }, [isOpen])
// }