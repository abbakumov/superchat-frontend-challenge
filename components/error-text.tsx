import { FunctionComponent } from 'react';

const ErrorText: FunctionComponent = ({ children }: React.PropsWithChildren<{}>) => (
    <div className="mt-6 text-center text-red-600 text-lg font-semibold">
        {children}
    </div>
);

export default ErrorText;
