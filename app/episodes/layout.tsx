import React, {PropsWithChildren} from 'react';
import {Metadata, NextPage} from 'next';
import {BaseLayout} from '../../components/BaseLayout/BaseLayout';


export const metadata:Metadata={
    title: 'Episodies',
    description:'Episodies',
}

const Layout:NextPage<PropsWithChildren> = ({children}) => {
    return (
        <BaseLayout>
            {children}
        </BaseLayout>
    );
};

export default Layout;
