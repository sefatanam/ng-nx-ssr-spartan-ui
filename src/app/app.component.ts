import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { HlmAccordionContentDirective, HlmAccordionDirective, HlmAccordionIconDirective, HlmAccordionItemDirective, HlmAccordionModule, HlmAccordionTriggerDirective } from '@spartan-ng/ui-accordion-helm';
import { HlmIconComponent } from '@spartan-ng/ui-icon-helm';
import { BrnAccordionContentComponent } from '@spartan-ng/ui-accordion-brain';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, BrnAccordionContentComponent,
    HlmAccordionDirective,
    HlmAccordionItemDirective,
    HlmAccordionTriggerDirective,
    HlmAccordionContentDirective,
    HlmAccordionIconDirective,
    HlmIconComponent,],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ng-deep-drive';
}
