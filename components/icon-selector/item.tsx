import { FunctionComponent } from 'react';
import cn from 'classnames';

import { ICON_CODES_TO_EMOJI } from '../../common/iconCodes';

type IconSelectorItemProps = {
    code: number,
    isActive: boolean,
};

// eslint-disable-next-line max-len
const IconSelectorItem: FunctionComponent<IconSelectorItemProps> = (props: IconSelectorItemProps) => {
    const { code, isActive } = props;

    const className = cn(
        'bg-transparent hover:border-gray-500 border border-gray-300 text-white font-bold py-2 px-8 rounded',
        { 'border-gray-500': isActive },
    );

    return (
        <button type="button" className={className}>
            {ICON_CODES_TO_EMOJI[code]}
        </button>
    );
};

export default IconSelectorItem;
