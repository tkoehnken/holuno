import React, {ReactNode, Suspense} from 'react';
import {ActiveIndicator} from "componets";

type t_props = {
    children: ReactNode|ReactNode[]
}

const LazyLoad = ({children}:t_props)=> <Suspense fallback={<ActiveIndicator img/>}>{children}</Suspense>

export default LazyLoad;
