/**
 * This class creates an integer stack
 *
 * By:      Huzaifa Khalid
 * Version: 1.0
 * Since:   2022-10-3
 */

class Stack {
  readonly stackList: number[] = []

  // getters
  public getStack(): number[] {
    return this.stackList
  }

  // methods
  public push(pushedNumber: number): void {
    // add a number to the array
    if (isNaN(+pushedNumber)) {
      console.log('That is not a number.')
    } else {
      this.stackList.push(pushedNumber)
    }
  }

  public pop(): void {
    // remove a number to the array
    if (this.stackList.length === 0) {
      console.log('You cannot pop without values in the list')
    } else {
      this.stackList.pop()
    }
  }

  public peek(): void {
    // get the first value of an array
    if (this.stackList.length === 0) {
      console.log('cannot get the peak, no number given')
    } else {
      console.log(`The peek is: ${this.stackList[0]}`)
    }
  }
}
export = Stack
