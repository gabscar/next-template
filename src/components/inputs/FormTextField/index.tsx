import { FormControl, TextField, TextFieldProps } from '@mui/material';
import {
  Control,
  Controller,
  FieldPath,
  FieldValues,
  Path,
} from 'react-hook-form';
import { IMask } from 'react-imask';
import MaskedInput from '../MaskedInput';

interface IBaseTextFieldUniqueProps<
  T extends FieldValues,
  TName extends Path<T> = Path<T>,
> {
  control: Control<T, any>;
  name: FieldPath<T>;
  errorText?: string;
  mask?: IMask.AnyMask;
}

type IBaseTextFieldProps<
  T extends FieldValues,
  TName extends Path<T> = Path<T>,
> = IBaseTextFieldUniqueProps<T, TName> & TextFieldProps;

export type ICustomTextField = <
  T extends FieldValues = FieldValues,
  TName extends Path<T> = Path<T>,
>(
  _props: IBaseTextFieldProps<T, TName> & { useExternalLabel?: boolean },
) => JSX.Element;

const FormTextField: ICustomTextField = (props) => {
  return (
    <FormControl fullWidth>
      <Controller
        control={props.control}
        name={props.name}
        render={({ field }) => {
          return (
            <>
              {props.useExternalLabel && <p>{props.label}</p>}
              <TextField
                value={field.value}
                onBlur={field.onBlur}
                onChange={field.onChange}
                autoComplete="off"
                error={Boolean(props?.errorText)}
                helperText={props?.errorText}
                InputProps={{
                  inputComponent: props.mask ? (MaskedInput as any) : undefined,
                }}
                inputProps={{
                  mask: props.mask,
                }}
                {...props}
                label={props.useExternalLabel ? '' : props.label}
              />
            </>
          );
        }}
      />
    </FormControl>
  );
};

export default FormTextField;
