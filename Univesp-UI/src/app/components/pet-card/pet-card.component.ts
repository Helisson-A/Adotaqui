import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-pet-card',
  templateUrl: './pet-card.component.html',
  styleUrls: ['./pet-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PetCardComponent implements OnInit {


  @Input() nome = '';
  @Input() sexo = '';
  @Input() Id = '';
  @Input() foto = '';

  constructor() { }

  ngOnInit(): void {
  }

}
