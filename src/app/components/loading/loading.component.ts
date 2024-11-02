import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import Lottie from 'lottie-web';
import { LoadingService } from '../../service/loading.service';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.css'
})
export class LoadingComponent {
  
  loading$ = this.loadingService.loading$;

  options: AnimationOptions = {
    path: '/assets/loading.json' 
  };

  constructor(private elementRef: ElementRef, private loadingService: LoadingService) {}

}
