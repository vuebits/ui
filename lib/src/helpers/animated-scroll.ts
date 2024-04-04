export default {
  ease(t: number, b: number, c: number, d: number): number {
    // simple linear tween from http://www.gizma.com/easing/;
    return (c * t) / d + b
  },
  getStep(
    destinationPosition: number,
    startPosition: number,
    duration: number,
    timeElapsed: number,
  ) {
    const distance = destinationPosition - startPosition
    let step = this.ease(timeElapsed, startPosition, distance, duration)
    if (destinationPosition > startPosition && step > destinationPosition) {
      step = destinationPosition
    }
    if (destinationPosition < startPosition && step < destinationPosition) {
      step = destinationPosition
    }
    return step
  },
  scrollToPositionX(
    element: HTMLElement,
    destinationPositionX: number,
    duration: number,
  ): void {
    const startPositionX = element.scrollLeft
    let startTime: number
    const animate = (currentTime: number) => {
      startTime = startTime || currentTime
      const timeElapsed = currentTime - startTime
      const step = this.getStep(destinationPositionX, startPositionX, duration, timeElapsed)
      element.scrollLeft = step
      if (step !== destinationPositionX) {
        requestAnimationFrame(animate)
      }
    }
    requestAnimationFrame(animate)
  },
  scrollToPositionY(
    element: HTMLElement,
    destinationPositionY: number,
    duration: number,
  ): void {
    const startPositionY = element.scrollTop
    let startTime: number
    const animate = (currentTime: number) => {
      startTime = startTime || currentTime
      const timeElapsed = currentTime - startTime
      const step = this.getStep(destinationPositionY, startPositionY, duration, timeElapsed)
      element.scrollTop = step
      if (step !== destinationPositionY) {
        requestAnimationFrame(animate)
      }
    }
    requestAnimationFrame(animate)
  },
}
