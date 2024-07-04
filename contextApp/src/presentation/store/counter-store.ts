import { create } from "zustand";

export interface CounterState {
    count: number;

    incrementBy: (value: number) => void;
}

export const useCounterStore = create<CounterState>()((set, get) => ({

    count: 0,

    incrementBy: (value: number) => {

        const { count } = get();

        if( count === 0 && value === -1 ) {
            return;
        }

        set((state) => ({ count: state.count + value }));

    }

    
}))