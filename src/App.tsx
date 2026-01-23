import { TimerIcon } from 'lucide-react';
import './styles/global.css';
import './styles/theme.css';

export function App() {
  console.log('Oi');

  return (
    <>
      <div className='container'>
        <div className='content'>
          <section>
            <TimerIcon />
            Chronus
          </section>
        </div>
      </div>

      <div className='container'>
        <div className='content'>
          <section>MENU</section>
        </div>
      </div>

      <div className='container'>
        <div className='content'>
          <section>FORM</section>
        </div>
      </div>

      <div className='container'>
        <div className='content'>
          <section>FOOTER</section>
        </div>
      </div>
    </>
  );
}
