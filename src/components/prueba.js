// import { useContext } from 'react';
// import { ToDoContext } from '../../Context/ToDoContext';
// const ToDoList = () => {
//   const { todos, removeToDo, updateStatusToDo } = useContext(ToDoContext);
//   return (
//     <>
//       <div className='flex items-center justify-center'>
//         {todos.length > 0 && (
//           <ul>
//             <div className='container mx-auto px-4 sm:px-8 max-w-3xl'>
//               <div className='py-8'>
//                 <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
//                   <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
//                     <table className='min-w-full leading-normal'>
//                       <thead>
//                         <tr>
//                           <th
//                             scope='col'
//                             className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
//                           >
//                             User
//                           </th>
//                           <th
//                             scope='col'
//                             className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
//                           >
//                             Title
//                           </th>
//                           <th
//                             scope='col'
//                             className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
//                           >
//                             Created at
//                           </th>
//                           <th
//                             scope='col'
//                             className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
//                           >
//                             status
//                           </th>
//                         </tr>
//                       </thead>
//                       <tbody>
//                         {todos.map((todo) => (
//                           <tr>
//                             <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
//                               <div className='flex items-center'>
//                                 <div className='flex-shrink-0'>
//                                   <div className='block relative'>
//                                     <img
//                                       alt='profil'
//                                       src='https://res.cloudinary.com/hdsqazxtw/image/upload/v1600707758/coderhouse-logo.png'
//                                       className='mx-auto object-cover rounded-full h-10 w-10 '
//                                     />
//                                   </div>
//                                 </div>
//                                 <div className='ml-3'>
//                                   <p className='text-gray-900 whitespace-no-wrap'>
//                                     {todo.user}
//                                   </p>
//                                 </div>
//                               </div>
//                             </td>
//                             <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
//                               <p className='text-gray-900 whitespace-no-wrap'>
//                                 {todo.title}
//                               </p>
//                             </td>
//                             <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
//                               <p className='text-gray-900 whitespace-no-wrap'>
//                                 {todo.date}
//                               </p>
//                             </td>
//                             <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
//                               <span className='relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight'>
//                                 <select
//                                   className='block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
//                                   id='status'
//                                   value={todo.status}
//                                   onChange={(e) =>
//                                     updateStatusToDo(todo.id, e.target.value)
//                                   }
//                                 >
//                                   <option value=''>Select status</option>
//                                   <option value='pending'>Pending</option>
//                                   <option value='inprogress'>
//                                     In Progress
//                                   </option>
//                                   <option value='done'>Done</option>
//                                 </select>
//                               </span>
//                             </td>
//                             <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
//                               <button
//                                 className='px-4 py-2  text-base rounded-full text-red-600 border border-red-600 bg-red-200'
//                                 onClick={() => removeToDo(todo.id)}
//                               >
//                                 Remove
//                               </button>
//                             </td>
//                           </tr>
//                         ))}
//                       </tbody>
//                     </table>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </ul>
//         )}
//         {todos.length === 0 && (
//           <img
//             src='https://cdn.dribbble.com/users/898770/screenshots/3744292/search-bar.gif'
//             alt='nothing'
//           />
//         )}
//       </div>
//     </>
//   );
// };

// export default ToDoList;

