import { Heading } from './components/Heading';

import './styles/gloval.css';
import './styles/theme.css';

export function App() {
  console.log('Oi');

  return (
    <>
      <Heading attr={123} attr2='String'>
        Ola Mundo Props 1
      </Heading>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
        facere quo ad recusandae nam autem excepturi aliquam, ex velit enim
        tempora, ipsam voluptate veritatis provident officia vitae earum magnam
        minima!
      </p>
    </>
  );
}
