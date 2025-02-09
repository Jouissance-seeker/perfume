import { FaUser } from 'react-icons/fa6';

export function Header() {
  return (
    <header className="container">
      {/* mobile */}
      <div className="flex justify-between py-5 lg:hidden">
        <p>hi</p>
        <p>hi</p>
        <FaUser />
      </div>
    </header>
  );
}
