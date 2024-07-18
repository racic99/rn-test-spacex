import { useState } from 'react';

function useToggle(initialValue: boolean = false) {
    const [value, setValue] = useState<boolean>(initialValue);

    const toggle = () => {
        setValue((prevValue) => !prevValue);
    };

    return { value, toggle };
}

export default useToggle;
