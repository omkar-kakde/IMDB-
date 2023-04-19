import { Pipe, PipeTransform } from '@angular/core';
import { ImovieArray } from '../model/movieArray';

@Pipe({
  name: 'filtermovie'
})
export class FiltermoviePipe implements PipeTransform {

  transform(value: ImovieArray[], serchtext : string): ImovieArray[] {
     if(!value){
      return []
     }
    if(!serchtext){
      return value
  }
    let  movieArray= value.filter(movieobj=>{
      return movieobj.title.toLowerCase().startsWith(serchtext.toLowerCase())

    })
    return movieArray
  }

}
