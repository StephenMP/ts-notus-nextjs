import { useEffect, useRef } from "react";

export default function usePopoverCloseEvents(closeFunction: () => void) {
    const ref = useRef<anyOk>(null)

    const handleHideDropdown = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
            closeFunction();
        }
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (ref.current && !ref.current.contains(event.target)) {
            closeFunction();
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', handleHideDropdown, true);
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('keydown', handleHideDropdown, true);
            document.removeEventListener('click', handleClickOutside, true);
        };
    });

    return ref;
}
