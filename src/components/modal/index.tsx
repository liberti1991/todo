import { MdClose } from "react-icons/md";

import { ContainerModal, HeaderModal, OverlayModal } from "./stylesModal";

import { IModal } from "./interfacesModal";

export const Modal = ({ funcClose, modal, children, title }: IModal) => {
  if (modal === true) {
    document.onkeydown = (event) => {
      if (event.key === "Escape") {
        funcClose();
      }
    };
  }
  return (
    <div>
      <OverlayModal></OverlayModal>
      <ContainerModal>
        <HeaderModal>
          <h3>{title}</h3>
          <MdClose role="button" onClick={() => funcClose()} />
        </HeaderModal>
        <section>{children}</section>
      </ContainerModal>
    </div>
  );
};
