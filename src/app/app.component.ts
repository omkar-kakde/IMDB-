import { Component } from '@angular/core';
import { ImovieArray } from './shared/model/movieArray';
import { movieArr } from './shared/const/moviearr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'imdbtask';
 

  imgBaseurl=`https://image.tmdb.org/t/p/w1280/`

  searchByValue ! : string;
  movieArray : ImovieArray[] = movieArr;
}
