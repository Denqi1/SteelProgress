// import { UserIcon } from '@heroicons/react/24/outline';
// import { useState } from 'react';
// import { Controller, useForm } from 'react-hook-form';

// interface ProfileForm {
//   name: string;
//   email: string;
//   phone: string;
//   birthDate: string;
//   height: number;
//   weight: number;
//   goal: string;
//   experience: string;
// }

// export default function Profile() {
//   const [isEditing, setIsEditing] = useState(false);

//   const { control, handleSubmit, reset, watch } = useForm<ProfileForm>({
//     defaultValues: {
//       name: 'Иван Иванов',
//       email: 'ivan@example.com',
//       phone: '+7 (999) 123-45-67',
//       birthDate: '1990-01-01',
//       height: 180,
//       weight: 75,
//       goal: 'Похудение',
//       experience: 'Средний',
//     },
//   });

//   const formValues = watch();

//   const onSubmit = (data: ProfileForm) => {
//     console.log('Profile updated:', data);
//     setIsEditing(false);
//   };

//   const handleCancel = () => {
//     reset();
//     setIsEditing(false);
//   };

//   const handleFormSubmit = (_data: ProfileForm) => {
//     handleSubmit(onSubmit);
//   };

//   const goals = [
//     'Похудение',
//     'Набор мышечной массы',
//     'Поддержание формы',
//     'Увеличение силы',
//     'Улучшение выносливости',
//   ];

//   const experienceLevels = [
//     'Начинающий',
//     'Средний',
//     'Продвинутый',
//     'Профессионал',
//   ];

//   return (
//     <div className='space-y-6'>
//       {/* Header */}
//       <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between'>
//         <div>
//           <h1 className='text-2xl font-bold text-gray-900'>Профиль</h1>
//           <p className='mt-1 text-sm text-gray-500'>
//             Управляйте своей личной информацией и настройками
//           </p>
//         </div>
//         <div className='mt-4 sm:mt-0'>
//           {!isEditing ? (
//             <button onClick={() => setIsEditing(true)} className='btn-primary'>
//               Редактировать профиль
//             </button>
//           ) : (
//             <div className='flex space-x-3'>
//               <button onClick={handleCancel} className='btn-secondary'>
//                 Отмена
//               </button>
//               <button
//                 onClick={() => handleFormSubmit(formValues)}
//                 className='btn-primary'
//               >
//                 Сохранить
//               </button>
//             </div>
//           )}
//         </div>
//       </div>

//       <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
//         {/* Profile Info */}
//         <div className='lg:col-span-2 space-y-6'>
//           {/* Personal Information */}
//           <div className='card'>
//             <h3 className='text-lg font-medium text-gray-900 mb-4'>
//               Личная информация
//             </h3>
//             <form className='space-y-4'>
//               <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
//                 <div>
//                   <label className='block text-sm font-medium text-gray-700 mb-1'>
//                     Имя
//                   </label>
//                   {isEditing ? (
//                     <Controller
//                       name='name'
//                       control={control}
//                       rules={{ required: 'Обязательное поле' }}
//                       render={({ field }) => (
//                         <input
//                           {...field}
//                           type='text'
//                           className='input-field'
//                           placeholder='Введите ваше имя'
//                         />
//                       )}
//                     />
//                   ) : (
//                     <p className='text-gray-900'>{formValues.name}</p>
//                   )}
//                 </div>

//                 <div>
//                   <label className='block text-sm font-medium text-gray-700 mb-1'>
//                     Email
//                   </label>
//                   {isEditing ? (
//                     <Controller
//                       name='email'
//                       control={control}
//                       rules={{
//                         required: 'Обязательное поле',
//                         pattern: {
//                           value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
//                           message: 'Неверный формат email',
//                         },
//                       }}
//                       render={({ field }) => (
//                         <input
//                           {...field}
//                           type='email'
//                           className='input-field'
//                           placeholder='example@email.com'
//                         />
//                       )}
//                     />
//                   ) : (
//                     <p className='text-gray-900'>{formValues.email}</p>
//                   )}
//                 </div>

//                 <div>
//                   <label className='block text-sm font-medium text-gray-700 mb-1'>
//                     Телефон
//                   </label>
//                   {isEditing ? (
//                     <Controller
//                       name='phone'
//                       control={control}
//                       render={({ field }) => (
//                         <input
//                           {...field}
//                           type='tel'
//                           className='input-field'
//                           placeholder='+7 (999) 123-45-67'
//                         />
//                       )}
//                     />
//                   ) : (
//                     <p className='text-gray-900'>{formValues.phone}</p>
//                   )}
//                 </div>

