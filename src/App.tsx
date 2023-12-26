import DataFetching from "./components/DataFetching"
import './App.css'

function App() {
    const queryParameters = new URLSearchParams(window.location.search)
    const kol = parseInt(queryParameters.get("kol") || "-1")
    const cod = parseInt(queryParameters.get("cod") || "-1")


  return (
      <>
            <div>
              {kol != -1 ? (
                  <DataFetching key={kol} id={kol} cod={cod} />
          ) : (
              <h1>Hello World!</h1>
          )}
      </div>
    </>
  )
}

export default App
