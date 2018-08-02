import { NgModule, ModuleWithProviders } from "@angular/core";
import { DataService } from "./data.service";

@NgModule({})
export class DataServiceModule {
    static forRoot():ModuleWithProviders {     
        return {
            ngModule: DataServiceModule,
            providers: [DataService]
        };
    }
}