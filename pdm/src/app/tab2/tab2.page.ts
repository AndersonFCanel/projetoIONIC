import { MoviesService } from './../theMovieDB/movies.service';
import { Component } from '@angular/core';
import { LoadingController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  providers: [MoviesService]
})
export class Tab2Page {
  private page = 1;
  constructor( public menu: MenuController, public movieService:MoviesService, public loadingController:LoadingController){}
  public lista_filmes = new Array<any>();


  ionViewDidEnter() {
  this.carregaPagina();
  this.carregando();
}

  carregaPagina () {
    this.movieService.getPopularMovies(this.page, 'pt').subscribe(
      data => {
        const response = (data as any);
          if(this.page==1){
            this.lista_filmes = response.results;
    }
    else {
      this.lista_filmes = this.lista_filmes.concat(response.results);
    }
    console.log(this.lista_filmes);
  },
  error => {
    console.log(error);
}
)
}
async carregando() {
  const loading = await this.loadingController.create({
    message: 'Carregando Filmes',
    duration: 2000
  });
  await loading.present();
  const { role, data } = await loading.onDidDismiss();
  }

  doRefresh(event) {
    this.page = 1;
    this.carregaPagina();
    console.log('Iniciando operação assíncrona');

    setTimeout(() => {
      event.target.complete();
      console.log('finalizando refresh');
  }, 1000);
  }

  loadData(event) {
    this.page++;
    this.carregaPagina();
    setTimeout(() => {
      event.target.complete();
    }, 10000);
  }


  ionViewDidLeave() {
    // enable the root left menu when leaving the tutorial page
    this.menu.enable(true);
  }
}