import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent implements OnInit {
  private api = 'http://localhost:8000/';

  data: { id: number, user: string, name: string, email: string, mobile: string }[] = []
  keys = ['id', 'user', 'name', 'email', 'mobile']
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.onRead()
  }

  onRead() {
    this.http.get(`${this.api}read/`).subscribe((res) => this.data = res as [])
  }

  onUpdate(id: number) {
    console.log(id)
  }

  onDelete(id: number) {
    this.http.delete(`${this.api}delete/${id}`).subscribe((res) => { console.log(res); this.onRead() })
  }
}
