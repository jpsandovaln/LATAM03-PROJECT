class Main {
  constructor(value) {
    this.value = value;
  }

  evaluateAge() {
    if(this.value > 18) {
      console.info('Mayor de edad');
    } else {
      console.info('Menor de edad');
    }
  }
}

const main = new Main(15);
main.evaluateAge();
