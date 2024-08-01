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
  filter: { query: string; page: number };
}

const initialState: CardState = {
  cards: [],
  state: 'Loading',
  filter: { query: '', page: 1 },
};

export const CardStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withComputed(({ cards }) => ({
    cardList: computed(() => cards()),
    cardsCount: computed(() => cards().length),
  })),
  withMethods((store, videogamesService = inject(VideogamesService)) => ({
    loadPages: rxMethod<number>(
      pipe(
        tap(() => patchState(store, { state: 'Loading' })),
        switchMap((page) => {
          return videogamesService.loadCards(page).pipe(
            tap((cards) => {
              patchState(store, { cards, state: 'Loaded' });
            })
          );
        })
      )
    ),
  }))
);
