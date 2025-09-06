// import { useState } from 'react';
// import {
//   LineChart,
//   Line,
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
//   PieChart,
//   Pie,
//   Cell,
// } from 'recharts';
// import { format, subDays, eachDayOfInterval } from 'date-fns';
// import { ru } from 'date-fns/locale';

// export default function Statistics() {
//   const [timeRange, setTimeRange] = useState('7d');

//   // Моковые данные для демонстрации
//   const generateWorkoutData = (days: number) => {
//     const data = [];
//     const endDate = new Date();
//     const startDate = subDays(endDate, days - 1);

//     const dates = eachDayOfInterval({ start: startDate, end: endDate });

//     dates.forEach((date, index) => {
//       data.push({
//         date: format(date, 'dd/MM', { locale: ru }),
//         workouts: Math.floor(Math.random() * 3) + 1,
//         duration: Math.floor(Math.random() * 60) + 30,
//         calories: Math.floor(Math.random() * 300) + 200,
//       });
//     });

//     return data;
//   };

//   const workoutData = generateWorkoutData(7);

//   const exerciseData = [
//     { name: 'Жим лежа', value: 12, color: '#3b82f6' },
//     { name: 'Приседания', value: 8, color: '#10b981' },
//     { name: 'Становая тяга', value: 6, color: '#f59e0b' },
//     { name: 'Подтягивания', value: 10, color: '#ef4444' },
//     { name: 'Планка', value: 5, color: '#8b5cf6' },
//   ];

//   const weeklyProgress = [
//     { week: 'Неделя 1', weight: 80, bodyFat: 15 },
//     { week: 'Неделя 2', weight: 79.5, bodyFat: 14.8 },
//     { week: 'Неделя 3', weight: 79, bodyFat: 14.5 },
//     { week: 'Неделя 4', weight: 78.5, bodyFat: 14.2 },
//     { week: 'Неделя 5', weight: 78, bodyFat: 14 },
//   ];

//   return (
//     <div className='space-y-6'>
//       {/* Header */}
//       <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between'>
//         <div>
//           <h1 className='text-2xl font-bold text-gray-900'>Статистика</h1>
//           <p className='mt-1 text-sm text-gray-500'>
//             Анализируйте свой прогресс и достижения
//           </p>
//         </div>
//         <div className='mt-4 sm:mt-0'>
//           <select
//             value={timeRange}
//             onChange={e => setTimeRange(e.target.value)}
//             className='input-field w-auto'
//           >
//             <option value='7d'>Последние 7 дней</option>
//             <option value='30d'>Последние 30 дней</option>
//             <option value='90d'>Последние 90 дней</option>
//           </select>
//         </div>
//       </div>

//       {/* Charts Grid */}
//       <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
//         {/* Workout Frequency */}
//         <div className='card'>
//           <h3 className='text-lg font-medium text-gray-900 mb-4'>
//             Частота тренировок
//           </h3>
//           <ResponsiveContainer width='100%' height={300}>
//             <BarChart data={workoutData}>
//               <CartesianGrid strokeDasharray='3 3' />
//               <XAxis dataKey='date' />
//               <YAxis />
//               <Tooltip />
//               <Bar dataKey='workouts' fill='#3b82f6' />
//             </BarChart>
//           </ResponsiveContainer>
//         </div>

//         {/* Duration Trend */}
//         <div className='card'>
//           <h3 className='text-lg font-medium text-gray-900 mb-4'>
//             Длительность тренировок
//           </h3>
//           <ResponsiveContainer width='100%' height={300}>
//             <LineChart data={workoutData}>
//               <CartesianGrid strokeDasharray='3 3' />
//               <XAxis dataKey='date' />
//               <YAxis />
//               <Tooltip />
//               <Legend />
//               <Line
//                 type='monotone'
//                 dataKey='duration'
//                 stroke='#10b981'
//                 strokeWidth={2}
//                 name='Длительность (мин)'
//               />
//             </LineChart>
//           </ResponsiveContainer>
//         </div>

