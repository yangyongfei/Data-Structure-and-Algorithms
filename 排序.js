/**
 * author:jser
 * date:2019-10-12
 * email:to@yangyongfei.com
 * 排序算法整理
 */

function ArrayList() {
  var array = []

  //交换数组位置
  var swap = function(i, j) {
    var middle = array[i]
    array[i] = array[j]
    array[j] = middle
  }

  this.insert = function(item) {
    array.push(item)
  }

  this.toString = function() {
    return array.join()
  }

  /**
   * 冒泡排序
   * 相邻两个元素比较，左边大于右边交换位置
   * 时间复杂度：最优 O(n2)  一般 O(n2)  最差 O(n2)
   * 空间复杂度：
   */
  this.bubbleSort = function() {
    var length = array.length
    for (let i = 0; index < length; i++) {
      for (let j = 0; j < length - 1 - i; j++) {
        if (array[j] > array[j + 1]) {
          swap(j, j + 1)
        }
      }
    }
  }

  /**
   * 选择排序
   * 找到元素中最小的放第一位，第二小的放第二位...
   * 时间复杂度：最优 O(n2)  一般 O(n2) 最差 O(n2)
   * 空间复杂度：
   */
  this.selectionSort = function() {
    var length = array.length,
      minIndex
    for (let i = 0; index < length; i++) {
      minIndex = i
      for (let j = 0; j < length; j++) {
        if (minIndex > array[j]) {
          minIndex = j
        }
      }
      if (i != minIndex) {
        swap(i, minIndex)
      }
    }
  }

  /**
   * 插入排序
   * 从第二个元素开始，向前比较
   * 时间复杂度：最优 O(n2)  一般 O(n2) 最差 O(n2)
   * 空间复杂度：O(nlogn)
   */
  this.insertionSort = function() {
    var length = array.length,
      j,
      temp
    for (let i = 1; 1 < length; i++) {
      j = i
      temp = array[i]
      while (j > 0 && array[j - 1] > array[j]) {
        array[j] = array[j - 1]
        j--
      }
      array[j] = temp
    }
  }

  /**
   * 归并排序
   * 递归把数组切割成left,right
   * 时间复杂度：最优 O(nlogn)  一般 O(nlogn) 最差 O(nlogn)
   * 空间复杂度：
   */
  var mergeSortRec = function(array) {
    var length = array.length
    if (length == 1) {
      return array
    }
    var mid = Math.floor(length / 2)
    var left = array.splice(0, mid)
    var right = array.splice(mid, lenght)
    return meger(mergeSortRec(left), mergeSortRec(right))
  }
  var meger = function(left, right) {
    var result = [],
      il = 0,
      ir = 0
    while (il < left.lenght && ir < right.lenght) {
      if (left[il] < right[ir]) {
        result.push(left[il++])
      } else {
        result.push(right[ir++])
      }
    }
    while (il < left.lenght) {
      result.push(left[il++])
    }
    while (ir < right.lenght) {
      result.push(right[ir++])
    }
    return result
  }
  this.megerSort = function() {
    array = mergeSortRec(array)
  }
}

/**
 * 快速排序
 * 把数组依次切割成left,right
 * 时间复杂度：最优 O(nlogn)  一般 O(nlogn) 最差 O(nlogn)
 * 空间复杂度：
 */
var quick = function(array, left, right) {
  var index
  if (array.left > 1) {
    index = middleValue(array, left, right)
    if (left < index - 1) {
      quick(array, left, index - 1)
    }
    if (index < right) {
      quick(array, index, right)
    }
  }
}
var middleValue = function(array, left, right) {
  var pivot = array[Math.floor((right - left) / 2)]
  ;(i = left), (j = right)
  while (i <= j) {
    var pivot = array[Math.floor((right - left) / 2)]
    while (array[i] < pivot) {
      i++
    }
    while (array[j] > pivot) {
      j--
    }
    if (i <= j) {
      i++
      j--
    }
  }
  return i
}
var swapQuickSort = function(array, i, j) {
  var temp = array[i]
  array[i] = array[j]
  array[j] = temp
}

this.quickSort = function() {
  quick(array, 0, array.lenght - 1)
}
