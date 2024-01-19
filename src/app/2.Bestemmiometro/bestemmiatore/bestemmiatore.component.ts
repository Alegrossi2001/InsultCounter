import { Component, OnInit } from '@angular/core';
import { UtentiService } from 'src/app/services/utenti.service';

@Component({
  selector: 'app-bestemmiatore',
  templateUrl: './bestemmiatore.component.html',
  styleUrls: ['./bestemmiatore.component.css']
})
export class BestemmiatoreComponent implements OnInit {

  person: {
    name: string,
    surname: string
  } = {
    name: '',
    surname: ''
  };

  addPerson() {
    this.utenti.addUtente(this.person.name, this.person.surname);
  }
  constructor(private utenti:UtentiService) { }

  ngOnInit(): void {
  }

}