//         {/* Calories Burned */}
//         <div className='card'>
//           <h3 className='text-lg font-medium text-gray-900 mb-4'>
//             Сожженные калории
//           </h3>
//           <ResponsiveContainer width='100%' height={300}>
//             <LineChart data={workoutData}>
//               <CartesianGrid strokeDasharray='3 3' />
//               <XAxis dataKey='date' />
//               <YAxis />
//               <Tooltip />
//               <Line
//                 type='monotone'
//                 dataKey='calories'
//                 stroke='#f59e0b'
//                 strokeWidth={2}
//                 name='Калории'
//               />
//             </LineChart>
//           </ResponsiveContainer>
//         </div>

//         {/* Exercise Distribution */}
//         <div className='card'>
//           <h3 className='text-lg font-medium text-gray-900 mb-4'>
//             Распределение упражнений
//           </h3>
//           <ResponsiveContainer width='100%' height={300}>
//             <PieChart>
//               <Pie
//                 data={exerciseData}
//                 cx='50%'
//                 cy='50%'
//                 labelLine={false}
//                 label={({ name, percent }) =>
//                   `${name} ${(percent * 100).toFixed(0)}%`
//                 }
//                 outerRadius={80}
//                 fill='#8884d8'
//                 dataKey='value'
//               >
//                 {exerciseData.map((entry, index) => (
//                   <Cell key={`cell-${index}`} fill={entry.color} />
//                 ))}
//               </Pie>
//               <Tooltip />
//             </PieChart>
//           </ResponsiveContainer>
//         </div>
//       </div>

//       {/* Progress Tracking */}
//       <div className='card'>
//         <h3 className='text-lg font-medium text-gray-900 mb-4'>
//           Прогресс по неделям
//         </h3>
//         <ResponsiveContainer width='100%' height={300}>
//           <LineChart data={weeklyProgress}>
//             <CartesianGrid strokeDasharray='3 3' />
//             <XAxis dataKey='week' />
//             <YAxis yAxisId='left' />
//             <YAxis yAxisId='right' orientation='right' />
//             <Tooltip />
//             <Legend />
//             <Line
//               yAxisId='left'
//               type='monotone'
//               dataKey='weight'
//               stroke='#3b82f6'
//               strokeWidth={2}
//               name='Вес (кг)'
//             />
//             <Line
//               yAxisId='right'
//               type='monotone'
//               dataKey='bodyFat'
//               stroke='#ef4444'
//               strokeWidth={2}
//               name='Жир (%)'
//             />
//           </LineChart>
//         </ResponsiveContainer>
//       </div>

//       {/* Summary Stats */}
//       <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
//         <div className='card text-center'>
//           <div className='text-2xl font-bold text-primary-600'>
//             {workoutData.reduce((sum, day) => sum + day.workouts, 0)}
//           </div>
//           <div className='text-sm text-gray-500'>Всего тренировок</div>
//         </div>

//         <div className='card text-center'>
//           <div className='text-2xl font-bold text-green-600'>
//             {Math.round(
//               (workoutData.reduce((sum, day) => sum + day.duration, 0) / 60) *
//                 10
//             ) / 10}
//           </div>
//           <div className='text-sm text-gray-500'>Часов тренировок</div>
//         </div>

//         <div className='card text-center'>
//           <div className='text-2xl font-bold text-orange-600'>
//             {workoutData.reduce((sum, day) => sum + day.calories, 0)}
//           </div>
//           <div className='text-sm text-gray-500'>Калорий сожжено</div>
//         </div>

//         <div className='card text-center'>
//           <div className='text-2xl font-bold text-purple-600'>
//             {Math.round(
//               (workoutData.reduce((sum, day) => sum + day.workouts, 0) /
//                 workoutData.length) *
//                 10
//             ) / 10}
//           </div>
//           <div className='text-sm text-gray-500'>Среднее в день</div>
//         </div>
//       </div>
//     </div>
//   );
// }
