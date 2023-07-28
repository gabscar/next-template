import {
  Autocomplete,
  FormControl,
  TextField,
  createFilterOptions,
} from '@mui/material';
import { Control, Controller, FieldPath, FieldValues } from 'react-hook-form';

interface ICreatableSelectProps<
  T extends FieldValues,
  TName extends FieldPath<T> = FieldPath<T>,
> {
  control: Control<T, any>;
  name: TName;
  errorText?: string;
  selectOptions: string[];
  newValueLabel?: string;
  label: string;
}

type IBaseCreatableSelectProps<
  T extends FieldValues,
  TName extends FieldPath<T> = FieldPath<T>,
> = ICreatableSelectProps<T, TName>;

export type ICreatableSelect = <
  T extends FieldValues = FieldValues,
  TName extends FieldPath<T> = FieldPath<T>,
>(
  _props: IBaseCreatableSelectProps<T, TName>,
) => JSX.Element;

interface ISelectOption {
  label: string;
  value?: string;
}

const filter = createFilterOptions<ISelectOption>();

const CreatableSelect: ICreatableSelect = (props) => {
  const mappedOptions = props.selectOptions.map<ISelectOption>((opt) => ({
    label: opt,
  }));

  return (
    <FormControl fullWidth>
      <Controller
        control={props.control}
        name={props.name}
        render={({ field }) => (
          <Autocomplete
            selectOnFocus
            clearOnBlur
            handleHomeEndKeys
            options={mappedOptions}
            freeSolo
            value={field.value}
            renderInput={(params) => {
              const { children, ...other } = params.InputLabelProps;
              return (
                <TextField
                  InputLabelProps={other}
                  error={Boolean(props.errorText)}
                  helperText={props.errorText}
                  InputProps={params.InputProps}
                  inputProps={params.inputProps}
                  size={params.size}
                  disabled={params.disabled}
                  fullWidth={params.fullWidth}
                  id={params.id}
                  label={props.label}
                />
              );
            }}
            renderOption={(props, option) => <li {...props}>{option.label}</li>}
            filterOptions={(options, params) => {
              const filtered = filter(options, params);

              const { inputValue } = params;
              const isExisting = options.some(
                (option) => inputValue === option.label,
              );
              if (inputValue !== '' && !isExisting) {
                filtered.push({
                  value: inputValue,
                  label: `${inputValue} (Novo${
                    props.newValueLabel ? ' ' + props.newValueLabel : ''
                  })`,
                });
              }

              return filtered;
            }}
            getOptionLabel={(option) => {
              if (typeof option === 'string') {
                return option;
              }
              if (option.value) {
                return option.value;
              }
              return option.label;
            }}
            onChange={(ev, newValue) => {
              if (Array.isArray(newValue)) return;
              if (typeof newValue === 'string') {
                field.onChange(newValue);
              } else if (newValue?.value) {
                // Create a new value from the user input
                field.onChange(newValue.value);
              } else {
                field.onChange(newValue?.label);
              }
            }}
          />
        )}
      />
    </FormControl>
  );
};

export default CreatableSelect;
