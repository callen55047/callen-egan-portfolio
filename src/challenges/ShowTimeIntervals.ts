interface IShow {
  start: number,
  end: number,
  volume: number,
}

export default function ShowTimeIntervals(
  startTimes: number[],
  durations: number[],
  volumes: number[]
) {
  const n = startTimes.length
  if (n < 1) {
    return 0
  }

  // build array of objects with start + end times
  let shows: IShow[] = []

  for (let i = 0; i < n; i++) {
    shows.push({
      start: startTimes[i],
      end: startTimes[i] + durations[i],
      volume: volumes[i],
    })
  }

  // sort by the end times, desc
  shows.sort((a, b) => a.end - b.end)

  // maximum volumes for all the shows we watch
  const finalVolumes = new Array(n).fill(0)
  // starting value of the last showtime volume
  finalVolumes[0] = shows[0].volume

  // binary search for last non-conflicting show
  // starting from the last show, and work our way backwards
  function latestNonConflictingShow(index: number): number {
    // set our lower and upper bounds for search
    const current = shows[index]
    let low = 0, high = index - 1

    while (low <= high) {
      const mid = Math.floor((low + high) / 2)
      if (shows[mid].end <= current.start) {
        // if next element is also within range, keep searching
        if (shows[mid + 1].end <= current.start) {
          low = mid + 1
        } else {
          // or else we have found the latest non-conflicting
          return mid
        }
      } else {
        high = mid - 1
      }
    }

    return -1
  }

  // build our volumes table
  for (let i = 1; i < n; i++) {
    let currentVol = shows[i].volume
    const latestIndex = latestNonConflictingShow(i)
    if (latestIndex !== -1) {
      // if we found an element, add its volume to our current running
      currentVol += finalVolumes[latestIndex];
    }

    // either add this new aggregate volume, or the previous
    // if it already has a higher volume than our two shows combined
    finalVolumes[i] = Math.max(currentVol, finalVolumes[i - 1]);
  }

  // return the last element of the array
  // it will contain the sum of the largest volume possible
  return finalVolumes[n - 1]
}