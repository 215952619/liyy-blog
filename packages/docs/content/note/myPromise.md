---
title: 自定义Promise
tags: Promise JavaScript 手写代码 frontend
---

## 创建 `Promise` 实例

### 先写测试用例

```js
let p1 = new MyPromise((resolve, reject) => {
    // 测试实例构造正常分支
    console.log('constructor p1')
    setTimeout(() => {
        resolve(1)
    }, 1000)
})
let p2 = new MyPromise((resolve, reject) => {
    // 测试实例创建
    console.log('constructor p2')
    setTimeout(() => {
        resolve(1)
    }, 1000)
}).then((resolved) => {
    // 测试正常接收返回值
    console.log('resolved first ', resolved)
    setTimeout(() => {
        return new Promise((resolve, reject) => {
            resolve(2)
        })
    }, 1000)
}).then((resolved) => {
    // 测试直接返回的值的接收
    console.log('resolved second ', resolved)
    return 3
}).then((resolved) => {
    // 测试主动抛错
    console.log('resoved third ', resolved)
    thorw new Error('custom error')
}).then((resolved) => {
    // 测试抛错后阻塞后续回调 todo:这里不应该被执行
    console.log('after throw error')
}).catch((err) =? {
    // 测试抛错后跳转到这里执行
    console.log('rejected ', err)
})

let p3 = new MyPromise((resolve, reject) => {
    // 测试实例构造抛错分支
    console.log('constructor p3')
    setTimeout(() => {
        reject(1)
    }, 1000)
})
```

### 实例类型分析

```js
class MyPromise {
  constructor(fn) {}
  then(cb) {}
  catch(cb) {}
  finally(cb) {}
  static all(cbs) {}
  static any(cbs) {}
  static race(cbs) {}
  static allSettled(cbs) {}
}
```

### 最后实现

```js{2,10-20}
class MyPromise {
    static PENDING = 'pending'
    static RESOLVED = 'resolved'
    static Rejected = 'rejected'
    constructor(fn) {
        this.status = MyPromise.PENDING
        this.callbacks = [] // 回调列表
        this.data = null
        this.err = null
        const resolve = (value) => {}
        const reject = (err) => {}

        try {
	        fn(resolve, reject)
        } catch (error) {
            reject(error)
        }
    }
    then(cb) {
        return new MyPromise((resolve, reject) => {

        })
    }
    catch(cb) {}
    finally(cb) {}
    static resolve(value) {
        return new MyPromise((res, _) => res(value))
    }
    static reject(reason) {
        return new MyPromise((_, rej) => rej(reason))
    }
    static all([...cbs]) {
        const values = []
        let resolvedCount = 0
        return new MyPromise((res, rej) => {
            cbs.forEach((cb, index) => {
                cb.then((val) => {
                    values[index] = val
                    resolvedCount++
                    if (resolvedCount === cbs.length) {
                        res(values)
                    }
                }).catch((err) => {
                    rej(err)
                })
            })
        })
    }
    static any([...cbs]) {
        let rejectedCount = 0
        return new MyPromise((res, rej) => {
            cbs.forEach((cb) => {
                cb.then((val) => {
                    res(val)
                }).catch(err) => {
                    rejectedCount++
                    if (rejectedCount === cbs.length) {
                        reject('No Promise in list was resolved')
                    }
                }
            })
        })
    }
    static allSettled([...cbs]) {
        const values = []
        let settledCount = 0
        return new MyPromise((res, rej) => {
            cbs.forEach((cb, index) => {
                cb.then((val) => {
                    values[index] = {
                        status: MyPromise.Resolved,
                        value: val,
                    }
                }).catch((err) => {
                    values[index] = {
                        status: MyPromise.Rejected,
                        reason: err,
                    }
                }).finally(() => {
                    settledCount++
                    if (settledCount === cbs.length) {
                        res(values)
                    }
                })
            })
        })
    }
    static race([...cbs]) {
        return new MyPromise((res, rej) => {
            cbs.forEach((cb, index) => {
                cb.then((val) => {
                    res(values)
                }).catch((err) => {
                    rej(err)
                })
            })
        })
    }
}
```
