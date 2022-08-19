import React from 'react';
import { useForm } from 'react-hook-form';
import { SingUpType } from '../../commons/type';

interface PropTypes {}

const baseClassName = 'sing-up';

const SingUp: React.FC<PropTypes> = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<SingUpType>();
  const onSubmit = (data: SingUpType) => {
    console.log(data);
  };
  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <span>name</span>
          <input placeholder="enter name" {...(register('name'), { required: true })} />
          {errors.name && <span>Thie field is required</span>}
        </div>
        <div>
          <span>email</span>
          <input type="text" placeholder="enter email" {...(register('email'), { required: true })} />
          {errors.email && <span>Thie field is required</span>}
        </div>
        <div>
          <span>password</span>
          <input type="password" placeholder="enter password" {...(register('firstPassword'), { required: true })} />
          {errors.firstPassword && <span>Thie field is required</span>}
        </div>
        <div>
          <span>password again</span>
          <input type="password" placeholder="enter password again" {...(register('secondPassword'), { required: true })} />
          {errors.secondPassword && <span>Thie field is required</span>}
        </div>
        <div>
          <input type="submit" value="submit" />
        </div>
      </form>
    </div>
  );
};

export default SingUp;
