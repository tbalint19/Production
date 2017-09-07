export class SignupStatus {

  usernameIsChecked: boolean;
  emailIsChecked: boolean;
  inviterIsChecked: boolean;
  inviterIsFound: boolean;
  pendingSignup: boolean;

  constructor(){
      this.usernameIsChecked = false;
      this.emailIsChecked = false;
      this.inviterIsChecked = false;
      this.inviterIsFound = false;
      this.pendingSignup = false;
  }

  reset(){
      this.usernameIsChecked = false;
      this.emailIsChecked = false;
      this.inviterIsChecked = false;
      this.inviterIsFound = false;
      this.pendingSignup = false;
  }

  noCheckActive(){
      return !this.usernameIsChecked && !this.emailIsChecked && !this.inviterIsChecked;
  }

}
