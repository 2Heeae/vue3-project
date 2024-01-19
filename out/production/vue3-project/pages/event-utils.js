
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
    title: '타이틀영역임3',
    completed: true,
    start: '2024-01-11'
  },
  {
    id: createEventId(),
    title: '점심 냠냠123',
    completed: true,
    date: '2024-01-10'
  },
  {
    id: createEventId(),
    title: '뷰란 무엇인가...?',
    completed: true,
    date: '2024-01-10'
  },
  {
    id: createEventId(),
    title: '달력도 추가해야징',
    completed: false,
    date: '2024-01-11'
  },
  {
    id: createEventId(),
    title: '수정 기능 추가',
    completed: true,
    date: '2024-01-11'
  },
  {
    id: createEventId(),
    title: '미완료만 보여주는 체크박스 만들기...' ,
    completed: false,
    date: '2024-01-12'
  },
  {
    id: createEventId(),
    title: '진행률 보여주기',
    completed: true,
    date: '2024-01-12'
  },
  {
    id: createEventId(),
    title: '1234445',
    completed: false,
    date: '2024-01-17'
  }  
]

export function createEventId() {
  return String(eventGuid++)
}