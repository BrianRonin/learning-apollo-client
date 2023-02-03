import { DateTime } from 'luxon'

type Settings = {
  diff?: boolean
  maxDiffInDays?: number
  isMiliseconds?: boolean
}

export const dateFormatter = (
  pastDate: string | number,
  {
    diff,
    maxDiffInDays,
    isMiliseconds,
  }: Settings = {},
) => {
  const actualDate = DateTime.local()
  const date =
    typeof pastDate === 'string'
      ? isMiliseconds
        ? DateTime.fromMillis(Number(pastDate))
        : DateTime.fromISO(pastDate)
      : DateTime.fromMillis(pastDate)

  const duration = DateTime.fromMillis(
    actualDate.diff(date).milliseconds,
  )

  if (
    diff &&
    duration.day <= (maxDiffInDays ?? 3)
  ) {
    if (duration.day > 1) {
      return duration.day + ' dias atrás'
    } else if (duration.hour > 0) {
      return `${duration.hour} horas atrás`
    } else if (duration.minute > 0) {
      return `${duration.minute} minutos atrás`
    } else if (duration.second > 0) {
      return `${duration.second} segundos atrás`
    } else if (duration.millisecond > 0) {
      return `${duration.second} milesegundos atrás`
    } else {
      return date.toLocaleString(
        DateTime.DATE_MED,
      )
    }
  } else {
    return date.toLocaleString(DateTime.DATE_MED)
  }
}

// console.log(dateFormatter(''))
// console.log(new Date())
// console.log(getDiffDate()
