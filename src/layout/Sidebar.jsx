import { LuPanelLeft, LuSquarePen, LuSearch } from "react-icons/lu";
import { PiOpenAiLogoLight } from "react-icons/pi";


function Sidebar() {
  return (
    <div className="bg-gray-600 fixed top-0 bottom-0 left-0">
      <div className="sidebar">
        <div className="mb-3">
          <div className="flex justify-between items-center border-b h-15 px-4">
            <a href="" className="max-w-10">
              <PiOpenAiLogoLight className="" />
            </a>
            <button>
              <LuPanelLeft />
            </button>
          </div>
        </div>

        <div className="px-3">
          <div className="flex items-center gap-3 p-4 hover:bg-amber-50 rounded h-5 w-full">
            <LuSquarePen />
            <div>New Chat</div>
          </div>
        </div>
        <div className="px-3">
          <div className="flex items-center gap-3 p-4 hover:bg-amber-50 rounded h-5 w-full">
            <LuSearch />
            <div>Search Chat</div>
          </div>
        </div>
        <div className="px-3">
          <div className="flex items-center gap-3 p-4 hover:bg-amber-50 rounded h-5 w-full">
            <LuSquarePen />
            <div>New Chat</div>
          </div>
        </div>
        <div className="px-3">
          <div className="flex items-center gap-3 p-4 hover:bg-amber-50 rounded h-5 w-full">
            <LuSquarePen />
            <div>New Chat</div>
          </div>
        </div>
        <div className="px-3">
          <div className="flex items-center gap-3 p-4 hover:bg-amber-50 rounded h-5 w-full">
            <LuSquarePen />
            <div>New Chat</div>
          </div>
        </div>
        <div className="px-3">
          <div className="flex items-center gap-3 p-4 hover:bg-amber-50 rounded h-5 w-full">
            <LuSquarePen />
            <div>New Chat</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;