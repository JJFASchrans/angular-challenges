import { Component } from '@angular/core';
import { HeavyComputationPipe } from './pipes/heavy-computation.pipe';

@Component({
  standalone: true,
  imports: [HeavyComputationPipe],
  selector: 'app-root',
  template: `
    @for (person of persons; track person; let index = $index) {
      {{ person | heavyComputation: index }}
    }
  `,
})
export class AppComponent {
  persons: string[] = ['toto', 'jack'];
}
