import {EditorContainer} from './containers/editor/Editor.container.tsx'
import {AuthContainer} from './containers/auth/Auth.container.tsx'

function App() {
  return (
    <div>
        <AuthContainer/>
        <EditorContainer />
    </div>
  )
}

export default App