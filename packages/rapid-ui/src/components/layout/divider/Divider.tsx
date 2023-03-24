import React, { forwardRef, HTMLAttributes } from 'react';
import { RapidStyles, getVariantClassName } from '../../../utils';
import { createVariant } from '../../../theme';

const THEME_CLASSNAME = 'rapid-divider';

export const dividerTheme = createVariant({
	variants: {
		dashed: 'border-dashed',
		solid: 'border-solid',
	},
	sizes: {
		sm: 'border',
		md: 'border-2',
		lg: 'border-4',
		xl: 'border-8',
	},
	defaultProps: {
		variant: 'solid',
		size: 'sm',
	},
});

type Orientation = 'horizontal' | 'vertical';

interface DividerProps extends HTMLAttributes<HTMLHRElement> {
	styles?: string;
	size?: 'sm' | 'md' | 'lg' | 'xl';
	orientation?: Orientation;
	variant?: 'dashed' | 'solid';
}

const Divider = forwardRef<HTMLHRElement, DividerProps>(
	(
		{ styles, size = 'sm', orientation = 'horizontal', variant, ...rest },
		ref,
	) => {
		const getDividerStyles = () => {
			const commonStyles = 'border-current border-opacity-60';

			return orientation === 'vertical'
				? `${commonStyles} h-full border-t-0 border-l` // vertical
				: `${commonStyles} w-full border-b`; // horizantel
		};

		return (
			<hr
				ref={ref}
				{...rest}
				className={RapidStyles(
					styles || rest.className,
					getDividerStyles(),
					getVariantClassName(variant, 'divider', size) ||
						THEME_CLASSNAME,
				)}
			/>
		);
	},
);

Divider.displayName = 'Divider';

export default Divider;