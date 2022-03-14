import { FunctionComponent } from 'react';
import cn from 'classnames';

// import { COLOR_CODE_TO_CLASSNAME } from '../../common/bg-colors';

type ColorSelectorItemProps = {
    code: number,
    isActive: boolean,
};

// eslint-disable-next-line max-len
const ColorSelectorItem: FunctionComponent<ColorSelectorItemProps> = (props: ColorSelectorItemProps) => {
    const { code, isActive } = props;

    const COLOR_CODE_TO_CLASSNAME: { [id: number]: string } = {
        1: 'bg-gradient-to-r from-lime-100 to-orange-100',
        2: 'bg-gradient-to-r from-teal-50 to-indigo-50',
        3: 'bg-gradient-to-br from-amber-50 to-green-50',
        4: 'bg-green-100',
        5: 'bg-pink-100',
    };

    const className = cn(
        'hover:border-gray-500 border border-gray-300 text-white font-bold py-2 px-8 rounded w-20 h-10',
        COLOR_CODE_TO_CLASSNAME[code],
        { 'border-gray-500': isActive },
    );

    // eslint-disable-next-line jsx-a11y/control-has-associated-label
    return (<button type="button" className={className} />);
};

export default ColorSelectorItem;
