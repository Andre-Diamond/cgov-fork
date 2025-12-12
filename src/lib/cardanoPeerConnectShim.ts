/* Shim module to provide ESM-style named exports for
 * `@fabianbormann/cardano-peer-connect`, which is packaged as a UMD/CJS bundle.
 * This allows libraries like `@meshsdk/react` to `import { DAppPeerConnect }` safely.
 */

// Import the actual bundled implementation directly from dist to avoid
// aliasing loops on the bare package name.
import * as pkg from "@fabianbormann/cardano-peer-connect/dist/index.js";

// The upstream package does not ship precise runtime types; treat it as unknown
type CardanoPeerConnectModule = {
  DAppPeerConnect?: unknown;
  CardanoPeerConnect?: unknown;
  AutoConnectHelper?: unknown;
  PeerConnectIdenticon?: unknown;
  ExperimentalContainer?: unknown;
  default?: {
    DAppPeerConnect?: unknown;
    CardanoPeerConnect?: unknown;
    AutoConnectHelper?: unknown;
    PeerConnectIdenticon?: unknown;
    ExperimentalContainer?: unknown;
  };
};

const mod = pkg as CardanoPeerConnectModule;

// Re-export the expected symbols as true ES module named exports
// so `import { DAppPeerConnect } from "@fabianbormann/cardano-peer-connect"` works.
export const DAppPeerConnect = mod.DAppPeerConnect ?? mod.default?.DAppPeerConnect;
export const CardanoPeerConnect = mod.CardanoPeerConnect ?? mod.default?.CardanoPeerConnect;
export const AutoConnectHelper = mod.AutoConnectHelper ?? mod.default?.AutoConnectHelper;
export const PeerConnectIdenticon =
  mod.PeerConnectIdenticon ?? mod.default?.PeerConnectIdenticon;
export const ExperimentalContainer =
  mod.ExperimentalContainer ?? mod.default?.ExperimentalContainer;
