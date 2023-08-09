import React from 'react';
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
import { Control, Controller, FieldPath, FieldValues } from 'react-hook-form';
import * as S from './styles';
export interface IRadioOptions {
  label: string;
  value?: string;
}
interface ICreatableRadioProps<
  T extends FieldValues,
  TName extends FieldPath<T> = FieldPath<T>,
> {
  control: Control<T, any>;
  name: TName;
  errorText?: string;
  radioOptions: IRadioOptions[];
  newValueLabel?: string;
  label: string;
  isInRow?: boolean;
}

type IBaseCreatableRadioProps<
  T extends FieldValues,
  TName extends FieldPath<T> = FieldPath<T>,
> = ICreatableRadioProps<T, TName>;

export type ICreatableRadio = <
  T extends FieldValues = FieldValues,
  TName extends FieldPath<T> = FieldPath<T>,
>(
  _props: IBaseCreatableRadioProps<T, TName>,
) => JSX.Element;

export const FormInputRadio: ICreatableRadio = (props) => {
  const generateRadioOptions = () => {
    return props.radioOptions.map((singleOption) => (
      <FormControlLabel
        value={singleOption.value}
        label={singleOption.label}
        key={singleOption.label}
        control={<Radio />}
      />
    ));
  };

  return (
    <S.RadioGroupWrapper>
      <FormControl component="fieldset">
        <FormLabel component="legend">{props.label}</FormLabel>
        <Controller
          name={props.name}
          control={props.control}
          render={({
            field: { onChange, value },
            fieldState: { error },
            formState,
          }) => (
            <RadioGroup value={value} onChange={onChange} row={props.isInRow}>
              {generateRadioOptions()}
            </RadioGroup>
          )}
        />
        {props.errorText ? <S.ErrorText>{props.errorText}</S.ErrorText> : <></>}
      </FormControl>
    </S.RadioGroupWrapper>
  );
};
