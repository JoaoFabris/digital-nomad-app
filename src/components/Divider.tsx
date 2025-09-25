import { Box, BoxProps } from './Box';

export function Divider(props: BoxProps) {
  return (
    <Box marginLeft='s24'>
      <Box alignSelf="center" width="100%" height={1} backgroundColor="gray1" />
    </Box>
  );
}
