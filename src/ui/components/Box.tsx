// In Box.tsx
import { createBox } from '@shopify/restyle';
import React from 'react';
import { Theme } from '../theme/theme';

export const Box = createBox<Theme>();
export type BoxProps = React.ComponentProps<typeof Box>;