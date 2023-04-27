function App({ date }) {
    function updateCount(byValue) {
      const [currentDate, setCurrentDate] = useState(new Date());
      const [count, setCount] = useState(0);
      setCount(count + byValue);
      setCurrentDate(new Date());
    }
   
    function formatDate() {
      const hour = currentDate.getHours();
      const minute = currentDate.getMinutes();
      const second = currentDate.getSeconds();
   
      return `${hour}:${minute}:${second}`;
    }
   
    const prettyDate = formatDate();
   
    return (
      <div className="App">
        <h2>
          You clicked {count} times, last time at {prettyDate}!
        </h2>
   
        <button onClick={() => updateCount(-1)}>Decrement</button>
        <button onClick={() => updateCount(1)}>Increment</button>
      </div>
    );
   }