var now = function () {
  var now = void 0;
  if (typeof performance !== 'undefined') {
    now = function now() {
      return performance.now();
    };
  } else {
    now = function now() {
      return +new Date();
    };
  }
  return now;
}();

var utils = /*#__PURE__*/Object.freeze({
  now: now
});

var nextFrame = requestAnimationFrame;
var subscribers = {};
var id = 0,
    isTicking = false;

var getId = function getId() {
  return id++;
};
var add = function add(func) {
  var key = 'clock_' + getId();
  subscribers[key] = func;
  if (!isTicking) {
    tick();
  }
  return key;
};
var remove = function remove(id) {
  if (subscribers[id]) {
    delete subscribers[id];
  }
};
var tick = function tick() {
  var keys = Object.keys(subscribers);
  if (keys.length === 0) {
    isTicking = false;
  } else {
    var time = now();
    keys.forEach(function (key) {
      subscribers[key](time);
    });
    nextFrame(tick);
    isTicking = true;
  }
};

var Clock = {
  add: add,
  remove: remove
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var noop = function noop() {};

var Tween = function () {
  function Tween(_ref) {
    var _ref$duration = _ref.duration,
        duration = _ref$duration === undefined ? 0 : _ref$duration,
        render = _ref.render,
        target = _ref.target;
    classCallCheck(this, Tween);

    this.duration = duration;
    this.startTime = 0;
    this.currentTime = 0;
    this.render = render || noop;
    this.step = this.step.bind(this);
  }

  Tween.prototype.start = function start() {
    this.startTime = this.currentTime = now();
    this.clockId = Clock.add(this.step);
  };

  Tween.prototype.stop = function stop() {
    Clock.remove(this.clockId);
    this.clockId = null;
    console.log('tween stop');
  };

  Tween.prototype.step = function step(time) {
    this.currentTime = time;
    var span = time - this.startTime;
    var leftTime = this.duration - span;
    var percent = 0;
    if (leftTime > 0) {
      //console.log(span / this.duration)
      percent = span / this.duration;
    } else {
      percent = 1;
      this.stop();
    }
    return percent;
  };

  return Tween;
}();

var Deceleration = function () {
  function Deceleration(options) {
    classCallCheck(this, Deceleration);

    this.step = this.step.bind(this);
    this.setOptions(options);
  }

  Deceleration.prototype.setOptions = function setOptions() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var velocity = options.velocity,
        _options$resistance = options.resistance,
        resistance = _options$resistance === undefined ? 0.001 : _options$resistance;

    if (velocity) {
      this.velocity = velocity;
    }
    this.resistance = resistance;
    this.options = _extends({}, this.options, options);
    return this;
  };

  Deceleration.prototype.start = function start() {
    this.startTime = this.prevTime = this.currentTime = now();
    this.sign = this.velocity > 0 ? 1 : -1;
    this.prevV = Math.abs(this.velocity);
    this.clockId = Clock.add(this.step);

    return this;
  };

  Deceleration.prototype.stop = function stop() {
    Clock.remove(this.clockId);
    this.clockId = null;
    console.log('deceleration stop');
    if (this.options.onEnd) {
      this.options.onEnd();
    }

    return this;
  };

  Deceleration.prototype.step = function step(time) {
    this.currentTime = time;
    var span = time - this.prevTime;
    var v = this.prevV;
    if (v <= 0) {
      console.log('will stop dec', v);
      v = 0;
      this.stop();
    } else {

      //console.log(span)
      var displacement = v * span - this.resistance * Math.pow(span, 2) / 2;

      console.log(this.sign * displacement, v);
      if (this.options.onStep) {
        this.options.onStep(this.sign * displacement);
      }

      this.prevTime = this.currentTime;
      this.prevV = this.prevV - this.resistance * span;
    }
  };

  return Deceleration;
}();

Array.prototype.last = function (from) {
  from = from || 1;
  if (this.length - from < 0) {
    return this[0];
  }
  return this[this.length - from];
};

var index = {
  Clock: Clock,
  Tween: Tween,
  Deceleration: Deceleration
};

export default index;
export { utils as Utils, Clock, Tween, Deceleration };
