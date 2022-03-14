import { FunctionComponent } from 'react';

import { ICON_CODES_LIST } from '../../common/iconCodes';
import InputLabel from '../input-label';
import IconSelectorItem from './item';

type IconSelectorProps = {
    chosenIconCode: number,
};

const IconSelector: FunctionComponent<IconSelectorProps> = (props: IconSelectorProps) => {
    const { chosenIconCode } = props;

    return (
        <>
            <InputLabel>Select Icon:</InputLabel>
            <div className="flex justify-between">
                {ICON_CODES_LIST.map((code: number) => (
                    <IconSelectorItem key={code} code={code} isActive={code === chosenIconCode} />
                ))}
            </div>
        </>
    );
};

export default IconSelector;
