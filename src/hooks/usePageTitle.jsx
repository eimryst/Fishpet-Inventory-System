import React, { useEffect } from 'react'

export function usePageTitle(title) {
    useEffect(() => {
        document.title = `${title} | Fishpet IS`;
    }, [title]);
}
