/*global describe, it*/

describe('functions', () => {
  describe('happyHolidays', () => {
    it('returns "Happy holidays!"', () => {
      expect(happyHolidays()).toEqual('Happy holidays!')
    })
  })

  describe('happyHolidaysTo(Susan)', () => {
    it('returns "Happy holidays, ${name}!"', () => {
      expect(happyHolidaysTo('Susan')).toEqual('Happy holidays, Susan!')
    })
  })

  describe('happyHolidayTo(Independence Day, you)', () => {
    it('returns "Happy ${Independence}, ${name}!"', () => {
      expect(happyHolidayTo('Independence Day', 'Joe')).toEqual('Happy Independence Day, you!')
    })
  })

  describe('holidayCountdown(holiday , days)', () => {
    it('returns "It\'s ${days} days until ${Holiday}!"', () => {
      expect(holidayCountdown("Mother's Day", 05)).toEqual("It's 05 days until Mother's Day!")
    })
  })
})



