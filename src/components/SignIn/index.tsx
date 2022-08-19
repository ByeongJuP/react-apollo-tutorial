import React, { useEffect, useState } from 'react';

interface PropTypes {}

const baseClassname = 'sing-in';

const SingIn: React.FC<PropTypes> = () => {
  const [email, setEmail] = useState<Partial<string>>();
  const [password, setPassword] = useState<Partial<string>>();

  useEffect(() => {
    return () => {
      setEmail(undefined);
      setPassword(undefined);
    };
  }, []);

  return (
    <div className={`${baseClassname}`}>
      <div>
        <span>email</span>
        <input type="text" placeholder="enter email" onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <span>password</span>
        <input type="password" placeholder="enter password" onChange={(e) => setPassword(e.target.value)} />
      </div>
      <div>
        <button>singIn</button>
      </div>
    </div>
  );
};

export default SingIn;
