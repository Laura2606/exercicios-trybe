import User from './user';

function Header() {
  return (
    <h1>
      Olá,
      {' '}
      <User />
    </h1>
  );
}

export default Header;
