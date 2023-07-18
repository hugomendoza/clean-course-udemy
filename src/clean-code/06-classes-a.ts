(() => {

  //**  No aplicar el principio de responsabilidad única  **

  type Gender = 'M' | 'F';

  // class Person {
  //   public name: string;
  //   public gender: Gender;
  //   public birthdate: Date;

  //   constructor(name: string, gender: Gender, birthdate: Date) {
  //     this.name = name;
  //     this.gender = gender;
  //     this.birthdate = birthdate;
  //   }
  // }

  class Person {
    constructor(
      public name: string,
      public gender: Gender,
      public birthdate: Date,
    ){}
  }
  
  class User extends Person {
    public lastAccess: Date;
    constructor(
      public email: string,
      public role: string,
      name: string,
      gender: Gender,
      birthdate: Date
    ) {
      super(name, gender, birthdate);
      this.lastAccess = new Date();
    }

    checkCredentials() {
      return true;
    }
  }

  class UserSettings extends User {
    constructor(
      public workingDirectory: string,
      public lastOpenFolder: string,
      email: string,
      role: string,
      name: string,
      gender: Gender,
      birthdate: Date
    ){
      super(email, role, name, gender, birthdate);
    }
  }

  const userSettings = new UserSettings(
    '/home',
    '/home',
    '2B6eU@example.com',
    'admin',
    'John Doe',
    'M',
    new Date('1990-01-01')
  );

  console.log({ userSettings });

})();