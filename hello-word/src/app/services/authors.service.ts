import { Injectable } from '@angular/core';

@Injectable()
export class AuthorsService {

  constructor() { }

  getAuthors() {
    return ['Author01', 'Author02', 'Author03'];
  }
}
