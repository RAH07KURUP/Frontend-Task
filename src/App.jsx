
import Navbar from '@components/Navbar';
import Sidebar from '@components/Sidebar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Portfolio from './pages/Portfolio';

const features = [
  {
    title: 'npm run start',
    description: 'Run the React app in development mode with live reloading.',
  },
  {
    title: 'npm run build',
    description: 'Bundles the React app for deployment in production environment.',
  },
  {
    title: 'npm run inline',
    description: 'Inline all CSS and JS in a single minfied file.',
  },
];


const App = () => (
  <div className='flex min-h-screen flex-col justify-center py-6 sm:py-12  bg-white'>
    <Sidebar/><Navbar/>
    <Router>

    <div className="p-3 overflow-auto mt-[1%] ml-60">
      <Routes>
      <Route path="/" element={<Portfolio />} />
      </Routes>
    </div>
  
</Router>
  </div>
);

export default App;
