import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { APIService } from '../services/api.service';

@Component({
  selector: 'app-modal-detalhes',
  templateUrl: './modal-detalhes.component.html',
  styleUrls: ['./modal-detalhes.component.scss']
})
export class ModalDetalhesComponent implements OnInit {
  @Input() url: string;

  // ArrayList
  starships: any[] = [];

  // Resultado da Pequisa
  results: any;

  // Outras Variaveis
  name: string = null;

  constructor(
    public activeModal: NgbActiveModal,
    private service: APIService
    ) { }

  ngOnInit() {
    this.listarDetalhes(this.url);
  }

  listarDetalhes(search: string) {
    console.log('deu certo?', 'people/' + search);
    this.service.detalhes(search).subscribe((res) => {
      this.starships = [];
      this.results = res;

      this.name = res.name;
      // tslint:disable-next-line: forin
      for (const item in res.starships) {
        this.service.detalhes(res.starships[item]).subscribe((resStarship) => {
          console.log('resStarship', resStarship);

          this.starships.push(resStarship);
          }, err => {
            console.log(err);
            const error = err.message;
            console.log('error', error);
          });
      }
    }, err => {
      console.log(err);
      const error = err.message;
      console.log('error', error);
    });
  }

  formatDateDDMMYYYY(date: Date, separator: string = '/') {
    date = new Date(date);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
    const day = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate());

    return (day + separator + month + separator + year);
  }

  get dados() {
    return this.starships;
  }
}
