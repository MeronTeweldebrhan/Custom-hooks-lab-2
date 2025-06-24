import  { useState} from "react";
import useDebounce from "./../hooks/useDebounce";

function DebounceSearchDemo() {
  const [input, setInput] = useState("meron");
  const [delay, setDelay] = useState(500);
  const debouncedInput = useDebounce(input, delay);

  

  return (
    <div className="max-w-xl mx-auto my-6 p-6 border rounded-lg font-sans">
      <h3 className="text-center text-lg font-bold mb-4">Debounce Search Demo</h3>

      <div className="mb-4">
        <label htmlFor="delayInput" className="mr-2 font-medium">
          Debounce Delay (ms):
        </label>
        <input
          id="delayInput"
          type="number"
          min="0"
          step="100"
          value={delay}
          onChange={(e) => setDelay((e.target.value))}
          className="border p-2 w-24 rounded"
        />
      </div>

      <input
        type="text"
        placeholder="Type to search..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full border p-3 rounded mb-4"
      />

      <div className="mb-2">
        <h2 className="font-bold">Current Input:{input}</h2> 
      </div>
      <div className="mb-4 italic">
        <h3 className="font-bold">Debounced Value (after {delay}ms): {debouncedInput}</h3> 
      </div>
    </div>
  );
}

export default DebounceSearchDemo;
