import type { NextPage } from 'next';
import { useCallback, useState } from 'react';
import cn from 'classnames';

import { COLOR_CODE_TO_CLASSNAME } from '../common/bg-colors';
import SearchInput from '../components/search-input';
import IconSelector from '../components/icon-selector';
import ColorSelector from '../components/color-selector';
import SubmitButton from '../components/submit-button';

const Home: NextPage = () => {
    const [user, setUser] = useState('');
    const cleanUser = useCallback(() => setUser(''), []);

    const [repo, setRepo] = useState('');
    const cleanRepo = useCallback(() => setRepo(''), []);

    const [iconCode, setIconCode] = useState(0);

    const [colorCode, setColorCode] = useState(0);
    const rootClassName = cn(
        'min-h-screen p-10',
        COLOR_CODE_TO_CLASSNAME[colorCode],
        { 'bg-gray-100': colorCode === 0 },
    );

    const isButtonActive = (user.length > 0)
        && (repo.length > 0)
        && (iconCode !== 0)
        && (colorCode !== 0);

    return (
        <div className={rootClassName}>
            <div className="max-w-md mx-auto">
                <h1 className="text-2xl text-center font-bold pb-8">Welcome to GitHub Page Generator!</h1>
                <SearchInput
                    id="user-name"
                    labelText="Select User:"
                    value={user}
                    onValueChange={setUser}
                    cleanInput={cleanUser}
                />
                <SearchInput
                    id="repo-name"
                    labelText="Select Repo:"
                    value={repo}
                    onValueChange={setRepo}
                    cleanInput={cleanRepo}
                />
                <IconSelector chosenIconCode={iconCode} changeIcon={setIconCode} />
                <ColorSelector chosenColorCode={colorCode} changeColor={setColorCode} />
                <SubmitButton isActive={isButtonActive}>Make Page!</SubmitButton>
            </div>
        </div>
    );
};

export default Home;
