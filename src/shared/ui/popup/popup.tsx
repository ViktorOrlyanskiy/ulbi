// import React, { FC, useEffect, useRef, useState } from "react";
// import styles from "./popup.module.scss";

// interface PopupProps {
//     trigger: React.ReactNode;
//     body: React.ReactNode;
//     filter?: boolean;
// }
const x = 1;
// export const Popup: FC<PopupProps> = ({ trigger, body, filter = false }) => {
//     const [open, setOpen] = useState<boolean>(false);
//     const [widthBody, setWidthBody] = useState<number>(0);
//     const refBody = useRef<HTMLDivElement | null>(null);
//     useOutsideClick(refBody, open, setOpen);

//     const handleTrigger = () => {
//         setOpen((prev) => !prev);
//     };

//     useEffect(() => {
//         const container = document.querySelector(".container-content");

//         if (container && refBody.current) {
//             const { right } = container.getBoundingClientRect();
//             const { left } = refBody.current.getBoundingClientRect();

//             setWidthBody(right - left);
//         }
//     }, [open]);

//     return (
//         <div className={styles.wrapper}>
//             <div
//                 className={classNames(
//                     styles.trigger,
//                     { [styles.open]: open, [styles.filter]: filter },
//                     []
//                 )}
//                 onClick={handleTrigger}
//             >
//                 {trigger}
//             </div>
//             <div
//                 ref={refBody}
//                 style={{ width: widthBody }}
//                 className={classNames(
//                     styles.body,
//                     { [styles.open]: open, [styles.filter]: filter },
//                     []
//                 )}
//             >
//                 {body}
//             </div>
//         </div>
//     );
// };
