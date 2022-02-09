class Observable {
  constructor(subscriptionFun) {
    this.subscriptionFun = subscriptionFun
  }
  subscribe(next, error, complete) {
    try {
      this.subscriptionFun(next, error)
      if (complete) {
        complete()
      }
    } catch (e) {
      console.error(e)
    }
  }
}

const observable = new Observable((next, error) => {
  next("hello")
  next("how are you ?")
})

observable.subscribe(
  item => console.log("1", item),
  null,
  () => console.log("complete")
)
observable.subscribe(item => console.log("2", item))

observable.subscribe(
  item => console.log("3", item),
  null,
  () => console.log("complete")
)
