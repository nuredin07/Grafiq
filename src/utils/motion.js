export const EASE = [0.22, 1, 0.36, 1];
export const EASE_IN_OUT = [0.76, 0, 0.24, 1];

export const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: EASE, delay },
  },
});

export const viewOnce = { once: true, margin: "0px 0px -10% 0px" };