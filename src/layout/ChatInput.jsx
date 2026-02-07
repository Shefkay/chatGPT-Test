import { LuMessageCircleDashed, LuUserRoundPlus, LuSparkle, LuChevronDown, LuPlus } from "react-icons/lu";
import { HiOutlineMicrophone } from "react-icons/hi";
function ChatInput() {
  return (
    <>
      <nav className="fixed top-0 right-0 left-75">
        <div className=" px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <button className="flex items-center hover:bg-gray-700 p-2 rounded-lg">
                ChatGPT
                <LuChevronDown className="ml-2" />
              </button>
              <button className="flex items-center bg-gray-700 p-2 rounded-full hover:opacity-80">
                <LuSparkle className="mr-2" />
                Get Plus
              </button>
            </div>
            <div className="flex items-center gap-3">
              <button className="hover:bg-gray-700 w-10 h-10 rounded-full flex justify-center items-center">
                <LuUserRoundPlus className="" />
              </button>
              <button className="hover:bg-gray-700 w-10 h-10 rounded-full flex justify-center items-center">
                <LuMessageCircleDashed className="hover:bg-gray-700" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div>
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center h-screen">
            <div className="">
              <h1 className="text-3xl mb-6 text-center">
                What are you working on?
              </h1>
              <div className="w-lg flex rounded-full p-2 gap-4 bg-[#303030] border border-[#A6A6A6]">
                <button className="hover:bg-[#7e7e7e] w-8 h-7 rounded-full flex items-center justify-center ">
                  <LuPlus />
                </button>
                <input placeholder="Ask anything" type="text" className="w-full focus-within:outline-0" />
                <button className="hover:bg-[#7e7e7e] w-8 h-7 rounded-full flex items-center justify-center ">
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