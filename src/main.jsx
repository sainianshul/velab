import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Providers from './app/providers.jsx';

import 'primereact/resources/themes/lara-light-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

import './assets/styles/global.css';
import './assets/styles/primereact-overrides.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Providers />
  </StrictMode>
);
