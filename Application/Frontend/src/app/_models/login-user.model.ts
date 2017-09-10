export class LoginUser {

  identification: string;
  password: string;

  identificationIsValid(){
      let usernamePattern = /^([a-zA-Z0-9_-]){10,25}$/;
      let emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return this.identification != undefined && (this.identification.match(usernamePattern) || this.identification.match(emailPattern));
  }

  passwordIsValid(){
      let passwordPattern = /^([a-zA-Z0-9_-]){10,25}$/;
      return this.password != undefined && this.password.match(passwordPattern);
  }

  reset(){

  }

  dataIsValid(){
      return (
          this.identificationIsValid() &&
          this.passwordIsValid()
      );
  }

}
