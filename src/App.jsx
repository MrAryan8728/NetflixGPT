import Body from './Components/Body'
import { Provider } from 'react-redux'
import { store } from '../src/utils/store'

function App() {

  return (
    <Provider store={store}>
      <Body />
    </Provider>
  )
}

export default App
