export { };

declare global {
  /** When you think the any is truly ok */
  type anyOk = any;

  /** When you want to allow any object */
  type anyObject = Record<string, unknown>;

  /* For possible nully types */
  type Maybe<T> = T | null | undefined;
}