import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './appModule/app.module';
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);
