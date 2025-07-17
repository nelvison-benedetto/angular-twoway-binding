import { Component, EventEmitter, Input, model, Output } from '@angular/core';

@Component({
  selector: 'app-rect',
  standalone: true,
  imports: [],
  templateUrl: './rect.component.html',
  styleUrl: './rect.component.css',
})
export class RectComponent {
  //Implement custom two-way binding

  // @Input({required: true}) size!: { width: string; height: string };
  // @Output() sizeChange = new EventEmitter<{ width: string; height: string }>();

  size = model.required<{ width: string; height: string }>(); //new, use 'model' instead of old @Input+@Output!!
     //Input + two-way binding! better than input.require<>...

  onReset() {
    // this.sizeChange.emit({
    //   width: '100',
    //   height: '100',
    // });

    this.size.set({ //aggiorna la variabile bound
      width: '100',
      height: '100',
    });
  }
}
