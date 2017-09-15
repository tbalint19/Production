export class ConfirmRequest {

  confirmationCode: string;

  isValid(){
      return this.confirmationCode.length > 19;
  }

}
