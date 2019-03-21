import { Component, OnInit } from '@angular/core';
import {PositionService} from '../data/position.service';
import {Position} from '../Position';
import {DataSource} from '@angular/cdk/table';
import {Observable} from 'rxjs/Observable';
import {AuthService} from '../auth.service';
import {MatDialog} from '@angular/material';
import {PostDialogComponent} from '../post-dialog/post-dialog.component';


@Component({
  selector: 'app-listaposition',
  templateUrl: './listaposition.component.html',
  styleUrls: ['./listaposition.component.css']
})

export class ListapositionComponent {
  constructor(public auth: AuthService, public dialog: MatDialog, private positionService: PositionService) {
  }

  displayedColumns = ['cod_position', 'prodotto', 'stato', 'data', 'delete'];
  dataSource = new PostDataSource(this.positionService);

  deletePost(id) {
    if (this.auth.isAuthenticated()) {
      this.positionService.deletePost(id);
      this.dataSource = new PostDataSource(this.positionService);
    } else {
      alert('Login in Before');
    }
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(PostDialogComponent, {
      width: '900px',
      data: 'Add Card'
    });
    dialogRef.componentInstance.event.subscribe((result) => {
      this.positionService.addPost(result.data);
      this.dataSource = new PostDataSource(this.positionService);
    });
  }
}

export class PostDataSource extends DataSource<any> {
  constructor(private positionService: PositionService) {
    super();
  }

  connect(): Observable<Position[]> {
    return this.positionService.getData();
  }

  disconnect() {
  }
}
