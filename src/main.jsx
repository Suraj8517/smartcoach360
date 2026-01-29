import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import '@fontsource/dm-sans';       // default weight 400
import '@fontsource/dm-sans/500.css'; // medium
import '@fontsource/dm-sans/700.css'; // bold

import './App.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
