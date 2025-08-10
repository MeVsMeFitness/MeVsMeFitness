// nhost.ts
// Utility to initialize Nhost client
import { NhostClient } from '@nhost/nhost-js';

const nhost = new NhostClient({
  subdomain: 'ddyogfuqoxnqogubdsab',
  region: 'us-west-2'
});

export default nhost;
