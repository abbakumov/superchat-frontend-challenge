import { FunctionComponent } from 'react';

import { ICON_CODES_LIST } from '../../common/icon-codes';
import InputLabel from '../input-label';
import IconSelectorItem from './item';

type IconSelectorProps = {
    chosenIconCode: number,
    changeIcon: (code: number) => void,
};

const IconSelector: FunctionComponent<IconSelectorProps> = (props: IconSelectorProps) => {
    const { chosenIconCode, changeIcon } = props;

    return (
        <>
            <InputLabel>Select Icon:</InputLabel>
            <div className="flex justify-between">
                {ICON_CODES_LIST.map((code: number) => (
                    <IconSelectorItem
                        key={code}
                        code={code}
                        isActive={code === chosenIconCode}
                        changeIcon={changeIcon}
                    />
                ))}
            </div>
        </>
    );
};

export default IconSelector;
