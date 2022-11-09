import { Component, OnInit, ViewChild } from '@angular/core';
import { ServiceService } from '../../shared/service.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Character } from './character.interface';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {
  displayedColumns = ['id', 'name', 'description'];
  dataSource!: MatTableDataSource<any>;
  characters: Character[] = [];

  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;

  constructor(private service: ServiceService) {}

  ngOnInit(): void {
    this.service.getAll().subscribe((retorno: any) => {
      console.log('retorno: ', retorno.data.results);
      this.dataSource = new MatTableDataSource(retorno.data.results);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.matSort;
      return retorno;
    });
  }

  busca($event: any) {
    this.dataSource.filter = $event.target.value;
  }
}
