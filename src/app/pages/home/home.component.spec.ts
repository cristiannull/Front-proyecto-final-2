import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { VideogamesService } from '../../service/videogames.service';
import { HttpErrorResponse } from '@angular/common/http';

describe('VideogamesService', () => {
    let service: VideogamesService;
    let httpMock: HttpTestingController;
  
    const mockVideogames = [
      {
        _id: '1',
        name: 'Game 1',
        price: '59.99',
        image: 'image1.jpg',
        video: 'video1.mp4',
        gamemode: 'Singleplayer',
        developer: 'Dev 1',
        gender: 'Action',
        pegi: '18',
        theme: 'Science fiction',
        paymentMethod: 'Credit Card',
        description: 'Description for Game 1'
      },
      {
        _id: '2',
        name: 'Game 2',
        price: '39.99',
        image: 'image2.jpg',
        video: 'video2.mp4',
        gamemode: 'Multiplayer',
        developer: 'Dev 2',
        gender: 'Adventure',
        pegi: '16',
        theme: 'Fantasy',
        paymentMethod: 'Paypal',
        description: 'Description for Game 2'
      }
    ];
  
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [VideogamesService]
      });
  
      service = TestBed.inject(VideogamesService);
      httpMock = TestBed.inject(HttpTestingController);
    });
  
    afterEach(() => {
      httpMock.verify();
    });
  
    it('should fetch videogames correctly', () => {
      service.getVideogames().subscribe((videogames) => {
        expect(videogames.length).toBe(2);
        expect(videogames).toEqual(mockVideogames);
      });
  
      const req = httpMock.expectOne('http://3.136.87.251:3000/api/videogame');
      expect(req.request.method).toBe('GET');
      req.flush(mockVideogames);
    });
  
    it('should handle an error when fetching videogames', () => {
      const errorMessage = 'Unable to fetch videogames';
      
      service.getVideogames().subscribe({
        next: () => fail('Expected an error, but got data instead'),
        error: (error: HttpErrorResponse) => {
          expect(error.error.message || error.message).toBe(errorMessage);
        }
      });
  
      const req = httpMock.expectOne('http://3.136.87.251:3000/api/videogame');
      req.flush({ message: errorMessage }, { status: 500, statusText: 'Server Error' });
    });
  });