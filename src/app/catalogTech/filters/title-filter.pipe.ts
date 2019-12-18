import { Pipe, PipeTransform } from '@angular/core';
import {Offre} from '../../model/Offre';

@Pipe({
  name: 'titleFilter'
})
export class TitleFilterPipe implements PipeTransform {

  transform(offres: Offre[], args?: string): any {
    if (!args) {
      return  offres;
    }
    return offres.filter(offre => offre.nom.toLowerCase().indexOf(args.toLowerCase()) !== -1);
  }

}
