export class BeingSocialError extends Error {
  constructor(message, public code: Number) {
    super(message);
  }
}
