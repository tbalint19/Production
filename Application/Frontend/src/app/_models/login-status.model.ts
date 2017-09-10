export class LoginStatus {

  pendingLogin: boolean;

  constructor(){
      this.pendingLogin = false;
  }

  reset(){
      this.pendingLogin = false;
  }

}
