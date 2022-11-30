import Skeleton from '@mui/material/Skeleton';
import React from 'react';

const UseSkeleton = ({ vrn, wd, ht, ...rest }) => {
      return (
            <Skeleton
                  variant={vrn}
                  width={wd}
                  height={ht}
                  {...rest}
            />
      );
};

export default UseSkeleton;