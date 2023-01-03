import ReactLoading from "react-loading";
import { OverlayModal } from "../modal/stylesModal";
import { LayoutContainer } from "./stylesLoading";

export const LoadingGlobal = () => {
  return (
    <>
      <OverlayModal></OverlayModal>
      <LayoutContainer>
        <ReactLoading type="spin" color="red" />
      </LayoutContainer>
    </>
  );
};
