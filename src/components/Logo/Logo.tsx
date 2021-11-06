import { FC } from "react";
import { BookOpenIcon } from "@heroicons/react/solid";
import { LogoContainer } from "./LogoStyle";
export const Logo: FC = () => {
  return (
    <LogoContainer>
      <BookOpenIcon/>      
	  BookStore
    </LogoContainer>
  );
};
