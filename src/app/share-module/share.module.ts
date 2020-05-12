import { NgModule, ModuleWithProviders } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppInterceptorService } from './services/app-interceptor.service';
import { CommonModule } from '@angular/common';
import {
  ButtonsModule,
  CardsModule,
  CarouselModule,
  CheckboxModule,
  CollapseModule,
  NavbarModule,
  WavesModule,
  ModalModule,
  TooltipModule,
  PopoverModule,
  TableModule,
  InputsModule,
  IconsModule,
  ChartsModule,
} from 'angular-bootstrap-md';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  exports: [
    ButtonsModule,
    CardsModule,
    CarouselModule,
    CheckboxModule,
    CollapseModule,
    NavbarModule,
    WavesModule,
    ModalModule,
    TooltipModule,
    PopoverModule,
    TableModule,
    InputsModule,
    IconsModule,
    ChartsModule
  ]
})
export class ShareModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ShareModule,
      providers: [

        {
          provide: HTTP_INTERCEPTORS,
          useClass: AppInterceptorService,
          multi: true,
        },
      ],
    };
  }
}
