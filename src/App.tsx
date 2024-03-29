import { ToastContainer } from 'react-toastify'
import useRouteElements from './useRouteElements'
import 'react-toastify/dist/ReactToastify.css'
function App() {
  const routeElements = useRouteElements()
  return (
    <>
      {routeElements}
      <ToastContainer theme='dark' />
    </>
  )
}

export default App
