import { forwardRef } from 'react';
import { IMaskInput } from 'react-imask';

interface IMaskedInputProps {
  mask: string;
  onChange: (_val: string) => void;
}

const MaskedInput = forwardRef<any, IMaskedInputProps>(
  function UserIdentifierMask(props, ref) {
    const { onChange, ...other } = props;
    const handleChange = (val: unknown) => {
      if (typeof val === 'string') onChange(val);
    };

    return (
      <IMaskInput
        {...other}
        inputRef={ref}
        mask={other.mask}
        onAccept={handleChange}
      />
    );
  },
);

export default MaskedInput;
