import { Component } from '@angular/core';
import { Loading } from './common/Models/Loading/Loading';
import { LoadingService } from './common/services/Loading/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'pmespWEB';
  public _loader = new Loading();

  constructor(private readonly _loadingService: LoadingService) {
    _loadingService.getLoading().subscribe((loader: Loading) => {
      this._loader = loader;
    });
  }
}
