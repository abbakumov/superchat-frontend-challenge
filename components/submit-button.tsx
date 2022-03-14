import { FunctionComponent } from 'react';
import cn from 'classnames';

type SubmitButtonProps = {
    isActive: boolean,
};

// eslint-disable-next-line operator-linebreak
const SubmitButton: FunctionComponent<SubmitButtonProps> =
    ({ children, isActive }: React.PropsWithChildren<SubmitButtonProps>) => {
        const className = cn(
            'mt-8 text-white font-bold py-2 px-8 w-full rounded',
            {
                'bg-blue-500 hover:bg-blue-600': isActive,
                'bg-gray-300 cursor-default': !isActive,
            },
        );

        return (
            <button type="submit" className={className}>
                {children}
            </button>
        );
    };

export default SubmitButton;
