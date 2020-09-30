/**
 *
 * Asynchronously loads the component for MainNav
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
