import React from 'react';
import {
  FormControl,
  FormLabel,
  RadioGroup as MUIRadioGroup,
  Radio,
  FormControlLabel,
  FormHelperText,
} from '@material-ui/core';
import FormField from './FormField';

const RadioGroup = React.forwardRef((props, ref) => (
  <FormField ref={ref} Component={RadioGroupImpl} {...props} />
));

const RadioGroupImpl = React.forwardRef(
  (
    {
      label,
      name = '',
      variant,
      size,
      value,
      onChange,
      error,
      helperText,
      items = [],
      nameField = 'name',
      valueField = 'value',
    },
    ref
  ) => (
    <FormControl variant={variant} size={size} error={error}>
      <FormLabel>{label}</FormLabel>
      <MUIRadioGroup name={name} value={value} onChange={onChange} ref={ref}>
        {items.map((item) => (
          <FormControlLabel
            key={item[valueField]}
            value={item[valueField]}
            label={item[nameField]}
            control={<Radio size={size} />}
          />
        ))}
      </MUIRadioGroup>
      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  )
);

export default RadioGroup;
