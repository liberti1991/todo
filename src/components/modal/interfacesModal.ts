export interface IModal {
  handleModal(): void;
  children: React.ReactNode;
  modal: boolean;
  title: string;
}
