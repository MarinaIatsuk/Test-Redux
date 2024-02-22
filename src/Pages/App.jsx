import { useState } from "react";
import { useDispatch } from "react-redux"; //это так называемый диспатч это хук. из него нужно достать функцию и положить ее в обычную переменную (dispatch)
import { setUsers } from "../store/slice/userReduser";
import "../style/App.css";
import User from "../Components/user";

function App() {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  async function getUserServer() {
    if (inputValue > 10 || isNaN(inputValue)) {
      return;
    }
    try {
      const resp = await fetch(
        `https://jsonplaceholder.typicode.com/users/${+inputValue}`
      );
      const data = await resp.json();
      dispatch(
        setUsers({
          nameUser: data.name,
          email: data.email,
          phone: data.phone,
          id: data.id,
        })
      );
      setInputValue('')
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <header>
        <input
          type="number"
          placeholder="enter id user"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={getUserServer}>Get user</button>
      </header>
      <main>
        <User/>
      </main>
    </>
  );
}

export default App;
