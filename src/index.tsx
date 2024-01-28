import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'App';
import 'index.css';
import reportWebVitals from 'reportWebVitals';

// Importing reactfire providers
import { AuthProvider, FirebaseAppProvider } from 'reactfire';
import { auth, firebaseApp } from 'providers/firebase';

// Redux
// import { Provider } from 'react-redux';
// import store from 'store/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseApp={firebaseApp}>
      <AuthProvider sdk={auth}>
        {/* <Provider store={store}> */}
        <App />
        {/* </Provider> */}
      </AuthProvider>
    </FirebaseAppProvider>
  </React.StrictMode>
);

reportWebVitals();
