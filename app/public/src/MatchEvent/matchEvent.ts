import {MatchTeam} from './../Model/MatchTeam';
import {EventGuess} from './../Model/EventGuess';
import {Domain} from './../SHARED_SRC/Domain/EventType';

export class MatchEvent {
  heading: string = 'Welcome to Aurelia!';
  firstName: string = 'John';
  lastName: string = 'Doe';
  message: string = 'Hello from my királyságos aurelia!';
  
  team1: MatchTeam = new MatchTeam('SZAC');
  team2: MatchTeam = new MatchTeam('Szentendre');
  
  get guesses(): EventGuess[] {
    
    return [
        new EventGuess('SZAC', 'Dörfi György', 6, Domain.EventType.LongGoal),
        new EventGuess('SZAC', 'Dörfi György', 6, Domain.EventType.PenaltyGoal)
    ];
  }
  
  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  submit(): void {
    
    alert(`Welcome, ${this.fullName}!`);
  }

  changeMessage(): void {
      this.message = 'changed 5336';
  }
}
