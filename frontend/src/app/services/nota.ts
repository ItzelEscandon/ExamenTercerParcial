import { HttpClient } from '@angular/common/http';
import { Injectable, Signal, WritableSignal, inject, signal } from '@angular/core';
import { Nota } from '../interfaces/nota.interface';

@Injectable({
  providedIn: 'root',
})
export class NotaService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:8080/api/notas';

  // Aquí guardamos las notas
  private _notas: WritableSignal<Nota[]> = signal([]);

  // Esta señal permite consultar las notas
  public notas: Signal<Nota[]> = this._notas.asReadonly();

  // Carga las notas desde el servidor
  cargarNotas(): void {
    this.http.get<Nota[]>(this.apiUrl).subscribe({
      next: (notas) => this._notas.set(notas),
      error: (error) => console.error('Error al cargar las notas', error),
    });
  }

  // Envía una nota nueva al servidor
  agregarNota(nuevaNota: Omit<Nota, '_id'>): void {
    this.http.post<Nota>(this.apiUrl, nuevaNota).subscribe({
      next: (notaGuardada) => {
        this._notas.update((notas) => [...notas, notaGuardada]);
      },
      error: (error) => console.error('Error al guardar la nota', error),
    });
  }
}