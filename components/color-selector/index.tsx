import { FunctionComponent } from 'react';

import { COLOR_CODES_LIST } from '../../common/bg-colors';
import InputLabel from '../input-label';
import ColorSelectorItem from './item';

type ColorSelectorProps = {
    chosenColorCode: number,
    changeColor: (code: number) => void
};

const ColorSelector: FunctionComponent<ColorSelectorProps> = (props: ColorSelectorProps) => {
    const { chosenColorCode, changeColor } = props;

    return (
        <>
            <InputLabel>Select Color:</InputLabel>
            <div className="flex justify-between">
                {COLOR_CODES_LIST.map((code: number) => (
                    <ColorSelectorItem
                        key={code}
                        code={code}
                        isActive={code === chosenColorCode}
                        changeColor={changeColor}
                    />
                ))}
            </div>
        </>
    );
};

export default ColorSelector;
