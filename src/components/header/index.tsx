import { Toggle } from "../toggle";

import { ContainerHeader } from "./stylesHeader";

export const Header = () => {
  return (
    <ContainerHeader>
      <h1>My Tasks</h1>
      <Toggle />
    </ContainerHeader>
  );
};
