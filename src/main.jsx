import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import { Provider } from 'react-redux';
// import store from './components/TodoApp/store.js';
import App from './App.jsx'
import './index.css'
import '../src/App.css'; 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
// ReactDOM.render(
//   <Provider store={store}>
//     <App/>
//   </Provider>
//   document.getElementById('root')
// );