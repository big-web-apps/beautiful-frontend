import { useState } from 'react';
import { putObject, watchObject } from './firebase-operations';

export function useWatchedObject<Type extends object>(watchedPath: string) {
  const [lastWatchedObject, setLastWatchedObject] = useState<Type | null>(null);

  watchObject<Type | null>(watchedPath, newObject => {
    if (JSON.stringify(lastWatchedObject) !== JSON.stringify(newObject)) setLastWatchedObject(newObject);
  });

  const setWatchedObject = (object: Type | null): void => {
    putObject<Type | null>(watchedPath, object).then();
  };

  return {
    watchedObject: lastWatchedObject,
    setWatchedObject: setWatchedObject,
  };
}
