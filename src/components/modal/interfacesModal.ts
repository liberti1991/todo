export interface IModal {
  funcClose(): void;
  children: React.ReactNode;
  modal: boolean;
  title: string;
}
