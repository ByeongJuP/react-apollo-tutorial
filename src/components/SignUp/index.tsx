import { spawn } from 'child_process';
import React, { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { SingUpType } from '../../commons/type';
import { regEmail } from '../../commons/util';
import { useSignupMutation } from '../../graphql/generated/schema';
import './SignUp.scss';

interface PropTypes {}

const baseClassName = 'sing-up';

const SingUp: React.FC<PropTypes> = () => {
  const {
    register,
    handleSubmit,
    setError,
    setFocus,
    formState: { errors }
  } = useForm<SingUpType>();

  const onSubmit: SubmitHandler<SingUpType> = (data) => {
    if (data.firstPassword !== data.secondPassword) {
      setError('secondPassword', { type: 'custom', message: 'password is not match' });
      setFocus('secondPassword');
    }

    if (!!errors) {
      createUser({ variables: { name: data.name, email: data.email, password: data.firstPassword } });
    }
  };

  const [createUser] = useSignupMutation({
    onCompleted() {
      alert('SignUp is success!');
      window.location.href = '/signin';
    },
    onError(e) {
      alert('Sign up is fail');
      console.log(e.message);
    }
  });
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
