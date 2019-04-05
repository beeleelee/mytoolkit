export const drawLine = (points) => {
  let len = points.length
  let data = []
  let index, point
  for (index = 0; index < len; index++) {
    point = points[index]
    data.push(`${point[0]},${point[1]}`)
  }
  return `M${data.join('L')}`
}

export const drawArc = ({
  innerRadius,
  outerRadius,
  startAngle,
  endAngle
}) => {
  let angle2Degree = Math.PI / 180
  startAngle -= 90 * angle2Degree
  endAngle -= 90 * angle2Degree
  let outerArcStart = {
    x: outerRadius * Math.cos(startAngle),
    y: outerRadius * Math.sin(startAngle)
  }
  let outerArcEnd = {
    x: outerRadius * Math.cos(endAngle),
    y: outerRadius * Math.sin(endAngle)
  }
  let largeArc = (endAngle - startAngle) / angle2Degree > 180 ? 1 : 0
  let innerArcStart, innerArcEnd
  let path = ''
  if (innerRadius > 0) {
    innerArcStart = {
      x: innerRadius * Math.cos(startAngle),
      y: innerRadius * Math.sin(startAngle)
    }
    innerArcEnd = {
      x: innerRadius * Math.cos(endAngle),
      y: innerRadius * Math.sin(endAngle)
    }
    // move to outer arc start point 
    path += `M${outerArcStart.x},${outerArcStart.y}`
    // draw a arc to outer arc end point
    path += `A${outerRadius},${outerRadius} 0 ${largeArc},1 ${outerArcEnd.x},${outerArcEnd.y}`
    // draw a line to inter arc end point 
    path += `L${innerArcEnd.x},${innerArcEnd.y}`
    // draw a arc to inter arc start point
    path += `A${innerRadius},${innerRadius} 0 ${largeArc},0 ${innerArcStart.x},${innerArcStart.y}`
    // end the path
    path += 'Z'
  } else {
    // move to the origin of circle
    path += 'M0,0'
    // draw a line to arc start
    path += `L${outerArcStart.x},${outerArcStart.y}`
    // draw a arc to arc end
    path += `A${outerRadius},${outerRadius} 0 ${largeArc},1 ${outerArcEnd.x},${outerArcEnd.y}`
    // end path
    path += 'Z'
  }

  return path
}

export const drawEquilateral = ({
  radius,
  startAngle = 0,
  sidesNum = 3
}) => {
  let path = ''
  let meanAngle = 2 * Math.PI / sidesNum
  for (let i = 0; i < sidesNum; i++) {
    let action, angle, x, y
    action = i == 0 ? 'M' : 'L'
    angle = startAngle + meanAngle * i
    x = radius * Math.cos(angle)
    y = radius * Math.sin(angle)
    path += `${action}${x},${y}`
  }
  return path + 'Z'
}