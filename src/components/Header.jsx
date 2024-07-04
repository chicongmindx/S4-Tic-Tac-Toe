import Logo from "../../public/game-logo.png";

export default function Header(params) {
  return (
    <header>
      <img src={Logo} alt="" />
      <h1>Tic-Tac-Toe</h1>
    </header>
  );
}
