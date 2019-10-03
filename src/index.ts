import { useEffect } from 'react';

const TEMP = '@@use-memory-storage/TEMP';
const TRIGGER = '@@use-memory-storage/TRIGGER';

const useMemoryStorage = (storageKey: string, data: string | null, callback: (data: any) => any) => {
  useEffect(() => {
    window.localStorage.setItem(TRIGGER, Date.now().toString());

    const storageHandler = ({ key, newValue }: StorageEvent) => {
      if (key === TRIGGER) {
        const storedData = window.sessionStorage.getItem(storageKey);

        if (storedData != null) {
          window.localStorage.setItem(TEMP, storedData);
        }

        window.localStorage.removeItem(TEMP);
      } else if (key === TEMP && newValue != null) {
        window.sessionStorage.setItem(storageKey, newValue);
        callback((oldValue: never) => newValue);
      }
    };

    window.addEventListener('storage', storageHandler);

    return () => {
      window.removeEventListener('storage', storageHandler);
    };
  }, [storageKey, callback]);

  useEffect(() => {
    if (data != null) {
      window.localStorage.setItem(TEMP, data);
      window.localStorage.removeItem(TEMP);
    }
  }, [data]);
};

export { useMemoryStorage, useMemoryStorage as default };
