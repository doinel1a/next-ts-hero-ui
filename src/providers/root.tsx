'use client';

import React from 'react';

import type { PropsWithChildren } from 'react';

import NextUiProvider from './next-ui';

type TRootProvider = PropsWithChildren;

export default function RootProvider({ children }: TRootProvider) {
  return <NextUiProvider>{children}</NextUiProvider>;
}
