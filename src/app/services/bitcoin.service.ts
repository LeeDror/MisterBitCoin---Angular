import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BitcoinService {

  constructor(private http: HttpClient) { }

  getRate(coins): Observable<object> {
    const rateUrl = 'https://blockchain.info/tobtc?currency=USD&value=';
    console.log('rate', this.http.get(`${rateUrl}${coins}`));
    return this.http.get(`${rateUrl}${coins}`)
      .pipe()
  }
  getMarketPrice() {
    const url = 'https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true'
    return this.http.get(url)
    .pipe()
  }

  getConfirmedTransactions() {
    const url = 'https://api.blockchain.info/charts/avg-block-size?timespan=5months&format=json&cors=true'
    return this.http.get(url)
    .pipe()
  }
}
