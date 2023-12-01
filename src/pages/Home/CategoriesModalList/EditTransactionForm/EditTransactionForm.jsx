// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Controller, useForm } from 'react-hook-form';
// import { parseISO } from 'date-fns';

// const EditTransactionForm = ({ editingTransaction }) => {
//   const isEditing = !!editingTransaction;
//   const {
//     control,
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm({
//     defaultValues: (editingTransaction = {
//       _id: editingTransaction._id ? editingTransaction._id : '',
//       date: parseISO(editingTransaction.date) ? parseISO(editingTransaction.date) : parseISO(new Date()),
//       time: parseISO(`2000-01-01T${editingTransaction.time}`)
//         ? parseISO(`2000-01-01T${editingTransaction.time}`)
//         : parseISO(new Date()),
//       sum: editingTransaction.sum ? editingTransaction.sum : null,
//       comment: editingTransaction.comment ? editingTransaction.comment : '',
//       category: editingTransaction.category ? editingTransaction.category._id : '',
//       type: editingTransaction.type,
//     }),
//   });

//   return <div>EditTransactionForm</div>;
// };

// export default EditTransactionForm;
