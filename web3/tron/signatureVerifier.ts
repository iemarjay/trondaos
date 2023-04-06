import { SignatureVerifier } from 'spaces/adapters/signatureVerifier'
import TronWeb from 'tronweb';

export class TronSignatureVerifier extends SignatureVerifier {
  async verify(): Promise<boolean> {
    return TronWeb.trx.verifyMessageV2(this.message, this.signature) === this.signer;
  }
}
