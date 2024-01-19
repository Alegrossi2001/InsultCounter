import { Injectable } from '@angular/core';
import { Utente } from '../models/User.model';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UtentiService {
  utenti: Utente[] = [
    {
      name: "Alex",
      surname: "Grossi",
      bestemmieCount: 10
    },
    {
      name: "Nicholas",
      surname: "Patrono",
      bestemmieCount: 10
    },
    {
      name: "Ruslan",
      surname: "L' ucraino",
      bestemmieCount: 10
    }
  ]

  constructor() {
    // Initialize the BehaviorSubject with a pre-existing Utenti array

    this.utentiSubject.next(this.utenti);
  }

  addUtente(nome:string, surnome:string){
    const newUtente: Utente = {
      name: nome,
      surname: surnome,
      bestemmieCount: 0
    }
    const currentUtenti = this.utentiSubject.value;
    const updatedUtenti = [...currentUtenti, newUtente];
    this.utentiSubject.next(updatedUtenti);

    this.utenti.push(newUtente);
    console.log(this.utenti);
    //change it to call the api
  }

  private utentiSubject = new BehaviorSubject<Utente[]>([]);

  getUtenti(): Observable<Utente[]>{
    return this.utentiSubject.asObservable();
  }
}
