import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from '@components/Navbar';
import Sidebar from '@components/Sidebar';
import Dashboard from './pages/Dashboard';
import Portfolio from './pages/Portfolio';
import Notifications from './pages/Notifications';
import Notices from './pages/Notices';
import Auction from './pages/Auction';
import DataUpload from './pages/DataUpload';
import ControlPanel from './pages/ControlPanel';
import UserManagement from './pages/UserManagement';
import Permissions from './pages/Permissions';

const App = () => (
  <BrowserRouter>
    <div className="flex min-h-screen flex-col justify-center py-6 sm:py-12 bg-white">
      <Sidebar />
      <Navbar />
      <div className="p-3 overflow-auto mt-[1%] ml-60">
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/notices" element={<Notices />} />
          <Route path="/auction" element={<Auction />} />
          <Route path="/dataupload" element={<DataUpload />} />
          <Route path="/controlpanel" element={<ControlPanel />} />
          <Route path="/usermanagement" element={<UserManagement />} />
          <Route path="/permissions" element={<Permissions />} />
          <Route path="/*" element={<Portfolio />} />
        </Routes>
      </div>
    </div>
  </BrowserRouter>
);

export default App;
