import { FunctionComponent } from 'react';

const InputLabel: FunctionComponent = ({ children }: React.PropsWithChildren<{}>) => (
    <label className="font-semibold block py-2">{children}</label>
);

export default InputLabel;
