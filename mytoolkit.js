const now = (function () {
  let now;
  if (typeof performance !== 'undefined') {
    now = () => performance.now();
  } else {
    now = () => +new Date;
  }
  return now
})();

const nextFrame = requestAnimationFrame;
const subscribers = {};
let id = 0, isTicking = false;

const getId = () => id++;
const add = func => {
  let key = `clock_${getId()}`;
  subscribers[key] = func;
  if (!isTicking) {
    tick();
  }
  return key
};
const remove = id => {
  if (subscribers[id]) {
    delete subscribers[id];
  }
};
const tick = () => {
  let keys = Object.keys(subscribers);
  if (keys.length === 0) {
    isTicking = false;
  } else {
    let time = now();
    keys.forEach(key => {
      subscribers[key](time);
    });
    nextFrame(tick);
    isTicking = true;
  }
};


var Clock = {
  add,
  remove
}

const noop = () => { };
class Tween {
  constructor({
    duration = 0,
    render,
    target
  }) {
    this.duration = duration;
    this.startTime = 0;
    this.currentTime = 0;
    this.render = render || noop;
    this.step = this.step.bind(this);
  }
  start() {
    this.startTime = this.currentTime = now();
    this.clockId = Clock.add(this.step);
  }
  stop() {
    Clock.remove(this.clockId);
    this.clockId = null;
    console.log('tween stop');
  }
  step(time) {
    this.currentTime = time;
    let span = time - this.startTime;
    let leftTime = this.duration - span;
    let percent = 0;
    if (leftTime > 0) {
      //console.log(span / this.duration)
      percent = span / this.duration;
    } else {
      percent = 1;
      this.stop();
    }
    return percent
  }

}

class Deceleration {
  constructor(options) {
    this.step = this.step.bind(this);
    this.setOptions(options);
  }
  setOptions(options = {}) {
    let {
      velocity,
      resistance = 0.001
    } = options;
    if (velocity) {
      this.velocity = velocity;
    }
    this.resistance = resistance;
    this.options = {
      ...this.options,
      ...options
    };
    return this
  }
  start() {
    this.startTime = this.prevTime = this.currentTime = now();
    this.sign = this.velocity > 0 ? 1 : -1;
    this.prevV = Math.abs(this.velocity);
    this.clockId = Clock.add(this.step);

    return this
  }
  stop() {
    Clock.remove(this.clockId);
    this.clockId = null;
    console.log('deceleration stop');
    if (this.options.onEnd) {
      this.options.onEnd();
    }

    return this
  }
  step(time) {
    this.currentTime = time;
    let span = time - this.prevTime;
    let v = this.prevV;
    if (v <= 0) {
      console.log('will stop dec', v);
      v = 0;
      this.stop();
    } else {

      //console.log(span)
      let displacement = v * span - (this.resistance * Math.pow(span, 2)) / 2;

      console.log(this.sign * displacement, v);
      if (this.options.onStep) {
        this.options.onStep(this.sign * displacement);
      }

      this.prevTime = this.currentTime;
      this.prevV = this.prevV - this.resistance * span;
    }
  }
}

Array.prototype.last = function (from) {
  from = from || 1;
  if (this.length - from < 0) {
    return this[0]
  }
  return this[this.length - from]
};

var index = {
  Clock,
  Tween,
  Deceleration
}

export default index;
