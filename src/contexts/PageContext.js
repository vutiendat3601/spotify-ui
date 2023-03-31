import { createContext } from 'react';

const createPageContext = () => {
    const ContentContext = createContext({});
    const SectionContext = createContext({ href: '' });

    return {
        ContentContext,
        SectionContext,
    };
};

const PageContext = createPageContext();

export default PageContext;
