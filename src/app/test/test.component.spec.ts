import { TestBed } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { TestComponent } from './test.component';

describe('TestComponent', () => {
  let component: TestComponent;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [TestComponent], 
      providers: [TestComponent] 
    });

    component = TestBed.inject(TestComponent); 
    httpMock = TestBed.inject(HttpTestingController); 
  });

  afterEach(() => {
    httpMock.verify(); 
  });

  it('should retrieve videogames from the API via GET', () => {
    const dummyVideogames = [
      { name: 'Game 1', price: '29.99' },
      { name: 'Game 2', price: '39.99' }
    ];

    component.getVideogamestest().subscribe({
      next: (videogames: any) => {
        expect(videogames).toEqual(dummyVideogames); 
      },
    });

    const request = httpMock.expectOne('http://18.221.10.95:3000/api/videogame');
    expect(request.request.method).toBe('GET'); 
    request.flush(dummyVideogames); 
  });
});