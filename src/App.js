import logo from './logo.svg';
import './App.css';
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import { router } from './routers/router';


function App() {
  return (
    <div className="App">
     <Toaster
  position="top-center"
  reverseOrder={false}
/>
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
