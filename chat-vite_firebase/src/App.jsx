// import { useState } from "react";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <main className="min-h-screen flex bg-slate-100 items-center justify-center p-4">
      <div className="w-full max-w-xl bg-white rounded-2xl  shadow-lg p-6 border border-slate-200">
        <h1 className="text-2xl font-bold mb-4 text-center text-slate-800 ">
          Firebase Todo List
        </h1>
        <form className="flex gap-2 mb-4">
          <input
            type="text"
            className="flex-1 border border-slate-300 rounded-lg px-3 py-2 placeholder:text-slate-400 focus:outline-none focus:border-slate-400"
            placeholder="할 일을 입력하세요"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-xl hover:bg-blue-600"
          >
            Add Task
          </button>
        </form>
        {/* <ul>
          <li>Task 1</li>
          <li>Task 2</li>
          <li>Task 3</li>
        </ul> */}
      </div>
    </main>
  );
}

export default App;
