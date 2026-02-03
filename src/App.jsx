import ChatInput from "./layout/ChatInput";
import Sidebar from "./layout/Sidebar";


function App() {
  return (
    <div className="flex flex-row items-center bg-gray-800 text-white h-screen relative">
      <Sidebar />
      <main className="flex-1 relative">
        <ChatInput />
      </main>
    </div>
  );
}

export default App;