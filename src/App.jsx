import ChatInput from "./layout/ChatInput";
import Sidebar from "./layout/Sidebar";


function App() {
  return (
    <div className="bg-gray-800 text-white h-screen relative">
      <Sidebar />

      <ChatInput />

    </div>
  );
}

export default App;