import { FunctionComponent } from 'react';

const SubmitButton: FunctionComponent = ({ children }: React.PropsWithChildren<{}>) => (
    <button type="submit" className="bg-blue-500 mt-8 hover:bg-blue-600 text-white font-bold py-2 px-8 w-full rounded">
        {children}
    </button>
);

export default SubmitButton;
