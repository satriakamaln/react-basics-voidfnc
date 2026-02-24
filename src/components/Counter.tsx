import useCounter from "../hooks/useCounter";

const Counter = () => {
    const { count, handleDecrement, handleIncrement, handleReset } =
        useCounter();
    return (
        <div
            style={{
                display: "flex",
                gap: "10px"
            }}
        >
            <button onClick={handleDecrement}>Kurang</button>
            <h1>{count}</h1>
            <button onClick={handleIncrement}>Tambah</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
};

export default Counter;
