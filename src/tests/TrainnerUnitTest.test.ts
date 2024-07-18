import Trainner from '../app/entities/Trainner'

describe('Trainner', () => {
  it('should calculate the correct rhythm', () => {
    const trainner = new Trainner()
    trainner.timeOfTrainner = 30
    trainner.km = 5
    const rhythm = trainner.calculateRhythm()
    expect(rhythm).toBe(6)//  30 min / 5 km = 6 min/km
  })

  it('should calculate the correct average speed', () => {
    const trainner = new Trainner()
    trainner.timeOfTrainner = 30
    trainner.km = 5
    const averageSpeed = trainner.calculateAverageSpeed()
    expect(averageSpeed).toBe(10); // 5 km / 0.5 h = 10 km/h
  })
})


