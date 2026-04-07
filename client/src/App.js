import Navbar from './components/Navbar';
import CreateServer from './pages/CreateServer/CreateServer';
import './App.css';

function App() {
  return (
    <div className="App" style={{ backgroundColor: '#0f0f1a', minHeight: '100vh', color: 'white' }}>
      <Navbar />
      <div style={{ padding: '1rem', textAlign: 'center' }}>
        <h1>Welcome to KevinServ!</h1>
        <p style={{ color: '#a0a0bd' }}>Minecraft Server Host.</p>
      </div>
      <CreateServer />
    </div>
  );
}

export default App;
