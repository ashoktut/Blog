import { Pipe, PipeTransform } from '@angular/core';

// Pipes are elements that allow us to transform the way data is presented in the user interface.
// Angular gives us the possibility to define our own pipes.
// We even have a command to generate the skeleton necessary to build it.
// The pipe will help us deal with cases in which a user does not have a profile image.
// Instead of getting an error in the console, indicating that the resource is not available, we will show an alternative image
@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(image: any, args?: any): string {
    if (!image) {
      return 'assets/img/noimage.png';
    }
    return image;
  }

}
