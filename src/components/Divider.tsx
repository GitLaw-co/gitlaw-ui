import React, { forwardRef } from 'react';

type NativeProps = Omit<
  React.HTMLAttributes<HTMLHRElement>,
  'className'
>;

export interface DividerProps extends NativeProps {
  className?: string;
}

export const Divider = forwardRef<HTMLHRElement, DividerProps>(
  ({ className = '', ...nativeProps }, ref) => (
    <hr
      ref={ref}
      className={`w-full border-0 border-t border-border mx-gitlaw-l my-gitlaw-m ${className}`}
      {...nativeProps}
    />
  )
);

Divider.displayName = 'Divider';
