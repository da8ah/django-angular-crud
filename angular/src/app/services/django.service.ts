import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from '../types/user';

@Injectable({
  providedIn: 'root',
})
export class DjangoService {
  private api = 'http://localhost:8000/';
  private data$ = new Subject<User[]>()

  constructor(private http: HttpClient) { }

  getData$() {
    return this.data$.asObservable()
  }

  create(body: User) {
    this.http.post(`${this.api}create/`, body, { observe: 'response' }).subscribe((res) => { console.log(res); res.ok && this.read() })
  }

  read() {
    this.http.get(`${this.api}read/`).subscribe((res) => {
      console.log(res as User[])
      this.data$.next(res as User[])
    })
  }

  update(body: User, id: number) {
    return this.http.put(`${this.api}update/${id}`, body, { observe: 'response' })
  }

  delete(id: number) {
    this.http.delete(`${this.api}delete/${id}`).subscribe((res) => { console.log(res); this.read() })
  }
}
