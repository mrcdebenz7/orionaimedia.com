"use client";

import { LazyMotion, domAnimation, m, useReducedMotion } from "framer-motion";
import { PropsWithChildren } from "react";

type AnimateInProps = PropsWithChildren<{
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  delay?: number;
  y?: number;
  [key: string]: any;
}>;

export default function AnimateInClient({ as = "div", className, children, delay = 0, y = 12, ...rest }: AnimateInProps) {
  const prefersReducedMotion = useReducedMotion();
  const Wrapper: any = as;

  if (prefersReducedMotion) {
    return (
      <Wrapper className={className} {...rest}>
        {children}
      </Wrapper>
    );
  }

  const MotionTag: any = (m as any)[as] || m.div;

  return (
    <LazyMotion features={domAnimation} strict>
      <MotionTag
        initial={{ opacity: 0, y }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
        transition={{ duration: 0.5, ease: "easeOut", delay }}
        className={className}
        {...rest}
      >
        {children}
      </MotionTag>
    </LazyMotion>
  );
}
