import ComgateBase from "../core/comgate-base";
import { PaymentProviderKeys } from "../types";

class ComgateBankProviderService extends ComgateBase {
  static identifier = PaymentProviderKeys.COMGATE_BANK;

  constructor(_, options) {
    super(_, options);
  }
}

export default ComgateBankProviderService;
