declare module 'nprogress' {
  export function start(): void;
  export function done(): void;
  export function set(n: number): void;
  export function inc(n?: number): void;
  export function configure(options: { trickle?: boolean; speed?: number; minimum?: number }): void;
}
