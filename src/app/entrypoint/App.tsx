import { AppRouter } from '../routes/AppRouter';
import { QueryProvider, RouterProvider } from './providers';

function App() {
  return (
    <QueryProvider>
      <RouterProvider>
        <div className='bg-gray-400 '>
          <div className='w-7xl mx-auto py-10 h-screen'>
            <AppRouter />
          </div>
        </div>
      </RouterProvider>
    </QueryProvider>
  );
}

export default App;
