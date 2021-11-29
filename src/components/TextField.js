import React from 'react';
import { TextField as MUITextField } from '@material-ui/core';
import FormField from './FormField';

const TextField = React.forwardRef((props, ref) => (
  <FormField ref={ref} Component={MUITextField} {...props} />
));

export default TextField;
