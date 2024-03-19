import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'nx run ng-deep-drive:serve:development',
        production: 'nx run ng-deep-drive:serve:production',
      },
      ciWebServerCommand: 'nx run ng-deep-drive:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
