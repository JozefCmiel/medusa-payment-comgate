import ComgateBase from "../core/comgate-base";
import { PaymentProviderKeys } from "../types";

class ComgateCardProviderService extends ComgateBase {
  static identifier = PaymentProviderKeys.COMGATE_CARD;

  constructor(_, options) {
    console.log("Starting ComgateCardProviderService");
    super(_, options);
  }
}

export default ComgateCardProviderService;
