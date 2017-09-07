export class SignupUser {

  username: string;
  usernameIsAvailable: boolean;
  email: string;
  emailIsAvailable: boolean;
  password: string;
  passwordAgain: string;
  inviter: string;

  constructor(){
      this.inviter = null;
      this.usernameIsAvailable = false;
      this.emailIsAvailable = false;
  }

  usernameIsValid(){
      let usernamePattern = /^([a-zA-Z0-9_-]){10,25}$/;
      return this.username != undefined && this.username.match(usernamePattern);
  }

  emailIsValid(){
      let emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return this.email != undefined && this.email.match(emailPattern);
  }

  inviterIsValid(){
    let usernamePattern = /^([a-zA-Z0-9_-]){10,25}$/;
    let emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return this.inviter != undefined && (this.inviter.match(usernamePattern) || this.inviter.match(emailPattern));
  }

  passwordIsValid(){
      let passwordPattern = /^([a-zA-Z0-9_-]){10,25}$/;
      return this.password != undefined && this.password.match(passwordPattern);
  }

  passwordMatches(){
      return this.password == this.passwordAgain;
  }

  dataIsValid(){
      return (
          this.usernameIsValid() &&
          this.emailIsValid() &&
          this.passwordIsValid() &&
          this.passwordMatches() &&
          this.usernameIsAvailable &&
          this.emailIsAvailable
      );
  }

}
