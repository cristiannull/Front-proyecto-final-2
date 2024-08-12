import { computed, inject } from '@angular/core';
import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { pipe, switchMap, tap } from 'rxjs';
import { VideogamesService } from '../service/videogames.service';

export interface Videogames {
  _id: string;
  name: string;
  price: string;
  cover: string;
}

interface CardState {
  cards: Videogames[];
  state: 'Loading' | 'Loaded' | 'Error';
  filter: { query: string; page: number; limit: number };
  totalItems: number;
  totalPages: number;
}

const initialState: CardState = {
  cards: [],
  state: 'Loading',
  filter: { query: '', page: 1, limit: 12 },
  totalItems: 0,
  totalPages: 0,
};

export const CardStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withComputed((store) => ({
    cardList: computed(() => store.cards()),
    cardsCount: computed(() => store.cards().length),
    totalPages: computed(() => store.totalPages()),
  })),
  withMethods((store, videogamesService = inject(VideogamesService)) => ({
    loadPages: rxMethod<number>(
      pipe(
        tap(() => patchState(store, { state: 'Loading' })),
        switchMap((page) => {
          return videogamesService.loadCards(page, store.filter().limit).pipe(
            tap((response) => {
              console.log('Response:', response);
              patchState(store, {
                cards: response.data,
                totalItems: response.pagination.totalItems,
                totalPages: response.pagination.totalPages,
                state: 'Loaded',
              });
            })
          );
        })
      )
    ),
  }))
);
