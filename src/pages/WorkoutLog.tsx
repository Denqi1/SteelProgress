// import { useState } from 'react';
// import { useForm, Controller } from 'react-hook-form';
// import {
//   PlusIcon,
//   TrashIcon,
//   ClockIcon,
//   FireIcon,
// } from '@heroicons/react/24/outline';
// import { format } from 'date-fns';
// import { ru } from 'date-fns/locale';

// interface WorkoutForm {
//   name: string;
//   date: string;
//   duration: number;
//   exercises: Array<{
//     name: string;
//     sets: number;
//     reps: number;
//     weight?: number;
//   }>;
// }

// export default function WorkoutLog() {
//   const [showForm, setShowForm] = useState(false);
//   const [workouts, setWorkouts] = useState<WorkoutForm[]>([]);

//   const { control, handleSubmit, reset, watch, setValue } =
//     useForm<WorkoutForm>({
//       defaultValues: {
//         name: '',
//         date: format(new Date(), 'yyyy-MM-dd'),
//         duration: 0,
//         exercises: [],
//       },
//     });

//   const exercises = watch('exercises');

//   const onSubmit = (data: WorkoutForm) => {
//     setWorkouts([...workouts, data]);
//     reset();
//     setShowForm(false);
//   };

//   const addExercise = () => {
//     const currentExercises = exercises || [];
//     setValue('exercises', [
//       ...currentExercises,
//       { name: '', sets: 0, reps: 0, weight: 0 },
//     ]);
//   };

//   const removeExercise = (index: number) => {
//     const currentExercises = exercises || [];
//     setValue(
//       'exercises',
//       currentExercises.filter((_, i) => i !== index)
//     );
//   };

//   return (
//     <div className='space-y-6'>
//       {/* Header */}
//       <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between'>
//         <div>
//           <h1 className='text-2xl font-bold text-gray-900'>
//             Дневник тренировок
//           </h1>
//           <p className='mt-1 text-sm text-gray-500'>
//             Записывайте свои тренировки и отслеживайте прогресс
//           </p>
//         </div>
//         <div className='mt-4 sm:mt-0'>
//           <button
//             onClick={() => setShowForm(true)}
//             className='btn-primary flex items-center'
//           >
//             <PlusIcon className='h-5 w-5 mr-2' />
//             Добавить тренировку
//           </button>
//         </div>
//       </div>

//       {/* Workout Form */}
//       {showForm && (
//         <div className='card'>
//           <h3 className='text-lg font-medium text-gray-900 mb-4'>
//             Новая тренировка
//           </h3>
//           <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
//             <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
//               <div>
//                 <label className='block text-sm font-medium text-gray-700 mb-1'>
//                   Название тренировки
//                 </label>
//                 <Controller
//                   name='name'
//                   control={control}
//                   rules={{ required: 'Обязательное поле' }}
//                   render={({ field, fieldState }) => (
//                     <input
//                       {...field}
//                       type='text'
//                       className='input-field'
//                       placeholder='Например: Силовая тренировка'
//                     />
//                   )}
//                 />
//               </div>

//               <div>
//                 <label className='block text-sm font-medium text-gray-700 mb-1'>
//                   Дата
//                 </label>
//                 <Controller
//                   name='date'
//                   control={control}
//                   render={({ field }) => (
//                     <input {...field} type='date' className='input-field' />
//                   )}
//                 />
//               </div>

//               <div>
//                 <label className='block text-sm font-medium text-gray-700 mb-1'>
//                   Длительность (мин)
//                 </label>
//                 <Controller
//                   name='duration'
//                   control={control}
//                   render={({ field }) => (
//                     <input
//                       {...field}
//                       type='number'
//                       className='input-field'
//                       placeholder='45'
//                     />
//                   )}
//                 />
//               </div>
//             </div>

//             {/* Exercises */}
//             <div>
//               <div className='flex items-center justify-between mb-4'>
//                 <h4 className='text-md font-medium text-gray-900'>
//                   Упражнения
//                 </h4>
//                 <button
//                   type='button'
//                   onClick={addExercise}
//                   className='btn-secondary flex items-center'
//                 >
//                   <PlusIcon className='h-4 w-4 mr-1' />
//                   Добавить упражнение
//                 </button>
//               </div>

