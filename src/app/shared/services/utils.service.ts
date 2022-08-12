import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  constructor() {}

  changeTelefone(telefone) {
    return (
      '55' +
      telefone
        .replace('(', '')
        .replace(')', '')
        .replace('-', '')
        .replace(' ', '')
    );
  }

  formatDate(date) {
    let day = date.getDate();
    let month = date.getMonth() + 1;
    const year = date.getFullYear();
    day = day <= 9 ? '0' + day : day;
    month = month <= 9 ? '0' + month : month;
    return `${day}/${month}/${date.getFullYear()}`;
  }

  stringToDate(dateString) {
    var dateParts = dateString.split('/');
    var dateObject = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]);
    return dateObject;
  }

  removeDuplicates(arr, property) {
    return arr.filter((element, index, array) => {
      return (
        array
          .map((mapElement) => mapElement[property])
          .indexOf(element[property]) === index
      );
    });
  }
}
