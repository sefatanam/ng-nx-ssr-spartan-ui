import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { HlmAccordionContentDirective, HlmAccordionDirective, HlmAccordionIconDirective, HlmAccordionItemDirective, HlmAccordionModule, HlmAccordionTriggerDirective } from '@spartan-ng/ui-accordion-helm';
import { BrnAccordionContentComponent } from '@spartan-ng/ui-accordion-brain';
import { TablePreviewComponent } from "./spartan-table-preview.component";

import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmIconComponent } from '@spartan-ng/ui-icon-helm';
import { BrnContextMenuTriggerDirective, BrnMenuTriggerDirective } from '@spartan-ng/ui-menu-brain';
import {
  HlmMenuComponent,
  HlmMenuGroupComponent,
  HlmMenuItemCheckComponent,
  HlmMenuItemCheckboxDirective,
  HlmMenuItemDirective,
  HlmMenuItemIconDirective,
  HlmMenuItemRadioComponent,
  HlmMenuItemRadioDirective,
  HlmMenuItemSubIndicatorComponent,
  HlmMenuLabelComponent,
  HlmMenuSeparatorComponent,
  HlmMenuShortcutComponent,
  HlmSubMenuComponent,
} from '@spartan-ng/ui-menu-helm';

@Component({
    standalone: true,
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [NxWelcomeComponent, RouterModule, BrnAccordionContentComponent,
        HlmAccordionDirective,
        HlmAccordionItemDirective,
        HlmAccordionTriggerDirective,
        HlmAccordionContentDirective,
        HlmAccordionIconDirective,
        HlmIconComponent, TablePreviewComponent,
        BrnMenuTriggerDirective,
        BrnContextMenuTriggerDirective,
    
        HlmMenuComponent,
        HlmSubMenuComponent,
        HlmMenuItemDirective,
        HlmMenuItemSubIndicatorComponent,
        HlmMenuLabelComponent,
        HlmMenuShortcutComponent,
        HlmMenuSeparatorComponent,
        HlmMenuItemIconDirective,
        HlmMenuItemCheckComponent,
        HlmMenuItemRadioComponent,
        HlmMenuGroupComponent,
    
        HlmButtonDirective,
        HlmIconComponent,
        HlmMenuItemCheckboxDirective,
        HlmMenuItemRadioDirective,]
})
export class AppComponent {
  title = 'ng-deep-drive';
}
