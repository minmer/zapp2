import DataFetching from "./components/DataFetching"
import './App.css'

function App() {
    const queryParameters = new URLSearchParams(window.location.search)
    const kol = queryParameters.get("kol") 

  return (
      <>
          <div>
          {kol != null ? (
              <DataFetching />
          ) : (
              <h1>Hello World!</h1>
          )}
      </div>
    </>
  )
}

export default App
