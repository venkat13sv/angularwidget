import { BrowserModule } from '@angular/platform-browser';
import { NgModule,Injector  } from '@angular/core';

import { CaseService } from './case-search/case.service';
import { HttpClientModule } from '@angular/common/http';
import { createCustomElement } from '@angular/elements';

import { CaseSearchComponent } from './case-search/case-search.component';

@NgModule({
  declarations: [

    CaseSearchComponent
  ],
  imports: [
    BrowserModule,
	HttpClientModule
  ],
   providers: [CaseService],
  bootstrap: [CaseSearchComponent]
})
export class AppModule {
	  constructor(private injector: Injector) {

  }

  ngDoBootstrap() {
    const customElement = createCustomElement(CaseSearchComponent, { injector:this.injector });
    customElements.define('case-search', customElement);
  }
}
