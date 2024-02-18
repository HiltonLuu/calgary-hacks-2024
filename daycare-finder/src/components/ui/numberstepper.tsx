export default function NumericStepper({
  value,
  setValue,
  min = -Infinity,
  max = Infinity,
}) {
  const increment = () => {
    setValue((prevValue) => Math.min(prevValue + 1, max));
  };

  const decrement = () => {
    setValue((prevValue) => Math.max(prevValue - 1, min));
  };

  return (
    <div className="flex items-center">
      <button
        className="px-2 py-1 text-black border-2 focus:outline-none w-8 h-8 rounded-full flex items-center justify-center"
        onClick={decrement}
        disabled={value <= min}
      >
        -
      </button>
      <input
        type="text"
        className="w-12 text-center border-none"
        value={value}
        readOnly
      />
      <button
        className="px-2 py-1 text-black border-2 focus:outline-none w-8 h-8 rounded-full flex items-center justify-center"
        onClick={increment}
        disabled={value >= max}
      >
        +
      </button>
    </div>
  );
}
