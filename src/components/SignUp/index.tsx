import { spawn } from 'child_process';
import React, { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { SingUpType } from '../../commons/type';
import { regEmail } from '../../commons/util';
import './SignUp.scss';

interface PropTypes {}

const baseClassName = 'sing-up';

const SingUp: React.FC<PropTypes> = () => {
  const {
    register,
    handleSubmit,
    setError,
    setFocus,
    watch,
    formState: { errors }
  } = useForm<SingUpType>();
  const onSubmit: SubmitHandler<SingUpType> = (data) => {
    console.log(data);
    if (data.firstPassword !== data.secondPassword) {
      setError('secondPassword', { type: 'custom', message: 'password is not match' });
      setFocus('secondPassword');
    }
  };
  console.log(errors);
  // useEffect(() => {
  //   const firstError = (Object.keys(errors) as Array<keyof typeof errors>).reduce<keyof typeof errors | null>((field, a) => {
  //     const fieldKey = field as keyof typeof errors;
  //     return !!errors[fieldKey] ? fieldKey : a;
  //   }, null);

  //   if (firstError) {
  //     setFocus(firstError);
  //   }
  // }, [errors, setFocus]);

  return (
    <div className={`${baseClassName}`}>
      <h2 className={`${baseClassName}__header`}>Sign Up</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={`${baseClassName}__wrapper`}>
          <span className={`${baseClassName}__wrapper__title`}>name</span>
          <input
            className={`${baseClassName}__wrapper__input`}
            placeholder="enter name"
            {...register('name', { required: true, minLength: 4 })}
          />
          {errors.name?.type === 'required' && (
            <span className={`${baseClassName}__wrapper__error`}>Thie field is required</span>
          )}
          {errors.name?.type === 'minLength' && (
            <span className={`${baseClassName}__wrapper__error`}>This name is too short</span>
          )}
        </div>
        <div className={`${baseClassName}__wrapper`}>
          <span className={`${baseClassName}__wrapper__title`}>email</span>
          <input
            className={`${baseClassName}__wrapper__input`}
            type="text"
            placeholder="enter email"
            {...register('email', { required: true, pattern: regEmail })}
          />
          {errors.email?.type === 'required' && (
            <span className={`${baseClassName}__wrapper__error`}>Thie field is required</span>
          )}
          {errors.email?.type === 'pattern' && (
            <span className={`${baseClassName}__wrapper__error`}>Email pattern does not match</span>
          )}
        </div>
        <div className={`${baseClassName}__wrapper`}>
          <span className={`${baseClassName}__wrapper__title`}>password</span>
          <input
            className={`${baseClassName}__wrapper__input`}
            type="password"
            placeholder="enter password"
            {...register('firstPassword', { required: true, minLength: 6 })}
          />
          {errors.firstPassword?.type === 'required' && (
            <span className={`${baseClassName}__wrapper__error`}>Thie field is required</span>
          )}
          {errors.firstPassword?.type === 'minLength' && (
            <span className={`${baseClassName}__wrapper__error`}>This password is too short </span>
          )}
          {errors.firstPassword?.type === 'custom' && (
            <span className={`${baseClassName}__wrapper__error`}>{errors.firstPassword.message}</span>
          )}
        </div>
        <div className={`${baseClassName}__wrapper`}>
          <span className={`${baseClassName}__wrapper__title`}>password again</span>
          <input
            className={`${baseClassName}__wrapper__input`}
            type="password"
            placeholder="enter password again"
            {...register('secondPassword', { required: true, minLength: 6 })}
          />
          {errors.secondPassword?.type === 'required' && (
            <span className={`${baseClassName}__wrapper__error`}>Thie field is required</span>
          )}
          {errors.secondPassword?.type === 'minLength' && (
            <span className={`${baseClassName}__wrapper__error`}>This password is too short </span>
          )}
          {errors.secondPassword?.type === 'custom' && (
            <span className={`${baseClassName}__wrapper__error`}>{errors.secondPassword.message}</span>
          )}
        </div>
        <div className={`${baseClassName}__wrapper`}>
          <input className={`${baseClassName}__wrapper__submit`} type="submit" />
        </div>
      </form>
    </div>
  );
};

export default SingUp;
