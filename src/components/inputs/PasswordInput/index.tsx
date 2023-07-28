import {
  FormControl,
  IconButton,
  InputAdornment,
  TextField,
  TextFieldProps,
} from '@mui/material';
import { MouseEventHandler, useCallback, useState } from 'react';
import {
  Control,
  Controller,
  FieldPath,
  FieldValues,
  Path,
} from 'react-hook-form';

interface IBaseTextFieldUniqueProps<
  T extends FieldValues,
  TName extends Path<T> = Path<T>,
> {
  control: Control<T, any>;
  name: FieldPath<T>;
  errorText?: string;
}

type IBaseTextFieldProps<
  T extends FieldValues,
  TName extends Path<T> = Path<T>,
> = IBaseTextFieldUniqueProps<T, TName> & TextFieldProps;

export type ICustomTextField = <
  T extends FieldValues = FieldValues,
  TName extends Path<T> = Path<T>,
>(
  _props: IBaseTextFieldProps<T, TName>,
) => JSX.Element;

const handleMouseDown: MouseEventHandler = (e) => {
  e.preventDefault();
};
const PasswordInput: ICustomTextField = (props) => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = useCallback(() => {
    setShowPassword((prev) => !prev);
  }, [setShowPassword]);

  return (
    <>
      <FormControl fullWidth>
        <Controller
          control={props.control}
          name={props.name}
          render={({ field }) => {
            return (
              <TextField
                value={field.value}
                onChange={field.onChange}
                onBlur={field.onBlur}
                type={showPassword ? 'text' : 'password'}
                error={Boolean(props?.errorText)}
                helperText={props?.errorText}
                InputProps={{
                  autoComplete: 'off',

                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        edge="end"
                        onMouseDown={handleMouseDown}
                        onMouseUp={handleMouseDown}
                        onClick={togglePasswordVisibility}
                      >
                        teste
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                {...props}
              />
            );
          }}
        />
      </FormControl>
    </>
  );
};

export default PasswordInput;
