// *)
// import('./bootstrap')
// .catch(err => console.error(err));

// ***) Load remote entry up front to avoid dynamic lazy loading
import {loadRemoteEntry } from "@angular-architects/module-federation";

loadRemoteEntry('http://localhost:3000/remoteEntry.js', 'mfe1')
.catch(err => console.error(err))
loadRemoteEntry('https://lively-flower-04e21dc10.azurestaticapps.net/remoteEntry.js', 'mfe1')
.catch(err => console.error(err))
loadRemoteEntry('https://salmon-moss-0f41c3910.azurestaticapps.net/remoteEntry.js', 'mfe1')
.catch(err => console.error(err))
.then(_ => import('./bootstrap'))
.catch(err => console.error(err));
