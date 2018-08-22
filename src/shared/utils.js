export const compose = (...args) => first =>
	args.reduceRight((prev, func) => func(prev), first)

export const isObject = obj =>
	typeof obj === 'object' && obj !== null && !Array.isArray(obj)

export const getRootNode = route => route.split('.')[0]

const getKey = (obj, keys) =>
	obj && keys.length ? getKey(obj[keys[0]], keys.slice(1)) : obj

export const get = (obj, path) =>
	obj === undefined || obj === null ? undefined : getKey(obj, path.split('.'))
