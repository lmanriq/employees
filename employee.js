class Employee {
  constructor(name) {
    this.name = name;
    this.personality = 'helpful';
    this.monthsOfEmployment = 0;
    this.onboarding = true;
    if (this.name.length < 6) {
      this.onCall = true;
    } else {
      this.onCall = false;
    }
  }

  work() {
    this.monthsOfEmployment += 4;
    if (this.monthsOfEmployment >= 6) {
      this.onboarding = false;
    }
  }
}

module.exports = Employee;
