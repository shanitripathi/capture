import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

export const useScroll = () => {
  const [element, view] = useInView({ threshold: 0.5 });
  const controls = useAnimation();
  if (view) {
    controls.start("show");
  }
  return [element, controls];
};

export const pageAnimation = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,

    transition: {
      duration: 0.25,
      when: "beforeChildren",
      ease: "easeOut",
      staggerChildren: 0.25,
    },
  },
  exit: {
    opacity: 0,

    transition: {
      duration: 0.25,
    },
  },
};

export const titleAnim = {
  hidden: {
    y: 300,
  },
  show: {
    y: 0,
    transition: {
      duration: 0.75,
    },
  },
};

export const fade = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      ease: "easeOut",
      duration: 0.75,
    },
  },
};

export const imageAnim = {
  hidden: {
    scale: 1.5,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      ease: "easeOut",
      duration: 0.75,
    },
  },
};

export const lineAnim = {
  hidden: {
    width: "0%",
  },
  show: {
    width: "100%",
    transition: {
      duration: 0.75,
    },
  },
};

export const slider = {
  hidden: {
    x: "-130%",
    skew: "45deg",
  },
  show: {
    x: "200%",
    skew: "0deg",
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};
