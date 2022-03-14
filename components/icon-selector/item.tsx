import { FunctionComponent, useCallback } from 'react';
import cn from 'classnames';

import { ICON_CODES_TO_EMOJI } from '../../common/icon-codes';

type IconSelectorItemProps = {
    code: number,
    isActive: boolean,
    changeIcon: (code: number) => void
};

// eslint-disable-next-line max-len
const IconSelectorItem: FunctionComponent<IconSelectorItemProps> = (props: IconSelectorItemProps) => {
    const { code, isActive, changeIcon } = props;
    const changeIconCallback = useCallback(() => { changeIcon(code); }, [changeIcon, code]);

    const className = cn(
        'bg-transparent hover:border-gray-500 border border-gray-300 text-white font-bold rounded w-20 h-10',
        { 'border-gray-500': isActive },
    );

    return (
        <button type="button" className={className} onClick={changeIconCallback}>
            {ICON_CODES_TO_EMOJI[code]}
        </button>
    );
};

export default IconSelectorItem;
