import {
  ArrowTrendingUpIcon,
  ChartBarIcon,
  ClockIcon,
  FireIcon,
  PlusIcon,
} from '@heroicons/react/24/outline';
import { eachDayOfInterval, endOfWeek, format, startOfWeek } from 'date-fns';
import { ru } from 'date-fns/locale';
import { useState } from 'react';

export default function Dashboard() {
  const [currentDate] = useState(new Date());

  // Генерируем дни недели
  const weekDays = eachDayOfInterval({
    start: startOfWeek(currentDate, { locale: ru }),
    end: endOfWeek(currentDate, { locale: ru }),
  });

  // Моковые данные для демонстрации
  const stats = {
    totalWorkouts: 24,
    thisWeek: 3,
    totalTime: 18.5,
    caloriesBurned: 1240,
    streak: 5,
  };

  const recentWorkouts = [
    {
      id: 1,
      name: 'Силовая тренировка',
      date: '2024-01-15',
      duration: 45,
      calories: 320,
    },
    { id: 2, name: 'Кардио', date: '2024-01-14', duration: 30, calories: 280 },
    { id: 3, name: 'Йога', date: '2024-01-13', duration: 60, calories: 180 },
  ];

  return (
    <div className='space-y-6'>
      {/* Header */}
      <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between'>
        <div>
          <h1 className='text-2xl font-bold text-gray-900'>Дашборд</h1>
          <p className='mt-1 text-sm text-gray-500'>
            {format(currentDate, 'EEEE, d MMMM yyyy', { locale: ru })}
          </p>
        </div>
        <div className='mt-4 sm:mt-0'>
          <button className='btn-primary flex items-center'>
            <PlusIcon className='h-5 w-5 mr-2' />
            Новая тренировка
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
        <div className='card'>
          <div className='flex items-center'>
            <div className='flex-shrink-0'>
              <FireIcon className='h-8 w-8 text-orange-500' />
            </div>
            <div className='ml-4'>
              <p className='text-sm font-medium text-gray-500'>
                Всего тренировок
              </p>
              <p className='text-2xl font-bold text-gray-900'>
                {stats.totalWorkouts}
              </p>
            </div>
          </div>
        </div>

        <div className='card'>
          <div className='flex items-center'>
            <div className='flex-shrink-0'>
              <ClockIcon className='h-8 w-8 text-blue-500' />
            </div>
            <div className='ml-4'>
              <p className='text-sm font-medium text-gray-500'>
                Время тренировок
              </p>
              <p className='text-2xl font-bold text-gray-900'>
                {stats.totalTime}ч
              </p>
            </div>
          </div>
        </div>

        <div className='card'>
          <div className='flex items-center'>
            <div className='flex-shrink-0'>
              <ChartBarIcon className='h-8 w-8 text-green-500' />
            </div>
            <div className='ml-4'>
              <p className='text-sm font-medium text-gray-500'>Калории</p>
              <p className='text-2xl font-bold text-gray-900'>
                {stats.caloriesBurned}
              </p>
            </div>
          </div>
        </div>

        <div className='card'>
          <div className='flex items-center'>
            <div className='flex-shrink-0'>
              <ArrowTrendingUpIcon className='h-8 w-8 text-purple-500' />
            </div>
            <div className='ml-4'>
              <p className='text-sm font-medium text-gray-500'>Серия дней</p>
              <p className='text-2xl font-bold text-gray-900'>{stats.streak}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Weekly Activity */}
      <div className='card'>
        <h3 className='text-lg font-medium text-gray-900 mb-4'>
          Активность на неделе
        </h3>
        <div className='grid grid-cols-7 gap-2'>
          {weekDays.map((day, index) => (
            <div key={index} className='text-center'>
              <div className='text-xs text-gray-500 mb-1'>
                {format(day, 'EEE', { locale: ru })}
              </div>
              <div className='text-sm font-medium text-gray-900 mb-1'>
                {format(day, 'd')}
              </div>
              <div
                className={`h-8 rounded ${
                  index < 3 ? 'bg-primary-500' : 'bg-gray-200'
                }`}
              ></div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Workouts */}
      <div className='card'>
        <div className='flex items-center justify-between mb-4'>
          <h3 className='text-lg font-medium text-gray-900'>
            Последние тренировки
          </h3>
          <button className='text-sm text-primary-600 hover:text-primary-700'>
            Посмотреть все
          </button>
        </div>
        <div className='space-y-3'>
          {recentWorkouts.map(workout => (
            <div
              key={workout.id}
              className='flex items-center justify-between p-3 bg-gray-50 rounded-lg'
            >
              <div>
                <h4 className='font-medium text-gray-900'>{workout.name}</h4>
                <p className='text-sm text-gray-500'>
                  {format(new Date(workout.date), 'd MMMM', { locale: ru })}
                </p>
              </div>
              <div className='text-right'>
                <p className='text-sm font-medium text-gray-900'>
                  {workout.duration} мин
                </p>
                <p className='text-sm text-gray-500'>{workout.calories} ккал</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
