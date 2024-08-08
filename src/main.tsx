import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import { App } from './App'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Router } from 'wouter'

const queryClient = new QueryClient()

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
