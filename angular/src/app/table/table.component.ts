import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { User } from '../types/user';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent implements OnChanges {
  @Input() data: User[] = []
  @Output() reader = new EventEmitter()
  @Output() deleter = new EventEmitter<number>()
  @Output() updater = new EventEmitter<number>()
  keys = ['id', 'user', 'name', 'email', 'mobile']
  table: User[];
  asc = true

  ngOnChanges(changes: SimpleChanges): void {
    this.table = this.data;
  }

  order() {
    const data = this.data.sort((a, b) => a.user.localeCompare(b.user))
    this.table = this.asc ? data : data.reverse()
    this.asc = !this.asc
  }

  onSearch(e: any) {
    this.table = this.data.filter(item => item.user.includes(e.target.value))
  }

  onRead() {
    this.reader.emit()
  }

  setupUpdate(id: number) {
    this.updater.emit(id)
  }

  onDelete(id: number) {
    this.deleter.emit(id)
  }
}
