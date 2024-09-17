import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files[0]) {
      const file = input.files[0];

      // Verifica que sea un archivo .txt
      if (file.type === 'text/plain') {
        const reader = new FileReader();

        // Maneja el contenido una vez leído
        reader.onload = (e: any) => {
          const fileContent = e.target.result;


          console.log(1, fileContent);

          // Valida el contenido del archivo aquí
          // Por ejemplo, verifica si el archivo contiene una palabra específica
          if (fileContent.includes('palabra clave')) {
            console.log('El archivo es válido.');
          } else {
            console.log('El archivo no es válido.');
          }
        };

        // Lee el archivo como texto
        reader.readAsText(file);
      } else {
        console.error('Por favor, selecciona un archivo .txt válido.');
      }
    }
  }


}
