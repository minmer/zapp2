import DataFetching from "./components/DataFetching"
import { useState} from 'react';
import './App.css'

function App() {
    const [koleda, setKoleda] = useState(-1);
    const queryParameters = new URLSearchParams(window.location.search)
    let kol = parseInt(queryParameters.get("kol") || "-1")
    const isClicked = () => {
        kol = kol + 1
        setKoleda(kol);
    }


  return (
      <>
          <button onClick={ isClicked}>CLick me</button>
            <div>
          {kol != null ? (
                  <DataFetching id={koleda} />
          ) : (
              <h1>Hello World!</h1>
          )}
      </div>
    </>
  )
}

export default App
