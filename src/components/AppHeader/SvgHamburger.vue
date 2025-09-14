<template>
  <svg viewBox="0 0 60 40">
    <g stroke="#000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
      <path id="top-line" d="M10,10 L50,10 Z"></path>
      <path id="middle-line" d="M10,20 L50,20 Z"></path>
      <path id="bottom-line" d="M10,30 L50,30 Z"></path>
    </g>
  </svg>
</template>

<style scoped lang="scss">
%hamburger-line {
  transform-box: fill-box;
  transform-origin: center;
  transition:
    transform 0.4s cubic-bezier(0.16, -0.88, 0.97, 0.53),
    opacity 0.4s cubic-bezier(0.16, -0.88, 0.97, 0.53);
}

svg {
  width: 100%;
  height: 100%;
}

#top-line,
#bottom-line,
#middle-line {
  @extend %hamburger-line;
}

.active {
  #top-line {
    transform: translateY(10px) rotate(-45deg) scale(0.9);
  }

  #bottom-line {
    transform: translateY(-10px) rotate(45deg) scale(0.9);
  }

  #middle-line {
    opacity: 0;
  }
}

@keyframes up-rotate {
  0% {
    animation-timing-function: cubic-bezier(0.16, -0.88, 0.97, 0.53);
    transform: translateY(0);
  }

  30% {
    transform-origin: center;
    animation-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);
    transform: translateY(-10px);
  }

  100% {
    transform-origin: center;
    transform: translateY(-10px) rotate(45deg) scale(0.9);
  }
}

@keyframes down-rotate {
  0% {
    animation-timing-function: cubic-bezier(0.16, -0.88, 0.97, 0.53);
    transform: translateY(0);
  }

  30% {
    transform-origin: center;
    animation-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);
    transform: translateY(10px);
  }

  100% {
    transform-origin: center;
    transform: translateY(10px) rotate(-45deg) scale(0.9);
  }
}

@keyframes hide {
  29% {
    opacity: 1;
  }

  30% {
    opacity: 0;
  }

  100% {
    opacity: 0;
  }
}
</style>
