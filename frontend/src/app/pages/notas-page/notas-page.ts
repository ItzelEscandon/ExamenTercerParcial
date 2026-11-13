import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NotaService } from '../../services/nota';

@Component({
  selector: 'app-notas-page',
  imports: [FormsModule],
  templateUrl: './notas-page.html',
  styleUrl: './notas-page.css',
})
export class NotasPage implements OnInit {
  private notaService = inject(NotaService);

  notas = this.notaService.notas;
  titulo = '';
  contenido = '';

  // Carga las notas al abrir la pantalla
  ngOnInit(): void {
    this.notaService.cargarNotas();
  }

  // Guarda la nota y limpia los campos
  guardarNota(): void {
    const nuevaNota = {
      titulo: this.titulo,
      contenido: this.contenido,
    };

    this.notaService.agregarNota(nuevaNota);
    this.titulo = '';
    this.contenido = '';
  }
}