import { Outlet } from 'react-router-dom';
import Header from './Header';

export default function MainLayout() {
  return (
    <div className='container'>
      <div style={{ width: '100%'}}>
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
