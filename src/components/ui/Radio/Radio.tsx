import type { Control } from 'react-hook-form';
import { useController } from 'react-hook-form';
import { INITIAL_POSITIONS, VALIDATION_RULES } from '../../../consts/consts';
import type { FormInputs } from '../../SignUpForm/SignUpForm';
import './Radio.scss';

interface RadioGroupProps {
  control: Control<FormInputs>;
  error?: string;
}

export const RadioGroup: React.FC<RadioGroupProps> = ({ control, error }) => {
  const { field } = useController({
    name: 'position',
    control,
    rules: VALIDATION_RULES.position,
  });

  return (
    <div className="radio-group">
      <p className="radio-group__title">Select your position</p>
      <div className="radio-group__options">
        {INITIAL_POSITIONS.map((position) => (
          <label key={position.id} className="radio-group__option">
            <input
              type="radio"
              value={position.id}
              checked={field.value === position.id.toString()}
              onChange={(e) => field.onChange(e.target.value)}
              onBlur={field.onBlur}
              name={field.name}
            />
            {position.name}
          </label>
        ))}
      </div>
      {error && <p className="radio-group__error">{error}</p>}
    </div>
  );
};
