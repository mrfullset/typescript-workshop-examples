namespace WatchedObject {
  type Session = {
    active: boolean;
    userId: number;
  };

  type ChangeCallbackSource<T> = {
    on<K extends string & keyof T>(
      event: `${K}Change`,
      callback: (value: T[K]) => void
    ): void;
  };

  declare function makeWatchedObject<T>(object: T): T & ChangeCallbackSource<T>;

  let initialSession!: Session;
  const session = makeWatchedObject(initialSession);

  session.on("activeChange", (value) => console.log(value));
  session.on("userIdChange", (value) => console.log(value));
}
