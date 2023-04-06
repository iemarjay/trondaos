import { MetamaskSignatureVerifier } from 'web3/waves/signatureVerifier'
import { SignatureVerifier, SignatureVerifierOptions, SignedMessageMode } from 'spaces/adapters/signatureVerifier'
import {TronSignatureVerifier} from "../web3/tron/signatureVerifier";

export function makeVerifierFromInput(options: SignatureVerifierOptions): SignatureVerifier {
  switch (options.mode) {
    case SignedMessageMode.METAMASK:
      return new MetamaskSignatureVerifier(options);
    case SignedMessageMode.TRON:
      return new TronSignatureVerifier(options);
  }
}
