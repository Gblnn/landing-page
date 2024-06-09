import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ThemeProvider } from './components/theme-provider.tsx'
import './styles/style.css'
import './styles/utils.css'
import '../app/globals.css'

ReactDOM.createRoot(document.getElementById('root')!).render(

  
    <ThemeProvider defaultTheme='system'>
      <App />
    </ThemeProvider>
    
  
)
