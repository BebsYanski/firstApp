const ErrorExample = () => {
  let count = 0;
  const displayCount = () => {
    count++
    console.log(count);
  }
  return (
    <>
    
    <h2>{count} useState error example</h2>

    <button className="btn" type="button" onClick={displayCount}>Count++</button>
    </>
)
};

export default ErrorExample;
