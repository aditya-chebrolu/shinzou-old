import React, { useState } from 'react';
import './App.scss';
import Intro from './pages/intro';
import Nav from './components/navigation/Nav';

export const PageContext = React.createContext({});

// function App() {
//   const [page, setPage] = useState(1);
//   const sections = [useRef(), useRef(), useRef(), useRef()];
//   const changePage = (page) => {
//     switch (page) {
//       case 1:
//         sections[0].current.scrollIntoView({ behavior: 'smooth' });
//         break;
//       case 2:
//         sections[1].current.scrollIntoView({ behavior: 'smooth' });
//         break;
//       case 3:
//         sections[2].current.scrollIntoView({ behavior: 'smooth' });
//         break;
//       case 4:
//         sections[3].current.scrollIntoView({ behavior: 'smooth' });
//         break;
//       default:
//       // sections[0].current.scrollIntoView({ behavior: 'smooth' });
//     }
//     console.log(sections);
//     setPage(page);
//   };

//   return (
//     <div className='App'>
//       <PageContext.Provider value={{ page, changePage }}>
//         <Title />
//         <Nav />
//         <div className='section' ref={sections[0]}>
//           <Name />
//         </div>
//         <div className='section' ref={sections[1]}>
//           <div style={{ textAlign: 'center' }}>2</div>
//         </div>
//         <div className='section' ref={sections[2]}>
//           <div style={{ textAlign: 'center' }}>3</div>
//         </div>
//         <div className='section' ref={sections[3]}>
//           <div style={{ textAlign: 'center' }}>4</div>
//         </div>
//       </PageContext.Provider>
//     </div>
//   );
// }

function App() {
  const [page, setPage] = useState(1);
  //   const sections = [useRef(), useRef(), useRef(), useRef()];
  //   const changePage = (page) => {
  //     switch (page) {
  //       case 1:
  //         sections[0].current.scrollIntoView({ behavior: 'smooth' });
  //         break;
  //       case 2:
  //         sections[1].current.scrollIntoView({ behavior: 'smooth' });
  //         break;
  //       case 3:
  //         sections[2].current.scrollIntoView({ behavior: 'smooth' });
  //         break;
  //       case 4:
  //         sections[3].current.scrollIntoView({ behavior: 'smooth' });
  //         break;
  //       default:
  //       // sections[0].current.scrollIntoView({ behavior: 'smooth' });
  //     }
  //     console.log(sections);
  //     setPage(page);
  //   };
  return (
    <div className='App'>
      <PageContext.Provider value={{ page }}>
        <Intro />
        <Intro />
        <Nav />
      </PageContext.Provider>
    </div>
  );
}

export default App;
