import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ProjectService } from '../../../data/service/project.service';
import { Project } from '../../../data/schema/project';
import { Observable } from 'rxjs';

import { MyModalComponent } from '../modal/my-modal.component';

@Component({
    selector: 'app-theme',
    templateUrl: './theme.component.html',
    styleUrls: ['./theme.component.scss']
})
export class ThemeComponent implements OnInit {

  projects$: Observable<Project[]>;

  constructor(
    private modalService: NgbModal,
    private projectService: ProjectService
  ) {}

  ngOnInit(): void {
    this.loadProjects();
  }

  loadProjects() {
    this.projects$ = this.projectService.getAll();
  }

  openMyModal() {
    const modalRef = this.modalService.open(MyModalComponent);
    modalRef.componentInstance.id = 1;
    modalRef.result.then((result) => {
      console.log(result);
    });
  }
}
