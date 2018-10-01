import { NgModule } from '@angular/core';

import { ArgSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [ArgSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [ArgSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class ArgSharedCommonModule {}
