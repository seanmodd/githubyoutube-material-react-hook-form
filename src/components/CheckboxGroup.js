import React, { useState } from 'react';
import {
  FormControl,
  FormLabel,
  FormGroup,
  Checkbox,
  FormControlLabel,
  FormHelperText,
} from '@material-ui/core';
import FormField from './FormField';

const CheckboxGroup = React.forwardRef((props, ref) => (
  <FormField ref={ref} Component={CheckboxGroupImpl} {...props} />
));

const CheckboxGroupImpl = React.forwardRef(
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
  ) => {
    const [checkedItems, setCheckedItems] = useState({});

    React.useEffect(() => {
      const newState = {};
      if (value) {
        value.map((item) => (newState[item] = true));
        setCheckedItems(newState);
      }
    }, [value]);

    const handleClick = (e) => {
      const newState = { ...checkedItems };

      if (e.target.checked) {
        newState[e.target.value] = true;
      } else {
        delete newState[e.target.value];
      }
      setCheckedItems(newState);

      const items = Object.keys(newState);
      if (onChange) onChange(items.length == 0 ? null : items);
    };
    return (
      <FormControl variant={variant} size={size} error={error}>
        <FormLabel>{label}</FormLabel>
        <FormGroup row>
          {items.map((item) => (
            <FormControlLabel
              key={item[valueField]}
              value={item[valueField]}
              label={item[nameField]}
              control={
                <Checkbox
                  size={size}
                  name={name}
                  size={size}
                  value={item[valueField]}
                  onClick={handleClick}
                  checked={Boolean(checkedItems[item[valueField]])}
                />
              }
            />
          ))}
        </FormGroup>
        <FormHelperText>{helperText}</FormHelperText>
      </FormControl>
    );
  }
);

export default CheckboxGroup;
