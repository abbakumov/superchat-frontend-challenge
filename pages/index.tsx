import type { NextPage } from 'next';
import { useCallback, useState } from 'react';
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

    return (
        <div className="min-h-screen p-10 bg-gray-100">
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
                <SubmitButton>Make Page!</SubmitButton>
            </div>
        </div>
    );
};

export default Home;
