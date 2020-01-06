import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Project } from '../../../../data/schema/project';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-theme-cart',
  templateUrl: './theme-cart.component.html',
  styleUrls: ['./theme-cart.component.scss']
})
export class ThemeCartComponent {}
