import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CardData } from '../interfaces/card-data.interface';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private httpClient: HttpClient) {}

  private cardData!: Array<CardData>;

  get data(): Array<CardData>{
    return [...this.cardData];
  }

  getDataToCards(): void{
    this.requestInfo().subscribe(response => {
      this.cardData = response;
    });
  }

  requestInfo(): Observable<CardData[]>{
    return this.httpClient.get<CardData[]>('https://jsonplaceholder.typicode.com/posts', {responseType:'json'});
  }
}
