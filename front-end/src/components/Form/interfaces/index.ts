import { SubmitHandler } from 'react-hook-form';
export interface Inputs {
    name: string;
    email: string;
    password: string;
  };

export interface IFormType {
    marginTop?: boolean;
    title: string;
    buttonSubmitColor?: string;
    buttonSubmitTitle?: string;
    buttonActionTitle?: string;
    arrowSubmitLeft?: boolean;
    arrowSubmitRight?: boolean;
    arrowActionLeft?: boolean;
    arrowActionRight?: boolean;
    sizeButton?: number;
    onSubmitForm: SubmitHandler<Inputs>;
    onForgetPassword?: () => void;
    onGoTo?: () => void;
  };
