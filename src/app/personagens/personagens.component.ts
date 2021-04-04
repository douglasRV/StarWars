import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

// Services
import { APIService } from '../services/api.service';

// Modal
import { ModalDetalhesComponent } from '../modal-detalhes/modal-detalhes.component';

@Component({
  selector: 'app-personagens',
  templateUrl: './personagens.component.html',
  styleUrls: ['./personagens.component.scss']
})
export class PersonagensComponent implements OnInit {

  // Array Grid
  data: any[] = [];

  // Pesquisa
  pesquisa = 'people';
  search: any[] = [
    { name: 'Personagens', id: 'people' },
    { name: 'Planetas'   , id: 'planets' },
    { name: 'Naves'      , id: 'starships' },
    { name: 'Filmes'     , id: 'films' },
    { name: 'Espécies'   , id: 'species' },
    { name: 'Veiculos'   , id: 'vehicles' },
  ];
  page = 1;
  pageSize = 10;
  quantidade = null;
  table = 'people';

  // Resultado da Pesquisa
  results: any;

  constructor(
    private service: APIService,
    private modalService: NgbModal
    ) { }

  ngOnInit() {
    this.listar(this.pesquisa);
  }

  openmodal(url: string) {
    console.log('url', url);
    const modalRef = this.modalService.open(ModalDetalhesComponent, {
      size: 'xl',
    });

    modalRef.componentInstance.url = url;

    modalRef.result
      .then((value) => {
        this.listar(this.pesquisa);
      })
      .catch((reason) => {
        this.listar(this.pesquisa);
      });
  }

  listar(search: string) {
    this.service.listar(search).subscribe((res) => {
      this.table = search;
      this.data = [];
      this.results = res;

      console.log('results', res);
      for (const item in res.results) {

        if (!isNaN(Number(item))) {

          this.data.push(res.results[item]);
          continue;
        } else {
          break;
        }
      }
      // const count = Math.round(res.count / 10);
      const count = Math.ceil(res.count / 10);

      for (let pages = 2; pages <= count; pages++) {
        const page = ('/?page=' + pages);
        this.service.listar(search + page).subscribe((resPage) => {
          for (const item in resPage.results) {

            if (!isNaN(Number(item))) {

              this.data.push(resPage.results[item]);
              continue;
            } else {
              break;
            }
          }
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
    this.quantidade = this.results.count;
    // return this.data.slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
    return this.data;
  }
}
