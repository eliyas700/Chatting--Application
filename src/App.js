import "./App.css";
import { GrSend } from "react-icons/gr";
import { FaUserCircle } from "react-icons/fa";
function App() {
  return (
    <div className="h-[90vh] w-[95%] mx-auto flex justify-between ">
      <div className="w-[25%]"></div>
      <div className="w-[75%] border-2 relative">
        <h1 className="bg-primary text-white text-xl py-3 pl-3 flex  items-center">
          User <FaUserCircle size={34} className="ml-2" />{" "}
        </h1>

        <div className="border-2 absolute bottom-0 bg-[#7f8c8d] w-[100%] py-3 px-3">
          <form className="flex justify-between items-center">
            <input type="text" className="w-[90%] h-[40px]" />
            <button type="submit">
              <GrSend size={34} className="" />{" "}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
