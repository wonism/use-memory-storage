# Use Memory Storage
> React hooks for memory storage is sharing session storage between multiple tabs.
> Ideas from the [blog
> post](https://blog.guya.net/2015/06/12/sharing-sessionstorage-between-tabs-for-secure-multi-tab-authentication/)
> written by [@guy-a](https://github.com/guy-a)

[![npm version](https://badge.fury.io/js/use-memory-storage.svg)](https://badge.fury.io/js/use-memory-storage)
[![Build Status](https://travis-ci.org/wonism/use-memory-storage.svg)](https://travis-ci.org/wonism/use-memory-storage)

## Installation
```sh
$ npm i -S use-memory-storage
```

## Use cases
```tsx
import React, { useState, useEffect, useCallback } from 'react';
import useMemoryStorage from 'use-memory-storage';

const KEY = 'TEST/useMemoryStorage';

const Demo: React.FC = () => {
  const [token, setToken] = useState<string | null>(null);
  useMemoryStorage(KEY, token, setToken);

  const handleClick = useCallback(() => {
    setToken(Date.now().toString());
  }, []);

  useEffect(() => {
    const storedData = sessionStorage.getItem(KEY);

    if (storedData != null) {
      setToken(storedData);
    }
  }, []);

  useEffect(() => {
    if (token != null) {
      window.sessionStorage.setItem(KEY, token);
    }
  }, [token]);

  return (
    <div>
      <p>
        Click button to generate token in session storage!
      </p>
      <output>
        stored data : {token}
      </output>
      <br />
      <button onClick={handleClick}>
        Click
      </button>
    </div>
  );
}

export default Demo;
```
