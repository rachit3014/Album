import Album from "./Component/Album";
import { store } from "./redux/store";
import { Provider } from "react-redux";
function App() {
  return (
    <Provider store={store}>
       <Album/>
    
    </Provider>
  )

}

export default App;
