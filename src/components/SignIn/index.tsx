import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { regEmail } from '../../commons/util';
import { SignInType } from '../../commons/type';
import './SignIn.scss';
import { useLoginMutation } from '../../graphql/generated/schema';

interface PropTypes {}

const baseClassname = 'sign-in';

const SingIn: React.FC<PropTypes> = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm<SignInType>();

  const [login] = useLoginMutation({
    onCompleted(e) {
      alert('login is success');
      console.log(e);
      sessionStorage.setItem('token', e.login.token);
      sessionStorage.setItem('user', JSON.stringify(e.login.user));
      window.location.href = '/';
    },
    onError(e) {
      alert(`LogIn is fail.\nCheck email and password.`);
      console.log(e.message);
    }
  });
  const onSubmit: SubmitHandler<SignInType> = (data) => {
    console.log(data);
    login({ variables: { email: data.email, password: data.password } });
  };

  return (
    <div className={`${baseClassname}`}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={`${baseClassname}__wrapper`}>
          <span className={`${baseClassname}__wrapper__title`}>email</span>
          <input
            className={`${baseClassname}__wrapper__input`}
            type="text"
            placeholder="enter email"
            {...register('email', { required: true, pattern: regEmail })}
          />
          {errors.email?.type === 'required' && <span className={`${baseClassname}__wrapper__error`}>This is required</span>}
          {errors.email?.type === 'pattern' && (
            <span className={`${baseClassname}__wrapper__error`}>Email Pattern does not match</span>
          )}
        </div>
        <div className={`${baseClassname}__wrapper`}>
          <span className={`${baseClassname}__wrapper__title`}>password</span>
          <input
            className={`${baseClassname}__wrapper__input`}
            type="password"
            placeholder="enter password"
            {...register('password', { required: true })}
          />
          {errors.password?.type === 'required' && (
            <span className={`${baseClassname}__wrapper__error`}>This is required</span>
          )}
        </div>
        <div className={`${baseClassname}__wrapper`}>
          <input className={`${baseClassname}__wrapper__btn`} type="submit" />
        </div>
      </form>
    </div>
  );
};

export default SingIn;
