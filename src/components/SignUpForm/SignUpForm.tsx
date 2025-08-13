import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { VALIDATION_RULES } from '../../consts/consts';
import { Button } from '../ui/Button/Button';
import { Form } from '../ui/Form/Form';
import { RadioGroup } from '../ui/Radio/Radio';
import { Input } from '../ui/Fields/Input';
import { Upload } from '../ui/Fields/Upload';
import './SignUpForm.scss';

export interface FormInputs {
  name: string;
  email: string;
  phone: string;
  position: string;
  file: File;
}

export const SignUpForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    console.log('Form submitted:', data);
  };

  const handleFileSelect = (file: File) => {
    setValue('file', file);
    console.log('File selected:', file);
  };

  return (
    <section className="signup">
      <div className="container">
        <h2 className="signup__title heading-1">Working with POST request</h2>
        <Form
          variant="desktop"
          className="signup__form"
          onSubmit={handleSubmit(onSubmit)}>
          <Input
            name="name"
            control={control}
            placeholder="Your name"
            type="text"
            rules={VALIDATION_RULES.name}
            error={errors.name?.message}
          />
          <Input
            name="email"
            control={control}
            placeholder="Email"
            type="email"
            rules={VALIDATION_RULES.email}
            error={errors.email?.message}
          />
          <Input
            name="phone"
            control={control}
            placeholder="Phone"
            type="tel"
            helperText="+38 (XXX) XXX - XX - XX"
            rules={VALIDATION_RULES.phone}
            error={errors.phone?.message}
            data-field="phone"
          />
          <RadioGroup control={control} error={errors.position?.message} />
          <Upload
            name="file"
            control={control}
            placeholder="Upload your file"
            error={errors.file?.message}
            onFileSelect={handleFileSelect}
          />
          <Button variant="normal" type="submit">
            Sign up
          </Button>
        </Form>
      </div>
    </section>
  );
};
