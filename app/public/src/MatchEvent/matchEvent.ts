export class MatchEvent {
  heading: string = 'Welcome to Aurelia!';
  firstName: string = 'John';
  lastName: string = 'Doe';
  message: string = 'Hello from my királyságos aurelia!';
  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  submit(): void {
    alert(`Welcome, ${this.fullName}!`);
  }

  changeMessage(): void {
      this.message = 'changed 56';
  }
}
