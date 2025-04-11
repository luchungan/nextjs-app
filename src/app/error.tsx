'use client';

import React, { useEffect } from 'react';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(()=>{
    console.log(error)
  },[error])
    return (
        <div>
            <h2>{`发生错误,${error}`}</h2>
            <button onClick={reset}>重试</button>
        </div>
    );
}

