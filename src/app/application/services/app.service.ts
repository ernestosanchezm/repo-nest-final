import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHome(): string {
    return 'UPC - TSW - Examen Final 2020-2';
  }
}
