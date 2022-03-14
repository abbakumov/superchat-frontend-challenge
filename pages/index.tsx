import type { NextPage } from 'next';
import SearchInput from '../components/search-input';
import IconSelector from '../components/icon-selector';
import ColorSelector from '../components/color-selector';
import SubmitButton from '../components/submit-button';

const Home: NextPage = () => (
    <div className="min-h-screen p-10 bg-gray-100">
        <div className="max-w-md mx-auto">
            <h1 className="text-2xl text-center font-bold pb-8">Welcome to GitHub Page Generator!</h1>
            <SearchInput
                id="user-name"
                labelText="Select User:"
                value=""
                onValueChange={(value) => { console.log('value: ', value); }}
                cleanInput={() => { console.log('clean'); }}
            />
            <SearchInput
                id="repo-name"
                labelText="Select Repo:"
                value="hey"
                onValueChange={(value) => { console.log('value: ', value); }}
                cleanInput={() => { console.log('clean'); }}
            />
            <IconSelector chosenIconCode={1} />
            <ColorSelector chosenColorCode={2} />
            <SubmitButton>Make Page!</SubmitButton>
        </div>
    </div>
);

export default Home;
