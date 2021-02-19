const ObserverMap = new Map();
const RootIds = new Map();
let rootId = 0;

export function optionsToId(options) {
  return Object.keys(options)
    .sort()
    .filter((key) => options[key] !== undefined)
    .map((key) => {
      return `${key}_${
        key === 'root' ? getRootId(options.root) : options[key]
      }`;
    })
    .toString();
}

export function getRootId(root) {
  if (!root) return '0';
  if (RootIds.has(root)) return RootIds.get(root);
  rootId += 1;
  RootIds.set(root, rootId.toString());
  return RootIds.get(root);
}

export function createObserver(options) {
  // Create a unique ID for this observer instance, based on the root, root margin and threshold.
  let id = optionsToId(options);
  let instance = ObserverMap.get(id);

  if (!instance) {
    // Create a map of elements this observer is going to observe. Each element has a list of callbacks that should be triggered, once it comes into view.
    const elements = new Map();
    let thresholds;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        var _elements$get;

        // While it would be nice if you could just look at isIntersecting to determine if the component is inside the viewport, browsers can't agree on how to use it.
        // -Firefox ignores `threshold` when considering `isIntersecting`, so it will never be false again if `threshold` is > 0
        const inView =
          entry.isIntersecting &&
          thresholds.some((threshold) => entry.intersectionRatio >= threshold); // @ts-ignore support IntersectionObserver v2

        if (options.trackVisibility && typeof entry.isVisible === 'undefined') {
          // The browser doesn't support Intersection Observer v2, falling back to v1 behavior.
          // @ts-ignore
          entry.isVisible = inView;
        }

        (_elements$get = elements.get(entry.target)) == null
          ? void 0
          : _elements$get.forEach((callback) => {
              callback(inView, entry);
            });
      });
    }, options); // Ensure we have a valid thresholds array. If not, use the threshold from the options

    thresholds =
      observer.thresholds ||
      (Array.isArray(options.threshold)
        ? options.threshold
        : [options.threshold || 0]);
    instance = {
      id,
      observer,
      elements,
    };
    ObserverMap.set(id, instance);
  }

  return instance;
}

export function observe(element, callback, options = {}) {
  if (!element) return () => {}; // An observer with the same options can be reused, so lets use this fact

  const { id, observer, elements } = createObserver(options); // Register the callback listener for this element

  let callbacks = elements.get(element) || [];

  if (!elements.has(element)) {
    elements.set(element, callbacks);
  }

  callbacks.push(callback);
  observer.observe(element);
  return function unobserve() {
    // Remove the callback from the callback list
    callbacks.splice(callbacks.indexOf(callback), 1);

    if (callbacks.length === 0) {
      // No more callback exists for element, so destroy it
      elements.delete(element);
      observer.unobserve(element);
    }

    if (elements.size === 0) {
      // No more elements are being observer by this instance, so destroy it
      observer.disconnect();
      ObserverMap.delete(id);
    }
  };
}
