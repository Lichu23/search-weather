import { createRoot } from 'react-dom/client'
import { WeatherProvider } from './context/context.tsx'
import './index.css'
import Weather from './views/Weather/Weather.tsx'

createRoot(document.getElementById('root')!).render(
  <WeatherProvider>
    <Weather />
  </WeatherProvider>,
)
