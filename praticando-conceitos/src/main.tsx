import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import store from './store/items.redux.tsx';
import { App } from './App.tsx'
import './global.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <App />
  </Provider>,
)