import { AfterViewInit, ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { DataTableDataSource  } from './data-table-datasource';
import { Utente } from 'src/app/models/User.model';
import { UtentiService } from 'src/app/services/utenti.service';
@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Utente>;
  dataSource: DataTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['nome', 'cognome', 'Numero Bestemmie', 'Aggiungi'];

  constructor(
    private utentiService: UtentiService,
    private changeDetectorRef: ChangeDetectorRef) {
      this.dataSource = new DataTableDataSource(utentiService);
      this.utentiService.getUtenti().subscribe((utenti) => {
        this.dataSource.data = utenti;
        this.table.renderRows();
      })
    //sub to changes
    
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  onAddButtonClick(row: Utente): void {
        // Add 1 to the bestemmieCount of the clicked row
        row.bestemmieCount += 1;
        // Manually trigger change detection to update the view
        this.changeDetectorRef.detectChanges();
  }
}
