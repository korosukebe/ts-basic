export default function unknownSample (): void {
  const mybeNumber: unknown = 10
  console.log('unknown sample 1:', typeof mybeNumber, mybeNumber)

  const isFoo = mybeNumber === 'foo'
  console.log('unknown sample 2:', typeof isFoo, isFoo)

  if (typeof mybeNumber === 'number') {
    const sum = mybeNumber + 10
    console.log('unknown sample 3:', typeof sum, sum)
  }
}
