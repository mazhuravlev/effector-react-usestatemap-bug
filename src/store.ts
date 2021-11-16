import { createEvent, createStore } from 'effector';

export const firstEvent = createEvent<number>();
export const secondEvent = createEvent<number>();
export const store = createStore({ first: 1, second: 2 })
    .on(firstEvent, (s, p) => ({ ...s, first: p }))
    .on(secondEvent, (s, p) => ({ ...s, second: p }));
