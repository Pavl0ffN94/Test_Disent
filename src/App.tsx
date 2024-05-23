import {Route, Routes} from 'react-router-dom';
import './App.css';
import {Details, HomePage, NotFound} from './page';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/:name' element={<Details />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