//               <div className='space-y-4'>
//                 {exercises?.map((exercise, index) => (
//                   <div
//                     key={index}
//                     className='grid grid-cols-1 md:grid-cols-5 gap-4 p-4 bg-gray-50 rounded-lg'
//                   >
//                     <div>
//                       <label className='block text-sm font-medium text-gray-700 mb-1'>
//                         Упражнение
//                       </label>
//                       <Controller
//                         name={`exercises.${index}.name`}
//                         control={control}
//                         render={({ field }) => (
//                           <input
//                             {...field}
//                             type='text'
//                             className='input-field'
//                             placeholder='Например: Жим лежа'
//                           />
//                         )}
//                       />
//                     </div>

//                     <div>
//                       <label className='block text-sm font-medium text-gray-700 mb-1'>
//                         Подходы
//                       </label>
//                       <Controller
//                         name={`exercises.${index}.sets`}
//                         control={control}
//                         render={({ field }) => (
//                           <input
//                             {...field}
//                             type='number'
//                             className='input-field'
//                             placeholder='3'
//                           />
//                         )}
//                       />
//                     </div>

//                     <div>
//                       <label className='block text-sm font-medium text-gray-700 mb-1'>
//                         Повторения
//                       </label>
//                       <Controller
//                         name={`exercises.${index}.reps`}
//                         control={control}
//                         render={({ field }) => (
//                           <input
//                             {...field}
//                             type='number'
//                             className='input-field'
//                             placeholder='10'
//                           />
//                         )}
//                       />
//                     </div>

//                     <div>
//                       <label className='block text-sm font-medium text-gray-700 mb-1'>
//                         Вес (кг)
//                       </label>
//                       <Controller
//                         name={`exercises.${index}.weight`}
//                         control={control}
//                         render={({ field }) => (
//                           <input
//                             {...field}
//                             type='number'
//                             className='input-field'
//                             placeholder='60'
//                           />
//                         )}
//                       />
//                     </div>

//                     <div className='flex items-end'>
//                       <button
//                         type='button'
//                         onClick={() => removeExercise(index)}
//                         className='btn-secondary text-red-600 hover:text-red-700'
//                       >
//                         <TrashIcon className='h-5 w-5' />
//                       </button>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className='flex justify-end space-x-3'>
//               <button
//                 type='button'
//                 onClick={() => setShowForm(false)}
//                 className='btn-secondary'
//               >
//                 Отмена
//               </button>
//               <button type='submit' className='btn-primary'>
//                 Сохранить тренировку
//               </button>
//             </div>
//           </form>
//         </div>
//       )}

//       {/* Workouts List */}
//       <div className='space-y-4'>
//         {workouts.map((workout, index) => (
//           <div key={index} className='card'>
//             <div className='flex items-center justify-between mb-4'>
//               <div>
//                 <h3 className='text-lg font-medium text-gray-900'>
//                   {workout.name}
//                 </h3>
//                 <p className='text-sm text-gray-500'>
//                   {format(new Date(workout.date), 'd MMMM yyyy', {
//                     locale: ru,
//                   })}
//                 </p>
//               </div>
//               <div className='flex items-center space-x-4 text-sm text-gray-500'>
//                 <div className='flex items-center'>
//                   <ClockIcon className='h-4 w-4 mr-1' />
//                   {workout.duration} мин
//                 </div>
//                 <div className='flex items-center'>
//                   <FireIcon className='h-4 w-4 mr-1' />
//                   {workout.exercises.length} упражнений
//                 </div>
//               </div>
//             </div>

//             <div className='space-y-2'>
//               {workout.exercises.map((exercise, exerciseIndex) => (
//                 <div
//                   key={exerciseIndex}
//                   className='flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0'
//                 >
//                   <span className='font-medium text-gray-900'>
//                     {exercise.name}
//                   </span>
//                   <span className='text-sm text-gray-500'>
//                     {exercise.sets} × {exercise.reps}
//                     {exercise.weight && ` @ ${exercise.weight}кг`}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}

//         {workouts.length === 0 && (
//           <div className='text-center py-12'>
//             <p className='text-gray-500'>Пока нет записей о тренировках</p>
//             <button
//               onClick={() => setShowForm(true)}
//               className='btn-primary mt-4'
//             >
//               Добавить первую тренировку
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
