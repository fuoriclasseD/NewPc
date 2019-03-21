
import {Component} from '@angular/core';
import {CarteService} from '../data/carte.service';
import {Carte} from '../Carte';
import {DataSource} from '@angular/cdk/table';
import {Observable} from 'rxjs/Observable';
import {AuthService} from '../auth.service';
import {PostDialogComponent} from '../post-dialog/post-dialog.component';
import {MatDialog} from '@angular/material';
import {GlobalVars} from '../global';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-elenco-carte',
  templateUrl: './elenco-carte.component.html',
  styleUrls: ['./elenco-carte.component.css']
})



export class ElencoCarteComponent {
  elencoPos  : boolean = false;
  constructor(public auth: AuthService, public dialog: MatDialog, private carteService: CarteService, public globalVars: GlobalVars, public appComponent: AppComponent) {
   // globalVars.setMyGlobalVar(false);
    appComponent.setElencoPos(false);
  }

  displayedColumns = ['date_posted', 'title', 'category', 'delete'];
  dataSource = new PostDataSource(this.carteService);
  

  deletePost(id) {
    if (this.auth.isAuthenticated()) {
      this.carteService.deletePost(id);
      this.dataSource = new PostDataSource(this.carteService);
    } else {
      alert('Login in Before');
    }
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(PostDialogComponent, {
      width: '900px',
      data: 'Add Post'
    });
    dialogRef.componentInstance.event.subscribe((result) => {
      this.carteService.addPost(result.data);
      this.dataSource = new PostDataSource(this.carteService);
    });
  }
}

export class PostDataSource extends DataSource<any> {
  constructor(private dataService: CarteService) {
    super();
  }

  connect(): Observable<Carte[]> {
    return this.dataService.getData();
  }

  disconnect() {
  }
}
