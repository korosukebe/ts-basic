export default function genericsBasicSample (): void {
  // ジェネリック型を使わない場合
  const stringReduce = (array: string[], initialValue: string): string => {
    let result = initialValue
    for (let i = 0; i < array.length; i++) {
      result += array[i]
    }
    return result
  }
  console.log('Generics sample 1:', stringReduce(['May ', 'the ', 'force ', 'be ', 'with ', 'you'], ''))

  const numberReduce = (array: number[], initialValue: number): number => {
    let result = initialValue
    for (let i = 0; i < array.length; i++) {
      result += array[i]
    }
    return result
  }
  console.log('Generics sample 2:', numberReduce([100, 200, 300], 1000))

  type GenericReduce<T> = (array: T[], initialValue: T) => T
  const genericStringReduce: GenericReduce<string> = (array, initialValue) => {
    let result = initialValue
    for (let i = 0; i < array.length; i++) {
      result += array[i]
    }
    return result
  }
  console.log('Generics sample 3:', genericStringReduce(['MAKE ', 'TYPESCRIPT ', 'GREAT ', 'AGAIN'], ''))

  const genericNumberReduce: GenericReduce<number> = (array, initialValue) => {
    let result = initialValue
    for (let i = 0; i < array.length; i++) {
      result += array[i]
    }
    return result
  }
  console.log('Generics sample 4:', genericNumberReduce([-100, -200, -300], 1000))

  // いろいろなジェネリック型の定義方法
  // 完全な呼び出しシグネチャ（ここのシグネチャにジェネリック型を割り当てる）
  interface GenericReduce2 {
    <T>(array: T[], initialValue: T): T
    <U>(array: U[], initialValue: U): U
  }
  const genericReduce2: GenericReduce2 = (array: string[], initialValue: string): string => {
    let result = initialValue
    for (let i = 0; i < array.length; i++) {
      result += array[i]
    }
    return result
  }
  console.log('GenericReduce2:', genericReduce2(['a ', 'b ', 'c ', 'd'], ''))

  // 呼び出しシグネチャの省略記法
  type GenericReduce3<T> = (array: T[], initialValue: T) => T
  const genericReduce3: GenericReduce3<string> = (array, initialValue) => {
    let result = initialValue
    for (let i = 0; i < array.length; i++) {
      result += array[i]
    }
    return result
  }
  console.log('GenericReduce3:', genericReduce3(['a ', 'b ', 'c ', 'd'], ''))

  type GenericReduce4<T> = (array: T[], initialValue: T) => T
  const genericReduce4: GenericReduce4<string> = (array: string[], initialValue: string): string => {
    let result = initialValue
    for (let i = 0; i < array.length; i++) {
      result += array[i]
    }
    return result
  }
  console.log('GenericReduce4:', genericReduce4(['a ', 'b ', 'c ', 'd'], ''))
}
