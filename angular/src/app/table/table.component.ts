import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../types/user';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent {
  @Input() data: User[] = []
  @Output() reader = new EventEmitter()
  @Output() deleter = new EventEmitter<number>()
  @Output() updater = new EventEmitter<number>()
  keys = ['id', 'user', 'name', 'email', 'mobile']

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
