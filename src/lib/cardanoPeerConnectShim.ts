/* Shim module to provide ESM-style named exports for
 * `@fabianbormann/cardano-peer-connect`, which is packaged as a UMD/CJS bundle.
 * This allows libraries like `@meshsdk/react` to `import { DAppPeerConnect }` safely.
 */

// eslint-disable-next-line @typescript-eslint/no-var-requires, @typescript-eslint/no-unsafe-assignment
const pkg = require("@fabianbormann/cardano-peer-connect");

// Re-export the expected symbols as true ES module named exports
// so `import { DAppPeerConnect } from "@fabianbormann/cardano-peer-connect"` works.
export const DAppPeerConnect = pkg.DAppPeerConnect ?? pkg.default?.DAppPeerConnect;
export const CardanoPeerConnect = pkg.CardanoPeerConnect ?? pkg.default?.CardanoPeerConnect;
export const AutoConnectHelper = pkg.AutoConnectHelper ?? pkg.default?.AutoConnectHelper;
export const PeerConnectIdenticon =
  pkg.PeerConnectIdenticon ?? pkg.default?.PeerConnectIdenticon;
export const ExperimentalContainer =
  pkg.ExperimentalContainer ?? pkg.default?.ExperimentalContainer;
