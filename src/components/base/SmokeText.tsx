import * as React from "react";
import mask from '@/utils/mask';

export default ({ children }) => {
	if (typeof children !== 'string') {
		return children;
	}
	
	return mask(children);
};
