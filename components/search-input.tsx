import { FunctionComponent } from 'react';

type SearchInputProps = {
    id: string,
    labelText: string,
    value: string,
    onValueChange: (val: string) => void,
    cleanInput: () => void,
};

const SearchInput: FunctionComponent<SearchInputProps> = (props: SearchInputProps) => {
    const {
        id,
        labelText,
        value,
        onValueChange,
        cleanInput,
    } = props;

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => { onValueChange(e.target.value); };
    const isAnyValue = Boolean(value);

    return (
        <>
            <label htmlFor={id} className="font-semibold block py-2">{labelText}</label>
            <div className="relative">
                <div className="h-10 bg-white flex border border-gray-200 rounded items-center">
                    <input
                        type="text"
                        id={id}
                        value={value}
                        onChange={onChange}
                        className="px-4 appearance-none outline-none text-gray-800 w-full"
                    />

                    {isAnyValue && (
                        <button onClick={cleanInput} type="button" className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-gray-600">
                            <svg className="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </button>
                    )}
                </div>
            </div>
        </>
    );
};

export default SearchInput;
