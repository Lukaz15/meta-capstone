import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { SectionProvider } from './context/SectionContext.tsx'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(

  <StrictMode>
    <SectionProvider>
      <App />
    </SectionProvider>
  </StrictMode>
)
