// import fetch from 'isomorphic-unfetch';
// import { useState, useEffect } from 'react';
// import { useRouter } from 'next/router';
// import { Confirm, Loader, Message } from 'semantic-ui-react';

// const Minuman = ({ minuman }) => {
//   const [confirm, setConfirm] = useState(false);
//   const [isDeleting, setIsDeleting] = useState(false);
//   const [deleteError, setDeleteError] = useState(null);
//   const [deleteSuccess, setDeleteSuccess] = useState(false);
//   const router = useRouter();

//   useEffect(() => {
//     if (isDeleting) {
//       deleteMinuman();
//     }
//   }, [isDeleting]);

//   const open = () => setConfirm(true);
//   const close = () => setConfirm(false);
//   const deleteMinuman = async () => {
//     const minumanId = router.query.id;
//     try {
//       const deleted = await fetch(`http://localhost:3000/api/minumans/${minumanId}`, {
//         method: 'DELETE'
//       });
//       setDeleteSuccess(true);
//       setTimeout(() => {
//         router.push('/minuman');
//       }, 2000);
//     } catch (error) {
//       setDeleteError('An error occurred while deleting the minuman.');
//       console.log(error);
//     }
//   };

//   const handleDelete = async () => {
//     setIsDeleting(true);
//     close();
//   };

//   return (
//     <div className="minuman-container">
//       {isDeleting ? (
//         <Loader active />
//       ) : (
//         <>
//           {deleteSuccess && (
//             <Message positive>
//               <Message.Header>Minuman Deleted</Message.Header>
//               <p>The minuman has been successfully deleted.</p>
//             </Message>
//           )}
//           {deleteError && (
//             <Message negative>
//               <Message.Header>Error Deleting Minuman</Message.Header>
//               <p>{deleteError}</p>
//             </Message>
//           )}
//           <section className="text-gray-600 body-font">
//             <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
//               <div className="text-center lg:w-2/3 w-full">
//                 <img
//                   className="h-auto max-w-full rounded"
//                   src={minuman.image}
//                   alt="image description"
//                 />
//                 <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
//                   {minuman?.title}
//                 </h1>
//                 <p className="mb-8 leading-relaxed">{minuman?.price}</p>
//                 <h2 className="flex-top">Description</h2>
//                 <p className="mb-8 leading-relaxed">{minuman?.description}</p>
//                 <div className="flex justify-center">
//                   <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
//                     Buy
//                   </button>
//                   <button
//                     className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"
//                     onClick={open}
//                   >
//                     Delete
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </section>
//         </>
//       )}
//       <Confirm
//         open={confirm}
//         onCancel={close}
//         onConfirm={handleDelete}
//         content="Are you sure you want to delete this minuman?"
//         cancelButton="No"
//         confirmButton="Yes"
//         size="tiny"
//         className="custom-confirm-dialog"
//         style={{ height: '200px', maxWidth: '400px' }}
//       />
//       <style jsx global>{`
//         .custom-confirm-dialog.ui.modal {
//           position: fixed !important;
//           top: 50% !important;
//           left: 50% !important;
//           transform: translate(-50%, -50%) !important;
//         }
//       `}</style>
//     </div>
//   );
// };

// Minuman.getInitialProps = async ({ query: { id } }) => {
//   try {
//     const res = await fetch(`http://localhost:3000/api/minumans/${id}`);
//     const { data } = await res.json();
//     return { minuman: data };
//   } catch (error) {
//     console.log(error);
//     return { minuman: {} };
//   }
// };


// export default Minuman;
