import { TestBed } from '@angular/core/testing';
import { NodeJosyService } from './node-josy.service';

describe('NodeJosyService', () => {
  let service: NodeJosyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NodeJosyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
