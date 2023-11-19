import './style/index.scss'
import React from 'react'
import App from './App.tsx'
import ReactDOM from 'react-dom/client'
import queryClient from './queryClient.ts'
import { QueryClientProvider } from '@tanstack/react-query'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </QueryClientProvider>,
)
