
let eventGuid = 0
let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today

export const INITIAL_EVENTS = [
  {
    id: createEventId(),
    title: '타이틀영역임',
    start: todayStr
  },
  {
    id: createEventId(),
    title: '타이틀영역임2',
    start: todayStr + 'T12:00:00'
  },
  {
    id: createEventId(),
    title: "타이틀영역임3",
    completed: true,
    start: "2024-01-11"
  }
]

export function createEventId() {
  return String(eventGuid++)
}