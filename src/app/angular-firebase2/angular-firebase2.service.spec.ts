import { TestBed, inject } from '@angular/core/testing';

import { AngularFirebase2Service } from './angular-firebase2.service';

describe('AngularFirebase2Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AngularFirebase2Service]
    });
  });

  it('should ...', inject([AngularFirebase2Service], (service: AngularFirebase2Service) => {
    expect(service).toBeTruthy();
  }));
});
