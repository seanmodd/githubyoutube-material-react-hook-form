import React from 'react';
import { TextField as MUITextField } from '@mui/material';
import FormField from './FormField';

const TextField = React.forwardRef((props, ref) => (
  <FormField ref={ref} Component={MUITextField} {...props} />
));

export default TextField;
