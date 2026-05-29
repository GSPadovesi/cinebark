import styled from 'styled-components'

export const FeaturedSlider = styled.section`
  width: 100%;
  position: relative;
`

export const Slide = styled.div`
  width: 100%;
`

export const Controls = styled.div`
  position: absolute;
  bottom: 18px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const Dots = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  button {
    width: 10px;
    height: 10px;
    padding: 0;

    border: none;
    border-radius: 999px;

    background: rgba(255, 255, 255, 0.22);

    cursor: pointer;

    transition:
      width 0.25s ease,
      background 0.25s ease,
      opacity 0.25s ease;

    opacity: 0.9;

    &:hover {
      opacity: 1;
    }
  }

  button[aria-current='true'] {
    width: 28px;
    background: #d4a017;

    box-shadow:
      0 0 10px rgba(212, 160, 23, 0.45),
      0 0 18px rgba(212, 160, 23, 0.18);
  }
`
