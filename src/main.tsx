import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/App/App'
import 'semantic-ui-css/semantic.min.css'
import './styles/reset.scss'
import { BrowserRouter } from 'react-router'


createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
