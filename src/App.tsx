import { APILoader } from '@uiw/react-amap';
import ChildMapContainer from './components/ChildMapContainer'

function App() {
  
  return (
    <APILoader akey="5bcebff0aaf864d7e963fa2c80b387f3">
      <ChildMapContainer zoomNum={16} />
    </APILoader>
  )
}

export default App
