// *)
// import('./bootstrap')
// .catch(err => console.error(err));

// **) Dynamic Federation from Angular - uncomment below
// ***) Load remote entry up front to avoid dynamic lazy loading
import { loadRemoteEntry } from '@angular-architects/module-federation';
import { environment as env } from './environments/environment';

const remoteEntryMfe1 = env.vars.mfe1_remote_entry[env.production ? 'prod' : 'dev'];

loadRemoteEntry(remoteEntryMfe1, 'mfe1')
  .catch((err) => console.error(err))
  .then((_) => import('./bootstrap'))
  .catch((err) => console.error(err));
