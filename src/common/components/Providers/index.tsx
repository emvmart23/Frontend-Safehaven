import { Provider } from 'react-redux'
import { store } from '@/store/store'
import { ThemeProvider } from '@/context/theme'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google';


interface Props {
  children: React.ReactNode
}

function Providers({ children }: Props) {
  
  const client_id = import.meta.env.VITE_CLIENT_ID;
  
  return (
    <GoogleOAuthProvider clientId={client_id}>
      <BrowserRouter>
        <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
          <Provider store={store}>
            {children}
          </Provider>
        </ThemeProvider>
      </BrowserRouter>
    </GoogleOAuthProvider>
  )
}
export default Providers