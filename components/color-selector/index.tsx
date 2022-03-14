import { FunctionComponent } from 'react';

import { COLOR_CODES_LIST } from '../../common/bg-colors';
import InputLabel from '../input-label';
import ColorSelectorItem from './item';

type ColorSelectorProps = {
    chosenColorCode: number,
};

const ColorSelector: FunctionComponent<ColorSelectorProps> = (props: ColorSelectorProps) => {
    const { chosenColorCode } = props;

    return (
        <>
            <InputLabel>Select Color:</InputLabel>
            <div className="flex justify-between">
                {COLOR_CODES_LIST.map((code: number) => (
                    <ColorSelectorItem key={code} code={code} isActive={code === chosenColorCode} />
                ))}
            </div>
        </>
    );
};

export default ColorSelector;
