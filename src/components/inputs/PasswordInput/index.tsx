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
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
interface IBaseTextFieldUniqueProps<
  T extends FieldValues,
  TName extends Path<T> = Path<T>,
> {
  control: Control<T, any>;
  name: FieldPath<T>;
  errorText?: string;
  useExternalLabel?: boolean;
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
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                  fontWeight: '600',
                  lineHeight: '24px',
                }}
              >
                {props.useExternalLabel && <p>{props.label}</p>}
                <TextField
                  value={field.value}
                  onChange={field.onChange}
                  onBlur={field.onBlur}
                  type={showPassword ? 'text' : 'password'}
                  error={Boolean(props?.errorText)}
                  helperText={props?.errorText}
                  sx={{ backgroundColor: 'white' }}
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
                          {showPassword ? (
                            <AiFillEyeInvisible />
                          ) : (
                            <AiFillEye />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  {...props}
                  label={props.useExternalLabel ? '' : props.label}
                />
              </div>
            );
          }}
        />
      </FormControl>
    </>
  );
};

export default PasswordInput;
