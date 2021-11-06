import { FC } from "react";
import { Logo } from "../Logo/Logo";
import { Container } from "./Navigation.style";
import { Link } from "react-router-dom";
import { Button } from "../Button/Button";
import { Variant } from "./../../Enum";

export const Navigation: FC = () => {
  return (
    <>
      <Container>
        <Link to="/">
          <Logo />
        </Link>
      </Container>
      <Link to="/">
        <Button text="Log In" variant={Variant.OUTLINE} />
      </Link>
      <Link to="/">
        <Button text="Register" variant={Variant.FILLED} />
      </Link>
    </>
  );
};

export default Navigation;
