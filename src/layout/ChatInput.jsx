import { LuMessageCircleDashed, LuUserRoundPlus, LuSparkle, LuChevronDown, LuPlus } from "react-icons/lu";
import { HiOutlineMicrophone } from "react-icons/hi";
function ChatInput() {
  return (
    <>
      <nav className="fixed top-0 right-0 left-75">
        <div className=" px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <button className="flex items-center hover:bg-gray-700">
                ChatGPT
                <LuChevronDown />
              </button>
              <button className="flex items-center hover:bg-gray-700">
                <LuSparkle />
                Get Plus
              </button>
            </div>
            <div className="flex items-center gap-3 ">
              <LuUserRoundPlus className="hover:bg-gray-700" />
              <LuMessageCircleDashed className="hover:bg-gray-700" />
            </div>
          </div>
        </div>
      </nav>

      <div>
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center">
            <div className="">
              <h1 className="text-3xl mb-6 text-center">
                What are you working on?
              </h1>
              <div className="w-lg flex rounded-full p-3 gap-4">
                <button className="hover:bg-gray-500">
                  <LuPlus />
                </button>
                <input placeholder="Ask anything" type="text" className="w-full" />
                <button>
                  <HiOutlineMicrophone />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ChatInput;