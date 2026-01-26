import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Globe, LibraryBig, LucideAngularModule, Sigma, Sprout } from 'lucide-angular';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LucideAngularModule.pick({
      Sigma,
      LibraryBig,
      Sprout,
      Globe
    }),
  ]
})
export class SharedModule { }
