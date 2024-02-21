import type { HTMLAttributes } from "react";

import { SCROLL_AREA_ID } from "./constants";
import { cn } from "./index";

export const ScrollArea = ({
    hasScrollTitle = false,
    className,
    ...rest
}: {
    hasScrollTitle?: boolean;
    className?: string;
} & HTMLAttributes<HTMLDivElement>) => (
    <div
        id={hasScrollTitle ? SCROLL_AREA_ID : undefined}
        className={cn("scrollable-area relative w-full", className)}
        {...rest}
    />
);