//                 <div>
//                   <label className='block text-sm font-medium text-gray-700 mb-1'>
//                     Дата рождения
//                   </label>
//                   {isEditing ? (
//                     <Controller
//                       name='birthDate'
//                       control={control}
//                       render={({ field }) => (
//                         <input {...field} type='date' className='input-field' />
//                       )}
//                     />
//                   ) : (
//                     <p className='text-gray-900'>
//                       {new Date(formValues.birthDate).toLocaleDateString(
//                         'ru-RU'
//                       )}
//                     </p>
//                   )}
//                 </div>
//               </div>
//             </form>
//           </div>

//           {/* Fitness Information */}
//           <div className='card'>
//             <h3 className='text-lg font-medium text-gray-900 mb-4'>
//               Фитнес-информация
//             </h3>
//             <div className='space-y-4'>
//               <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
//                 <div>
//                   <label className='block text-sm font-medium text-gray-700 mb-1'>
//                     Рост (см)
//                   </label>
//                   {isEditing ? (
//                     <Controller
//                       name='height'
//                       control={control}
//                       render={({ field }) => (
//                         <input
//                           {...field}
//                           type='number'
//                           className='input-field'
//                           placeholder='180'
//                         />
//                       )}
//                     />
//                   ) : (
//                     <p className='text-gray-900'>{formValues.height} см</p>
//                   )}
//                 </div>

//                 <div>
//                   <label className='block text-sm font-medium text-gray-700 mb-1'>
//                     Вес (кг)
//                   </label>
//                   {isEditing ? (
//                     <Controller
//                       name='weight'
//                       control={control}
//                       render={({ field }) => (
//                         <input
//                           {...field}
//                           type='number'
//                           className='input-field'
//                           placeholder='75'
//                         />
//                       )}
//                     />
//                   ) : (
//                     <p className='text-gray-900'>{formValues.weight} кг</p>
//                   )}
//                 </div>
//               </div>

//               <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
//                 <div>
//                   <label className='block text-sm font-medium text-gray-700 mb-1'>
//                     Цель тренировок
//                   </label>
//                   {isEditing ? (
//                     <Controller
//                       name='goal'
//                       control={control}
//                       render={({ field }) => (
//                         <select {...field} className='input-field'>
//                           {goals.map(goal => (
//                             <option key={goal} value={goal}>
//                               {goal}
//                             </option>
//                           ))}
//                         </select>
//                       )}
//                     />
//                   ) : (
//                     <p className='text-gray-900'>{formValues.goal}</p>
//                   )}
//                 </div>

//                 <div>
//                   <label className='block text-sm font-medium text-gray-700 mb-1'>
//                     Уровень опыта
//                   </label>
//                   {isEditing ? (
//                     <Controller
//                       name='experience'
//                       control={control}
//                       render={({ field }) => (
//                         <select {...field} className='input-field'>
//                           {experienceLevels.map(level => (
//                             <option key={level} value={level}>
//                               {level}
//                             </option>
//                           ))}
//                         </select>
//                       )}
//                     />
//                   ) : (
//                     <p className='text-gray-900'>{formValues.experience}</p>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Sidebar */}
//         <div className='space-y-6'>
//           {/* Profile Picture */}
//           <div className='card text-center'>
//             <div className='w-24 h-24 mx-auto mb-4 bg-gray-200 rounded-full flex items-center justify-center'>
//               <UserIcon className='h-12 w-12 text-gray-400' />
//             </div>
//             <h3 className='text-lg font-medium text-gray-900'>
//               {formValues.name}
//             </h3>
//             <p className='text-sm text-gray-500'>
//               {formValues.experience} уровень
//             </p>
//           </div>

//           {/* Quick Stats */}
//           <div className='card'>
//             <h3 className='text-lg font-medium text-gray-900 mb-4'>
//               Быстрая статистика
//             </h3>
//             <div className='space-y-3'>
//               <div className='flex items-center justify-between'>
//                 <span className='text-sm text-gray-500'>ИМТ</span>
//                 <span className='text-sm font-medium text-gray-900'>
//                   {(
//                     formValues.weight / Math.pow(formValues.height / 100, 2)
//                   ).toFixed(1)}
//                 </span>
//               </div>
//               <div className='flex items-center justify-between'>
//                 <span className='text-sm text-gray-500'>Возраст</span>
//                 <span className='text-sm font-medium text-gray-900'>
//                   {new Date().getFullYear() -
//                     new Date(formValues.birthDate).getFullYear()}
//                 </span>
//               </div>
//             </div>
//           </div>

//           {/* Goals */}
//           <div className='card'>
//             <h3 className='text-lg font-medium text-gray-900 mb-4'>Цели</h3>
//             <div className='space-y-2'>
//               <div className='flex items-center'>
//                 <div className='w-2 h-2 bg-primary-500 rounded-full mr-2'></div>
//                 <span className='text-sm text-gray-700'>{formValues.goal}</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
