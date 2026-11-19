function Button({ count, setCount }) {
    return (
      <button
        type="button"
        className="counter"
        onClick={() => setCount((count) => count + 1)}
      >
        Count is {count}
      </button>
    )
  }
  
  export default Button