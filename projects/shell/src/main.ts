// *) Static Federation from Webpack - uncomment below
// import('./bootstrap')
// .catch(err => console.error(err));

// **) Dynamic Federation from Angular - uncomment below
// ***) Load remote entry up front to avoid dynamic lazy loading
import { loadRemoteEntry } from '@angular-architects/module-federation';
import { environment as env } from './environments/environment';

console.log("MFE1 Remote Entry: ", env.mfe1_remote_entry);

loadRemoteEntry(env.mfe1_remote_entry, 'mfe1')
  .catch((err) => console.error(err))
  .then((_) => import('./bootstrap'))
  .catch((err) => console.error(err));
